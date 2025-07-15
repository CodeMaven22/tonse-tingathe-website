"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Textarea } from "@/components/ui/textarea"
import { Search, Send, MessageSquare, Users, Clock } from "lucide-react"

const conversations = [
  {
    id: 1,
    name: "Sarah Banda",
    role: "Student",
    lastMessage: "Thank you for the additional practice problems!",
    time: "2 min ago",
    unread: 0,
    avatar: "/placeholder.svg?height=32&width=32",
  },
  {
    id: 2,
    name: "Mrs. Grace Phiri",
    role: "Instructor",
    lastMessage: "The new curriculum materials are ready for review",
    time: "15 min ago",
    unread: 2,
    avatar: "/placeholder.svg?height=32&width=32",
  },
  {
    id: 3,
    name: "John Mwale",
    role: "Student",
    lastMessage: "Could you help me with the chemistry assignment?",
    time: "1 hour ago",
    unread: 1,
    avatar: "/placeholder.svg?height=32&width=32",
  },
  {
    id: 4,
    name: "Parent - Mary Tembo",
    role: "Parent",
    lastMessage: "How is my daughter performing in mathematics?",
    time: "2 hours ago",
    unread: 1,
    avatar: "/placeholder.svg?height=32&width=32",
  },
  {
    id: 5,
    name: "Mr. James Banda",
    role: "Instructor",
    lastMessage: "Session recordings have been uploaded",
    time: "3 hours ago",
    unread: 0,
    avatar: "/placeholder.svg?height=32&width=32",
  },
]

const messages = [
  {
    id: 1,
    sender: "Sarah Banda",
    content: "Hello! I wanted to thank you for the additional practice problems you shared yesterday.",
    time: "2:30 PM",
    isOwn: false,
  },
  {
    id: 2,
    sender: "Admin",
    content: "You're welcome, Sarah! I'm glad they're helpful. How are you finding the difficulty level?",
    time: "2:32 PM",
    isOwn: true,
  },
  {
    id: 3,
    sender: "Sarah Banda",
    content: "They're perfect! Just challenging enough to help me understand the concepts better.",
    time: "2:35 PM",
    isOwn: false,
  },
  {
    id: 4,
    sender: "Admin",
    content: "That's great to hear! Keep up the excellent work. Let me know if you need any more resources.",
    time: "2:37 PM",
    isOwn: true,
  },
  {
    id: 5,
    sender: "Sarah Banda",
    content: "Thank you for the additional practice problems!",
    time: "2:40 PM",
    isOwn: false,
  },
]

export default function MessagesPage() {
  const [selectedConversation, setSelectedConversation] = useState(conversations[0])
  const [newMessage, setNewMessage] = useState("")
  const [searchQuery, setSearchQuery] = useState("")

  const filteredConversations = conversations.filter((conv) =>
    conv.name.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      // Handle sending message
      setNewMessage("")
    }
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Messages</h1>
          <p className="text-gray-600">Communicate with students, instructors, and parents</p>
        </div>
        <Button className="bg-primary-orange hover:bg-primary-orange-dark">
          <MessageSquare className="h-4 w-4 mr-2" />
          New Message
        </Button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Messages</CardTitle>
            <MessageSquare className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1,247</div>
            <p className="text-xs text-muted-foreground">+89 today</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Unread</CardTitle>
            <Badge className="bg-red-500 text-white">4</Badge>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">4</div>
            <p className="text-xs text-muted-foreground">Require attention</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Chats</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">23</div>
            <p className="text-xs text-muted-foreground">Ongoing conversations</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Avg. Response</CardTitle>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12m</div>
            <p className="text-xs text-muted-foreground">Response time</p>
          </CardContent>
        </Card>
      </div>

      {/* Messages Interface */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 h-[600px]">
        {/* Conversations List */}
        <Card className="lg:col-span-1">
          <CardHeader>
            <CardTitle>Conversations</CardTitle>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                placeholder="Search conversations..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
          </CardHeader>
          <CardContent className="p-0">
            <div className="space-y-1">
              {filteredConversations.map((conversation) => (
                <div
                  key={conversation.id}
                  onClick={() => setSelectedConversation(conversation)}
                  className={`p-4 cursor-pointer hover:bg-gray-50 border-b ${
                    selectedConversation.id === conversation.id ? "bg-blue-50 border-l-4 border-l-primary-orange" : ""
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    <Avatar className="h-10 w-10">
                      <AvatarImage src={conversation.avatar || "/placeholder.svg"} alt={conversation.name} />
                      <AvatarFallback>
                        {conversation.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between">
                        <p className="text-sm font-medium text-gray-900 truncate">{conversation.name}</p>
                        <p className="text-xs text-gray-500">{conversation.time}</p>
                      </div>
                      <div className="flex items-center justify-between">
                        <p className="text-sm text-gray-500 truncate">{conversation.lastMessage}</p>
                        {conversation.unread > 0 && (
                          <Badge className="bg-red-500 text-white text-xs">{conversation.unread}</Badge>
                        )}
                      </div>
                      <Badge variant="outline" className="text-xs mt-1">
                        {conversation.role}
                      </Badge>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Chat Area */}
        <Card className="lg:col-span-2">
          <CardHeader className="border-b">
            <div className="flex items-center space-x-3">
              <Avatar className="h-10 w-10">
                <AvatarImage src={selectedConversation.avatar || "/placeholder.svg"} alt={selectedConversation.name} />
                <AvatarFallback>
                  {selectedConversation.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </AvatarFallback>
              </Avatar>
              <div>
                <CardTitle className="text-lg">{selectedConversation.name}</CardTitle>
                <p className="text-sm text-gray-500">{selectedConversation.role}</p>
              </div>
            </div>
          </CardHeader>
          <CardContent className="flex flex-col h-[400px]">
            {/* Messages */}
            <div className="flex-1 overflow-y-auto space-y-4 p-4">
              {messages.map((message) => (
                <div key={message.id} className={`flex ${message.isOwn ? "justify-end" : "justify-start"}`}>
                  <div
                    className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
                      message.isOwn ? "bg-primary-orange text-white" : "bg-gray-100 text-gray-900"
                    }`}
                  >
                    <p className="text-sm">{message.content}</p>
                    <p className={`text-xs mt-1 ${message.isOwn ? "text-orange-100" : "text-gray-500"}`}>
                      {message.time}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Message Input */}
            <div className="border-t pt-4">
              <div className="flex space-x-2">
                <Textarea
                  placeholder="Type your message..."
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                  className="flex-1 min-h-[60px] resize-none"
                  onKeyPress={(e) => {
                    if (e.key === "Enter" && !e.shiftKey) {
                      e.preventDefault()
                      handleSendMessage()
                    }
                  }}
                />
                <Button
                  onClick={handleSendMessage}
                  className="bg-primary-orange hover:bg-primary-orange-dark"
                  disabled={!newMessage.trim()}
                >
                  <Send className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
