const Quiz = require('../models/Quiz');
const QuizAttempt = require('../models/QuizAttempt');
const Course = require('../models/Course');
const CourseContent = require('../models/CourseContent');
const Progress = require('../models/Progress');
const Enrollment = require('../models/Enrollment');
const ActivityLog = require('../models/ActivityLog');
const progressController = require('./progressController');
const OpenAI = require('openai');
const axios = require('axios');

// Initialize AI Client
let openai = null;
const orKey = (process.env.OPENROUTER_API_KEY || '').trim();

if (orKey) {
    openai = new OpenAI({
        apiKey: orKey,
        baseURL: 'https://openrouter.ai/api/v1',
        defaultHeaders: {
            "HTTP-Referer": "http://localhost:5000",
            "X-Title": "EduNexus LMS",
        }
    });
}

const fullKey = orKey;
const maskedKey = fullKey.length > 10 
    ? `${fullKey.substring(0, 10)}...${fullKey.substring(fullKey.length - 4)}` 
    : 'MISSING_OPENROUTER_KEY';

console.log(`[AI] ${openai ? '🚀 OpenRouter Client initialized.' : 'ℹ️  OpenRouter Key missing, relying on N8N fallback.'} Key: ${maskedKey}`);

// Utility to extract questions from AI/n8n response
const extractAnyArray = (data) => {
    if (!data) {
        console.log('[AI] No data received');
        return [];
    }
    
    console.log('[AI] Data type:', typeof data);
    
    // Case 1: Object with questions array (our n8n wrapper format)
    if (data && typeof data === 'object' && data.questions && Array.isArray(data.questions)) {
        console.log('[AI] Found questions array in wrapper format, count:', data.questions.length);
        return normalizeItems(data.questions);
    }

    // Case 2: Direct array of questions
    if (Array.isArray(data)) {
        console.log('[AI] Data is array, length:', data.length);
        
        // Check if items have questionText or question property
        if (data.length > 0) {
            const firstItem = data[0];
            console.log('[AI] First item keys:', firstItem ? Object.keys(firstItem) : 'null');
            
            // If items are {json: {...}} format (n8n multi-item)
            if (firstItem && firstItem.json) {
                console.log('[AI] Detected n8n multi-item format');
                const extracted = data.map(item => item.json);
                // Check if extracted has questions wrapper
                if (extracted.length === 1 && extracted[0] && extracted[0].questions) {
                    return normalizeItems(extracted[0].questions);
                }
                return normalizeItems(extracted);
            }
            
            // If first item has questionText or question, it's a question array
            if (firstItem && (firstItem.questionText || firstItem.question)) {
                console.log('[AI] Direct question array detected');
                return normalizeItems(data);
            }
        }
        
        return normalizeItems(data);
    }

    // Case 3: Single question object (not array)
    if (data && typeof data === 'object' && (data.questionText || data.question)) {
        console.log('[AI] Single question object detected');
        return normalizeItems([data]);
    }

    // Case 4: Object with nested array
    if (data && typeof data === 'object') {
        // Try common keys
        const keysToTry = ['json', 'data', 'result', 'output', 'response'];
        
        for (const key of keysToTry) {
            if (data[key] && Array.isArray(data[key])) {
                console.log('[AI] Found array at key:', key);
                return normalizeItems(data[key]);
            }
            
            // Handle nested object with questions
            if (data[key] && typeof data[key] === 'object') {
                if (data[key].questions && Array.isArray(data[key].questions)) {
                    console.log('[AI] Found questions array at key:', key);
                    return normalizeItems(data[key].questions);
                }
                if (data[key].questionText) {
                    console.log('[AI] Found single question at key:', key);
                    return normalizeItems([data[key]]);
                }
            }
        }
        
        // Search recursively for array
        for (const key in data) {
            if (Array.isArray(data[key]) && data[key].length > 0) {
                const first = data[key][0];
                if (first && (first.questionText || first.question || first.options)) {
                    console.log('[AI] Found question array at key:', key);
                    return normalizeItems(data[key]);
                }
            }
        }
    }

    console.log('[AI] Could not extract questions from response');
    return [];
};

