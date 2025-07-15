import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import Image from "next/image"
import { Heart, Users, Target, CheckCircle, Star } from "lucide-react"
import HeroCarousel from "../components/hero-carousel"

export default function AboutPage() {
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
      name: "Miss Mirriam Duwe",
      role: "Founder & Director",
      qualification: "Master's in Special Needs Education",
      image: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=300&h=300&fit=crop&crop=faces",
      imageAlt: "Professional headshot of Miss Mirriam Duwe, a warm and approachable African educator",
      bio: "Passionate educator with over 10 years of experience in special needs education and inclusive learning.",
    },
    {
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
    },
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
                    Tonse Tingathe Learning Center was founded by Miss Mirriam Duwe, whose personal journey with special
                    needs education began when she witnessed the challenges faced by children with disabilities in
                    accessing quality education in Malawi.
                  </p>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    Driven by a deep commitment to inclusive education, Miss Duwe established the center in 2018 with
                    the vision of creating a space where every child, regardless of their abilities, could learn, grow,
                    and thrive.
                  </p>
                  <p className="text-gray-600 leading-relaxed">
                    Today, we stand as a beacon of hope for families across Malawi, providing specialized education,
                    therapy, and support services that have transformed the lives of hundreds of children and their
                    families.
                  </p>
                </div>
                <div className="space-y-4">
                  <Image
                    src="https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=400&h=250&fit=crop&crop=faces"
                    alt="Miss Mirriam Duwe working with African children with special needs in the early days of the center"
                    width={400}
                    height={250}
                    className="rounded-lg shadow-md"
                  />
                  <Image
                    src="https://images.unsplash.com/photo-1544717297-fa95b6ee9643?w=400&h=200&fit=crop&crop=faces"
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

          {/* Meet the Team */}
          <section className="mb-16 animate-in fade-in-0 duration-1000 delay-600">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
              <p className="text-lg text-gray-600">Dedicated professionals committed to your child's success</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {teamMembers.map((member, index) => (
                <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <CardContent className="p-6 text-center">
                    <Image
                      src={member.image || "/placeholder.svg"}
                      alt={member.imageAlt || member.name}
                      width={200}
                      height={200}
                      className="rounded-full mx-auto mb-4 object-cover"
                    />
                    <h3 className="text-xl font-semibold text-gray-900 mb-1">{member.name}</h3>
                    <p className="text-primary-orange font-medium mb-2">{member.role}</p>
                    <p className="text-sm text-gray-500 mb-3">{member.qualification}</p>
                    <p className="text-gray-600 text-sm">{member.bio}</p>
                  </CardContent>
                </Card>
              ))}
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
