"use client"

import { useState, useEffect } from "react"
import Image from "next/image"

const carouselImages = [
  {
    src: "https://images.unsplash.com/photo-1544717297-fa95b6ee9643?w=800&h=600&fit=crop&crop=faces",
    alt: "African children with diverse abilities learning together in an inclusive classroom setting",
    caption: "Inclusive Learning Environment",
  },
  {
    src: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800&h=600&fit=crop&crop=faces",
    alt: "African teacher using sign language to communicate with deaf students",
    caption: "Sign Language Education",
  },
  {
    src: "https://images.unsplash.com/photo-1497486751825-1233686d5d80?w=800&h=600&fit=crop&crop=faces",
    alt: "African child with Down syndrome participating in group activities with peers",
    caption: "Collaborative Learning",
  },
  {
    src: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop&crop=faces",
    alt: "African speech therapist working one-on-one with a child with speech delays",
    caption: "Personalized Therapy",
  },
  {
    src: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=800&h=600&fit=crop&crop=faces",
    alt: "African parents and teachers in a workshop learning inclusive education techniques",
    caption: "Family & Educator Support",
  },
]

export default function ImageCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselImages.length)
    }, 4000) // Change image every 4 seconds

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative w-full h-[500px] rounded-lg overflow-hidden shadow-xl">
      {carouselImages.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentIndex ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={image.src || "/placeholder.svg"}
            alt={image.alt}
            fill
            className="object-cover"
            priority={index === 0}
          />
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
            <p className="text-white text-lg font-medium">{image.caption}</p>
          </div>
        </div>
      ))}

      {/* Indicators */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {carouselImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full transition-all duration-200 ${
              index === currentIndex ? "bg-white" : "bg-white/50"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