// Handle standalone options array (n8n might return just options without question wrapper)
const normalizeStandaloneOptions = (optionsArray) => {
    if (!optionsArray || optionsArray.length === 0) return [];
    
    const questions = [];
    const optionsPerQuestion = 4;
    
    for (let i = 0; i < optionsArray.length; i += optionsPerQuestion) {
        const questionOptions = optionsArray.slice(i, i + optionsPerQuestion);
        
        if (questionOptions.length >= 2) {
            questions.push({
                questionText: `Question ${Math.floor(i / optionsPerQuestion) + 1}`,
                questionType: "mcq-single",
                options: questionOptions.map(opt => ({
                    text: opt.text || "",
                    isCorrect: !!opt.isCorrect
                }))
            });
        }
    }
    
    return questions;
};

// Internal helper to normalize question format
const normalizeItems = (finalArray) => {
    return finalArray.map(item => {
        if (!item || typeof item !== 'object') return null;

        const questionText = item.questionText || item.question || item.q || "Untitled Question";
        
        let options = [];
        if (item.options && Array.isArray(item.options)) {
            options = item.options.map(opt => ({
                text: typeof opt === 'string' ? opt : (opt.text || opt.answer || opt.option || ""),
                isCorrect: typeof opt === 'object' ? (opt.isCorrect !== undefined ? !!opt.isCorrect : !!opt.correct) : false
            }));
        } else if (item.answers && Array.isArray(item.answers)) {
            options = item.answers.map(opt => ({
                text: typeof opt === 'string' ? opt : (opt.text || opt.answer || opt.option || ""),
                isCorrect: typeof opt === 'object' ? (opt.isCorrect !== undefined ? !!opt.isCorrect : !!opt.correct) : false
            }));
        } else if (item.choices && Array.isArray(item.choices)) {
            options = item.choices.map(opt => ({
                text: typeof opt === 'string' ? opt : (opt.text || opt.answer || opt.option || ""),
                isCorrect: typeof opt === 'object' ? (opt.isCorrect !== undefined ? !!opt.isCorrect : !!opt.correct) : false
            }));
        }

        return {
            questionText: questionText,
            questionType: item.questionType || "mcq-single",
            options: options
        };
    }).filter(item => item && item.options && item.options.length >= 2);
};

// Create quiz
exports.createQuiz = async (req, res) => {
    try {
        const {
            title,
            courseID,
            moduleID,
            contentID,
            questions,
            passingPercentage,
            timeLimit,
            retakePolicy,
            maxRetakes
        } = req.body;

        if (!title || !courseID || !moduleID || !questions || questions.length === 0) {
            return res.status(400).json({
                success: false,
                message: 'Title, course, module, and at least one question are required'
            });
        }

        // Verify instructor owns the course
        const course = await Course.findOne({ _id: courseID, instructorID: req.user.id });
        if (!course) {
            return res.status(404).json({ success: false, message: 'Course not found or unauthorized' });
        }

        // Validate questions
        if (questions.length < 1) {
            return res.status(400).json({ success: false, message: 'Quiz must have at least 1 question' });
        }

        for (const question of questions) {
            if (!question.questionText) {
                return res.status(400).json({ success: false, message: 'Question text is required for all questions' });
            }

            if (['mcq-single', 'mcq-multiple', 'true-false'].includes(question.questionType)) {
                if (!question.options || question.options.length < 2) {
                    return res.status(400).json({ success: false, message: 'MCQ questions must have at least 2 options' });
                }

                const hasCorrect = question.options.some(opt => opt.isCorrect);
                if (!hasCorrect) {
                    return res.status(400).json({
                        success: false,
                        message: 'At least one option must be marked as correct'
                    });
                }
            }
        }

        const newQuiz = new Quiz({
            title,
            courseID,
            moduleID,
            contentID,
            instructorID: req.user.id,
            questions,
            passingPercentage: passingPercentage !== undefined ? passingPercentage : 60,
            timeLimit,
            retakePolicy: retakePolicy || 'unlimited',
            maxRetakes: maxRetakes || 3
        });

        await newQuiz.save();

        res.status(201).json({ success: true, quiz: newQuiz, message: 'Quiz created successfully' });
    } catch (error) {
        console.error('Error creating quiz:', error);
        res.status(500).json({ success: false, message: 'Server error' });
    }
};

