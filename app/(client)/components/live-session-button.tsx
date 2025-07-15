"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Video, Users, Clock } from "lucide-react"

export default function LiveSessionButton() {
  const [isVisible, setIsVisible] = useState(false)
  const [liveSessions, setLiveSessions] = useState([
    {
      id: 1,
      title: "Sign Language Basics",
      instructor: "Mary Phiri",
      participants: 12,
      startTime: "2:00 PM",
      isLive: true,
    },
    {
      id: 2,
      title: "Math Support Group",
      instructor: "James Mbewe",
      participants: 8,
      startTime: "3:30 PM",
      isLive: false,
    },
  ])

  useEffect(() => {
    // Show the button after a delay to make it noticeable
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 3000)

    return () => clearTimeout(timer)
  }, [])

  const activeLiveSessions = liveSessions.filter((session) => session.isLive)

  if (!isVisible || activeLiveSessions.length === 0) {
    return null
  }

  return (
    <div className="fixed bottom-6 right-6 z-50 animate-in slide-in-from-bottom-4 duration-500">
      <div className="bg-white rounded-lg shadow-2xl border border-gray-200 p-4 max-w-sm">
        <div className="flex items-center space-x-2 mb-3">
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
            <span className="text-sm font-semibold text-gray-900">Live Now</span>
          </div>
          <Badge variant="destructive" className="text-xs">
            {activeLiveSessions.length} session{activeLiveSessions.length > 1 ? "s" : ""}
          </Badge>
        </div>

        {activeLiveSessions.map((session) => (
          <div key={session.id} className="mb-3 last:mb-0">
            <h4 className="font-medium text-gray-900 text-sm mb-1">{session.title}</h4>
            <div className="flex items-center space-x-4 text-xs text-gray-600 mb-2">
              <div className="flex items-center space-x-1">
                <Users className="h-3 w-3" />
                <span>{session.participants}</span>
              </div>
              <div className="flex items-center space-x-1">
                <Clock className="h-3 w-3" />
                <span>{session.startTime}</span>
              </div>
            </div>
            <p className="text-xs text-gray-500 mb-2">with {session.instructor}</p>
          </div>
        ))}

        <div className="flex space-x-2">
          <Button size="sm" className="flex-1 bg-primary-orange hover:bg-primary-orange-dark text-xs">
            <Video className="h-3 w-3 mr-1" />
            Join Session
          </Button>
          <Button size="sm" variant="outline" onClick={() => setIsVisible(false)} className="text-xs bg-transparent">
            Dismiss
          </Button>
        </div>
      </div>
    </div>
  )
}
