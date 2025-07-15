"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import {
  Download,
  Play,
  Video,
  BookOpen,
  GraduationCap,
  Heart,
  Eye,
  Ear,
  Brain,
  MessageSquare,
  Star,
} from "lucide-react"
import HeroCarousel from "../components/hero-carousel"

export default function ResourcesPage() {
  const [selectedCategory, setSelectedCategory] = useState("all")

  const heroImages = [
    {
      src: "https://images.unsplash.com/photo-1544717297-fa95b6ee9643?w=1200&h=600&fit=crop&crop=faces",
      alt: "African parents and children accessing digital learning resources on tablets and computers",
    },
    {
      src: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=1200&h=600&fit=crop&crop=faces",
      alt: "African teacher demonstrating sign language techniques through video tutorials",
    },
    {
      src: "https://images.unsplash.com/photo-1497486751825-1233686d5d80?w=1200&h=600&fit=crop&crop=faces",
      alt: "African children with special needs using educational apps and interactive learning tools",
    },
    {
      src: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=1200&h=600&fit=crop&crop=faces",
      alt: "African family learning together with downloadable worksheets and activity guides",
    },
  ]

  const downloadableResources = [
    {
      id: 1,
      title: "Autism Support Guide for Parents",
      description: "Comprehensive guide with strategies for supporting children with autism at home",
      category: "autism",
      type: "PDF Guide",
      size: "2.5 MB",
      downloads: 1250,
      image: "https://images.unsplash.com/photo-1497486751825-1233686d5d80?w=300&h=200&fit=crop&crop=faces",
      imageAlt: "Cover of autism support guide showing African parent and child activities",
    },
    {
      id: 2,
      title: "Basic Sign Language Flashcards",
      description: "Printable flashcards with common MSL signs for everyday communication",
      category: "sign-language",
      type: "PDF Printable",
      size: "1.8 MB",
      downloads: 890,
      image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=300&h=200&fit=crop&crop=faces",
      imageAlt: "Sample flashcards showing African sign language gestures with illustrations",
    },
    {
      id: 3,
      title: "Speech Development Activities",
      description: "Fun activities and exercises to promote speech development in children",
      category: "speech",
      type: "Activity Pack",
      size: "3.2 MB",
      downloads: 675,
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=300&h=200&fit=crop&crop=faces",
      imageAlt: "Colorful activity sheets with speech development exercises for African children",
    },
    {
      id: 4,
      title: "Inclusive Classroom Setup Guide",
      description: "Teacher's guide to creating sensory-friendly and inclusive learning environments",
      category: "teachers",
      type: "PDF Guide",
      size: "4.1 MB",
      downloads: 432,
      image: "https://images.unsplash.com/photo-1544717297-fa95b6ee9643?w=300&h=200&fit=crop&crop=faces",
      imageAlt: "African classroom layout examples showing inclusive design principles",
    },
    {
      id: 5,
      title: "Down Syndrome Learning Strategies",
      description: "Evidence-based teaching strategies specifically for children with Down syndrome",
      category: "down-syndrome",
      type: "Research Guide",
      size: "2.9 MB",
      downloads: 567,
      image: "https://images.unsplash.com/photo-1497486751825-1233686d5d80?w=300&h=200&fit=crop&crop=faces",
      imageAlt: "Educational strategies document with African child learning examples",
    },
    {
      id: 6,
      title: "Sensory Processing Worksheets",
      description: "Practical worksheets for understanding and supporting sensory processing needs",
      category: "sensory",
      type: "Worksheet Pack",
      size: "1.5 MB",
      downloads: 723,
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=300&h=200&fit=crop&crop=faces",
      imageAlt: "Sensory processing assessment and activity worksheets with African children",
    },
  ]

  const videoResources = [
    {
      id: 1,
      title: "Introduction to Malawi Sign Language",
      description: "Learn the basics of MSL with our comprehensive beginner's course",
      category: "sign-language",
      duration: "45 min",
      views: 12500,
      thumbnail: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=350&h=200&fit=crop&crop=faces",
      thumbnailAlt: "African instructor demonstrating basic sign language gestures",
      level: "Beginner",
    },
    {
      id: 2,
      title: "Supporting Children with Autism",
      description: "Expert tips and strategies for parents and caregivers",
      category: "autism",
      duration: "32 min",
      views: 8900,
      thumbnail: "https://images.unsplash.com/photo-1497486751825-1233686d5d80?w=350&h=200&fit=crop&crop=faces",
      thumbnailAlt: "African parent and child with autism engaged in structured play activity",
      level: "All Levels",
    },
    {
      id: 3,
      title: "Speech Therapy Techniques at Home",
      description: "Simple exercises parents can do to support speech development",
      category: "speech",
      duration: "28 min",
      views: 6750,
      thumbnail: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=350&h=200&fit=crop&crop=faces",
      thumbnailAlt: "African speech therapist demonstrating mouth exercises with child",
      level: "Beginner",
    },
    {
      id: 4,
      title: "Creating Inclusive Learning Environments",
      description: "Professional development for teachers on inclusive education practices",
      category: "teachers",
      duration: "55 min",
      views: 4320,
      thumbnail: "https://images.unsplash.com/photo-1544717297-fa95b6ee9643?w=350&h=200&fit=crop&crop=faces",
      thumbnailAlt: "African teacher setting up an inclusive classroom with adaptive materials",
      level: "Professional",
    },
    {
      id: 5,
      title: "Understanding Down Syndrome",
      description: "Comprehensive overview of Down syndrome and educational approaches",
      category: "down-syndrome",
      duration: "38 min",
      views: 5670,
      thumbnail: "https://images.unsplash.com/photo-1497486751825-1233686d5d80?w=350&h=200&fit=crop&crop=faces",
      thumbnailAlt: "Educational presentation about Down syndrome with African family examples",
      level: "All Levels",
    },
    {
      id: 6,
      title: "Sensory Processing Explained",
      description: "Understanding sensory processing differences and support strategies",
      category: "sensory",
      duration: "42 min",
      views: 7890,
      thumbnail: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=350&h=200&fit=crop&crop=faces",
      thumbnailAlt: "Demonstration of sensory processing activities and tools with African children",
      level: "Intermediate",
    },
  ]

  const categories = [
    { id: "all", label: "All Resources", icon: <BookOpen className="h-4 w-4 text-primary-orange" /> },
    { id: "autism", label: "Autism Support", icon: <Brain className="h-4 w-4 text-primary-orange" /> },
    { id: "sign-language", label: "Sign Language", icon: <MessageSquare className="h-4 w-4 text-primary-orange" /> },
    { id: "speech", label: "Speech Therapy", icon: <Ear className="h-4 w-4 text-primary-orange" /> },
    { id: "down-syndrome", label: "Down Syndrome", icon: <Heart className="h-4 w-4 text-primary-orange" /> },
    { id: "sensory", label: "Sensory Processing", icon: <Eye className="h-4 w-4 text-primary-orange" /> },
    { id: "teachers", label: "For Teachers", icon: <GraduationCap className="h-4 w-4 text-primary-orange" /> },
  ]

  const filteredDownloads =
    selectedCategory === "all"
      ? downloadableResources
      : downloadableResources.filter((resource) => resource.category === selectedCategory)

  const filteredVideos =
    selectedCategory === "all"
      ? videoResources
      : videoResources.filter((resource) => resource.category === selectedCategory)

  return (
    <div className="min-h-screen">
      {/* Hero Section with Background Carousel */}
      <HeroCarousel
        images={heroImages}
        subtitle="Free Learning Materials"
        title="Learning Resources"
        description="Access our comprehensive collection of guides, videos, and materials to support inclusive education and special needs learning."
        primaryButton={{
          text: "Browse Downloads",
          href: "#downloads",
        }}
        secondaryButton={{
          text: "Watch Videos",
          href: "#videos",
        }}
      />

      <div className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Filter */}
          <div className="mb-8 animate-in fade-in-0 duration-1000">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Browse by Category</h2>
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

          {/* Resource Tabs */}
          <Tabs defaultValue="downloads" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-8">
              <TabsTrigger value="downloads" className="flex items-center space-x-2">
                <Download className="h-4 w-4" />
                <span>Downloadable Resources</span>
              </TabsTrigger>
              <TabsTrigger value="videos" className="flex items-center space-x-2">
                <Video className="h-4 w-4" />
                <span>Video Library</span>
              </TabsTrigger>
            </TabsList>

            {/* Downloadable Resources */}
            <TabsContent value="downloads" id="downloads">
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Downloadable Resources</h3>
                <p className="text-gray-600">
                  Free guides, worksheets, and materials to support learning at home and in the classroom.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredDownloads.map((resource, index) => (
                  <Card
                    key={resource.id}
                    className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-in fade-in-0 duration-1000"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <CardContent className="p-0">
                      <Image
                        src={resource.image || "/placeholder.svg"}
                        alt={resource.imageAlt}
                        width={300}
                        height={200}
                        className="w-full h-48 object-cover rounded-t-lg"
                      />
                      <div className="p-6">
                        <div className="flex items-center justify-between mb-2">
                          <Badge variant="secondary">{resource.type}</Badge>
                          <span className="text-sm text-gray-500">{resource.size}</span>
                        </div>
                        <h4 className="text-lg font-semibold text-gray-900 mb-2">{resource.title}</h4>
                        <p className="text-gray-600 text-sm mb-4">{resource.description}</p>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-1 text-sm text-gray-500">
                            <Download className="h-4 w-4" />
                            <span>{resource.downloads.toLocaleString()} downloads</span>
                          </div>
                          <Button size="sm" className="bg-primary-orange hover:bg-primary-orange-dark">
                            <Download className="h-4 w-4 mr-2" />
                            Download
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            {/* Video Resources */}
            <TabsContent value="videos" id="videos">
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Video Library</h3>
                <p className="text-gray-600">
                  Educational videos, tutorials, and training sessions from our expert team.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredVideos.map((video, index) => (
                  <Card
                    key={video.id}
                    className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-in fade-in-0 duration-1000"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <CardContent className="p-0">
                      <div className="relative">
                        <Image
                          src={video.thumbnail || "/placeholder.svg"}
                          alt={video.thumbnailAlt}
                          width={350}
                          height={200}
                          className="w-full h-48 object-cover rounded-t-lg"
                        />
                        <div className="absolute inset-0 bg-black/20 flex items-center justify-center rounded-t-lg">
                          <Button size="lg" className="bg-white/90 text-gray-900 hover:bg-white">
                            <Play className="h-6 w-6" />
                          </Button>
                        </div>
                        <div className="absolute bottom-2 right-2 bg-black/70 text-white px-2 py-1 rounded text-sm">
                          {video.duration}
                        </div>
                      </div>
                      <div className="p-6">
                        <div className="flex items-center justify-between mb-2">
                          <Badge variant="outline">{video.level}</Badge>
                          <div className="flex items-center space-x-1 text-sm text-gray-500">
                            <Eye className="h-4 w-4" />
                            <span>{video.views.toLocaleString()}</span>
                          </div>
                        </div>
                        <h4 className="text-lg font-semibold text-gray-900 mb-2">{video.title}</h4>
                        <p className="text-gray-600 text-sm mb-4">{video.description}</p>
                        <Button className="w-full bg-primary-orange hover:bg-primary-orange-dark">
                          <Play className="h-4 w-4 mr-2" />
                          Watch Now
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>

          {/* Featured Resources Section */}
          <div className="mt-16 animate-in fade-in-0 duration-1000 delay-600">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Featured Resources</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="bg-orange-50 to-amber-50 bg-gradient-to-r">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Star className="h-5 w-5 text-yellow-500" />
                    <span>Most Popular Download</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center space-x-4">
                    <Image
                      src="https://images.unsplash.com/photo-1497486751825-1233686d5d80?w=80&h=80&fit=crop&crop=faces"
                      alt="Autism Support Guide thumbnail"
                      width={80}
                      height={80}
                      className="rounded-lg"
                    />
                    <div>
                      <h4 className="font-semibold text-gray-900">Autism Support Guide for Parents</h4>
                      <p className="text-sm text-gray-600 mb-2">1,250+ downloads this month</p>
                      <Button size="sm" className="bg-primary-orange hover:bg-primary-orange-dark">
                        <Download className="h-4 w-4 mr-2" />
                        Download Now
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-r from-green-50 to-emerald-50">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Play className="h-5 w-5 text-green-500" />
                    <span>Most Watched Video</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center space-x-4">
                    <Image
                      src="https://images.unsplash.com/photo-1509062522246-3755977927d7?w=80&h=80&fit=crop&crop=faces"
                      alt="Sign Language tutorial thumbnail"
                      width={80}
                      height={80}
                      className="rounded-lg"
                    />
                    <div>
                      <h4 className="font-semibold text-gray-900">Introduction to Malawi Sign Language</h4>
                      <p className="text-sm text-gray-600 mb-2">12,500+ views</p>
                      <Button size="sm" className="bg-green-600 hover:bg-green-700">
                        <Play className="h-4 w-4 mr-2" />
                        Watch Now
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Newsletter Signup */}
          <div className="mt-16 bg-primary-orange rounded-lg p-8 text-white text-center animate-in fade-in-0 duration-1000 delay-800">
            <h2 className="text-2xl font-bold mb-4">Stay Updated with New Resources</h2>
            <p className="text-orange-100 mb-6">
              Get notified when we add new guides, videos, and learning materials to our resource library.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-2 rounded-lg text-gray-900 flex-1"
              />
              <Button variant="secondary" className="transform hover:scale-105 transition-all duration-200">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