// Get instructor quizzes
exports.getInstructorQuizzes = async (req, res) => {
    try {
        const instructorID = req.user.id;
        const { courseId } = req.query;

        const filter = { instructorID };
        if (courseId) {
            filter.courseID = courseId;
        }

        const quizzes = await Quiz.find(filter)
            .populate('courseID', 'title')
            .populate('moduleID', 'name')
            .populate('contentID', 'title')
            .sort({ createdAt: -1 });

        // Get attempt statistics for each quiz
        const quizzesWithStats = await Promise.all(
            quizzes.map(async (quiz) => {
                const attempts = await QuizAttempt.find({ quizID: quiz._id });
                const totalAttempts = attempts.length;
                const passedAttempts = attempts.filter(a => a.passed).length;
                const avgScore = totalAttempts > 0
                    ? attempts.reduce((sum, a) => sum + a.score, 0) / totalAttempts
                    : 0;

                return {
                    ...quiz.toObject(),
                    totalAttempts,
                    passedAttempts,
                    passRate: totalAttempts > 0 ? (passedAttempts / totalAttempts) * 100 : 0,
                    avgScore: Math.round(avgScore)
                };
            })
        );

        res.json({ success: true, quizzes: quizzesWithStats });
    } catch (error) {
        console.error('Error fetching quizzes:', error);
        res.status(500).json({ success: false, message: 'Server error' });
    }
};

// Get quiz by ID
exports.getQuizById = async (req, res) => {
    try {
        const { quizId } = req.params;

        const quiz = await Quiz.findOne({ _id: quizId, instructorID: req.user.id })
            .populate('courseID', 'title')
            .populate('moduleID', 'name')
            .populate('contentID', 'title');

        if (!quiz) {
            return res.status(404).json({ success: false, message: 'Quiz not found' });
        }

        res.json({ success: true, quiz });
    } catch (error) {
        console.error('Error fetching quiz:', error);
        res.status(500).json({ success: false, message: 'Server error' });
    }
};

// Update quiz
exports.updateQuiz = async (req, res) => {
    try {
        const { quizId } = req.params;
        const updates = req.body;

        // Check if students have attempted
        const attemptCount = await QuizAttempt.countDocuments({ quizID: quizId });

        const quiz = await Quiz.findOneAndUpdate(
            { _id: quizId, instructorID: req.user.id },
            updates,
            { new: true, runValidators: true }
        );

        if (!quiz) {
            return res.status(404).json({ success: false, message: 'Quiz not found' });
        }

        const warning = attemptCount > 0
            ? `${attemptCount} students have attempted this quiz. Changes may affect fairness.`
            : null;

        res.json({ success: true, quiz, warning, message: 'Quiz updated successfully' });
    } catch (error) {
        console.error('Error updating quiz:', error);
        res.status(500).json({ success: false, message: 'Server error' });
    }
};

// Delete quiz
exports.deleteQuiz = async (req, res) => {
    try {
        const { quizId } = req.params;

        // Check if linked to content
        const CourseContent = require('../models/CourseContent');
        const linkedContent = await CourseContent.countDocuments({ quizID: quizId });

        if (linkedContent > 0) {
            return res.status(400).json({
                success: false,
                message: 'Cannot delete quiz that is linked to course content'
            });
        }

        const quiz = await Quiz.findOneAndDelete({ _id: quizId, instructorID: req.user.id });

        if (!quiz) {
            return res.status(404).json({ success: false, message: 'Quiz not found' });
        }

        res.json({ success: true, message: 'Quiz deleted successfully' });
    } catch (error) {
        console.error('Error deleting quiz:', error);
        res.status(500).json({ success: false, message: 'Server error' });
    }
};

