import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Users, BookOpen, MessageSquare, Star, Heart } from "lucide-react"
import Navigation from "./(client)/components/navigation"
import Footer from "./(client)/components/footer"
import LiveSessionButton from "./(client)/components/live-session-button"
import HeroCarousel from "./(client)/components/hero-carousel"

export default function HomePage() {
  const heroImages = [
    {
      src: "https://images.unsplash.com/photo-1544717297-fa95b6ee9643?w=1200&h=600&fit=crop&crop=faces",
      alt: "African children with diverse abilities learning together in an inclusive classroom setting",
    },
    {
      src: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=1200&h=600&fit=crop&crop=faces",
      alt: "African teacher using sign language to communicate with deaf students",
    },
    {
      src: "https://images.unsplash.com/photo-1497486751825-1233686d5d80?w=1200&h=600&fit=crop&crop=faces",
      alt: "African child with Down syndrome participating in group activities with peers",
    },
    {
      src: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=1200&h=600&fit=crop&crop=faces",
      alt: "African speech therapist working one-on-one with a child with speech delays",
    },
  ]

  return (
    <>
      <Navigation />
      <main className="min-h-screen">
        <div className="min-h-screen">
          {/* Hero Section with Background Carousel */}
          <HeroCarousel
            images={heroImages}
            title="Empowering Children with Special Needs Through Inclusive Education"
            description="Personalized learning for children with autism, Down syndrome, speech delays, and more"
            primaryButton={{
              text: "Explore Our Programs",
              href: "/services",
            }}
            secondaryButton={{
              text: "Contact Us",
              href: "/contact",
            }}
          />

          {/* Mission Statement */}
          <section className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="animate-in fade-in-0 duration-1000">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Our main do Mission</h2>
                  <p className="text-lg text-gray-600 leading-relaxed mb-6">
                    At Tonse Tingathe, we believe every child can learn in their own way. We provide tailored support
                    for children with special needs across Malawi, creating an inclusive environment where every child
                    can thrive and reach their full potential.
                  </p>
                  <div className="flex items-center space-x-4 text-primary-orange-dark">
                    <Heart className="h-6 w-6" />
                    <span className="font-medium">Every child deserves quality education</span>
                  </div>
                </div>
                <div className="animate-in slide-in-from-right-4 duration-1000 delay-200">
                  <Image
                    src="https://images.unsplash.com/photo-1497486751825-1233686d5d80?w=500&h=400&fit=crop&crop=faces"
                    alt="Diverse group of African children with and without disabilities playing and learning together in a bright, welcoming classroom"
                    width={500}
                    height={400}
                    className="rounded-lg shadow-lg"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* Key Features - What We Offer */}
          <section className="py-16 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">What We actually Offer</h2>
                <p className="text-lg text-gray-600">Comprehensive support for children with diverse learning needs</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  {
                    icon: <MessageSquare className="h-8 w-8 text-primary-orange" />,
                    title: "Sign Language Training",
                    description:
                      "Interactive Malawi Sign Language lessons for deaf and hard-of-hearing children with video playback support",
                    image:
                      "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=300&h=200&fit=crop&crop=faces",
                    imageAlt:
                      "African instructor teaching sign language to a group of children, with visual aids and interactive materials",
                  },
                  {
                    icon: <BookOpen className="h-8 w-8 text-primary-orange" />,
                    title: "Individualized Learning Plans",
                    description: "Custom education strategies tailored to each child's unique needs and learning style",
                    image:
                      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=300&h=200&fit=crop&crop=faces",
                    imageAlt:
                      "African teacher working one-on-one with a child with autism using visual learning aids and adaptive tools",
                  },
                  {
                    icon: <Users className="h-8 w-8 text-primary-orange" />,
                    title: "Parent & Teacher Workshops",
                    description:
                      "Training sessions for families and educators on inclusive teaching strategies and support methods",
                    image: "https://images.unsplash.com/photo-1544717297-fa95b6ee9643?w=300&h=200&fit=crop&crop=faces",
                    imageAlt:
                      "African parents and teachers in a workshop setting, learning about inclusive education techniques",
                  },
                ].map((feature, index) => (
                  <Card
                    key={index}
                    className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-in fade-in-0 duration-1000"
                    style={{ animationDelay: `${index * 200}ms` }}
                  >
                    <CardContent className="p-6">
                      <Image
                        src={feature.image || "/placeholder.svg"}
                        alt={feature.imageAlt}
                        width={300}
                        height={200}
                        className="w-full h-48 object-cover rounded-lg mb-4"
                      />
                      <div className="text-center">
                        <div className="mb-4 flex justify-center">{feature.icon}</div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                        <p className="text-gray-600">{feature.description}</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          {/* Success Stories with Images */}
          <section className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Success Stories</h2>
                <p className="text-lg text-gray-600">See the impact of inclusive education</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  {
                    image:
                      "https://images.unsplash.com/photo-1497486751825-1233686d5d80?w=300&h=250&fit=crop&crop=faces",
                    alt: "Happy African child with Down syndrome showing their artwork to classmates",
                    stat: "200+",
                    label: "Children Supported",
                  },
                  {
                    image: "https://images.unsplash.com/photo-1544717297-fa95b6ee9643?w=300&h=250&fit=crop&crop=faces",
                    alt: "African teacher and students celebrating a learning milestone together",
                    stat: "50+",
                    label: "Teachers Trained",
                  },
                  {
                    image:
                      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=300&h=250&fit=crop&crop=faces",
                    alt: "African families gathered together at a graduation ceremony, showing joy and pride",
                    stat: "15+",
                    label: "School Partnerships",
                  },
                ].map((story, index) => (
                  <div
                    key={index}
                    className="text-center animate-in fade-in-0 duration-1000"
                    style={{ animationDelay: `${index * 200}ms` }}
                  >
                    <Image
                      src={story.image || "/placeholder.svg"}
                      alt={story.alt}
                      width={300}
                      height={250}
                      className="rounded-lg shadow-md mb-4 mx-auto"
                    />
                    <div className="text-3xl font-bold text-primary-orange mb-2">{story.stat}</div>
                    <div className="text-gray-600 font-medium">{story.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Testimonial - Feedback Section */}
          <section className="py-16 bg-primary-orange">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
                <div className="md:col-span-2 text-center md:text-left animate-in fade-in-0 duration-1000">
                  <Star className="h-12 w-12 text-yellow-400 mx-auto md:mx-0 mb-6" />
                  <blockquote className="text-2xl font-medium text-white mb-6">
                    "My child has thrived thanks to Tonse Tingathe's patient and skilled teachers. The individualized
                    approach has made all the difference in their learning journey."
                  </blockquote>
                  <cite className="text-orange-100">— Parent of a student</cite>
                </div>
                <div className="animate-in slide-in-from-right-4 duration-1000 delay-200">
                  <Image
                    src="https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=300&h=300&fit=crop&crop=faces"
                    alt="Smiling African parent with their child who has special needs, both looking happy and confident"
                    width={300}
                    height={300}
                    className="rounded-full mx-auto shadow-lg"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* CTA Section - Ready to Learn More */}
          <section className="py-16 bg-white">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <div className="animate-in fade-in-0 duration-1000">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Ready to Learn More?</h2>
                <p className="text-lg text-gray-600 mb-8">
                  Join our community of families and educators committed to inclusive education
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    asChild
                    size="lg"
                    className="bg-primary-orange hover:bg-primary-orange-dark transform hover:scale-105 transition-all duration-200"
                  >
                    <Link href="/contact">Contact Us</Link>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    size="lg"
                    className="hover:bg-gray-50 transform hover:scale-105 transition-all duration-200 bg-transparent border-primary-orange text-primary-orange-dark hover:bg-primary-orange hover:text-white"
                  >
                    <Link href="/about">Meet Our Team</Link>
                  </Button>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
      <Footer />
      <LiveSessionButton />
    </>
  )
}
