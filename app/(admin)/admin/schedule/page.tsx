"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar, Plus, ChevronLeft, ChevronRight, Clock, Users, Video } from "lucide-react"

const scheduleData = [
  {
    id: 1,
    title: "Mathematics Level 1",
    instructor: "Mrs. Grace Phiri",
    time: "09:00 - 10:00",
    participants: 18,
    status: "confirmed",
    day: "Monday",
  },
  {
    id: 2,
    title: "English Grammar",
    instructor: "Mr. James Banda",
    time: "14:00 - 15:00",
    participants: 22,
    status: "confirmed",
    day: "Monday",
  },
  {
    id: 3,
    title: "Chemistry Basics",
    instructor: "Dr. Mary Mbewe",
    time: "11:00 - 12:00",
    participants: 15,
    status: "pending",
    day: "Tuesday",
  },
  {
    id: 4,
    title: "Physics Motion",
    instructor: "Mrs. Sarah Tembo",
    time: "10:00 - 11:00",
    participants: 20,
    status: "confirmed",
    day: "Wednesday",
  },
  {
    id: 5,
    title: "History Lesson",
    instructor: "Mr. Peter Zulu",
    time: "15:00 - 16:00",
    participants: 12,
    status: "cancelled",
    day: "Thursday",
  },
]

const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
const timeSlots = [
  "08:00",
  "09:00",
  "10:00",
  "11:00",
  "12:00",
  "13:00",
  "14:00",
  "15:00",
  "16:00",
  "17:00",
  "18:00",
  "19:00",
]

export default function SchedulePage() {
  const [currentWeek, setCurrentWeek] = useState("Week of Jan 15-21, 2024")

  const getStatusColor = (status: string) => {
    switch (status) {
      case "confirmed":
        return "bg-green-100 text-green-800 border-green-200"
      case "pending":
        return "bg-yellow-100 text-yellow-800 border-yellow-200"
      case "cancelled":
        return "bg-red-100 text-red-800 border-red-200"
      default:
        return "bg-gray-100 text-gray-800 border-gray-200"
    }
  }

  const getSessionsForDay = (day: string) => {
    return scheduleData.filter((session) => session.day === day)
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Schedule Management</h1>
          <p className="text-gray-600">Plan and organize learning sessions across the week</p>
        </div>
        <Button className="bg-primary-orange hover:bg-primary-orange-dark">
          <Plus className="h-4 w-4 mr-2" />
          Schedule Session
        </Button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">This Week</CardTitle>
            <Calendar className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">24</div>
            <p className="text-xs text-muted-foreground">Scheduled sessions</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Peak Hours</CardTitle>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2-4 PM</div>
            <p className="text-xs text-muted-foreground">Most active time</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Avg. Attendance</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">17</div>
            <p className="text-xs text-muted-foreground">Students per session</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Utilization</CardTitle>
            <Video className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">78%</div>
            <p className="text-xs text-muted-foreground">Room capacity used</p>
          </CardContent>
        </Card>
      </div>

      {/* Weekly Calendar */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="flex items-center">
              <Calendar className="h-5 w-5 mr-2" />
              Weekly Schedule
            </CardTitle>
            <div className="flex items-center space-x-2">
              <Button variant="outline" size="sm">
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <span className="text-sm font-medium px-4">{currentWeek}</span>
              <Button variant="outline" size="sm">
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-8 gap-2">
            {/* Header Row */}
            <div className="p-2 font-medium text-sm text-gray-500">Time</div>
            {days.map((day) => (
              <div key={day} className="p-2 font-medium text-sm text-center border-b">
                {day}
              </div>
            ))}

            {/* Time Slots */}
            {timeSlots.map((time) => (
              <div key={time} className="contents">
                <div className="p-2 text-sm text-gray-500 border-r">{time}</div>
                {days.map((day) => {
                  const sessions = getSessionsForDay(day).filter((session) => session.time.startsWith(time))
                  return (
                    <div key={`${day}-${time}`} className="p-1 min-h-[60px] border-r border-b">
                      {sessions.map((session) => (
                        <div
                          key={session.id}
                          className={`p-2 rounded-md border text-xs mb-1 ${getStatusColor(session.status)}`}
                        >
                          <div className="font-medium truncate">{session.title}</div>
                          <div className="text-xs opacity-75">{session.instructor}</div>
                          <div className="flex items-center mt-1">
                            <Users className="h-3 w-3 mr-1" />
                            <span>{session.participants}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  )
                })}
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Upcoming Sessions */}
      <Card>
        <CardHeader>
          <CardTitle>Upcoming Sessions</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {scheduleData
              .filter((session) => session.status === "confirmed")
              .map((session) => (
                <div key={session.id} className="flex items-center justify-between p-4 border rounded-lg">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-primary-orange rounded-lg flex items-center justify-center">
                      <Video className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-medium">{session.title}</h3>
                      <p className="text-sm text-gray-500">
                        {session.instructor} • {session.day}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="text-right">
                      <div className="text-sm font-medium">{session.time}</div>
                      <div className="text-xs text-gray-500">{session.participants} participants</div>
                    </div>
                    <Badge className={getStatusColor(session.status)}>{session.status}</Badge>
                  </div>
                </div>
              ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
