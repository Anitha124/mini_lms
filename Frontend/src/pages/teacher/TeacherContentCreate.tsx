import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useParams, useNavigate, Link } from "react-router-dom";
import { TeacherLayout } from "@/components/layouts/TeacherLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  ArrowLeft,
  ArrowRight,
  Video,
  FileQuestion,
  CheckCircle2,
  AlertCircle,
  Plus,
  Trash2,
  X,
  Play,
  Lock,
  Unlock,
  Sparkles,
  Save,
  Eye,
} from "lucide-react";
import { toast } from "@/hooks/use-toast";
import { instructorService } from "@/services/instructor";
import { extractYouTubeId } from "@/lib/video";

interface QuizQuestion {
  id: string;
  text: string;
  options: { id: string; text: string; isCorrect: boolean }[];
  difficulty: "easy" | "medium" | "hard";
}

interface VideoData {
  url: string;
  title: string;
  description: string;
  thumbnail: string;
  isValid: boolean;
}

const STEPS = [
  { id: 1, title: "Add Video", icon: Video, description: "Paste YouTube link" },
  { id: 2, title: "Create Quiz", icon: FileQuestion, description: "Add MCQ questions" },
  { id: 3, title: "Publish", icon: CheckCircle2, description: "Finalize module" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" as const },
  },
};

const stepVariants = {
  enter: { opacity: 0, x: 50 },
  center: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -50 },
};