// Duplicate quiz
exports.duplicateQuiz = async (req, res) => {
    try {
        const { quizId } = req.params;

        const originalQuiz = await Quiz.findOne({ _id: quizId, instructorID: req.user.id });

        if (!originalQuiz) {
            return res.status(404).json({ success: false, message: 'Quiz not found' });
        }

        const duplicateQuiz = new Quiz({
            ...originalQuiz.toObject(),
            _id: undefined,
            title: `${originalQuiz.title} (Copy)`,
            contentID: null, // Unassigned
            createdAt: undefined,
            updatedAt: undefined
        });

        await duplicateQuiz.save();

        res.status(201).json({ success: true, quiz: duplicateQuiz, message: 'Quiz duplicated successfully' });
    } catch (error) {
        console.error('Error duplicating quiz:', error);
        res.status(500).json({ success: false, message: 'Server error' });
    }
};

// Get quiz results/attempts
exports.getQuizResults = async (req, res) => {
    try {
        const { quizId } = req.params;

        // Verify ownership
        const quiz = await Quiz.findOne({ _id: quizId, instructorID: req.user.id });
        if (!quiz) {
            return res.status(404).json({ success: false, message: 'Quiz not found' });
        }

        const attempts = await QuizAttempt.find({ quizID: quizId })
            .populate('studentID', 'name email')
            .sort({ submittedAt: -1 });

        res.json({ success: true, attempts });
    } catch (error) {
        console.error('Error fetching quiz results:', error);
        res.status(500).json({ success: false, message: 'Server error' });
    }
};

// Generate Quiz via AI
exports.generateQuizAI = async (req, res) => {
    try {
        const { context, difficulty = 'intermediate', questionCount = 5 } = req.body;
        let generatedQuestions = [];

        if (!context) {
            return res.status(400).json({ success: false, message: 'Context (video description or text) is required' });
        }

        const prompt = `
            Generate ${questionCount} multiple choice questions (MCQ) based on the following text. 
            The difficulty level should be ${difficulty}.
            
            Return ONLY a raw JSON array (no markdown code blocks, no explanation).
            Each object in the array must have:
            - "questionText": string
            - "questionType": "mcq-single"
            - "options": array of 4 objects, each with "text" (string) and "isCorrect" (boolean). Only one option should be correct.

            Context:
            ${context}
        `;

        const n8nUrl = process.env.N8N_WEBHOOK_URL;

        if (n8nUrl) {
            console.log('[AI] 🤖 Routing request through n8n workflow...');
            try {
                const n8nResponse = await axios.post(n8nUrl, {
                    context,
                    difficulty,
                    questionCount,
                    type: 'generate_quiz'
                });
                
                console.log('[AI] Raw n8n response:', JSON.stringify(n8nResponse.data).substring(0, 500));
                generatedQuestions = extractAnyArray(n8nResponse.data);
                console.log('[AI] Extracted questions:', JSON.stringify(generatedQuestions).substring(0, 500));
            } catch (n8nError) {
                console.error('n8n Webhook Error:', n8nError.message);
                if (n8nError.response?.status === 404) {
                    return res.status(404).json({ 
                        success: false, 
                        message: 'n8n Webhook Not Found (404). Tip: If using a -test URL, make sure you clicked "Execute Workflow" in n8n. Otherwise, use the Production URL.' 
                    });
                }
                throw n8nError;
            }
        } else if (openai) {
            console.log('[AI] ⚠️ n8n URL not found, falling back to direct OpenRouter call...');
            const completion = await openai.chat.completions.create({
                messages: [{ role: "user", content: prompt }],
                model: "openrouter/auto",
            });

            const content = completion.choices[0].message.content;
            const cleanContent = content.replace(/```json/g, '').replace(/```/g, '').trim();
            generatedQuestions = JSON.parse(cleanContent);
        } else {
            return res.status(500).json({ 
                success: false, 
                message: 'No AI configuration found. Please provide either N8N_WEBHOOK_URL or OPENROUTER_API_KEY in the .env file.' 
            });
        }

        res.json({
            success: true,
            questions: generatedQuestions,
            message: 'Quiz generated successfully'
        });

    } catch (error) {
        console.error('Error generating AI quiz:', error);
        
        const status = error.status || 500;
        let message = error.error?.message || error.message || 'Server error during AI generation';

        // Translate the confusing "User not found" error from OpenRouter/API
        if (message.toLowerCase().includes("user not found")) {
            message = "AI API Key Error: The provided OpenRouter/OpenAI account was not found. Please check your API key.";
        } else if (status === 401) {
            message = "AI Authentication Failed: The API key is invalid or has expired.";
        }

        res.status(status).json({ 
            success: false, 
            error: "AI_GENERATION_FAILED",
            message: `AI Error (${status}): ${message}. Tip: If using OpenRouter, make sure your key is active and your account is verified at openrouter.ai.` 
        });
    }
};

