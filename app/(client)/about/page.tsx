'use client'
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import Image from "next/image"
import { Heart, Users, Target, CheckCircle, Star, ChevronDown, ChevronUp } from "lucide-react"
import HeroCarousel from "../components/hero-carousel"

export default function AboutPage() {
  const [expanded, setExpanded] = useState(false)
  
  const heroImages = [
    {
      src: "https://images.unsplash.com/photo-1497486751825-1233686d5d80?w=1200&h=600&fit=crop&crop=faces",
      alt: "Tonse Tingathe Learning Center building exterior with African children and families arriving for classes",
    },
    {
      src: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=1200&h=600&fit=crop&crop=faces",
      alt: "Miss Mirriam Duwe working with African children with special needs in the early days of the center",
    },
    {
      src: "https://images.unsplash.com/photo-1544717297-fa95b6ee9643?w=1200&h=600&fit=crop&crop=faces",
      alt: "Team of dedicated African teachers and therapists working together in inclusive education",
    },
    {
      src: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=1200&h=600&fit=crop&crop=faces",
      alt: "Graduation ceremony with African families celebrating their children's achievements",
    },
  ]

  const teamMembers = [
    {
      name: "Mirriam Duwe",
      role: "Founder & Director",
      qualification: "Bachelor's Degree in Special Needs Education",
      image: "/images/owner.jpg",
      imageAlt: "Professional headshot of Miss Mirriam Duwe, a warm and approachable African educator",
      bioPreview: "My name is Miss Mirriam Duwe, and I am the founder of Tonse Tingathe Learning Center.",
      bioFull: "I hold a Bachelor's Degree in Special Needs Education with a minor in English, and I have dedicated my career to creating spaces where every learner—regardless of their ability or background—has the chance to thrive.\n\nBefore starting Tonse Tingathe, I worked extensively as a Teacher and Personal Learning Assistant (PLA) in various schools. Over the years, I supported learners with a wide range of educational needs—helping them access the curriculum, build confidence, and succeed in inclusive classroom settings.\n\nThis work was more than just a job—it was transformative. I saw firsthand how the right support can unlock a child's potential. I experienced the power of patience, individualized attention, and tailored learning strategies. And I learned that with the right environment, every child is capable of achieving more than the world expects."
    }
    /*{
      name: "Dr. Sarah Banda",
      role: "Speech Therapist",
      qualification: "PhD in Speech-Language Pathology",
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=300&h=300&fit=crop&crop=faces",
      imageAlt: "Dr. Sarah Banda in her therapy room with communication devices and learning materials",
      bio: "Specialized in communication disorders and assistive technology for children with special needs.",
    },
    {
      name: "Mr. James Phiri",
      role: "Sign Language Instructor",
      qualification: "Certified MSL Interpreter",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=faces",
      imageAlt: "Mr. James Phiri demonstrating sign language with visual learning aids in the background",
      bio: "Native MSL speaker with expertise in deaf education and visual learning methodologies.",
    },*/
  ]

  const values = [
    {
      icon: <Heart className="h-6 w-6 text-red-500" />,
      title: "Compassion",
      description: "We approach every child with empathy, understanding, and unconditional support.",
    },
    {
      icon: <Users className="h-6 w-6 text-blue-500" />,
      title: "Inclusivity",
      description: "We believe in creating environments where every child feels valued and included.",
    },
    {
      icon: <Target className="h-6 w-6 text-green-500" />,
      title: "Individualized Approach",
      description: "Every child is unique, and we tailor our methods to meet their specific needs.",
    },
    {
      icon: <Star className="h-6 w-6 text-yellow-500" />,
      title: "Excellence",
      description: "We strive for the highest standards in education and therapeutic services.",
    },
  ]

  const achievements = [
    "Malawi's first inclusive learning center with sign language integration",
    "Over 200 children successfully supported since inception",
    "Trained more than 50 teachers in inclusive education methods",
    "Established partnerships with 15 local schools",
    "Recognized by the Ministry of Education for innovative approaches",
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section with Background Carousel */}
      <HeroCarousel
        images={heroImages}
        subtitle="Our Story & Mission"
        title="About Tonse Tingathe"
        description="Dedicated to transforming lives through inclusive education and specialized support for children with special needs."
        primaryButton={{
          text: "Contact Us",
          href: "/contact",
        }}
        secondaryButton={{
          text: "Our Services",
          href: "/services",
        }}
      />

      <div className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Our Story */}
          <section className="mb-16 animate-in fade-in-0 duration-1000 delay-200">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    The story of Tonse Tingathe Learning Center began with a question that wouldn't let go of me:
                    "What happens to the learners who don't get assistance in classroom?"
                    As a teacher with a background in Special Needs Education, I spent years working with children and youth who were often misunderstood, unsupported, or completely left out of the system. I saw students with learning differences labeled as failures. Others dropped out of school—not because they weren't intelligent, but because they lacked resources, encouragement, or someone to believe in them.
                  </p>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    That reality broke my heart—and sparked a vision.
                    I started Tonse Tingathe (which means "Together We Can") because I believed something better was possible.
                    I wanted to create a place where every child, regardless of their abilities, could thrive. A center that would not only provide specialized education and therapy but also foster a community of support for families navigating the challenges of raising children with special needs.
                  </p>
                  <p className="text-gray-600 leading-relaxed">
                    This encouraged me to create a safe, inclusive space where every learner—regardless of ability, background, or circumstance—could access quality education, discover their strengths, and build a future.
                  </p>
                </div>
                <div className="space-y-4">
                  <Image
                    src="/images/mirrium.jpg"
                    alt="Timeline showing the growth of Tonse Tingathe from 2018 to present with milestone achievements"
                    width={400}
                    height={200}
                    className="rounded-lg shadow-md"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* Mission & Values */}
          <section className="mb-16 animate-in fade-in-0 duration-1000 delay-400">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Mission & Values</h2>
              <p className="text-lg text-gray-600">The principles that guide everything we do</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => (
                <Card
                  key={index}
                  className="text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                >
                  <CardContent className="p-6">
                    <div className="mb-4 flex justify-center">{value.icon}</div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{value.title}</h3>
                    <p className="text-gray-600 text-sm">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Meet the Founder */}
          <section className="mb-16 animate-in fade-in-0 duration-1000 delay-600">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Meet The Founder</h2>
              <p className="text-lg text-gray-600">The visionary behind Tonse Tingathe Learning Center</p>
            </div>
            <div className="flex justify-center">
              <div className="w-full max-w-md">
                <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <CardContent className="p-6 text-center">
                    <Image
                      src={teamMembers[0].image || "/placeholder.svg"}
                      alt={teamMembers[0].imageAlt || teamMembers[0].name}
                      width={200}
                      height={200}
                      className="rounded-full mx-auto mb-4 object-cover"
                    />
                    <h3 className="text-xl font-semibold text-gray-900 mb-1">{teamMembers[0].name}</h3>
                    <p className="text-primary-orange font-medium mb-2">{teamMembers[0].role}</p>
                    <p className="text-sm text-gray-500 mb-3">{teamMembers[0].qualification}</p>
                    
                    <div className="text-gray-600 text-sm text-left">
                      <p>{teamMembers[0].bioPreview}</p>
                      <div className={`transition-all duration-300 overflow-hidden ${expanded ? 'max-h-[500px]' : 'max-h-0'}`}>
                        <p className="pt-2 whitespace-pre-line">{teamMembers[0].bioFull}</p>
                      </div>
                      <button 
                        onClick={() => setExpanded(!expanded)}
                        className="text-primary-orange hover:underline mt-2 text-sm font-medium flex items-center gap-1"
                      >
                        {expanded ? (
                          <>
                            <ChevronUp className="w-4 h-4" /> See Less
                          </>
                        ) : (
                          <>
                            <ChevronDown className="w-4 h-4" /> See More
                          </>
                        )}
                      </button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          {/* Why Choose Us */}
          <section className="mb-16 animate-in fade-in-0 duration-1000 delay-800">
            <div className="bg-gray-50 rounded-lg p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Why Choose Tonse Tingathe?</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {achievements.map((achievement, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">{achievement}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <div className="text-center bg-primary-orange rounded-lg p-8 text-white animate-in fade-in-0 duration-1000 delay-1000">
            <h2 className="text-2xl font-bold mb-4">Want to Join Our Team or Volunteer?</h2>
            <p className="text-orange-100 mb-6">
              We're always looking for passionate individuals who share our commitment to inclusive education.
            </p>
            <Button
              asChild
              size="lg"
              variant="secondary"
              className="transform hover:scale-105 transition-all duration-200"
            >
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}