const TeacherContentCreate = () => {
  const { id: courseId } = useParams();
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);
  const [isGenerating, setIsGenerating] = useState(false);

  useEffect(() => {
    if (!courseId) {
      toast({
        title: "Invalid Access",
        description: "No course specified. Please select a course to add content.",
        variant: "destructive"
      });
      navigate("/instructor/courses");
    }
  }, [courseId, navigate]);

  // Video State
  const [video, setVideo] = useState<VideoData>({
    url: "",
    title: "",
    description: "",
    thumbnail: "",
    isValid: false,
  });

  // Quiz State
  const [questions, setQuestions] = useState<QuizQuestion[]>([
    {
      id: "1",
      text: "",
      options: [
        { id: "1a", text: "", isCorrect: true },
        { id: "1b", text: "", isCorrect: false },
        { id: "1c", text: "", isCorrect: false },
        { id: "1d", text: "", isCorrect: false },
      ],
      difficulty: "medium",
    },
  ]);

  const [moduleTitle, setModuleTitle] = useState("");

  const handleVideoUrlChange = (url: string) => {
    const videoId = extractYouTubeId(url);
    setVideo({
      ...video,
      url,
      isValid: !!videoId,
      thumbnail: videoId ? `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg` : "",
    });
  };

  const isVideoComplete = video.isValid && video.title.trim() !== "";
  const isQuizComplete = true;

  const canProceedToStep2 = isVideoComplete;
  const canProceedToStep3 = isVideoComplete && isQuizComplete;

  const handleGenerateQuiz = async () => {
    if (!video.description && !video.title) {
      toast({ title: "Context missing", description: "Please add a video title or description first.", variant: "destructive" });
      return;
    }

    setIsGenerating(true);
    try {
      const context = `${video.title}\n${video.description}`;
      // Assuming questionCount 5 for now
      const generatedQuestions = await instructorService.generateQuiz(context, "medium", 5);

      interface BackendQuestion {
        questionText: string;
        options: { text: string; isCorrect: boolean }[];
      }

      // Map backend questions to frontend structure
      const mappedQuestions = (generatedQuestions as BackendQuestion[]).map((q, index) => ({
        id: Date.now().toString() + index,
        text: q.questionText,
        options: q.options.map((o, i) => ({
          id: Date.now().toString() + index + "opt" + i,
          text: o.text || "",
          isCorrect: o.isCorrect
        })),
        difficulty: "medium" as "easy" | "medium" | "hard"
      }));

      setQuestions(mappedQuestions);
      toast({ title: "Quiz Generated", description: "AI has successfully generated questions based on your video context." });
    } catch (error: unknown) {
      console.error("AI Generation Error:", error);
      const errorMsg = error instanceof Error ? error.message : "Could not generate quiz. Please try again.";
      toast({ 
        title: "Generation failed", 
        description: errorMsg, 
        variant: "destructive" 
      });
    } finally {
      setIsGenerating(false);
    }
  };

  const addQuestion = () => {
    const newId = Date.now().toString();
    setQuestions([
      ...questions,
      {
        id: newId,
        text: "",
        options: [
          { id: `${newId}a`, text: "", isCorrect: true },
          { id: `${newId}b`, text: "", isCorrect: false },
          { id: `${newId}c`, text: "", isCorrect: false },
          { id: `${newId}d`, text: "", isCorrect: false },
        ],
        difficulty: "medium",
      },
    ]);
  };

  const removeQuestion = (questionId: string) => {
    if (questions.length === 1) {
      toast({
        title: "Cannot remove",
        description: "Quiz must have at least one question",
        variant: "destructive",
      });
      return;
    }
    setQuestions(questions.filter((q) => q.id !== questionId));
  };

  const updateQuestionText = (questionId: string, text: string) => {
    setQuestions(
      questions.map((q) => (q.id === questionId ? { ...q, text } : q))
    );
  };

  const updateQuestionDifficulty = (questionId: string, difficulty: "easy" | "medium" | "hard") => {
    setQuestions(
      questions.map((q) => (q.id === questionId ? { ...q, difficulty } : q))
    );
  };

  const updateOptionText = (questionId: string, optionId: string, text: string) => {
    setQuestions(
      questions.map((q) =>
        q.id === questionId
          ? {
            ...q,
            options: q.options.map((o) =>
              o.id === optionId ? { ...o, text } : o
            ),
          }
          : q
      )
    );
  };

  const setCorrectOption = (questionId: string, optionId: string) => {
    setQuestions(
      questions.map((q) =>
        q.id === questionId
          ? {
            ...q,
            options: q.options.map((o) => ({
              ...o,
              isCorrect: o.id === optionId,
            })),
          }
          : q
      )
    );
  };

  const [isPublishing, setIsPublishing] = useState(false);

  const handlePublish = async () => {
    if (!moduleTitle.trim()) {
      toast({
        title: "Module title required",
        description: "Please enter a title for this module",
        variant: "destructive",
      });
      return;
    }

    setIsPublishing(true);

    try {
      // 1. Create Module
      const newModule = await instructorService.createModule({
        name: moduleTitle,
        courseID: courseId,
        description: video.title + " Module"
      });

      // 2. Create Quiz (Optional)
      let quizId = undefined;
      const validQuestions = questions.filter(q => q.text.trim().length > 0);

      if (validQuestions.length > 0) {
        // Map questions to match Schema: "questionText", "questionType", "options"
        const backendQuestions = validQuestions.map(q => ({
          questionText: q.text,
          questionType: "mcq-single",
          options: q.options.map(o => ({ text: o.text, isCorrect: o.isCorrect })),
          difficulty: q.difficulty
        }));

        console.log("Creating quiz for module:", newModule._id);

        const newQuiz = await instructorService.createQuiz({
          title: moduleTitle + " Quiz",
          courseID: courseId,
          moduleID: newModule._id,
          questions: backendQuestions,
          passingPercentage: 60
        });

        quizId = newQuiz._id;
      }

      // 3. Create Content (Video)
      await instructorService.createContent({
        title: video.title,
        courseID: courseId,
        moduleID: newModule._id,
        contentType: "video",
        videoURL: video.url,
        duration: 600, // 600 seconds (10 minutes)
        description: video.description,
        quizID: quizId
      });

      toast({
        title: "Module Published!",
        description: `"${moduleTitle}" has been published successfully${quizId ? "" : " (without quiz)"}.`,
      });

      navigate(`/instructor/course/${courseId}`);
    } catch (error) {
      console.error("Publishing error:", error);
      toast({
        title: "Publish failed",
        description: (error as Error).message || "Failed to save module. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsPublishing(false);
    }
  };


  const handleSaveDraft = () => {
    toast({
      title: "Draft saved",
      description: "Your progress has been saved as a draft.",
    });
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "easy":
        return "bg-green-500/10 text-green-500 border-green-500/20";
      case "medium":
        return "bg-amber-500/10 text-amber-500 border-amber-500/20";
      case "hard":
        return "bg-red-500/10 text-red-500 border-red-500/20";
      default:
        return "";
    }
  };

  return (
    <TeacherLayout>
      <motion.div
        className="space-y-6 max-w-4xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Header */}
        <motion.div variants={itemVariants}>
          <Link
            to={`/instructor/course/${courseId}`}
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-4"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Course
          </Link>

          <h1 className="text-2xl sm:text-3xl font-bold text-foreground">
            Add Learning Content
          </h1>
          <p className="text-muted-foreground mt-1">
            Create a video-quiz linked module for structured learning
          </p>
        </motion.div>

        {/* Stepper */}
        <motion.div variants={itemVariants}>
          <div className="flex items-center justify-between relative">
            {/* Progress Line */}
            <div className="absolute top-6 left-0 right-0 h-0.5 bg-border">
              <motion.div
                className="h-full bg-primary"
                initial={{ width: "0%" }}
                animate={{ width: `${((currentStep - 1) / (STEPS.length - 1)) * 100}%` }}
                transition={{ duration: 0.3 }}
              />
            </div>

            {STEPS.map((step, index) => {
              const isCompleted = currentStep > step.id;
              const isCurrent = currentStep === step.id;
              const isLocked =
                (step.id === 2 && !canProceedToStep2) ||
                (step.id === 3 && !canProceedToStep3);

              return (
                <motion.div
                  key={step.id}
                  className="relative z-10 flex flex-col items-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <motion.button
                    onClick={() => {
                      if (!isLocked && step.id <= currentStep) {
                        setCurrentStep(step.id);
                      }
                    }}
                    disabled={isLocked}
                    className={`w-12 h-12 rounded-full flex items-center justify-center border-2 transition-all ${isCompleted
                      ? "bg-primary border-primary text-primary-foreground"
                      : isCurrent
                        ? "bg-background border-primary text-primary"
                        : isLocked
                          ? "bg-muted border-border text-muted-foreground cursor-not-allowed"
                          : "bg-background border-border text-muted-foreground hover:border-primary/50"
                      }`}
                    whileHover={!isLocked ? { scale: 1.1 } : {}}
                    whileTap={!isLocked ? { scale: 0.95 } : {}}
                  >
                    {isCompleted ? (
                      <CheckCircle2 className="h-5 w-5" />
                    ) : isLocked ? (
                      <Lock className="h-5 w-5" />
                    ) : (
                      <step.icon className="h-5 w-5" />
                    )}
                  </motion.button>
                  <div className="mt-2 text-center">
                    <p
                      className={`text-sm font-medium ${isCurrent ? "text-primary" : "text-muted-foreground"
                        }`}
                    >
                      {step.title}
                    </p>
                    <p className="text-xs text-muted-foreground hidden sm:block">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Step Content */}
        <AnimatePresence mode="wait">
          {currentStep === 1 && (
            <motion.div
              key="step1"
              variants={stepVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.3 }}
            >
              <Card className="border-border/50 bg-card/80 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Video className="h-5 w-5 text-primary" />
                    Step 1: Add Video
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* YouTube URL Input */}
                  <div className="space-y-2">
                    <Label htmlFor="videoUrl">YouTube Video URL *</Label>
                    <Input
                      id="videoUrl"
                      placeholder="https://www.youtube.com/watch?v=..."
                      value={video.url}
                      onChange={(e) => handleVideoUrlChange(e.target.value)}
                      className={
                        video.url && !video.isValid
                          ? "border-destructive focus-visible:ring-destructive"
                          : video.isValid
                            ? "border-green-500 focus-visible:ring-green-500"
                            : ""
                      }
                    />
                    {video.url && !video.isValid && (
                      <motion.p
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-sm text-destructive flex items-center gap-1"
                      >
                        <AlertCircle className="h-4 w-4" />
                        Invalid YouTube URL. Please check and try again.
                      </motion.p>
                    )}
                    {video.isValid && (
                      <motion.p
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-sm text-green-500 flex items-center gap-1"
                      >
                        <CheckCircle2 className="h-4 w-4" />
                        Valid YouTube URL detected
                      </motion.p>
                    )}
                  </div>

                  {/* Video Preview */}
                  {video.isValid && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="space-y-4"
                    >
                      <div className="aspect-video rounded-xl overflow-hidden bg-muted relative">
                        {video.thumbnail ? (
                          <img
                            src={video.thumbnail}
                            alt="Video thumbnail"
                            className="w-full h-full object-cover"
                            onError={(e) => {
                              (e.target as HTMLImageElement).src =
                                "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800";
                            }}
                          />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center bg-secondary">
                             <Video className="h-12 w-12 text-muted-foreground" />
                          </div>
                        )}
                        <div className="absolute inset-0 flex items-center justify-center bg-background/30">
                          <motion.div
                            className="w-16 h-16 rounded-full bg-primary/90 flex items-center justify-center cursor-pointer"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                          >
                            <Play className="h-6 w-6 text-primary-foreground ml-1" />
                          </motion.div>
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {/* Video Details */}
                  <div className="grid gap-4 sm:grid-cols-1">
                    <div className="space-y-2">
                      <Label htmlFor="videoTitle">Video Title *</Label>
                      <Input
                        id="videoTitle"
                        placeholder="Enter a descriptive title"
                        value={video.title}
                        onChange={(e) =>
                          setVideo({ ...video, title: e.target.value })
                        }
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="videoDescription">Short Description</Label>
                      <Textarea
                        id="videoDescription"
                        placeholder="Brief description of what this video covers..."
                        value={video.description}
                        onChange={(e) =>
                          setVideo({ ...video, description: e.target.value })
                        }
                        className="min-h-[80px]"
                      />
                    </div>
                  </div>

                  {/* Warning Message */}
                  {!isVideoComplete && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/20"
                    >
                      <div className="flex items-start gap-3">
                        <AlertCircle className="h-5 w-5 text-amber-500 mt-0.5" />
                        <div>
                          <p className="font-medium text-amber-500">Complete video details</p>
                          <p className="text-sm text-muted-foreground">
                            Add a valid YouTube URL and title to proceed to quiz creation
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {isVideoComplete && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="p-4 rounded-xl bg-primary/10 border border-primary/20"
                    >
                      <div className="flex items-start gap-3">
                        <Lock className="h-5 w-5 text-primary mt-0.5" />
                        <div>
                          <p className="font-medium text-primary">Video Ready</p>
                          <p className="text-sm text-muted-foreground">
                            Video set! You can optionally add a quiz or proceed to publish.
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          )}

          {currentStep === 2 && (
            <motion.div
              key="step2"
              variants={stepVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.3 }}
              className="space-y-4"
            >
              <Card className="border-border/50 bg-card/80 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <FileQuestion className="h-5 w-5 text-primary" />
                      Step 2: Create Quiz
                    </div>
                    <div className="flex items-center gap-2">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={handleGenerateQuiz}
                        disabled={isGenerating}
                        className="gap-2 border-primary/20 text-primary hover:bg-primary/5"
                      >
                        <Sparkles className={`h-4 w-4 ${isGenerating ? "animate-pulse" : ""}`} />
                        {isGenerating ? "Generating..." : "Generate with AI"}
                      </Button>
                      <Badge variant="outline" className={questions.length >= 5 ? "bg-green-500/10 text-green-500" : "bg-amber-500/10 text-amber-500"}>
                        {questions.length}/5 minimum questions
                      </Badge>
                    </div>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  {questions.length < 5 && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/20 mb-6"
                    >
                      <div className="flex items-start gap-3">
                        <AlertCircle className="h-5 w-5 text-amber-500 mt-0.5" />
                        <div>
                          <p className="font-medium text-amber-500">Quiz is Optional</p>
                          <p className="text-sm text-muted-foreground">
                            You can publish without a quiz, or add questions to test students.
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </CardContent>
              </Card>

              {/* Questions */}
              <AnimatePresence>
                {questions.map((question, qIndex) => (
                  <motion.div
                    key={question.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, x: -50 }}
                    transition={{ delay: qIndex * 0.05 }}
                  >
                    <Card className="border-border/50 bg-card/80 backdrop-blur-sm">
                      <CardHeader className="pb-3">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <span className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold text-sm">
                              {qIndex + 1}
                            </span>
                            <span className="text-sm font-medium text-muted-foreground">
                              Question {qIndex + 1}
                            </span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Select
                              value={question.difficulty}
                              onValueChange={(value: "easy" | "medium" | "hard") =>
                                updateQuestionDifficulty(question.id, value)
                              }
                            >
                              <SelectTrigger className="w-28 h-8">
                                <SelectValue />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="easy">Easy</SelectItem>
                                <SelectItem value="medium">Medium</SelectItem>
                                <SelectItem value="hard">Hard</SelectItem>
                              </SelectContent>
                            </Select>
                            <Badge className={getDifficultyColor(question.difficulty)}>
                              {question.difficulty}
                            </Badge>
                            <Button
                              variant="ghost"
                              size="sm"
                              className="text-destructive hover:bg-destructive/10"
                              onClick={() => removeQuestion(question.id)}
                            >
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <Textarea
                          placeholder="Enter your question..."
                          value={question.text}
                          onChange={(e) =>
                            updateQuestionText(question.id, e.target.value)
                          }
                          className="min-h-[60px] resize-none"
                        />

                        <div className="space-y-3">
                          <Label className="text-sm text-muted-foreground">
                            Answer options (click circle to mark correct answer)
                          </Label>
                          {question.options.map((option, oIndex) => (
                            <motion.div
                              key={option.id}
                              className="flex items-center gap-3"
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: oIndex * 0.05 }}
                            >
                              <motion.button
                                onClick={() => setCorrectOption(question.id, option.id)}
                                className={`flex-shrink-0 w-8 h-8 rounded-full border-2 flex items-center justify-center transition-all ${option.isCorrect
                                  ? "border-green-500 bg-green-500/20 text-green-500"
                                  : "border-border hover:border-primary/50"
                                  }`}
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                              >
                                {option.isCorrect && <CheckCircle2 className="h-5 w-5" />}
                              </motion.button>
                              <Input
                                placeholder={`Option ${String.fromCharCode(65 + oIndex)}`}
                                value={option.text}
                                onChange={(e) =>
                                  updateOptionText(question.id, option.id, e.target.value)
                                }
                                className={option.isCorrect ? "border-green-500/50 bg-green-500/5" : ""}
                              />
                            </motion.div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </AnimatePresence>

              {/* Add Question Button */}
              <motion.div className="flex justify-center">
                <motion.button
                  onClick={addQuestion}
                  className="flex items-center gap-2 px-6 py-3 rounded-xl border-2 border-dashed border-primary/30 text-primary hover:border-primary hover:bg-primary/5 transition-all"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Plus className="h-5 w-5" />
                  Add
                </motion.button>
              </motion.div>
            </motion.div>
          )}

          {currentStep === 3 && (
            <motion.div
              key="step3"
              variants={stepVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.3 }}
            >
              <Card className="border-border/50 bg-card/80 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Sparkles className="h-5 w-5 text-primary" />
                    Step 3: Finalize & Publish
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* Module Title */}
                  <div className="space-y-2">
                    <Label htmlFor="moduleTitle">Module Title *</Label>
                    <Input
                      id="moduleTitle"
                      placeholder="e.g., Module 1: Introduction to Concepts"
                      value={moduleTitle}
                      onChange={(e) => setModuleTitle(e.target.value)}
                    />
                  </div>

                  {/* Summary */}
                  {/* Summary Card Container */}
                  <Card className="overflow-hidden border-border/50 bg-card/50">
                    <div className="flex flex-col md:flex-row">
                      {/* Video Thumbnail Section */}
                      <div className="md:w-2/5 relative aspect-video md:aspect-auto">
                        <img
                          src={video.thumbnail}
                          alt="Video Thumbnail"
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                          <Play className="h-12 w-12 text-white/80" />
                        </div>
                      </div>

                      {/* Content Details Section */}
                      <div className="p-6 md:w-3/5 space-y-4 flex flex-col justify-center">
                        <div>
                          <Badge variant="secondary" className="mb-2">Module Preview</Badge>
                          <h3 className="text-xl font-bold text-foreground line-clamp-2">
                            {video.title}
                          </h3>
                          <p className="text-sm text-muted-foreground mt-2 line-clamp-2">
                            {video.description || "No description provided."}
                          </p>
                        </div>

                        <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-border/50">
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <FileQuestion className="h-4 w-4 text-primary" />
                            <span className="font-medium text-foreground">{questions.length} Quiz Questions</span>
                          </div>
                          <div className="w-px h-4 bg-border" />
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <CheckCircle2 className="h-4 w-4 text-green-500" />
                            <span>Ready to Publish</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Card>

                  {/* Student Flow Preview */}
                  <div className="p-4 rounded-xl bg-muted/50 border border-border/30">
                    <p className="font-medium text-foreground mb-3">Student Experience Preview</p>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary">
                        <Video className="h-4 w-4" />
                        Watch Video
                      </div>
                      <ArrowRight className="h-4 w-4" />
                      <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-muted border border-border">
                        <Lock className="h-4 w-4" />
                        Quiz Locked
                      </div>
                      <ArrowRight className="h-4 w-4" />
                      <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-muted border border-border">
                        <Unlock className="h-4 w-4" />
                        Quiz Unlocks
                      </div>
                      <ArrowRight className="h-4 w-4" />
                      <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-green-500/10 text-green-500">
                        <CheckCircle2 className="h-4 w-4" />
                        Complete
                      </div>
                    </div>
                  </div>

                  {/* Info */}
                  <div className="p-4 rounded-xl bg-primary/10 border border-primary/20">
                    <div className="flex items-start gap-3">
                      <AlertCircle className="h-5 w-5 text-primary mt-0.5" />
                      <div>
                        <p className="font-medium text-primary">Learning Enforcement Active</p>
                        <p className="text-sm text-muted-foreground">
                          Students must complete the video before attempting the quiz.
                          Quiz completion is required to mark this module as done and unlock the next module.
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Navigation Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex items-center justify-between pt-4 border-t border-border/30"
        >
          <div className="flex gap-3">
            {currentStep > 1 && (
              <Button
                variant="outline"
                onClick={() => setCurrentStep(currentStep - 1)}
                className="gap-2"
              >
                <ArrowLeft className="h-4 w-4" />
                Previous
              </Button>
            )}
          </div>

          <div className="flex gap-3">
            <Button variant="outline" onClick={handleSaveDraft} className="gap-2">
              <Save className="h-4 w-4" />
              Save Draft
            </Button>

            {currentStep < 3 ? (
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Button
                  onClick={() => setCurrentStep(currentStep + 1)}
                  disabled={
                    (currentStep === 1 && !canProceedToStep2) ||
                    (currentStep === 2 && !canProceedToStep3)
                  }
                  className="gap-2"
                >
                  Move forward
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </motion.div>
            ) : (
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Button
                  onClick={handlePublish}
                  disabled={!moduleTitle.trim() || isPublishing}
                  className="gap-2 bg-green-600 hover:bg-green-700"
                >
                  {isPublishing ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent" />
                      Publishing...
                    </>
                  ) : (
                    <>
                      <CheckCircle2 className="h-4 w-4" />
                      Publish Module
                    </>
                  )}
                </Button>
              </motion.div>
            )}
          </div>
        </motion.div>
      </motion.div>
    </TeacherLayout>
  );
};

export default TeacherContentCreate;
