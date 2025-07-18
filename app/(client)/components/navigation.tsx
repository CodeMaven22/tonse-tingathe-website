"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import AuthModal from "./auth-modal"
import StudentDashboard from "./student-dashboard"

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [showAuthModal, setShowAuthModal] = useState(false)
  const [currentUser, setCurrentUser] = useState<any>(null)
  const [showDashboard, setShowDashboard] = useState(false)

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/services", label: "Services" },
    { href: "/online-learning", label: "Online Learning" },
    { href: "/resources", label: "Resources" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ]

  const handleSignIn = (email: string, password: string) => {
    // Mock authentication
    console.log("Signing in:", email, password)

    const mockUser = {
      firstName: "John",
      lastName: "Doe",
      email: email,
      specialNeeds: "Autism",
      gradeLevel: "Standard 5",
    }

    setCurrentUser(mockUser)
    setShowAuthModal(false)
    setShowDashboard(true)
  }

  const handleSignUp = (userData: any) => {
    console.log("Signing up:", userData)

    const newUser = {
      firstName: userData.firstName,
      lastName: userData.lastName,
      email: userData.email,
      specialNeeds: userData.specialNeeds,
      gradeLevel: userData.gradeLevel,
    }

    setCurrentUser(newUser)
    setShowAuthModal(false)
    setShowDashboard(true)
  }

  const handleSignOut = () => {
    setCurrentUser(null)
    setShowDashboard(false)
  }

  const handleDashboardAccess = () => {
    if (currentUser) {
      setShowDashboard(true)
    } else {
      setShowAuthModal(true)
    }
  }

  if (showDashboard && currentUser) {
    return <StudentDashboard student={currentUser} onSignOut={handleSignOut} />
  }

  return (
    <>
      <nav className="bg-white shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-24 items-center">
            <div className="flex items-center">
              <Link
                href="/"
                className="flex items-center"
                onClick={() => setShowDashboard(false)}
              >
                <Image 
                  src="/images/logo.png"
                  alt="Tonse Tingathe Logo"
                  width={229}
                  height={116}
                  className="h-16 w-auto object-contain hover:scale-105 transition-transform"
                  priority={true}
                />
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-gray-700 hover:text-primary-orange px-3 py-2 text-sm font-medium transition-colors duration-200 hover:scale-105"
                  onClick={() => setShowDashboard(false)}
                >
                  {item.label}
                </Link>
              ))}

              {currentUser ? (
                <div className="flex items-center space-x-4">
                  <Button
                    onClick={handleDashboardAccess}
                    variant="outline"
                    className="border-primary-orange text-primary-orange hover:bg-primary-orange hover:text-white bg-transparent"
                  >
                    <User className="h-4 w-4 mr-2" />
                    Dashboard
                  </Button>
                  <Button onClick={handleSignOut} variant="ghost" className="text-gray-600 hover:text-gray-800">
                    Sign Out
                  </Button>
                </div>
              ) : (
                <Button
                  onClick={() => setShowAuthModal(true)}
                  className="bg-primary-orange hover:bg-primary-orange-dark transform hover:scale-105 transition-all duration-200"
                >
                  Sign In / Sign Up
                </Button>
              )}
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-gray-700 hover:text-primary-orange transition-colors"
              >
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isOpen && (
            <div className="md:hidden animate-in slide-in-from-top-2 duration-200">
              <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-primary-orange hover:bg-gray-50 transition-colors"
                    onClick={() => {
                      setIsOpen(false)
                      setShowDashboard(false)
                    }}
                  >
                    {item.label}
                  </Link>
                ))}
                <div className="px-3 py-2 space-y-2">
                  {currentUser ? (
                    <>
                      <Button
                        onClick={() => {
                          handleDashboardAccess()
                          setIsOpen(false)
                        }}
                        variant="outline"
                        className="w-full border-primary-orange text-primary-orange hover:bg-primary-orange hover:text-white"
                      >
                        <User className="h-4 w-4 mr-2" />
                        Dashboard
                      </Button>
                      <Button
                        onClick={() => {
                          handleSignOut()
                          setIsOpen(false)
                        }}
                        variant="ghost"
                        className="w-full text-gray-600 hover:text-gray-800"
                      >
                        Sign Out
                      </Button>
                    </>
                  ) : (
                    <Button
                      onClick={() => {
                        setShowAuthModal(true)
                        setIsOpen(false)
                      }}
                      className="w-full bg-primary-orange hover:bg-primary-orange-dark"
                    >
                      Sign In / Sign Up
                    </Button>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>

      <AuthModal
        isOpen={showAuthModal}
        onClose={() => setShowAuthModal(false)}
        onSignIn={handleSignIn}
        onSignUp={handleSignUp}
        preSelectedLearningType=""
      />
    </>
  )
}