exports.suggestOptionsAI = async (req, res) => {
    try {
        const { questionText } = req.body;

        if (!questionText) {
            return res.status(400).json({ success: false, message: 'Question text is required' });
        }

        const prompt = `
            Given the following question, suggest 4 plausible multiple choice options.
            One option must be correct, and the other three must be incorrect but plausible.
            
            Return ONLY a raw JSON array of 4 objects, each with:
            - "text": string
            - "isCorrect": boolean

            Question:
            ${questionText}
        `;

        const n8nUrl = process.env.N8N_WEBHOOK_URL;
        let suggestedOptions;

        if (n8nUrl) {
            console.log('[AI] 🤖 Routing suggestion through n8n workflow...');
            try {
                const n8nResponse = await axios.post(n8nUrl, {
                    questionText,
                    type: 'suggest_options'
                });
                
                suggestedOptions = extractAnyArray(n8nResponse.data);
            } catch (n8nError) {
                console.error('n8n Webhook Error (Suggestion):', n8nError.message);
                if (n8nError.response?.status === 404) {
                    return res.status(404).json({ 
                        success: false, 
                        message: 'n8n Webhook Not Found (404). Tip: Ensure n8n is in Production mode or Execute is active.' 
                    });
                }
                throw n8nError;
            }
        } else if (openai) {
            const completion = await openai.chat.completions.create({
                messages: [{ role: "user", content: prompt }],
                model: "openrouter/auto",
            });

            const content = completion.choices[0].message.content;
            const cleanContent = content.replace(/```json/g, '').replace(/```/g, '').trim();
            suggestedOptions = JSON.parse(cleanContent);
        } else {
            return res.status(500).json({ 
                success: false, 
                message: 'No AI configuration found for suggestions.' 
            });
        }

        res.json({
            success: true,
            options: suggestedOptions,
            message: 'Options suggested successfully'
        });

    } catch (error) {
        console.error('Error suggesting options:', error);
        const status = error.status || 500;
        const message = error.error?.message || error.message || 'Server error during AI suggestion';
        res.status(status).json({ success: false, message: `AI Error (${status}): ${message}` });
    }
};

// Get quiz for student (with lock check)
// Get quiz for student (with lock check and previous attempt)
exports.getStudentQuiz = async (req, res) => {
    try {
        const { quizId } = req.params;
        const studentId = req.user.id;

        const quiz = await Quiz.findById(quizId);
        if (!quiz) {
            return res.status(404).json({ success: false, message: 'Quiz not found' });
        }

        // 1. Verify Enrollment
        const isEnrolled = await Enrollment.exists({ studentID: studentId, courseID: quiz.courseID });
        if (!isEnrolled) {
            return res.status(403).json({ success: false, message: 'Not enrolled in this course' });
        }

        // 2. Check Prerequisite Video Completion
        const linkedContent = await CourseContent.findOne({ quizID: quizId, contentType: 'video' });
        if (linkedContent) {
            const hasCompletedVideo = await Progress.exists({
                studentID: studentId,
                contentID: linkedContent._id,
                status: 'completed'
            });

            if (!hasCompletedVideo) {
                return res.status(403).json({
                    success: false,
                    isLocked: true,
                    message: 'You must complete the video before taking this quiz.'
                });
            }
        }

        // 3. Check for existing attempt
        const attempts = await QuizAttempt.find({ studentID: studentId, quizID: quizId }).sort({ score: -1 }); // Get best attempt
        let attemptData = null;

        if (attempts.length > 0) {
            const bestAttempt = attempts[0];
            attemptData = {
                score: bestAttempt.score,
                earnedPoints: bestAttempt.earnedPoints,
                totalPoints: bestAttempt.totalPoints,
                passed: bestAttempt.passed,
                attemptNumber: bestAttempt.attemptNumber,
                timeSpent: bestAttempt.timeSpent,
                results: bestAttempt.answers.map(a => {
                    const question = quiz.questions.find(q => q._id.toString() === a.questionID.toString());
                    let correctDisplay = '';
                    if (question) {
                        if (question.questionType === 'mcq-single' || question.questionType === 'true-false') {
                            const correctOpt = question.options.find(o => o.isCorrect);
                            correctDisplay = correctOpt ? correctOpt.text : '';
                        } else if (question.questionType === 'fill-blank') {
                            correctDisplay = question.correctAnswer;
                        }
                    }

                    return {
                        questionID: a.questionID,
                        questionText: question ? question.questionText : 'Deleted Question',
                        userAnswer: a.textAnswer || (question && question.options && question.options[parseInt(a.selectedOptions[0])] ? question.options[parseInt(a.selectedOptions[0])].text : ''),
                        correctAnswer: correctDisplay,
                        isCorrect: a.isCorrect
                    };
                })
            };
        }

        // 4. Return sanitized quiz
        const quizObj = quiz.toObject();
        quizObj.questions.forEach(q => {
            if (q.options) {
                q.options.forEach(o => delete o.isCorrect);
            }
        });

        res.json({ success: true, quiz: quizObj, attempt: attemptData });

    } catch (error) {
        console.error('Error fetching student quiz:', error);
        res.status(500).json({ success: false, message: 'Server error' });
    }
};

