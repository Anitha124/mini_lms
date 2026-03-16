import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { TeacherLayout } from "@/components/layouts/TeacherLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Plus,
  Trash2,
  GripVertical,
  Save,
  Eye,
  CheckCircle2,
  X,
  Clock,
  FileQuestion,
  Settings,
  Sparkles,
  Loader2,
  BrainCircuit,
  Wand2,
} from "lucide-react";
import { toast } from "@/hooks/use-toast";
import QuizPreviewModal from "@/components/quiz/QuizPreviewModal";
import { instructorService } from "@/services/instructor";

interface Option {
  id: string;
  text: string;
  isCorrect: boolean;
}

interface Question {
  id: string;
  text: string;
  options: Option[];
  points: number;
}

interface QuizSettings {
  title: string;
  description: string;
  timeLimit: number;
  passingScore: number;
  shuffleQuestions: boolean;
  showResults: boolean;
  courseId: string;
  moduleId: string;
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
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

const questionVariants = {
  hidden: { opacity: 0, scale: 0.95, x: -20 },
  visible: {
    opacity: 1,
    scale: 1,
    x: 0,
    transition: { duration: 0.3, ease: "easeOut" as const },
  },
  exit: {
    opacity: 0,
    scale: 0.95,
    x: 20,
    transition: { duration: 0.2 },
  },
};

const TeacherQuizCreate = () => {
  const navigate = useNavigate();
  const [settings, setSettings] = useState<QuizSettings>({
    title: "",
    description: "",
    timeLimit: 30,
    passingScore: 70,
    shuffleQuestions: false,
    showResults: true,
    courseId: "",
    moduleId: "",
  });

  const [questions, setQuestions] = useState<Question[]>([
    {
      id: "1",
      text: "",
      options: [
        { id: "1a", text: "", isCorrect: true },
        { id: "1b", text: "", isCorrect: false },
        { id: "1c", text: "", isCorrect: false },
        { id: "1d", text: "", isCorrect: false },
      ],
      points: 10,
    },
  ]);

  const [activeTab, setActiveTab] = useState<"questions" | "settings" | "ai">("questions");
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);
  const [isGenerating, setIsGenerating] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [aiContext, setAiContext] = useState("");
  const [aiQuestionCount, setAiQuestionCount] = useState(5);
  const [aiDifficulty, setAiDifficulty] = useState("intermediate");

