"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Calendar, Clock, Eye, Edit, Filter, MoreHorizontal, Plus, Search, Trash2, Users, Video, ChevronLeft, ChevronRight } from "lucide-react"

const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
const timeSlots = ["08:00", "09:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00", "19:00"]

const initialSessions = [
  {
    id: 1,
    title: "Mathematics Level 1 - Algebra Basics",
    instructor: "Mrs. Grace Phiri",
    subject: "Mathematics",
    participants: 18,
    maxParticipants: 25,
    status: "Live",
    startTime: "09:00 AM",
    endTime: "10:00 AM",
    date: "Today",
    duration: "60 min",
    avatar: "/placeholder.svg",
    time: "09:00 - 10:00",
    day: "Monday"
  },
  {
    id: 2,
    title: "English Grammar - Tenses",
    instructor: "Mr. James Banda",
    subject: "English",
    participants: 22,
    maxParticipants: 30,
    status: "Scheduled",
    startTime: "02:00 PM",
    endTime: "03:00 PM",
    date: "Today",
    duration: "60 min",
    avatar: "/placeholder.svg",
    time: "14:00 - 15:00",
    day: "Monday"
  },
  {
    id: 3,
    title: "Chemistry - Organic Compounds",
    instructor: "Dr. Mary Mbewe",
    subject: "Chemistry",
    participants: 15,
    maxParticipants: 20,
    status: "Completed",
    startTime: "11:00 AM",
    endTime: "12:00 PM",
    date: "Yesterday",
    duration: "60 min",
    avatar: "/placeholder.svg",
    time: "11:00 - 12:00",
    day: "Tuesday"
  }
]