exports.getStudentQuizzes = async (req, res) => {
    try {
        const studentId = req.user.id;

        // 1. Get all enrolled courses
        const enrollments = await Enrollment.find({ studentID: studentId }).select('courseID');
        const courseIds = enrollments.map(e => e.courseID);

        if (courseIds.length === 0) {
            return res.json({ success: true, quizzes: [] });
        }

        // 2. Get all quizzes for these courses
        const quizzes = await Quiz.find({ courseID: { $in: courseIds }, active: true })
            .populate('courseID', 'title')
            .populate('moduleID', 'name')
            .sort({ createdAt: -1 });

        // 3. Get attempts and lock status for each quiz
        const quizzesWithStatus = await Promise.all(quizzes.map(async (quiz) => {
            const attempts = await QuizAttempt.find({ studentID: studentId, quizID: quiz._id })
                .sort({ createdAt: -1 });

            const bestAttempt = attempts.length > 0
                ? attempts.reduce((prev, current) => (prev.score > current.score) ? prev : current)
                : null;

            // Check if locked
            const linkedContent = await CourseContent.findOne({ quizID: quiz._id, contentType: 'video' });
            let isLocked = false;
            if (linkedContent) {
                const hasCompletedVideo = await Progress.exists({
                    studentID: studentId,
                    contentID: linkedContent._id,
                    status: 'completed'
                });
                isLocked = !hasCompletedVideo;
            }

            return {
                _id: quiz._id,
                title: quiz.title,
                course: quiz.courseID?.title || 'Unknown Course',
                questions: quiz.questions.length,
                timeLimit: quiz.timeLimit,
                passingPercentage: quiz.passingPercentage,
                status: bestAttempt ? 'completed' : (isLocked ? 'locked' : 'available'),
                score: bestAttempt ? bestAttempt.score : null,
                isLocked,
                lastAttemptDate: bestAttempt ? bestAttempt.createdAt : null
            };
        }));

        res.json({ success: true, quizzes: quizzesWithStatus });
    } catch (error) {
        console.error('Error fetching student quizzes:', error);
        res.status(500).json({ success: false, message: 'Server error' });
    }
};

