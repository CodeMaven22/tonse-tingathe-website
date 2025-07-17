"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  Users,
  Clock,
  Calendar,
  Video,
  Mic,
  MicOff,
  VideoOff,
  Settings,
  MessageCircle,
  PhoneOff,
  Volume2,
  VolumeX,
  Monitor,
  Bell,
  BookOpen,
  Heart,
  Headphones,
  UserCheck,
  User,
  Users2,
  Home,
  ChevronLeft,
  ChevronRight,
  Award,
  Shield,
  Zap,
  Globe,
  CheckCircle,
} from "lucide-react"

export default function OnlineLearningPage() {
  const [activeTab, setActiveTab] = useState("courses")
  const [joinedSession, setJoinedSession] = useState<string | null>(null)
  const [micEnabled, setMicEnabled] = useState(true)
  const [videoEnabled, setVideoEnabled] = useState(true)
  const [volumeEnabled, setVolumeEnabled] = useState(true)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  // Hero carousel images
  const heroImages = [
    {
      src: "/placeholder.svg?height=600&width=1200",
      alt: "Online learning session with instructor and student",
    },
    {
      src: "/placeholder.svg?height=600&width=1200",
      alt: "Small group online class",
    },
    {
      src: "/placeholder.svg?height=600&width=1200",
      alt: "Family learning session",
    },
    {
      src: "/placeholder.svg?height=600&width=1200",
      alt: "One-on-one tutoring session",
    },
  ]

  // Auto-advance hero images
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % heroImages.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [heroImages.length])

  // Learning styles data
  const learningStyles = [
    {
      id: "one-on-one",
      title: "One-on-One Sessions",
      description:
        "Personalized attention with dedicated instructors tailored to your child's specific needs and learning pace.",
      icon: <User className="h-8 w-8" />,
      features: [
        "Customized curriculum",
        "Flexible scheduling",
        "Individual progress tracking",
        "Direct instructor feedback",
      ],
      price: "From $45/session",
      duration: "45-60 minutes",
      color: "bg-blue-50 border-blue-200",
      iconColor: "text-blue-600",
    },
    {
      id: "small-group",
      title: "Small Group Classes",
      description:
        "Interactive learning with 3-5 students, promoting social skills while maintaining personalized attention.",
      icon: <Users2 className="h-8 w-8" />,
      features: ["Peer interaction", "Collaborative learning", "Social skill development", "Cost-effective"],
      price: "From $25/session",
      duration: "60-75 minutes",
      color: "bg-green-50 border-green-200",
      iconColor: "text-green-600",
    },
    {
      id: "family-learning",
      title: "Family Learning Sessions",
      description: "Inclusive sessions involving family members to create a supportive learning environment at home.",
      icon: <Home className="h-8 w-8" />,
      features: ["Family involvement", "Home strategies", "Parent training", "Sibling inclusion"],
      price: "From $60/session",
      duration: "75-90 minutes",
      color: "bg-purple-50 border-purple-200",
      iconColor: "text-purple-600",
    },
  ]

  // Mock data for subjects (replacing courses)
  const subjects = [
    // Communication subjects
    {
      id: 1,
      title: "English language ",
      // instructor: "Sarah Mwale",
      // duration: "8 weeks",
      // level: "Beginner to Advanced",
      // students: 245,
      // rating: 4.8,
      image: "/placeholder.svg?height=200&width=300",
      description: "Phonics and letter recognition, reading fluency, spelling and vocabulary and writing",
      category: "Communication",
    },
    {
      id: 2,
      title: "Speech Therapy",
      // instructor: "Dr. James Phiri",
      // duration: "12 weeks",
      // level: "All Ages",
      // students: 189,
      // rating: 4.9,
      image: "/placeholder.svg?height=200&width=300",
      description: "Comprehensive speech therapy techniques and exercises.",
      category: "Communication",
    },
    {
      id: 3,
      title: "Language Development",
      instructor: "Dr. James Phiri",
      duration: "10 weeks",
      level: "Early Childhood",
      students: 156,
      rating: 4.7,
      image: "/placeholder.svg?height=200&width=300",
      description: "Support early language development in children.",
      category: "Communication",
    },
    {
      id: 4,
      title: "Communication Devices",
      instructor: "Sarah Mwale",
      duration: "6 weeks",
      level: "Assistive Technology",
      students: 98,
      rating: 4.6,
      image: "/placeholder.svg?height=200&width=300",
      description: "Learn to use assistive communication technology effectively.",
      category: "Communication",
    },
    // Learning Support subjects
    {
      id: 5,
      title: "Autism Support",
      instructor: "Grace Banda",
      duration: "8 weeks",
      level: "Behavioral & Educational",
      students: 167,
      rating: 4.9,
      image: "/placeholder.svg?height=200&width=300",
      description: "Evidence-based strategies for supporting individuals with autism.",
      category: "Learning Support",
    },
    {
      id: 6,
      title: "Learning Disabilities Support",
      instructor: "Grace Banda",
      duration: "10 weeks",
      level: "Academic Support",
      students: 134,
      rating: 4.8,
      image: "/placeholder.svg?height=200&width=300",
      description: "Specialized support for various learning disabilities.",
      category: "Learning Support",
    },
    {
      id: 7,
      title: "ADHD Management",
      instructor: "Dr. James Phiri",
      duration: "6 weeks",
      level: "Focus & Organization",
      students: 112,
      rating: 4.7,
      image: "/placeholder.svg?height=200&width=300",
      description: "Strategies for managing ADHD and improving focus.",
      category: "Learning Support",
    },
    {
      id: 8,
      title: "Sensory Processing",
      instructor: "Grace Banda",
      duration: "8 weeks",
      level: "Occupational Therapy",
      students: 89,
      rating: 4.6,
      image: "/placeholder.svg?height=200&width=300",
      description: "Understanding and managing sensory processing challenges.",
      category: "Learning Support",
    },
    // Life Skills subjects
    {
      id: 9,
      title: "Daily Living Skills",
      instructor: "Peter Tembo",
      duration: "12 weeks",
      level: "Independence Training",
      students: 203,
      rating: 4.8,
      image: "/placeholder.svg?height=200&width=300",
      description: "Essential skills for independent daily living.",
      category: "Life Skills",
    },
    {
      id: 10,
      title: "Social Skills",
      instructor: "Peter Tembo",
      duration: "8 weeks",
      level: "Interaction & Friendship",
      students: 178,
      rating: 4.9,
      image: "/placeholder.svg?height=200&width=300",
      description: "Develop social interaction and friendship skills.",
      category: "Life Skills",
    },
    {
      id: 11,
      title: "Vocational Training",
      instructor: "Peter Tembo",
      duration: "16 weeks",
      level: "Job Readiness",
      students: 145,
      rating: 4.7,
      image: "/placeholder.svg?height=200&width=300",
      description: "Prepare for employment and workplace success.",
      category: "Life Skills",
    },
    {
      id: 12,
      title: "Self-Advocacy",
      instructor: "Sarah Mwale",
      duration: "6 weeks",
      level: "Empowerment",
      students: 123,
      rating: 4.8,
      image: "/placeholder.svg?height=200&width=300",
      description: "Learn to advocate for yourself and your needs.",
      category: "Life Skills",
    },
  ]

  // Why choose online learning benefits
  const benefits = [
    {
      icon: <Globe className="h-6 w-6" />,
      title: "Learn from Anywhere",
      description:
        "Access quality education from the comfort of your home, eliminating travel barriers and creating a familiar learning environment.",
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Flexible Scheduling",
      description: "Choose session times that work best for your family's schedule, including evenings and weekends.",
    },
    {
      icon: <User className="h-6 w-6" />,
      title: "Personalized Learning",
      description:
        "Customized curriculum and teaching methods adapted to your child's unique learning style and needs.",
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Safe Learning Environment",
      description: "Secure, monitored online sessions with verified instructors and privacy protection.",
    },
    {
      icon: <Award className="h-6 w-6" />,
      title: "Expert Instructors",
      description: "Learn from certified professionals with specialized training in special needs education.",
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Interactive Technology",
      description: "Engaging digital tools, visual aids, and interactive activities to enhance learning.",
    },
  ]

  // Mock data for live sessions
  const liveSessions = [
    {
      id: 1,
      title: "Sign Language Practice Group",
      instructor: "Sarah Mwale",
      instructorAvatar: "/placeholder.svg?height=40&width=40",
      status: "live",
      participants: 12,
      maxParticipants: 15,
      startTime: "2:00 PM",
      duration: "60 min",
      category: "Sign Language",
      description: "Interactive practice session for basic sign language skills",
    },
    {
      id: 2,
      title: "Speech Therapy Session",
      instructor: "Dr. James Phiri",
      instructorAvatar: "/placeholder.svg?height=40&width=40",
      status: "starting-soon",
      participants: 5,
      maxParticipants: 8,
      startTime: "3:30 PM",
      duration: "45 min",
      category: "Speech Therapy",
      description: "One-on-one and small group speech therapy exercises",
    },
    {
      id: 3,
      title: "Autism Support Circle",
      instructor: "Grace Banda",
      instructorAvatar: "/placeholder.svg?height=40&width=40",
      status: "upcoming",
      participants: 8,
      maxParticipants: 12,
      startTime: "4:00 PM",
      duration: "90 min",
      category: "Autism Support",
      description: "Support group for families and caregivers",
    },
    {
      id: 4,
      title: "Family Learning Workshop",
      instructor: "Peter Tembo",
      instructorAvatar: "/placeholder.svg?height=40&width=40",
      status: "upcoming",
      participants: 15,
      maxParticipants: 20,
      startTime: "5:00 PM",
      duration: "75 min",
      category: "Family Support",
      description: "Interactive workshop for family communication strategies",
    },
  ]

  // Mock data for schedule
  const scheduleData = [
    {
      day: "Today",
      date: "March 15, 2024",
      sessions: [
        {
          id: 1,
          time: "9:00 AM",
          title: "Morning Sign Language",
          instructor: "Sarah Mwale",
          duration: "60 min",
          participants: "8/12",
          status: "completed",
        },
        {
          id: 2,
          time: "2:00 PM",
          title: "Sign Language Practice",
          instructor: "Sarah Mwale",
          duration: "60 min",
          participants: "12/15",
          status: "live",
        },
        {
          id: 3,
          time: "3:30 PM",
          title: "Speech Therapy",
          instructor: "Dr. James Phiri",
          duration: "45 min",
          participants: "5/8",
          status: "starting-soon",
        },
        {
          id: 4,
          time: "4:00 PM",
          title: "Autism Support Circle",
          instructor: "Grace Banda",
          duration: "90 min",
          participants: "8/12",
          status: "upcoming",
        },
      ],
    },
    {
      day: "Tomorrow",
      date: "March 16, 2024",
      sessions: [
        {
          id: 5,
          time: "10:00 AM",
          title: "Advanced Sign Language",
          instructor: "Sarah Mwale",
          duration: "75 min",
          participants: "6/10",
          status: "upcoming",
        },
        {
          id: 6,
          time: "2:30 PM",
          title: "Speech Development",
          instructor: "Dr. James Phiri",
          duration: "60 min",
          participants: "4/8",
          status: "upcoming",
        },
        {
          id: 7,
          time: "4:00 PM",
          title: "Family Workshop",
          instructor: "Peter Tembo",
          duration: "90 min",
          participants: "12/20",
          status: "upcoming",
        },
      ],
    },
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case "live":
        return "bg-red-500 text-white"
      case "starting-soon":
        return "bg-yellow-500 text-white"
      case "upcoming":
        return "bg-blue-500 text-white"
      case "completed":
        return "bg-gray-500 text-white"
      default:
        return "bg-gray-500 text-white"
    }
  }

  const getStatusText = (status: string) => {
    switch (status) {
      case "live":
        return "Live Now"
      case "starting-soon":
        return "Starting Soon"
      case "upcoming":
        return "Upcoming"
      case "completed":
        return "Completed"
      default:
        return "Unknown"
    }
  }

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "Sign Language":
        return <Headphones className="h-4 w-4" />
      case "Speech Therapy":
        return <Mic className="h-4 w-4" />
      case "Autism Support":
        return <Heart className="h-4 w-4" />
      case "Family Support":
        return <Users className="h-4 w-4" />
      default:
        return <BookOpen className="h-4 w-4" />
    }
  }

  const handleJoinSession = (sessionId: string) => {
    setJoinedSession(sessionId)
  }

  const handleLeaveSession = () => {
    setJoinedSession(null)
  }

  const goToPreviousImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + heroImages.length) % heroImages.length)
  }

  const goToNextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % heroImages.length)
  }

  const LiveSessionInterface = ({ session }: { session: any }) => (
    <div className="fixed inset-0 bg-black z-50 flex flex-col">
      {/* Header */}
      <div className="bg-gray-900 text-white p-4 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
            <span className="text-sm font-medium">Live Session</span>
          </div>
          <h2 className="text-lg font-semibold">{session.title}</h2>
        </div>
        <div className="flex items-center space-x-2">
          <Badge variant="outline" className="text-white border-white">
            {session.participants}/{session.maxParticipants} participants
          </Badge>
          <Button variant="destructive" onClick={handleLeaveSession}>
            <PhoneOff className="h-4 w-4 mr-2" />
            Leave
          </Button>
        </div>
      </div>

      {/* Main Video Area */}
      <div className="flex-1 bg-gray-800 relative">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <Video className="h-16 w-16 mx-auto mb-4 opacity-50" />
            <p className="text-lg">Video session with {session.instructor}</p>
            <p className="text-sm opacity-75">Session in progress...</p>
          </div>
        </div>

        {/* Participant Thumbnails */}
        <div className="absolute top-4 right-4 space-y-2">
          {Array.from({ length: Math.min(session.participants, 4) }).map((_, index) => (
            <div
              key={index}
              className="w-24 h-18 bg-gray-700 rounded border-2 border-gray-600 flex items-center justify-center"
            >
              <Avatar className="w-8 h-8">
                <AvatarFallback>U{index + 1}</AvatarFallback>
              </Avatar>
            </div>
          ))}
          {session.participants > 4 && (
            <div className="w-24 h-18 bg-gray-700 rounded border-2 border-gray-600 flex items-center justify-center text-white text-xs">
              +{session.participants - 4} more
            </div>
          )}
        </div>
      </div>

      {/* Controls */}
      <div className="bg-gray-900 p-4 flex items-center justify-center space-x-4">
        <Button
          variant={micEnabled ? "default" : "destructive"}
          size="lg"
          onClick={() => setMicEnabled(!micEnabled)}
          className="rounded-full w-12 h-12"
        >
          {micEnabled ? <Mic className="h-5 w-5" /> : <MicOff className="h-5 w-5" />}
        </Button>
        <Button
          variant={videoEnabled ? "default" : "destructive"}
          size="lg"
          onClick={() => setVideoEnabled(!videoEnabled)}
          className="rounded-full w-12 h-12"
        >
          {videoEnabled ? <Video className="h-5 w-5" /> : <VideoOff className="h-5 w-5" />}
        </Button>
        <Button
          variant={volumeEnabled ? "default" : "destructive"}
          size="lg"
          onClick={() => setVolumeEnabled(!volumeEnabled)}
          className="rounded-full w-12 h-12"
        >
          {volumeEnabled ? <Volume2 className="h-5 w-5" /> : <VolumeX className="h-5 w-5" />}
        </Button>
        <Button variant="outline" size="lg" className="rounded-full w-12 h-12 bg-transparent">
          <MessageCircle className="h-5 w-5" />
        </Button>
        <Button variant="outline" size="lg" className="rounded-full w-12 h-12 bg-transparent">
          <Monitor className="h-5 w-5" />
        </Button>
        <Button variant="outline" size="lg" className="rounded-full w-12 h-12 bg-transparent">
          <Settings className="h-5 w-5" />
        </Button>
      </div>
    </div>
  )

  if (joinedSession) {
    const session = liveSessions.find((s) => s.id.toString() === joinedSession)
    if (session) {
      return <LiveSessionInterface session={session} />
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section with Sliding Images */}
      <section className="relative h-[70vh] overflow-hidden bg-gradient-to-r from-blue-900 via-purple-900 to-indigo-900">
        {/* Background Images */}
        <div className="absolute inset-0">
          {heroImages.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentImageIndex ? "opacity-30" : "opacity-0"
              }`}
            >
              <Image
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                fill
                className="object-cover"
                priority={index === 0}
              />
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={goToPreviousImage}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 p-3 rounded-full bg-white bg-opacity-20 hover:bg-opacity-30 transition-all duration-200 text-white"
          aria-label="Previous image"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>
        <button
          onClick={goToNextImage}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 p-3 rounded-full bg-white bg-opacity-20 hover:bg-opacity-30 transition-all duration-200 text-white"
          aria-label="Next image"
        >
          <ChevronRight className="h-6 w-6" />
        </button>

        {/* Dots Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex space-x-2">
          {heroImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentImageIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-200 ${
                index === currentImageIndex ? "bg-white" : "bg-white bg-opacity-50"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Hero Content */}
        <div className="relative z-10 flex items-center justify-center h-full">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="animate-in fade-in-0 duration-1000">
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
                Personalized Online Education
              </h1>
              <h2 className="text-2xl md:text-3xl font-semibold text-blue-200 mb-4">Online Learning Programs</h2>
              <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto leading-relaxed">
                Connect with our expert instructors for personalized one-on-one sessions, small group classes, and
                family learning experiences tailored to your child's unique needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-primary-orange hover:bg-primary-orange-dark transform hover:scale-105 transition-all duration-200 text-lg px-8 py-4"
                >
                  Start Learning Today
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-gray-900 transform hover:scale-105 transition-all duration-200 text-lg px-8 py-4"
                >
                  View Programs
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Tabs - Moved right after hero */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-8">
          <TabsList className="grid w-full grid-cols-3 max-w-md mx-auto">
            <TabsTrigger value="courses" className="flex items-center space-x-2">
              <BookOpen className="h-4 w-4" />
              <span>Subjects</span>
            </TabsTrigger>
            <TabsTrigger value="live-sessions" className="flex items-center space-x-2">
              <Video className="h-4 w-4" />
              <span>Live Sessions</span>
            </TabsTrigger>
            <TabsTrigger value="schedule" className="flex items-center space-x-2">
              <Calendar className="h-4 w-4" />
              <span>Schedule</span>
            </TabsTrigger>
          </TabsList>

          {/* Courses Tab */}
          <TabsContent value="courses" className="space-y-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Subjects & Specializations</h2>
              <p className="text-gray-600">
                Explore our comprehensive range of specialized programs designed for different learning needs.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {subjects.map((subject) => (
                <Card key={subject.id} className="hover:shadow-lg transition-shadow">
                  <div className="aspect-video bg-gray-200 rounded-t-lg overflow-hidden">
                    <img
                      src={subject.image || "/placeholder.svg"}
                      alt={subject.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardHeader className="pb-3">
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant="outline" className="text-xs">
                        {subject.category}
                      </Badge>
                      {/* <div className="flex items-center space-x-1">
                        <span className="text-sm text-yellow-500">★</span>
                        <span className="text-sm text-gray-600">{subject.rating}</span>
                      </div> */}
                    </div>
                    <CardTitle className="text-lg">{subject.title}</CardTitle>
                    <p className="text-sm text-gray-600">{subject.description}</p>
                  </CardHeader>
                  <CardContent className="pt-0">
                    {/* <div className="space-y-3">
                      <div className="flex items-center justify-between text-sm text-gray-600">
                        <span>Instructor: {subject.instructor}</span>
                        <Badge variant="secondary">{subject.level}</Badge>
                      </div>
                      <div className="flex items-center justify-between text-sm text-gray-600">
                        <div className="flex items-center space-x-1">
                          <Clock className="h-4 w-4" />
                          <span>{subject.duration}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Users className="h-4 w-4" />
                          <span>{subject.students} students</span>
                        </div>
                      </div>
                    </div> */}
                    <Button className="w-full bg-primary-orange hover:bg-primary-orange-dark">Enroll Now</Button>

                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Live Sessions Tab */}
          <TabsContent value="live-sessions" className="space-y-8">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Live Interactive Sessions</h2>
              <p className="text-gray-600">Join real-time sessions with expert instructors and fellow learners</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {liveSessions.map((session) => (
                <Card key={session.id} className="hover:shadow-lg transition-shadow">
                  <CardHeader className="pb-3">
                    <div className="flex items-center justify-between mb-3">
                      <Badge className={getStatusColor(session.status)}>{getStatusText(session.status)}</Badge>
                      <div className="flex items-center space-x-1 text-sm text-gray-600">
                        {getCategoryIcon(session.category)}
                        <span>{session.category}</span>
                      </div>
                    </div>
                    <CardTitle className="text-lg">{session.title}</CardTitle>
                    <p className="text-sm text-gray-600">{session.description}</p>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <Avatar className="w-10 h-10">
                        <AvatarImage src={session.instructorAvatar || "/placeholder.svg"} />
                        <AvatarFallback>
                          {session.instructor
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-medium text-sm">{session.instructor}</p>
                        <p className="text-xs text-gray-600">Instructor</p>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div className="flex items-center space-x-2">
                        <Clock className="h-4 w-4 text-gray-400" />
                        <span>{session.startTime}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Users className="h-4 w-4 text-gray-400" />
                        <span>
                          {session.participants}/{session.maxParticipants}
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">{session.duration}</span>
                      <div className="flex space-x-2">
                        {session.status === "live" && (
                          <Button
                            onClick={() => handleJoinSession(session.id.toString())}
                            className="bg-green-600 hover:bg-green-700"
                          >
                            <Video className="h-4 w-4 mr-2" />
                            Join Now
                          </Button>
                        )}
                        {session.status === "starting-soon" && (
                          <Button
                            onClick={() => handleJoinSession(session.id.toString())}
                            className="bg-yellow-600 hover:bg-yellow-700"
                          >
                            <Clock className="h-4 w-4 mr-2" />
                            Join Soon
                          </Button>
                        )}
                        {session.status === "upcoming" && (
                          <Button variant="outline">
                            <Bell className="h-4 w-4 mr-2" />
                            Remind Me
                          </Button>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Schedule Tab */}
          <TabsContent value="schedule" className="space-y-8">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Session Schedule</h2>
              <p className="text-gray-600">View upcoming sessions and manage your learning calendar</p>
            </div>

            <div className="space-y-8">
              {scheduleData.map((day, dayIndex) => (
                <div key={dayIndex}>
                  <div className="flex items-center space-x-4 mb-6">
                    <h3 className="text-xl font-semibold text-gray-900">{day.day}</h3>
                    <span className="text-gray-600">{day.date}</span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {day.sessions.map((session) => (
                      <Card key={session.id} className="hover:shadow-md transition-shadow">
                        <CardContent className="p-4">
                          <div className="flex items-center justify-between mb-3">
                            <span className="font-medium text-lg">{session.time}</span>
                            <Badge className={getStatusColor(session.status)} variant="outline">
                              {getStatusText(session.status)}
                            </Badge>
                          </div>

                          <h4 className="font-semibold text-gray-900 mb-1">{session.title}</h4>
                          <p className="text-sm text-gray-600 mb-3">with {session.instructor}</p>

                          <div className="flex items-center justify-between text-sm text-gray-600 mb-3">
                            <div className="flex items-center space-x-1">
                              <Clock className="h-4 w-4" />
                              <span>{session.duration}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <UserCheck className="h-4 w-4" />
                              <span>{session.participants}</span>
                            </div>
                          </div>

                          <div className="flex space-x-2">
                            {session.status === "live" && (
                              <Button size="sm" className="flex-1 bg-green-600 hover:bg-green-700">
                                <Video className="h-3 w-3 mr-1" />
                                Join
                              </Button>
                            )}
                            {session.status === "starting-soon" && (
                              <Button size="sm" className="flex-1 bg-yellow-600 hover:bg-yellow-700">
                                <Clock className="h-3 w-3 mr-1" />
                                Ready
                              </Button>
                            )}
                            {session.status === "upcoming" && (
                              <>
                                <Button size="sm" variant="outline" className="flex-1 bg-transparent">
                                  Register
                                </Button>
                                <Button size="sm" variant="outline">
                                  <Bell className="h-3 w-3" />
                                </Button>
                              </>
                            )}
                            {session.status === "completed" && (
                              <Button size="sm" variant="outline" className="flex-1 bg-transparent" disabled>
                                Completed
                              </Button>
                            )}
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Weekly Calendar Overview */}
            <Card className="mt-8">
              <CardHeader>
                <CardTitle>Weekly Overview</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-7 gap-2 text-center">
                  {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((day) => (
                    <div key={day} className="font-medium text-gray-600 p-2">
                      {day}
                    </div>
                  ))}
                  {Array.from({ length: 7 }).map((_, index) => (
                    <div key={index} className="border rounded p-2 h-24 text-sm">
                      <div className="font-medium mb-1">{index + 10}</div>
                      {index < 5 && (
                        <div className="space-y-1">
                          <div className="bg-blue-100 text-blue-800 px-1 py-0.5 rounded text-xs">Sign Lang</div>
                          {index % 2 === 0 && (
                            <div className="bg-green-100 text-green-800 px-1 py-0.5 rounded text-xs">Speech</div>
                          )}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>

      {/* Choose Your Learning Style Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Choose Your Learning Style</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Select the learning format that best suits your child's needs and your family's preferences.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {learningStyles.map((style) => (
              <Card
                key={style.id}
                className={`${style.color} hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2`}
              >
                <CardHeader className="text-center pb-4">
                  <div className={`${style.iconColor} mb-4 flex justify-center`}>{style.icon}</div>
                  <CardTitle className="text-2xl font-bold text-gray-900">{style.title}</CardTitle>
                  <p className="text-gray-600 mt-2">{style.description}</p>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    {style.features.map((feature, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-600" />
                        <span className="text-sm text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <div className="border-t pt-4 space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="font-semibold text-gray-900">{style.price}</span>
                      <span className="text-sm text-gray-600">{style.duration}</span>
                    </div>
                    <Button className="w-full bg-primary-orange hover:bg-primary-orange-dark">Choose This Style</Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Start Your Learning Journey Form */}
      <section className="py-16 bg-gradient-to-r from-blue-50 to-purple-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Start Your Learning Journey</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Tell us about your needs and we'll match you with the perfect instructor and learning program.
            </p>
          </div>

          <Card className="shadow-xl">
            <CardContent className="p-8">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="parentName">Parent/Guardian Name *</Label>
                    <Input id="parentName" placeholder="Enter your full name" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address *</Label>
                    <Input id="email" type="email" placeholder="your.email@example.com" required />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input id="phone" placeholder="+265 1 234 567" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="childAge">Child's Age</Label>
                    <Input id="childAge" placeholder="e.g., 8 years old" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="preferredLearningStyle">Preferred Learning Style *</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Choose your preferred style" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="visual">Visual Learning (Images, diagrams, charts)</SelectItem>
                        <SelectItem value="auditory">Auditory Learning (Listening, discussions)</SelectItem>
                        <SelectItem value="kinesthetic">Kinesthetic Learning (Hands-on, movement)</SelectItem>
                        <SelectItem value="reading">Reading/Writing Learning (Text-based)</SelectItem>
                        <SelectItem value="mixed">Mixed Learning Style</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="learningFormat">Learning Format *</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Choose learning format" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="one-on-one">One-on-One Sessions</SelectItem>
                        <SelectItem value="small-group">Small Group Classes</SelectItem>
                        <SelectItem value="family-learning">Family Learning Sessions</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject">Subject of Interest *</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Choose subject" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="sign-language">Sign Language</SelectItem>
                      <SelectItem value="speech-therapy">Speech Therapy</SelectItem>
                      <SelectItem value="autism-support">Autism Support</SelectItem>
                      <SelectItem value="learning-disabilities">Learning Disabilities</SelectItem>
                      <SelectItem value="life-skills">Life Skills</SelectItem>
                      <SelectItem value="social-skills">Social Skills</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="goals">Learning Goals & Specific Needs</Label>
                  <Textarea
                    id="goals"
                    placeholder="Please describe your child's specific needs, current challenges, and what you hope to achieve through our online learning program..."
                    rows={4}
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="availability">Preferred Schedule</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Choose time preference" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="morning">Morning (8AM - 12PM)</SelectItem>
                        <SelectItem value="afternoon">Afternoon (12PM - 5PM)</SelectItem>
                        <SelectItem value="evening">Evening (5PM - 8PM)</SelectItem>
                        <SelectItem value="weekend">Weekends</SelectItem>
                        <SelectItem value="flexible">Flexible</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="startDate">Preferred Start Date</Label>
                    <Input id="startDate" type="date" />
                  </div>
                </div>

                <div className="flex items-center space-x-2">
                  <input type="checkbox" id="terms" className="rounded" />
                  <Label htmlFor="terms" className="text-sm">
                    I agree to the Terms of Service and Privacy Policy, and consent to being contacted about our online
                    learning programs.
                  </Label>
                </div>

                <div className="text-center">
                  <Button
                    type="submit"
                    size="lg"
                    className="bg-primary-orange hover:bg-primary-orange-dark px-12 py-3 text-lg"
                  >
                    Start My Learning Journey
                  </Button>
                  <p className="text-sm text-gray-600 mt-2">
                    We'll contact you within 24 hours to schedule your free consultation.
                  </p>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Why Choose Our Online Learning Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Our Online Learning?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience the benefits of personalized, accessible, and effective online education designed specifically
              for special needs learners.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow p-6">
                <div className="text-primary-orange mb-4 flex justify-center">{benefit.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </Card>
            ))}
          </div>

          {/* Statistics */}
          <div className="mt-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold mb-2">500+</div>
                <div className="text-blue-200">Students Served</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">25+</div>
                <div className="text-blue-200">Expert Instructors</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">95%</div>
                <div className="text-blue-200">Satisfaction Rate</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">24/7</div>
                <div className="text-blue-200">Support Available</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