export default function CombinedSchedulePage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [statusFilter, setStatusFilter] = useState("All")
  const [sessions, setSessions] = useState(initialSessions)
  const [currentWeek, setCurrentWeek] = useState("Week of Jan 15–21, 2024")
  const [showForm, setShowForm] = useState(false)

  const [newSession, setNewSession] = useState({
    title: "",
    instructor: "",
    subject: "",
    day: days[0],
    time: timeSlots[0] + " - " + (parseInt(timeSlots[0]) + 1).toString().padStart(2, "0") + ":00",
    participants: 0,
    maxParticipants: 25,
    status: "Scheduled",
    startTime: timeSlots[0],
    endTime: (parseInt(timeSlots[0]) + 1).toString().padStart(2, "0") + ":00",
    date: "Upcoming",
    duration: "60 min",
    avatar: "/placeholder.svg"
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    const id = sessions.length + 1
    setSessions([...sessions, { id, ...newSession }])
    setNewSession({
      title: "",
      instructor: "",
      subject: "",
      day: days[0],
      time: timeSlots[0] + " - " + (parseInt(timeSlots[0]) + 1).toString().padStart(2, "0") + ":00",
      participants: 0,
      maxParticipants: 25,
      status: "Scheduled",
      startTime: timeSlots[0],
      endTime: (parseInt(timeSlots[0]) + 1).toString().padStart(2, "0") + ":00",
      date: "Upcoming",
      duration: "60 min",
      avatar: "/placeholder.svg"
    })
    setShowForm(false)
  }

  const filteredSessions = sessions.filter((session) => {
    const matchesSearch = session.title.toLowerCase().includes(searchQuery.toLowerCase()) || session.instructor.toLowerCase().includes(searchQuery.toLowerCase()) || session.subject?.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesStatus = statusFilter === "All" || session.status === statusFilter
    return matchesSearch && matchesStatus
  })

  const getStatusColor = (status) => {
    switch (status) {
      case "Live": return "bg-green-100 text-green-800"
      case "Scheduled": return "bg-blue-100 text-blue-800"
      case "Completed": return "bg-gray-100 text-gray-800"
      case "Cancelled": return "bg-red-100 text-red-800"
      default: return "bg-gray-100 text-gray-800"
    }
  }

  const getSessionsForDay = (day) => sessions.filter((session) => session.day === day)


  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Schedule & Sessions Management</h1>
          <p className="text-gray-600">Plan, organize, and track live or upcoming sessions</p>
        </div>
        <Button
          className="bg-primary-orange hover:bg-primary-orange-dark"
          onClick={() => setShowForm(!showForm)}
        >
          <Plus className="h-4 w-4 mr-2" /> {showForm ? "Close Form" : "Schedule Session"}
        </Button>

      </div>
      {showForm && (
        <Card>
          <CardHeader><CardTitle>Add New Session</CardTitle></CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Input placeholder="Title" value={newSession.title} onChange={(e) => setNewSession({ ...newSession, title: e.target.value })} required />
              <Input placeholder="Instructor" value={newSession.instructor} onChange={(e) => setNewSession({ ...newSession, instructor: e.target.value })} required />
              <Input placeholder="Subject" value={newSession.subject} onChange={(e) => setNewSession({ ...newSession, subject: e.target.value })} required />
              <select className="border p-2 rounded" value={newSession.day} onChange={(e) => setNewSession({ ...newSession, day: e.target.value })}>
                {days.map((d) => <option key={d}>{d}</option>)}
              </select>
              <select className="border p-2 rounded" value={newSession.time} onChange={(e) => {
                const [start] = e.target.value.split(" - ")
                const end = (parseInt(start) + 1).toString().padStart(2, "0") + ":00"
                setNewSession({ ...newSession, time: e.target.value, startTime: start, endTime: end })
              }}>
                {timeSlots.map((slot) => <option key={slot}>{slot} - {(parseInt(slot) + 1).toString().padStart(2, "0")}:00</option>)}
              </select>
              <Input type="number" placeholder="Participants" value={newSession.participants} onChange={(e) => setNewSession({ ...newSession, participants: Number(e.target.value) })} />
              <select className="border p-2 rounded" value={newSession.status} onChange={(e) => setNewSession({ ...newSession, status: e.target.value })}>
                <option value="Scheduled">Scheduled</option>
                <option value="Live">Live</option>
                <option value="Completed">Completed</option>
                <option value="Cancelled">Cancelled</option>
              </select>
              <Button type="submit" className="bg-primary-orange hover:bg-primary-orange-dark col-span-2">Add Session</Button>
            </form>
          </CardContent>
        </Card>
      )}
      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card><CardHeader className="flex justify-between"><CardTitle className="text-sm">Live Sessions</CardTitle><Video className="h-4 w-4" /></CardHeader><CardContent><div className="text-2xl font-bold">{sessions.filter(s => s.status === 'Live').length}</div></CardContent></Card>
        <Card><CardHeader className="flex justify-between"><CardTitle className="text-sm">Today's Sessions</CardTitle><Calendar className="h-4 w-4" /></CardHeader><CardContent><div className="text-2xl font-bold">{sessions.filter(s => s.date === 'Today').length}</div></CardContent></Card>
        <Card><CardHeader className="flex justify-between"><CardTitle className="text-sm">Participants</CardTitle><Users className="h-4 w-4" /></CardHeader><CardContent><div className="text-2xl font-bold">{sessions.reduce((acc, s) => acc + s.participants, 0)}</div></CardContent></Card>
        <Card><CardHeader className="flex justify-between"><CardTitle className="text-sm">Week</CardTitle><Clock className="h-4 w-4" /></CardHeader><CardContent><div className="text-2xl font-bold">{currentWeek}</div></CardContent></Card>
      </div>

      {/* Schedule Calendar */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="flex items-center"><Calendar className="h-5 w-5 mr-2" />Weekly Schedule</CardTitle>
            <div className="flex items-center space-x-2">
              <Button variant="outline" size="sm"><ChevronLeft className="h-4 w-4" /></Button>
              <span className="text-sm font-medium px-4">{currentWeek}</span>
              <Button variant="outline" size="sm"><ChevronRight className="h-4 w-4" /></Button>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-8 gap-2">
            <div className="p-2 font-medium text-sm text-gray-500">Time</div>
            {days.map(day => <div key={day} className="p-2 text-sm font-medium border-b text-center">{day}</div>)}
            {timeSlots.map((time) => (
              <div key={time} className="contents">
                <div className="p-2 text-sm text-gray-500 border-r">{time}</div>
                {days.map((day) => {
                  const slots = getSessionsForDay(day).filter(s => s.time?.startsWith(time))
                  return (
                    <div key={`${day}-${time}`} className="p-1 min-h-[60px] border-r border-b">
                      {slots.map(session => (
                        <div key={session.id} className={`p-2 rounded-md border text-xs mb-1 ${getStatusColor(session.status)}`}>
                          <div className="font-medium truncate">{session.title}</div>
                          <div className="text-xs opacity-75">{session.instructor}</div>
                          <div className="flex items-center mt-1"><Users className="h-3 w-3 mr-1" /><span>{session.participants}</span></div>
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

      {/* Sessions Table */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle>Session Overview</CardTitle>
            <div className="flex items-center space-x-2">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input placeholder="Search sessions..." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} className="pl-10 w-64" />
              </div>
              <Button variant="outline" size="sm"><Filter className="h-4 w-4 mr-2" />Filter</Button>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Session</TableHead>
                <TableHead>Instructor</TableHead>
                <TableHead>Participants</TableHead>
                <TableHead>Time</TableHead>
                <TableHead>Duration</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredSessions.map(session => (
                <TableRow key={session.id}>
                  <TableCell>
                    <div className="font-medium">{session.title}</div>
                    <div className="text-sm text-gray-500">{session.subject} • {session.date}</div>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center space-x-2">
                      <Avatar className="h-6 w-6">
                        <AvatarImage src={session.avatar} alt={session.instructor} />
                        <AvatarFallback>{session.instructor.split(" ").map(n => n[0]).join("")}</AvatarFallback>
                      </Avatar>
                      <span className="text-sm">{session.instructor}</span>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center"><Users className="h-4 w-4 mr-1 text-gray-400" /><span>{session.participants}/{session.maxParticipants}</span></div>
                  </TableCell>
                  <TableCell>{session.startTime} - {session.endTime}</TableCell>
                  <TableCell><Badge variant="outline">{session.duration}</Badge></TableCell>
                  <TableCell><Badge className={getStatusColor(session.status)}>{session.status}</Badge></TableCell>
                  <TableCell className="text-right">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" className="h-8 w-8 p-0"><MoreHorizontal className="h-4 w-4" /></Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem><Eye className="mr-2 h-4 w-4" />View Details</DropdownMenuItem>
                        {session.status === "Live" && <DropdownMenuItem><Video className="mr-2 h-4 w-4" />Join Session</DropdownMenuItem>}
                        {session.status === "Scheduled" && <DropdownMenuItem><Edit className="mr-2 h-4 w-4" />Edit Session</DropdownMenuItem>}
                        <DropdownMenuItem className="text-red-600"><Trash2 className="mr-2 h-4 w-4" />Cancel Session</DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}