exports.submitQuiz = async (req, res) => {
    try {
        const { quizId } = req.params;
        const { answers, timeSpent } = req.body;
        const studentId = req.user.id;

        const quiz = await Quiz.findById(quizId);
        if (!quiz) {
            return res.status(404).json({ success: false, message: 'Quiz not found' });
        }

        let earnedPoints = 0;
        let totalPoints = 0;
        const processedAnswers = [];

        for (const question of quiz.questions) {
            const qPoints = question.points || 1;
            totalPoints += qPoints;

            const studentAns = answers.find(a => a.questionId === question._id.toString());
            let isCorrect = false;
            let pointsEarned = 0;

            if (studentAns) {
                if (question.questionType === 'mcq-single' || question.questionType === 'true-false') {
                    const selectedIdx = parseInt(studentAns.selectedOptions[0]);
                    isCorrect = question.options[selectedIdx]?.isCorrect || false;
                } else if (question.questionType === 'mcq-multiple') {
                    const correctIndices = question.options
                        .map((o, i) => o.isCorrect ? i.toString() : null)
                        .filter(i => i !== null);

                    isCorrect = studentAns.selectedOptions.length === correctIndices.length &&
                        studentAns.selectedOptions.every(val => correctIndices.includes(val));
                } else if (question.questionType === 'fill-blank') {
                    isCorrect = studentAns.textAnswer.trim().toLowerCase() === question.correctAnswer.trim().toLowerCase();
                }

                if (isCorrect) {
                    pointsEarned = qPoints;
                    earnedPoints += qPoints;
                }
            }

            processedAnswers.push({
                questionID: question._id,
                selectedOptions: studentAns?.selectedOptions || [],
                textAnswer: studentAns?.textAnswer || '',
                isCorrect,
                pointsEarned
            });
        }

        const score = totalPoints > 0 ? Math.round((earnedPoints / totalPoints) * 100) : 0;
        const passed = score >= (quiz.passingPercentage || 60);

        const previousAttempts = await QuizAttempt.countDocuments({ studentID: studentId, quizID: quizId });

        const attempt = new QuizAttempt({
            studentID: studentId,
            quizID: quizId,
            courseID: quiz.courseID,
            answers: processedAnswers,
            score,
            totalPoints,
            earnedPoints,
            passed,
            attemptNumber: previousAttempts + 1,
            timeSpent: timeSpent || 0
        });

        await attempt.save();

        // Log activity
        await ActivityLog.create({
            userID: studentId,
            activityType: 'quiz_submitted',
            courseID: quiz.courseID,
            moduleID: quiz.moduleID,
            quizID: quizId,
            metadata: { score, passed }
        });

        if (passed) {
            // Mark quiz as completed in Progress
            await Progress.findOneAndUpdate(
                {
                    studentID: studentId,
                    courseID: quiz.courseID,
                    contentID: quizId
                },
                {
                    status: 'completed',
                    moduleID: quiz.moduleID,
                    contentType: 'quiz',
                    updatedAt: new Date()
                },
                { upsert: true }
            );

            // Find the CourseContent linked to this quiz and mark it completed in Enrollment
            const linkedContent = await CourseContent.findOne({ quizID: quizId });
            if (linkedContent) {
                await Enrollment.findOneAndUpdate(
                    { studentID: studentId, courseID: quiz.courseID },
                    { $addToSet: { completedItems: linkedContent._id } }
                );
            }

            // Update overall progress percentage
            await progressController.updateEnrollmentProgress(studentId, quiz.courseID);
        }

        res.json({
            success: true,
            attempt: {
                score,
                earnedPoints,
                totalPoints,
                passed,
                attemptNumber: attempt.attemptNumber,
                results: processedAnswers.map(a => {
                    const question = quiz.questions.find(q => q._id.toString() === a.questionID.toString());
                    let correctDisplay = '';
                    if (question.questionType === 'mcq-single' || question.questionType === 'true-false') {
                        const correctOpt = question.options.find(o => o.isCorrect);
                        correctDisplay = correctOpt ? correctOpt.text : '';
                    } else if (question.questionType === 'fill-blank') {
                        correctDisplay = question.correctAnswer;
                    }

                    return {
                        questionID: a.questionID,
                        questionText: question.questionText,
                        userAnswer: a.textAnswer || (question.options[parseInt(a.selectedOptions[0])]?.text || ''),
                        correctAnswer: correctDisplay,
                        isCorrect: a.isCorrect
                    };
                })
            }
        });

    } catch (error) {
        console.error('Error submitting quiz:', error);
        res.status(500).json({ success: false, message: 'Server error' });
    }
};
