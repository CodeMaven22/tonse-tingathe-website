import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { ChevronDown, MessageSquare, Mic, Users, Heart, Brain, Eye, Ear, Star, CheckCircle } from "lucide-react"
import Image from "next/image"
import HeroCarousel from "../components/hero-carousel"

export default function ServicesPage() {
  const heroImages = [
    {
      src: "https://images.unsplash.com/photo-1544717297-fa95b6ee9643?w=1200&h=600&fit=crop&crop=faces",
      alt: "Diverse African children with special needs engaged in various learning activities in a modern, inclusive classroom",
    },
    {
      src: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=1200&h=600&fit=crop&crop=faces",
      alt: "African sign language instructor teaching MSL to deaf children with interactive displays",
    },
    {
      src: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=1200&h=600&fit=crop&crop=faces",
      alt: "African speech therapist working with children using communication devices and therapy tools",
    },
    {
      src: "https://images.unsplash.com/photo-1497486751825-1233686d5d80?w=1200&h=600&fit=crop&crop=faces",
      alt: "African teachers and parents in a workshop learning inclusive education strategies",
    },
  ]

  const services = [
    {
      title: "Online Teaching Sessions",
      icon: <Brain className="h-6 w-6 text-primary-orange" />,
      image: "https://images.unsplash.com/photo-1497486751825-1233686d5d80?w=300&h=200&fit=crop&crop=faces",
      imageAlt: "African children with autism and Down syndrome learning with adaptive technology and visual aids",
      description: "We offer one-on-one and small group classes with special needs ",
      details: [
        // "Programs for children with autism spectrum disorders",
        // "Support for children with Down syndrome and intellectual disabilities",
        // "Visual aids and sensory-friendly classroom environments",
        // "Adaptive learning technologies and tools",
        // "One-on-one and small group instruction",
      ],
    },
    {
      title: "Parents and Teachers Training",
      icon: <MessageSquare className="h-6 w-6 text-primary-orange" />,
      image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=300&h=200&fit=crop&crop=faces",
      imageAlt: "African sign language instructor teaching MSL to deaf children with interactive video displays",
      description: "We equip parents , caregivers and teachers with practical tools and support children with special needs needs at home or in their classrooms.",
      details: [
        "Behavior management",
        "Communication strategies",
        "Basic to advanced sign language curriculum",
        "Home learning techniques ",
        "Inclusive classroom methods",
      ],
    },

    {
      title: "Downloadable learning materials",
      icon: <Users className="h-6 w-6 text-primary-orange" />,
      image: "https://images.unsplash.com/photo-1544717297-fa95b6ee9643?w=300&h=200&fit=crop&crop=faces",
      imageAlt: "African workshop session with parents and teachers learning inclusive education strategies",
      description: "Comprehensive training and resources for families and educators",
      details: [
        "flash cards and visual schedulers ",
        "At-home learning resource development",
        "Communication boards",
        "Simple lesson plan ",
        "Simple  IEP(individualized Education Plan)",
        "Behavior chats"
      ],
    },

    {
      title: "Consultation and support ",
      icon: <Users className="h-6 w-6 text-primary-orange" />,
      image: "https://images.unsplash.com/photo-1544717297-fa95b6ee9643?w=300&h=200&fit=crop&crop=faces",
      imageAlt: "African workshop session with parents and teachers learning inclusive education strategies",
      description: "need help in understanding your child’s behavior or learning challenges? Book a private consultation with our special needs educator for guidance and personalized strategies",
      details: [
        // "flash cards and visual schedulers ",
        // "At-home learning resource development",
        // "Communication boards",
        // "Simple lesson plan ",
        // "Simple  IEP(individualized Education Plan)",
        // "Behavior chats"
      ],
    },
  ]

  // Expert instructors data moved from online learning
  const instructors = [
    {
      id: 1,
      name: "Dr. Sarah Mwale",
      title: "Sign Language Specialist",
      experience: "12 years",
      specialties: ["Sign Language", "Deaf Education", "Communication"],
      rating: 4.9,
      students: 245,
      image: "/placeholder.svg?height=150&width=150",
      bio: "Certified ASL interpreter with extensive experience in deaf education and communication therapy.",
      qualifications: ["PhD in Deaf Studies", "Certified ASL Interpreter", "Special Education License"],
    },
    {
      id: 2,
      name: "Dr. James Phiri",
      title: "Speech-Language Pathologist",
      experience: "15 years",
      specialties: ["Speech Therapy", "Language Development", "Articulation"],
      rating: 4.8,
      students: 189,
      image: "/placeholder.svg?height=150&width=150",
      bio: "Licensed speech-language pathologist specializing in pediatric communication disorders.",
      qualifications: ["Master's in Speech Pathology", "CCC-SLP Certification", "Pediatric Specialist"],
    },
    {
      id: 3,
      name: "Grace Banda",
      title: "Autism Support Specialist",
      experience: "10 years",
      specialties: ["Autism Spectrum", "Behavioral Support", "Social Skills"],
      rating: 4.9,
      students: 167,
      image: "/placeholder.svg?height=150&width=150",
      bio: "Board-certified behavior analyst with expertise in autism spectrum disorders and behavioral interventions.",
      qualifications: ["BCBA Certification", "Master's in Applied Behavior Analysis", "Autism Specialist"],
    },
    {
      id: 4,
      name: "Peter Tembo",
      title: "Family Learning Coordinator",
      experience: "8 years",
      specialties: ["Family Therapy", "Parent Training", "Home Strategies"],
      rating: 4.7,
      students: 203,
      image: "/placeholder.svg?height=150&width=150",
      bio: "Licensed family therapist focused on creating inclusive learning environments for families.",
      qualifications: ["Master's in Family Therapy", "Special Needs Family Specialist", "Parent Educator"],
    },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section with Background Carousel */}
      <HeroCarousel
        images={heroImages}
        subtitle="Comprehensive Support Programs"
        title="Our Services"
        description="We offer specialized programs designed to help children with diverse learning needs succeed in their educational journey and personal development."
        primaryButton={{
          text: "Get in Touch",
          href: "/contact",
        }}
        secondaryButton={{
          text: "Learn About Us",
          href: "/about",
        }}
      />

      <div className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Services Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {services.map((service, index) => (
              <Card
                key={index}
                className="hover:shadow-lg transition-all duration-300 animate-in fade-in-0 duration-1000"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="p-4">
                  <Image
                    src={service.image || "/placeholder.svg"}
                    alt={service.imageAlt}
                    width={300}
                    height={200}
                    className="w-full h-40 object-cover rounded-lg mb-4"
                  />
                </div>
                <Collapsible>
                  <CollapsibleTrigger className="w-full">
                    <CardHeader className="text-left">
                      <CardTitle className="flex items-center space-x-3 text-lg">
                        {service.icon}
                        <span>{service.title}</span>
                        <ChevronDown className="h-4 w-4 ml-auto transition-transform duration-200" />
                      </CardTitle>
                      <p className="text-gray-600 text-sm">{service.description}</p>
                    </CardHeader>
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    <CardContent className="pt-0">
                      <ul className="space-y-2">
                        {service.details.map((detail, detailIndex) => (
                          <li key={detailIndex} className="flex items-start space-x-2">
                            <div className="w-2 h-2 bg-primary-orange rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-gray-700">{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </CollapsibleContent>
                </Collapsible>
              </Card>
            ))}
          </div>

          {/* Meet Our Expert Instructors Section - Moved from online learning */}
          {/* <section className="py-16 bg-gray-50 rounded-lg mb-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-gray-900 mb-4">Meet Our Expert Instructors</h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Learn from certified professionals with specialized training and years of experience in special needs
                  education.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {instructors.map((instructor) => (
                  <Card
                    key={instructor.id}
                    className="hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
                  >
                    <CardHeader className="text-center pb-4">
                      <div className="relative mx-auto mb-4">
                        <Image
                          src={instructor.image || "/placeholder.svg"}
                          alt={instructor.name}
                          width={120}
                          height={120}
                          className="rounded-full object-cover"
                        />
                        <div className="absolute -bottom-2 -right-2 bg-green-500 text-white rounded-full p-1">
                          <CheckCircle className="h-4 w-4" />
                        </div>
                      </div>
                      <CardTitle className="text-xl font-bold text-gray-900">{instructor.name}</CardTitle>
                      <p className="text-primary-orange font-semibold">{instructor.title}</p>
                      <div className="flex items-center justify-center space-x-4 text-sm text-gray-600 mt-2">
                        <span>{instructor.experience}</span>
                        <div className="flex items-center space-x-1">
                          <Star className="h-4 w-4 text-yellow-500 fill-current" />
                          <span>{instructor.rating}</span>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p className="text-sm text-gray-600 text-center">{instructor.bio}</p>

                      <div className="space-y-2">
                        <h5 className="font-semibold text-gray-900 text-sm">Specialties:</h5>
                        <div className="flex flex-wrap gap-1">
                          {instructor.specialties.map((specialty, index) => (
                            <Badge key={index} variant="secondary" className="text-xs">
                              {specialty}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      <div className="space-y-2">
                        <h5 className="font-semibold text-gray-900 text-sm">Qualifications:</h5>
                        <ul className="space-y-1">
                          {instructor.qualifications.map((qual, index) => (
                            <li key={index} className="text-xs text-gray-600 flex items-center space-x-1">
                              <CheckCircle className="h-3 w-3 text-green-600" />
                              <span>{qual}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="text-center pt-2">
                        <p className="text-sm text-gray-600 mb-3">{instructor.students} students taught</p>
                        <Button className="w-full bg-primary-orange hover:bg-primary-orange-dark">Book Session</Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section> */}

          {/* Additional Services */}
          <div className="bg-gray-50 rounded-lg p-8 mb-16 animate-in fade-in-0 duration-1000 delay-800">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Additional Support Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <Eye className="h-8 w-8 text-primary-orange mx-auto mb-3" />
                <h3 className="font-semibold text-gray-900 mb-2">Therapy sessions</h3>
                <p className="text-gray-600 text-sm">speech and language therapy, occupation therapy and Behavior therapy</p>
              </div>
              <div className="text-center">
                <Ear className="h-8 w-8 text-primary-orange mx-auto mb-3" />
                <h3 className="font-semibold text-gray-900 mb-2">Parents and care givers coaching</h3>
                <p className="text-gray-600 text-sm"> Understanding the child’s diagnosis, how to support learning at home, Daily routine and lndependence training </p>
              </div>
              <div className="text-center">
                <Heart className="h-8 w-8 text-primary-orange mx-auto mb-3" />
                <h3 className="font-semibold text-gray-900 mb-2">Individualized learning support</h3>
                <p className="text-gray-600 text-sm">IEP consultation or review, help writing IEP or Understanding IEP,Home work support and Tailored learning plans based on the students needs</p>
              </div>
              <div className="text-center">
                <Heart className="h-8 w-8 text-primary-orange mx-auto mb-3" />
                <h3 className="font-semibold text-gray-900 mb-2">Work shops </h3>
                <p className="text-gray-600 text-sm">.for parents and caregivers ,learners and for educators .These will be done through: live via zoom ,Pre recorded sessions and In persons </p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center bg-primary-orange rounded-lg p-8 text-white animate-in fade-in-0 duration-1000 delay-1000">
            <h2 className="text-2xl font-bold mb-4">Interested in Enrolling Your Child?</h2>
            <p className="text-orange-100 mb-6">
              Contact us today to learn more about our programs and how we can support your child's learning journey.
            </p>
            <Button
              asChild
              size="lg"
              variant="secondary"
              className="transform hover:scale-105 transition-all duration-200"
            >
              <Link href="/contact">Get in Touch</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
