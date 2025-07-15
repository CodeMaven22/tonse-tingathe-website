"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Phone, Mail, MapPin, Clock, Facebook, MessageCircle } from "lucide-react"
import Image from "next/image"
import HeroCarousel from "../components/hero-carousel"

export default function ContactPage() {
  const heroImages = [
    {
      src: "https://images.unsplash.com/photo-1497486751825-1233686d5d80?w=1200&h=600&fit=crop&crop=faces",
      alt: "Welcoming entrance of Tonse Tingathe Learning Center with accessibility features and inclusive signage",
    },
    {
      src: "https://images.unsplash.com/photo-1544717297-fa95b6ee9643?w=1200&h=600&fit=crop&crop=faces",
      alt: "African families and children arriving at the center for consultation and enrollment",
    },
    {
      src: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=1200&h=600&fit=crop&crop=faces",
      alt: "African staff members greeting and welcoming new families to the center",
    },
    {
      src: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=1200&h=600&fit=crop&crop=faces",
      alt: "Accessible facilities and inclusive environment designed for all children",
    },
  ]

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log("Form submitted:", formData)
    // Reset form or show success message
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section with Background Carousel */}
      <HeroCarousel
        images={heroImages}
        subtitle="We're Here to Help"
        title="Get in Touch"
        description="Ready to start your child's learning journey? We're here to help and answer any questions you may have."
        primaryButton={{
          text: "Schedule a Call",
          href: "#contact-form",
        }}
        secondaryButton={{
          text: "Learn More",
          href: "/about",
        }}
      />

      <div className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="animate-in slide-in-from-left-4 duration-1000">
              <Card className="mb-8">
                <CardHeader>
                  <CardTitle className="text-2xl text-gray-900">Contact Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="mb-6">
                    <Image
                      src="https://images.unsplash.com/photo-1497486751825-1233686d5d80?w=400&h=200&fit=crop&crop=faces"
                      alt="Map showing the location of Tonse Tingathe Learning Center in Malawi with nearby landmarks"
                      width={400}
                      height={200}
                      className="w-full rounded-lg object-cover"
                    />
                  </div>
                  <div className="flex items-center space-x-4">
                    <Phone className="h-5 w-5 text-primary-orange" />
                    <div>
                      <p className="font-medium text-gray-900">Phone</p>
                      <p className="text-gray-600">+265 XXX XXX XXX</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <Mail className="h-5 w-5 text-primary-orange" />
                    <div>
                      <p className="font-medium text-gray-900">Email</p>
                      <p className="text-gray-600">info@tonsetingathe.org</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <MapPin className="h-5 w-5 text-primary-orange" />
                    <div>
                      <p className="font-medium text-gray-900">Location</p>
                      <p className="text-gray-600">Malawi</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <Clock className="h-5 w-5 text-primary-orange" />
                    <div>
                      <p className="font-medium text-gray-900">Office Hours</p>
                      <p className="text-gray-600">Monday - Friday: 8:00 AM - 5:00 PM</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Social Media */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl text-gray-900">Follow Us</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex space-x-4">
                    <a
                      href="#"
                      className="flex items-center space-x-2 text-primary-orange hover:text-primary-orange-dark transition-colors"
                    >
                      <Facebook className="h-5 w-5" />
                      <span>Facebook</span>
                    </a>
                    <a
                      href="#"
                      className="flex items-center space-x-2 text-green-600 hover:text-green-700 transition-colors"
                    >
                      <MessageCircle className="h-5 w-5" />
                      <span>WhatsApp</span>
                    </a>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <div className="animate-in slide-in-from-right-4 duration-1000" id="contact-form">
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl text-gray-900">Send us a Message</CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="name">Name *</Label>
                        <Input
                          id="name"
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => handleInputChange("name", e.target.value)}
                          className="mt-1"
                        />
                      </div>
                      <div>
                        <Label htmlFor="email">Email *</Label>
                        <Input
                          id="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => handleInputChange("email", e.target.value)}
                          className="mt-1"
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="phone">Phone (Optional)</Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => handleInputChange("phone", e.target.value)}
                        className="mt-1"
                      />
                    </div>

                    <div>
                      <Label htmlFor="subject">Subject *</Label>
                      <Select onValueChange={(value) => handleInputChange("subject", value)}>
                        <SelectTrigger className="mt-1">
                          <SelectValue placeholder="Select a subject" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="enrollment">Enrollment</SelectItem>
                          <SelectItem value="workshops">Workshops</SelectItem>
                          <SelectItem value="general">General Inquiry</SelectItem>
                          <SelectItem value="volunteer">Volunteer Opportunities</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label htmlFor="message">Message *</Label>
                      <Textarea
                        id="message"
                        required
                        rows={5}
                        value={formData.message}
                        onChange={(e) => handleInputChange("message", e.target.value)}
                        className="mt-1"
                        placeholder="Tell us about your child's needs or ask any questions..."
                      />
                    </div>

                    <Button
                      type="submit"
                      className="w-full bg-primary-orange hover:bg-primary-orange-dark transform hover:scale-105 transition-all duration-200"
                    >
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* CTA Section */}
          <div className="mt-16 text-center bg-gradient-to-r from-orange-50 to-amber-50 rounded-lg p-8 animate-in fade-in-0 duration-1000 delay-800">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Prefer a Personal Visit?</h2>
            <p className="text-gray-600 mb-6">
              Schedule a consultation to visit our center and meet our team in person.
            </p>
            <Button
              size="lg"
              className="bg-primary-orange hover:bg-primary-orange-dark transform hover:scale-105 transition-all duration-200"
            >
              Schedule a Call
            </Button>
          </div>

          {/* Photo Gallery */}
          <div className="mt-16 animate-in fade-in-0 duration-1000 delay-1000">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Visit Our Center</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                {
                  src: "https://images.unsplash.com/photo-1497486751825-1233686d5d80?w=200&h=200&fit=crop&crop=faces",
                  alt: "Accessible playground with adaptive equipment for children with mobility challenges",
                },
                {
                  src: "https://images.unsplash.com/photo-1544717297-fa95b6ee9643?w=200&h=200&fit=crop&crop=faces",
                  alt: "Sensory-friendly classroom with soft lighting and quiet spaces",
                },
                {
                  src: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=200&h=200&fit=crop&crop=faces",
                  alt: "Therapy room equipped with communication devices and learning tools",
                },
                {
                  src: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=200&h=200&fit=crop&crop=faces",
                  alt: "Library with books in braille and large print, plus audio resources",
                },
              ].map((image, index) => (
                <Image
                  key={index}
                  src={image.src || "/placeholder.svg"}
                  alt={image.alt}
                  width={200}
                  height={200}
                  className="rounded-lg shadow-md object-cover hover:scale-105 transition-transform duration-200"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
