"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Textarea } from "@/components/ui/textarea"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import {
  ArrowLeft,
  BookOpen,
  Clock,
  CheckCircle,
  Star,
  Upload,
  Play,
  RotateCcw,
  Send,
  Award,
  Target,
  TrendingUp,
  MessageSquare,
  Mic,
  Eye,
  Users,
  Heart,
  Video,
} from "lucide-react"
// import Video from "lucide-react/Video" // Declare the Video variable

interface Exercise {
  id: string
  title: string
  subject: string
  difficulty: "beginner" | "intermediate" | "advanced"
  type: "multiple-choice" | "fill-blank" | "essay" | "video-response" | "sign-practice" | "matching"
  timeLimit?: number
  points: number
  description: string
  completed: boolean
  score?: number
  attempts: number
  maxAttempts: number
  dueDate?: string
}

interface Question {
  id: string
  type: "multiple-choice" | "fill-blank" | "essay" | "video-response" | "sign-practice" | "matching"
  question: string
  options?: string[]
  correctAnswer?: string | string[]
  points: number
  hint?: string
  videoUrl?: string
  signDescription?: string
}

export default function PracticeExercisesPage() {
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [selectedExercise, setSelectedExercise] = useState<Exercise | null>(null)
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [answers, setAnswers] = useState<Record<string, any>>({})
  const [timeRemaining, setTimeRemaining] = useState<number | null>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showResults, setShowResults] = useState(false)

  // Mock exercises data
  const exercises: Exercise[] = [
    {
      id: "ex1",
      title: "Basic Sign Language Vocabulary",
      subject: "Sign Language",
      difficulty: "beginner",
      type: "multiple-choice",
      timeLimit: 15,
      points: 50,
      description: "Practice basic MSL signs for everyday words",
      completed: true,
      score: 85,
      attempts: 1,
      maxAttempts: 3,
      dueDate: "2024-01-20",
    },
    {
      id: "ex2",
      title: "Speech Sound Recognition",
      subject: "Speech Therapy",
      difficulty: "beginner",
      type: "video-response",
      timeLimit: 20,
      points: 75,
      description: "Record yourself pronouncing target sounds",
      completed: false,
      attempts: 0,
      maxAttempts: 2,
      dueDate: "2024-01-25",
    },
    {
      id: "ex3",
      title: "Autism Social Scenarios",
      subject: "Social Skills",
      difficulty: "intermediate",
      type: "essay",
      timeLimit: 30,
      points: 100,
      description: "Analyze social situations and appropriate responses",
      completed: false,
      attempts: 1,
      maxAttempts: 3,
      dueDate: "2024-01-22",
    },
    {
      id: "ex4",
      title: "Sensory Processing Activities",
      subject: "Sensory Processing",
      difficulty: "beginner",
      type: "matching",
      timeLimit: 10,
      points: 40,
      description: "Match sensory activities with their benefits",
      completed: true,
      score: 92,
      attempts: 1,
      maxAttempts: 3,
    },
    {
      id: "ex5",
      title: "Advanced Sign Conversations",
      subject: "Sign Language",
      difficulty: "advanced",
      type: "sign-practice",
      timeLimit: 25,
      points: 120,
      description: "Practice complex sign language conversations",
      completed: false,
      attempts: 0,
      maxAttempts: 2,
      dueDate: "2024-01-30",
    },
    {
      id: "ex6",
      title: "Reading Comprehension",
      subject: "Academic Support",
      difficulty: "intermediate",
      type: "fill-blank",
      timeLimit: 20,
      points: 80,
      description: "Fill in the blanks in adapted reading passages",
      completed: false,
      attempts: 0,
      maxAttempts: 3,
      dueDate: "2024-01-28",
    },
  ]

  // Mock questions for selected exercise
  const getQuestionsForExercise = (exerciseId: string): Question[] => {
    const questionSets: Record<string, Question[]> = {
      ex1: [
        {
          id: "q1",
          type: "multiple-choice",
          question: "What is the correct sign for 'Hello' in MSL?",
          options: ["Wave hand up and down", "Point to yourself", "Clap hands", "Touch your forehead"],
          correctAnswer: "Wave hand up and down",
          points: 10,
          hint: "Think about how you naturally greet someone",
        },
        {
          id: "q2",
          type: "multiple-choice",
          question: "Which sign represents 'Thank you' in MSL?",
          options: ["Touch chin and move forward", "Point upward", "Cross arms", "Shake head"],
          correctAnswer: "Touch chin and move forward",
          points: 10,
          hint: "This sign moves from your face outward",
        },
      ],
      ex2: [
        {
          id: "q1",
          type: "video-response",
          question: "Record yourself saying the word 'BALL' clearly. Focus on the 'B' and 'L' sounds.",
          points: 25,
          hint: "Make sure your lips come together for the 'B' sound",
        },
        {
          id: "q2",
          type: "video-response",
          question: "Practice saying 'MAMA' with clear 'M' sounds.",
          points: 25,
          hint: "Your lips should touch for each 'M' sound",
        },
      ],
      ex3: [
        {
          id: "q1",
          type: "essay",
          question:
            "You're at a birthday party and someone offers you cake, but you don't like cake. How would you politely decline? Explain your response and why it's appropriate.",
          points: 50,
          hint: "Think about being polite while being honest about your preferences",
        },
      ],
    }
    return questionSets[exerciseId] || []
  }

  const categories = [
    { id: "all", label: "All Exercises", icon: <BookOpen className="h-4 w-4" /> },
    { id: "Sign Language", label: "Sign Language", icon: <MessageSquare className="h-4 w-4" /> },
    { id: "Speech Therapy", label: "Speech Therapy", icon: <Mic className="h-4 w-4" /> },
    { id: "Social Skills", label: "Social Skills", icon: <Users className="h-4 w-4" /> },
    { id: "Sensory Processing", label: "Sensory Processing", icon: <Eye className="h-4 w-4" /> },
    { id: "Academic Support", label: "Academic Support", icon: <Heart className="h-4 w-4" /> },
  ]

  const filteredExercises =
    selectedCategory === "all" ? exercises : exercises.filter((ex) => ex.subject === selectedCategory)

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "beginner":
        return "bg-green-100 text-green-800"
      case "intermediate":
        return "bg-yellow-100 text-yellow-800"
      case "advanced":
        return "bg-red-100 text-red-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const getSubjectIcon = (subject: string) => {
    switch (subject) {
      case "Sign Language":
        return <MessageSquare className="h-4 w-4" />
      case "Speech Therapy":
        return <Mic className="h-4 w-4" />
      case "Social Skills":
        return <Users className="h-4 w-4" />
      case "Sensory Processing":
        return <Eye className="h-4 w-4" />
      case "Academic Support":
        return <Heart className="h-4 w-4" />
      default:
        return <BookOpen className="h-4 w-4" />
    }
  }

  const startExercise = (exercise: Exercise) => {
    setSelectedExercise(exercise)
    setCurrentQuestionIndex(0)
    setAnswers({})
    setShowResults(false)
    if (exercise.timeLimit) {
      setTimeRemaining(exercise.timeLimit * 60) // Convert to seconds
    }
  }

  const submitAnswer = (questionId: string, answer: any) => {
    setAnswers((prev) => ({ ...prev, [questionId]: answer }))
  }

  const nextQuestion = () => {
    if (selectedExercise) {
      const questions = getQuestionsForExercise(selectedExercise.id)
      if (currentQuestionIndex < questions.length - 1) {
        setCurrentQuestionIndex((prev) => prev + 1)
      }
    }
  }

  const previousQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex((prev) => prev - 1)
    }
  }

  const submitExercise = async () => {
    setIsSubmitting(true)
    // Simulate submission
    await new Promise((resolve) => setTimeout(resolve, 2000))
    setIsSubmitting(false)
    setShowResults(true)
  }

  const backToExercises = () => {
    setSelectedExercise(null)
    setCurrentQuestionIndex(0)
    setAnswers({})
    setTimeRemaining(null)
    setShowResults(false)
  }

  // If an exercise is selected, show the exercise interface
  if (selectedExercise) {
    const questions = getQuestionsForExercise(selectedExercise.id)
    const currentQuestion = questions[currentQuestionIndex]
    const progress = ((currentQuestionIndex + 1) / questions.length) * 100

    if (showResults) {
      return (
        <div className="min-h-screen bg-gray-50 p-6">
          <div className="max-w-4xl mx-auto">
            <Card>
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="h-8 w-8 text-green-600" />
                </div>
                <CardTitle className="text-2xl text-gray-900">Exercise Completed!</CardTitle>
                <p className="text-gray-600">{selectedExercise.title}</p>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                  <div>
                    <div className="text-3xl font-bold text-green-600 mb-2">85%</div>
                    <div className="text-sm text-gray-600">Score</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-blue-600 mb-2">{selectedExercise.points}</div>
                    <div className="text-sm text-gray-600">Points Earned</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-purple-600 mb-2">12:34</div>
                    <div className="text-sm text-gray-600">Time Taken</div>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="font-semibold text-gray-900 mb-4">Feedback</h3>
                  <div className="space-y-3">
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                      <div>
                        <p className="font-medium text-gray-900">Great job on sign recognition!</p>
                        <p className="text-sm text-gray-600">You correctly identified 8 out of 10 signs.</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Target className="h-5 w-5 text-yellow-500 mt-0.5" />
                      <div>
                        <p className="font-medium text-gray-900">Area for improvement</p>
                        <p className="text-sm text-gray-600">Practice the signs for "please" and "sorry" more.</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex space-x-4">
                  <Button onClick={backToExercises} className="flex-1">
                    <ArrowLeft className="h-4 w-4 mr-2" />
                    Back to Exercises
                  </Button>
                  <Button variant="outline" className="flex-1 bg-transparent">
                    <RotateCcw className="h-4 w-4 mr-2" />
                    Retry Exercise
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      )
    }

    return (
      <div className="min-h-screen bg-gray-50 p-6">
        <div className="max-w-4xl mx-auto">
          {/* Exercise Header */}
          <Card className="mb-6">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <Button variant="ghost" onClick={backToExercises}>
                    <ArrowLeft className="h-4 w-4 mr-2" />
                    Back
                  </Button>
                  <div>
                    <h1 className="text-xl font-bold text-gray-900">{selectedExercise.title}</h1>
                    <p className="text-gray-600">{selectedExercise.description}</p>
                  </div>
                </div>
                {timeRemaining && (
                  <div className="text-center">
                    <div className="text-2xl font-bold text-red-600">
                      {Math.floor(timeRemaining / 60)}:{(timeRemaining % 60).toString().padStart(2, "0")}
                    </div>
                    <div className="text-sm text-gray-600">Time Remaining</div>
                  </div>
                )}
              </div>
              <div className="mt-4">
                <div className="flex items-center justify-between text-sm text-gray-600 mb-2">
                  <span>
                    Question {currentQuestionIndex + 1} of {questions.length}
                  </span>
                  <span>{Math.round(progress)}% Complete</span>
                </div>
                <Progress value={progress} />
              </div>
            </CardHeader>
          </Card>

          {/* Question Card */}
          {currentQuestion && (
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">{currentQuestion.question}</CardTitle>
                {currentQuestion.hint && (
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 mt-4">
                    <p className="text-sm text-blue-800">
                      <strong>Hint:</strong> {currentQuestion.hint}
                    </p>
                  </div>
                )}
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Multiple Choice */}
                {currentQuestion.type === "multiple-choice" && currentQuestion.options && (
                  <RadioGroup
                    value={answers[currentQuestion.id] || ""}
                    onValueChange={(value) => submitAnswer(currentQuestion.id, value)}
                  >
                    {currentQuestion.options.map((option, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <RadioGroupItem value={option} id={`option-${index}`} />
                        <Label htmlFor={`option-${index}`} className="flex-1 cursor-pointer">
                          {option}
                        </Label>
                      </div>
                    ))}
                  </RadioGroup>
                )}

                {/* Essay Question */}
                {currentQuestion.type === "essay" && (
                  <div>
                    <Label htmlFor="essay-answer">Your Response</Label>
                    <Textarea
                      id="essay-answer"
                      rows={6}
                      value={answers[currentQuestion.id] || ""}
                      onChange={(e) => submitAnswer(currentQuestion.id, e.target.value)}
                      placeholder="Type your answer here..."
                      className="mt-2"
                    />
                    <p className="text-sm text-gray-600 mt-2">Minimum 100 words recommended</p>
                  </div>
                )}

                {/* Video Response */}
                {currentQuestion.type === "video-response" && (
                  <div className="space-y-4">
                    <div className="bg-gray-100 border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
                      <Video className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                      <p className="text-gray-600 mb-4">Record your video response</p>
                      <div className="flex justify-center space-x-4">
                        <Button variant="outline">
                          <Play className="h-4 w-4 mr-2" />
                          Start Recording
                        </Button>
                        <Button variant="outline" disabled>
                          <Upload className="h-4 w-4 mr-2" />
                          Upload Video
                        </Button>
                      </div>
                    </div>
                    <p className="text-sm text-gray-600">Maximum recording time: 2 minutes</p>
                  </div>
                )}

                {/* Fill in the Blank */}
                {currentQuestion.type === "fill-blank" && (
                  <div>
                    <Label htmlFor="fill-blank">Complete the sentence</Label>
                    <Input
                      id="fill-blank"
                      value={answers[currentQuestion.id] || ""}
                      onChange={(e) => submitAnswer(currentQuestion.id, e.target.value)}
                      placeholder="Type your answer..."
                      className="mt-2"
                    />
                  </div>
                )}

                {/* Navigation Buttons */}
                <div className="flex justify-between pt-6 border-t">
                  <Button variant="outline" onClick={previousQuestion} disabled={currentQuestionIndex === 0}>
                    Previous
                  </Button>

                  <div className="flex space-x-4">
                    {currentQuestionIndex === questions.length - 1 ? (
                      <Button
                        onClick={submitExercise}
                        disabled={isSubmitting}
                        className="bg-green-600 hover:bg-green-700"
                      >
                        {isSubmitting ? (
                          <>
                            <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                            Submitting...
                          </>
                        ) : (
                          <>
                            <Send className="h-4 w-4 mr-2" />
                            Submit Exercise
                          </>
                        )}
                      </Button>
                    ) : (
                      <Button onClick={nextQuestion}>Next</Button>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    )
  }

  // Main exercises list view
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center space-x-4 mb-4">
            <Button variant="ghost" onClick={() => window.history.back()}>
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Dashboard
            </Button>
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Practice Exercises</h1>
          <p className="text-gray-600">Complete exercises to reinforce your learning and track your progress</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center space-x-2">
                <Target className="h-5 w-5 text-green-500" />
                <div>
                  <p className="text-2xl font-bold text-gray-900">12</p>
                  <p className="text-sm text-gray-600">Completed</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center space-x-2">
                <Clock className="h-5 w-5 text-yellow-500" />
                <div>
                  <p className="text-2xl font-bold text-gray-900">4</p>
                  <p className="text-sm text-gray-600">In Progress</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center space-x-2">
                <Award className="h-5 w-5 text-purple-500" />
                <div>
                  <p className="text-2xl font-bold text-gray-900">850</p>
                  <p className="text-sm text-gray-600">Points Earned</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center space-x-2">
                <TrendingUp className="h-5 w-5 text-blue-500" />
                <div>
                  <p className="text-2xl font-bold text-gray-900">87%</p>
                  <p className="text-sm text-gray-600">Avg Score</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Category Filter */}
        <div className="mb-6">
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={selectedCategory === category.id ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(category.id)}
                className="flex items-center space-x-2"
              >
                {category.icon}
                <span>{category.label}</span>
              </Button>
            ))}
          </div>
        </div>

        {/* Exercises Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredExercises.map((exercise) => (
            <Card key={exercise.id} className="hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    {getSubjectIcon(exercise.subject)}
                    <Badge variant="outline" className="text-xs">
                      {exercise.subject}
                    </Badge>
                  </div>
                  <Badge className={getDifficultyColor(exercise.difficulty)}>{exercise.difficulty}</Badge>
                </div>

                <h3 className="font-semibold text-gray-900 mb-2">{exercise.title}</h3>
                <p className="text-sm text-gray-600 mb-4">{exercise.description}</p>

                <div className="space-y-3 mb-4">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">Points:</span>
                    <span className="font-medium">{exercise.points}</span>
                  </div>
                  {exercise.timeLimit && (
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-600">Time Limit:</span>
                      <span className="font-medium">{exercise.timeLimit} min</span>
                    </div>
                  )}
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">Attempts:</span>
                    <span className="font-medium">
                      {exercise.attempts}/{exercise.maxAttempts}
                    </span>
                  </div>
                  {exercise.dueDate && (
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-600">Due:</span>
                      <span className="font-medium">{exercise.dueDate}</span>
                    </div>
                  )}
                </div>

                {exercise.completed ? (
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span className="text-sm font-medium text-green-700">Completed</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Star className="h-4 w-4 text-yellow-500" />
                        <span className="text-sm font-medium">{exercise.score}%</span>
                      </div>
                    </div>
                    <div className="flex space-x-2">
                      <Button variant="outline" size="sm" className="flex-1 bg-transparent">
                        View Results
                      </Button>
                      {exercise.attempts < exercise.maxAttempts && (
                        <Button size="sm" className="flex-1" onClick={() => startExercise(exercise)}>
                          Retry
                        </Button>
                      )}
                    </div>
                  </div>
                ) : (
                  <Button
                    className="w-full"
                    onClick={() => startExercise(exercise)}
                    disabled={exercise.attempts >= exercise.maxAttempts}
                  >
                    {exercise.attempts > 0 ? "Continue" : "Start Exercise"}
                  </Button>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