  const [courses, setCourses] = useState<any[]>([]);
  const [modules, setModules] = useState<any[]>([]);
  const [isLoadingCourses, setIsLoadingCourses] = useState(true);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const data = await instructorService.getCourses();
        setCourses(data);
      } catch (error) {
        toast({
          title: "Error",
          description: "Failed to fetch courses",
          variant: "destructive",
        });
      } finally {
        setIsLoadingCourses(false);
      }
    };
    fetchCourses();
  }, []);

  useEffect(() => {
    const fetchModules = async () => {
      if (!settings.courseId) {
        setModules([]);
        return;
      }
      try {
        const data = await instructorService.getCourse(settings.courseId);
        setModules(data.modules || []);
      } catch (error) {
        toast({
          title: "Error",
          description: "Failed to fetch modules",
          variant: "destructive",
        });
      }
    };
    fetchModules();
  }, [settings.courseId]);

  const handleGenerateAI = async () => {
    if (!aiContext.trim()) {
      toast({
        title: "Context required",
        description: "Please provide some context or topic for AI to generate questions.",
        variant: "destructive",
      });
      return;
    }

    setIsGenerating(true);
    try {
      const generatedQuestions = await instructorService.generateQuiz(
        aiContext,
        aiDifficulty,
        aiQuestionCount
      );

      const formattedQuestions: Question[] = (generatedQuestions || []).map((q: any, index: number) => {
        const questionText = q.questionText || q.question || q.text || "Untitled Question";
        const rawOptions = q.options || q.answers || q.choices || [];
        
        return {
          id: `ai-q-${Date.now()}-${index}`,
          text: questionText,
          options: (Array.isArray(rawOptions) ? rawOptions : []).map((opt: any, optIndex: number) => ({
            id: `ai-opt-${Date.now()}-${index}-${optIndex}`,
            text: typeof opt === 'string' ? opt : (opt.text || opt.answer || opt.option || ""),
            isCorrect: typeof opt === 'object' ? (opt.isCorrect !== undefined ? !!opt.isCorrect : !!opt.correct) : false
          })),
          points: 10,
        };
      });

      setQuestions(formattedQuestions);
      setActiveTab("questions");
      toast({
        title: "Questions generated!",
        description: `AI has generated ${formattedQuestions.length} questions based on your context.`,
      });
    } catch (error: any) {
      toast({
        title: "Generation failed",
        description: error.message || "Failed to generate questions with AI.",
        variant: "destructive",
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
        points: 10,
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

  const updateOptionText = (
    questionId: string,
    optionId: string,
    text: string
  ) => {
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

  const updateQuestionPoints = (questionId: string, points: number) => {
    setQuestions(
      questions.map((q) => (q.id === questionId ? { ...q, points } : q))
    );
  };

  const handleSuggestOptions = async (questionId: string) => {
    const question = questions.find((q) => q.id === questionId);
    if (!question || !question.text.trim()) {
      toast({
        title: "Question text required",
        description: "Please enter a question first to get AI suggestions.",
        variant: "destructive",
      });
      return;
    }

    try {
      toast({
        title: "Analyzing question...",
        description: "AI is generating plausible options for you.",
      });
      
      const suggestedOptions = await instructorService.suggestOptions(question.text);
      
      setQuestions(
        questions.map((q) =>
          q.id === questionId
            ? {
                ...q,
                options: suggestedOptions.map((opt: any, index: number) => ({
                  id: `${questionId}-opt-${Date.now()}-${index}`,
                  text: opt.text,
                  isCorrect: opt.isCorrect,
                })),
              }
            : q
        )
      );

      toast({
        title: "Options suggested!",
        description: "AI has generated 4 options for your question.",
      });
    } catch (error: any) {
      toast({
        title: "Suggestion failed",
        description: error.message || "Failed to suggest options.",
        variant: "destructive",
      });
    }
  };

  const addOption = (questionId: string) => {
    const question = questions.find((q) => q.id === questionId);
    if (question && question.options.length >= 6) {
      toast({
        title: "Maximum options reached",
        description: "A question can have at most 6 options",
        variant: "destructive",
      });
      return;
    }

    setQuestions(
      questions.map((q) =>
        q.id === questionId
          ? {
              ...q,
              options: [
                ...q.options,
                { id: `${questionId}${Date.now()}`, text: "", isCorrect: false },
              ],
            }
          : q
      )
    );
  };

  const removeOption = (questionId: string, optionId: string) => {
    const question = questions.find((q) => q.id === questionId);
    if (question && question.options.length <= 2) {
      toast({
        title: "Cannot remove",
        description: "A question must have at least 2 options",
        variant: "destructive",
      });
      return;
    }

    const option = question?.options.find((o) => o.id === optionId);
    if (option?.isCorrect) {
      toast({
        title: "Cannot remove",
        description: "Cannot remove the correct answer. Set another option as correct first.",
        variant: "destructive",
      });
      return;
    }

    setQuestions(
      questions.map((q) =>
        q.id === questionId
          ? { ...q, options: q.options.filter((o) => o.id !== optionId) }
          : q
      )
    );
  };

  const handleSaveQuiz = async () => {
    if (!settings.title.trim()) {
      toast({
        title: "Title required",
        description: "Please enter a quiz title",
        variant: "destructive",
      });
      return;
    }

    if (!settings.courseId) {
      toast({
        title: "Course required",
        description: "Please select a course for this quiz",
        variant: "destructive",
      });
      setActiveTab("settings");
      return;
    }

    if (!settings.moduleId) {
      toast({
        title: "Module required",
        description: "Please select a module for this quiz",
        variant: "destructive",
      });
      setActiveTab("settings");
      return;
    }

    const emptyQuestions = questions.filter((q) => !q.text.trim());
    if (emptyQuestions.length > 0) {
      toast({
        title: "Empty questions",
        description: "Please fill in all question texts",
        variant: "destructive",
      });
      return;
    }

    const questionsWithEmptyOptions = questions.filter((q) =>
      q.options.some((o) => !o.text.trim())
    );
    if (questionsWithEmptyOptions.length > 0) {
      toast({
        title: "Empty options",
        description: "Please fill in all option texts",
        variant: "destructive",
      });
      return;
    }

    setIsSaving(true);
    try {
      const quizData = {
        title: settings.title,
        description: settings.description,
        courseID: settings.courseId,
        moduleID: settings.moduleId,
        questions: questions.map((q) => ({
          questionText: q.text,
          questionType: "mcq-single",
          options: q.options.map((o) => ({
            text: o.text,
            isCorrect: o.isCorrect,
          })),
          points: q.points,
        })),
        passingPercentage: settings.passingScore,
        timeLimit: settings.timeLimit,
        shuffleQuestions: settings.shuffleQuestions,
        showResults: settings.showResults,
      };

      await instructorService.createQuiz(quizData);

      toast({
        title: "Quiz saved!",
        description: `"${settings.title}" has been stored in the database.`,
      });
      
      navigate("/instructor/quizzes");
    } catch (error: any) {
      toast({
        title: "Save failed",
        description: error.message || "Failed to save quiz to database.",
        variant: "destructive",
      });
    } finally {
      setIsSaving(false);
    }
  };

  const totalPoints = questions.reduce((sum, q) => sum + q.points, 0);

  return (
    <TeacherLayout>
      <motion.div
        className="space-y-6"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Header */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row sm:items-center justify-between gap-4"
        >
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold text-foreground">
              Create New Quiz
            </h1>
            <p className="text-muted-foreground mt-1">
              Build an interactive quiz with multiple choice questions
            </p>
          </div>
          <div className="flex gap-3">
            <Button variant="outline" className="gap-2" onClick={() => setIsPreviewOpen(true)}>
              <Eye className="h-4 w-4" />
              Preview
            </Button>
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Button onClick={handleSaveQuiz} className="gap-2" disabled={isSaving}>
                {isSaving ? (
                  <Loader2 className="h-4 w-4 animate-spin" />
                ) : (
                  <Save className="h-4 w-4" />
                )}
                {isSaving ? "Saving..." : "Save Quiz"}
              </Button>
            </motion.div>
          </div>
        </motion.div>

        {/* Stats Cards */}
        <motion.div
          variants={itemVariants}
          className="grid grid-cols-2 sm:grid-cols-4 gap-4"
        >
          {[
            {
              label: "Questions",
              value: questions.length,
              icon: FileQuestion,
              color: "text-primary",
            },
            {
              label: "Total Points",
              value: totalPoints,
              icon: CheckCircle2,
              color: "text-green-500",
            },
            {
              label: "Time Limit",
              value: `${settings.timeLimit}m`,
              icon: Clock,
              color: "text-amber-500",
            },
            {
              label: "Pass Score",
              value: `${settings.passingScore}%`,
              icon: Settings,
              color: "text-blue-500",
            },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
                <CardContent className="p-4 flex items-center gap-3">
                  <div className={`p-2 rounded-lg bg-muted ${stat.color}`}>
                    <stat.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-foreground">
                      {stat.value}
                    </p>
                    <p className="text-xs text-muted-foreground">{stat.label}</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Tab Navigation */}
        <motion.div variants={itemVariants} className="flex gap-2">
          {(["questions", "settings", "ai"] as const).map((tab) => (
            <motion.button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 rounded-lg font-medium transition-colors flex items-center gap-2 ${
                activeTab === tab
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted text-muted-foreground hover:bg-muted/80"
              }`}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {tab === "questions" && (
                <>
                  <FileQuestion className="h-4 w-4" />
                  Questions
                </>
              )}
              {tab === "settings" && (
                <>
                  <Settings className="h-4 w-4" />
                  Settings
                </>
              )}
              {tab === "ai" && (
                <>
                  <Sparkles className="h-4 w-4" />
                  AI Import
                </>
              )}
            </motion.button>
          ))}
        </motion.div>

        {/* Content */}
        <AnimatePresence mode="wait">
          {activeTab === "questions" ? (
            <motion.div
              key="questions"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.3 }}
              className="space-y-4"
            >
              <AnimatePresence>
                {questions.map((question, qIndex) => (
                  <motion.div
                    key={question.id}
                    variants={questionVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    layout
                  >
                    <Card className="border-border/50 bg-card/80 backdrop-blur-sm overflow-hidden">
                      <CardHeader className="pb-4 border-b border-border/30">
                        <div className="flex items-start gap-3">
                          <motion.div
                            className="mt-1 cursor-grab"
                            whileHover={{ scale: 1.1 }}
                          >
                            <GripVertical className="h-5 w-5 text-muted-foreground" />
                          </motion.div>
                          <div className="flex-1 space-y-3">
                            <div className="flex items-center justify-between">
                              <span className="text-sm font-medium text-primary">
                                Question {qIndex + 1}
                              </span>
                              <div className="flex items-center gap-2">
                                <Button
                                  variant="ghost"
                                  size="sm"
                                  onClick={() => handleSuggestOptions(question.id)}
                                  className="h-8 text-xs gap-1.5 text-primary hover:text-primary hover:bg-primary/10"
                                >
                                  <Sparkles className="h-3.5 w-3.5" />
                                  AI Suggest Options
                                </Button>
                                <Input
                                  type="number"
                                  value={question.points}
                                  onChange={(e) =>
                                    updateQuestionPoints(
                                      question.id,
                                      parseInt(e.target.value) || 0
                                    )
                                  }
                                  className="w-20 h-8 text-center"
                                  min={1}
                                />
                                <span className="text-sm text-muted-foreground">
                                  pts
                                </span>
                                <motion.button
                                  onClick={() => removeQuestion(question.id)}
                                  className="p-1.5 rounded-md hover:bg-destructive/10 text-destructive transition-colors"
                                  whileHover={{ scale: 1.1 }}
                                  whileTap={{ scale: 0.9 }}
                                >
                                  <Trash2 className="h-4 w-4" />
                                </motion.button>
                              </div>
                            </div>
                            <Textarea
                              placeholder="Enter your question..."
                              value={question.text}
                              onChange={(e) =>
                                updateQuestionText(question.id, e.target.value)
                              }
                              className="min-h-[80px] resize-none bg-background/50"
                            />
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent className="pt-4 space-y-3">
                        <Label className="text-sm text-muted-foreground">
                          Answer Options (click to mark as correct)
                        </Label>
                        <div className="grid gap-3">
                          {question.options.map((option, oIndex) => (
                            <motion.div
                              key={option.id}
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: oIndex * 0.05 }}
                              className="flex items-center gap-3"
                            >
                              <motion.button
                                onClick={() =>
                                  setCorrectOption(question.id, option.id)
                                }
                                className={`flex-shrink-0 w-8 h-8 rounded-full border-2 flex items-center justify-center transition-all ${
                                  option.isCorrect
                                    ? "border-green-500 bg-green-500/20 text-green-500"
                                    : "border-border hover:border-primary/50"
                                }`}
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                              >
                                {option.isCorrect && (
                                  <motion.div
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    transition={{
                                      type: "spring",
                                      stiffness: 500,
                                      damping: 30,
                                    }}
                                  >
                                    <CheckCircle2 className="h-5 w-5" />
                                  </motion.div>
                                )}
                              </motion.button>
                              <Input
                                placeholder={`Option ${String.fromCharCode(65 + oIndex)}`}
                                value={option.text}
                                onChange={(e) =>
                                  updateOptionText(
                                    question.id,
                                    option.id,
                                    e.target.value
                                  )
                                }
                                className={`flex-1 ${
                                  option.isCorrect
                                    ? "border-green-500/50 bg-green-500/5"
                                    : ""
                                }`}
                              />
                              <motion.button
                                onClick={() => removeOption(question.id, option.id)}
                                className="p-1.5 rounded-md hover:bg-muted text-muted-foreground hover:text-foreground transition-colors"
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                              >
                                <X className="h-4 w-4" />
                              </motion.button>
                            </motion.div>
                          ))}
                        </div>
                        <motion.button
                          onClick={() => addOption(question.id)}
                          className="flex items-center gap-2 text-sm text-primary hover:text-primary/80 transition-colors mt-2"
                          whileHover={{ x: 5 }}
                        >
                          <Plus className="h-4 w-4" />
                          Add Option
                        </motion.button>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </AnimatePresence>

              {/* Add Question Button */}
              <motion.div
                variants={itemVariants}
                className="flex justify-center pt-4"
              >
                <motion.button
                  onClick={addQuestion}
                  className="flex items-center gap-2 px-6 py-3 rounded-xl border-2 border-dashed border-primary/30 text-primary hover:border-primary hover:bg-primary/5 transition-all"
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Plus className="h-5 w-5" />
                  Add New Question
                </motion.button>
              </motion.div>
            </motion.div>
          ) : activeTab === "settings" ? (
            <motion.div
              key="settings"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              <Card className="border-border/50 bg-card/80 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle>Quiz Settings</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid gap-6 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label>Select Course</Label>
                      <Select
                        value={settings.courseId}
                        onValueChange={(value) =>
                          setSettings({ ...settings, courseId: value, moduleId: "" })
                        }
                      >
                        <SelectTrigger className="bg-background/50 border-border/50">
                          <SelectValue placeholder="Choose a course..." />
                        </SelectTrigger>
                        <SelectContent className="bg-popover border-border shadow-xl">
                          {courses.map((course) => (
                            <SelectItem key={course._id} value={course._id}>
                              {course.title}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label>Select Module</Label>
                      <Select
                        value={settings.moduleId}
                        onValueChange={(value) =>
                          setSettings({ ...settings, moduleId: value })
                        }
                        disabled={!settings.courseId}
                      >
                        <SelectTrigger className="bg-background/50 border-border/50">
                          <SelectValue placeholder={settings.courseId ? "Choose a module..." : "Select a course first"} />
                        </SelectTrigger>
                        <SelectContent className="bg-popover border-border shadow-xl">
                          {modules.map((module) => (
                            <SelectItem key={module._id} value={module._id}>
                              {module.title}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="grid gap-6 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="title">Quiz Title</Label>
                      <Input
                        id="title"
                        placeholder="Enter quiz title..."
                        value={settings.title}
                        onChange={(e) =>
                          setSettings({ ...settings, title: e.target.value })
                        }
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="timeLimit">Time Limit (minutes)</Label>
                      <Select
                        value={settings.timeLimit.toString()}
                        onValueChange={(value) =>
                          setSettings({ ...settings, timeLimit: parseInt(value) })
                        }
                      >
                        <SelectTrigger className="bg-background/50 border-border/50">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent className="bg-popover border-border shadow-xl">
                          <SelectItem value="15">15 minutes</SelectItem>
                          <SelectItem value="30">30 minutes</SelectItem>
                          <SelectItem value="45">45 minutes</SelectItem>
                          <SelectItem value="60">60 minutes</SelectItem>
                          <SelectItem value="90">90 minutes</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="description">Description</Label>
                    <Textarea
                      id="description"
                      placeholder="Enter quiz description..."
                      value={settings.description}
                      onChange={(e) =>
                        setSettings({ ...settings, description: e.target.value })
                      }
                      className="min-h-[100px]"
                    />
                  </div>

                  <div className="grid gap-6 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="passingScore">Passing Score (%)</Label>
                      <Input
                        id="passingScore"
                        type="number"
                        min={0}
                        max={100}
                        value={settings.passingScore}
                        onChange={(e) =>
                          setSettings({
                            ...settings,
                            passingScore: parseInt(e.target.value) || 0,
                          })
                        }
                      />
                    </div>
                  </div>

                  <div className="space-y-4 pt-4 border-t border-border/30">
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label>Shuffle Questions</Label>
                        <p className="text-sm text-muted-foreground">
                          Randomize question order for each attempt
                        </p>
                      </div>
                      <Switch
                        checked={settings.shuffleQuestions}
                        onCheckedChange={(checked) =>
                          setSettings({ ...settings, shuffleQuestions: checked })
                        }
                      />
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label>Show Results</Label>
                        <p className="text-sm text-muted-foreground">
                          Display correct answers after submission
                        </p>
                      </div>
                      <Switch
                        checked={settings.showResults}
                        onCheckedChange={(checked) =>
                          setSettings({ ...settings, showResults: checked })
                        }
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ) : (
            <motion.div
              key="ai"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <Card className="border-border/50 bg-card/80 backdrop-blur-sm overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 via-primary to-blue-500" />
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-primary/10 text-primary">
                      <BrainCircuit className="h-6 w-6" />
                    </div>
                    <div>
                      <CardTitle>AI Question Generator</CardTitle>
                      <p className="text-sm text-muted-foreground">
                        Generate high-quality questions from your content using AI
                      </p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="aiContext">Content Context</Label>
                      <Textarea
                        id="aiContext"
                        placeholder="Paste a video transcript, article text, or describe the topic in detail..."
                        value={aiContext}
                        onChange={(e) => setAiContext(e.target.value)}
                        className="min-h-[200px] bg-background/50"
                      />
                      <p className="text-xs text-muted-foreground">
                        The more context you provide, the better the generated questions will be.
                      </p>
                    </div>

                    <div className="grid gap-6 sm:grid-cols-2">
                      <div className="space-y-2">
                        <Label>Difficulty Level</Label>
                        <Select value={aiDifficulty} onValueChange={setAiDifficulty}>
                          <SelectTrigger className="bg-background/50 border-border/50">
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent className="bg-popover border-border shadow-xl">
                            <SelectItem value="beginner">Beginner</SelectItem>
                            <SelectItem value="intermediate">Intermediate</SelectItem>
                            <SelectItem value="advanced">Advanced</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label>Number of Questions</Label>
                        <Select 
                          value={aiQuestionCount.toString()} 
                          onValueChange={(v) => setAiQuestionCount(parseInt(v))}
                        >
                          <SelectTrigger className="bg-background/50 border-border/50">
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent className="bg-popover border-border shadow-xl">
                            <SelectItem value="3">3 Questions</SelectItem>
                            <SelectItem value="5">5 Questions</SelectItem>
                            <SelectItem value="10">10 Questions</SelectItem>
                            <SelectItem value="15">15 Questions</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </div>

                  <div className="pt-4 flex justify-center">
                    <Button
                      size="lg"
                      onClick={handleGenerateAI}
                      disabled={isGenerating || !aiContext.trim()}
                      className="gap-2 px-8 bg-gradient-to-r from-purple-600 to-primary hover:from-purple-700 hover:to-primary/90 transition-all shadow-lg shadow-primary/20"
                    >
                      {isGenerating ? (
                        <>
                          <Loader2 className="h-5 w-5 animate-spin" />
                          Generating Questions...
                        </>
                      ) : (
                        <>
                          <Wand2 className="h-5 w-5" />
                          Generate with AI
                        </>
                      )}
                    </Button>
                  </div>

                  <div className="rounded-xl bg-muted/50 p-4 border border-border/50">
                    <div className="flex gap-3">
                      <Sparkles className="h-5 w-5 text-amber-500 flex-shrink-0" />
                      <div className="text-sm space-y-1">
                        <p className="font-medium text-foreground">Pro Tip</p>
                        <p className="text-muted-foreground">
                          After generating, you can switch back to the "Questions" tab to manually edit, reorder, or add more questions to your quiz.
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      <QuizPreviewModal
        isOpen={isPreviewOpen}
        onClose={() => setIsPreviewOpen(false)}
        questions={questions}
        settings={settings}
      />
    </TeacherLayout>
  );
};

export default TeacherQuizCreate;
