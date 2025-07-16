"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

import { Badge } from "@/components/ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
// import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Select, SelectTrigger, SelectContent, SelectItem, SelectValue } from "@/components/ui/select"
import {
  Search,
  Filter,
  MoreHorizontal,
  Eye,
  Edit,
  Trash2,
  Download,
  Upload,
  BookOpen,
  FileText,
  Video,
  ImageIcon,
} from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const contentData = [
  {
    id: 1,
    title: "Algebra Fundamentals - Chapter 1",
    type: "PDF",
    subject: "Mathematics",
    size: "2.4 MB",
    downloads: 156,
    uploadDate: "2024-01-15",
    status: "Published",
    author: "Mrs. Grace Phiri",
  },
  {
    id: 2,
    title: "English Grammar Video Series",
    type: "Video",
    subject: "English",
    size: "45.2 MB",
    downloads: 89,
    uploadDate: "2024-01-12",
    status: "Published",
    author: "Mr. James Banda",
  },
  {
    id: 3,
    title: "Chemistry Lab Experiments",
    type: "PDF",
    subject: "Chemistry",
    size: "8.7 MB",
    downloads: 67,
    uploadDate: "2024-01-10",
    status: "Draft",
    author: "Dr. Mary Mbewe",
  },
  {
    id: 4,
    title: "History Timeline Interactive",
    type: "Interactive",
    subject: "History",
    size: "12.1 MB",
    downloads: 34,
    uploadDate: "2024-01-08",
    status: "Published",
    author: "Mr. Peter Zulu",
  },
  {
    id: 5,
    title: "Physics Motion Diagrams",
    type: "Image",
    subject: "Physics",
    size: "3.2 MB",
    downloads: 78,
    uploadDate: "2024-01-05",
    status: "Published",
    author: "Mrs. Sarah Tembo",
  },
]

export default function ContentPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [typeFilter, setTypeFilter] = useState("All")
  const [uploadType, setUploadType] = useState<"document" | "video" | null>(null)

  const filteredContent = contentData.filter((content) => {
    const matchesSearch =
      content.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      content.subject.toLowerCase().includes(searchQuery.toLowerCase()) ||
      content.author.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesType = typeFilter === "All" || content.type === typeFilter
    return matchesSearch && matchesType
  })

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "PDF":
        return <FileText className="h-4 w-4" />
      case "Video":
        return <Video className="h-4 w-4" />
      case "Image":
        return <ImageIcon className="h-4 w-4" />
      case "Interactive":
        return <BookOpen className="h-4 w-4" />
      default:
        return <FileText className="h-4 w-4" />
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Published":
        return "bg-green-100 text-green-800"
      case "Draft":
        return "bg-yellow-100 text-yellow-800"
      case "Archived":
        return "bg-gray-100 text-gray-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Resources Management</h1>
          <p className="text-gray-600">Upload, organize, and manage learning materials</p>
        </div>
        <Dialog>
          <DialogTrigger asChild>
            <Button className="bg-primary-orange hover:bg-primary-orange-dark">
              <Upload className="h-4 w-4 mr-2" />
              Upload Resource
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Upload Resource</DialogTitle>
            </DialogHeader>
            <div className="space-y-4">
              <Select onValueChange={(val) => setUploadType(val as "document" | "video")}>
                <SelectTrigger>
                  <SelectValue placeholder="Choose resource type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="document">Document</SelectItem>
                  <SelectItem value="video">Video</SelectItem>
                </SelectContent>
              </Select>

              {uploadType === "document" && (
                <form className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-1">Document Title</label>
                    <Input placeholder="Enter document title" />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-1">Upload File</label>
                    <Input type="file" accept=".pdf,.doc,.docx" />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-1">Subject</label>
                      <Input placeholder="e.g. Mathematics, Biology" />
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-1">Author</label>
                      <Input placeholder="Enter instructor name" />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-1">Upload Date</label>
                      <Input type="date" />
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-1">Status</label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select status" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Published">Published</SelectItem>
                          <SelectItem value="Draft">Draft</SelectItem>
                          <SelectItem value="Archived">Archived</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-1">File Size (MB)</label>
                    <Input type="number" placeholder="e.g. 3.2" />
                  </div>

                  <Button type="submit" className="w-full">
                    Upload Document
                  </Button>
                </form>
              )}


              {uploadType === "video" && (
                <form className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-1">Video Title</label>
                    <Input placeholder="Enter video title" />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-1">Video URL</label>
                    <Input type="url" placeholder="e.g. https://youtube.com/..." />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-1">Thumbnail Image</label>
                    <Input type="file" accept="image/*" />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-1">Subject</label>
                      <Input placeholder="e.g. English, Science" />
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-1">Author</label>
                      <Input placeholder="Enter instructor name" />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-1">Upload Date</label>
                      <Input type="date" />
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-1">Status</label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select status" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Published">Published</SelectItem>
                          <SelectItem value="Draft">Draft</SelectItem>
                          <SelectItem value="Archived">Archived</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-1">Video Size (MB)</label>
                    <Input type="number" placeholder="e.g. 45.2" />
                  </div>

                  <Button type="submit" className="w-full">
                    Upload Video
                  </Button>
                </form>
              )}

            </div>
          </DialogContent>
        </Dialog>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Content</CardTitle>
            <BookOpen className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">247</div>
            <p className="text-xs text-muted-foreground">+15 this month</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Published</CardTitle>
            <FileText className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">198</div>
            <p className="text-xs text-muted-foreground">80% of total content</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Downloads</CardTitle>
            <Download className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3,247</div>
            <p className="text-xs text-muted-foreground">+234 this week</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Storage Used</CardTitle>
            <Upload className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2.4 GB</div>
            <p className="text-xs text-muted-foreground">of 10 GB limit</p>
          </CardContent>
        </Card>
      </div>

      {/* TABS for Resources */}
      <Tabs defaultValue="documents" className="w-full">
        <TabsList>
          <TabsTrigger value="documents">Downloadable Resources</TabsTrigger>
          <TabsTrigger value="videos">Video Library</TabsTrigger>
        </TabsList>

        <TabsContent value="documents">
          {/* Content Table for Downloadable Resources */}
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>Content Library</CardTitle>
                <div className="flex items-center space-x-2">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                    <Input
                      placeholder="Search content..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="pl-10 w-64"
                    />
                  </div>
                  <Button variant="outline" size="sm">
                    <Filter className="h-4 w-4 mr-2" />
                    Filter
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Content</TableHead>
                    <TableHead>Type</TableHead>
                    <TableHead>Subject</TableHead>
                    <TableHead>Size</TableHead>
                    <TableHead>Downloads</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Upload Date</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredContent
                    .filter((content) => content.type !== "Video")
                    .map((content) => (
                      <TableRow key={content.id}>
                        <TableCell>{content.title}</TableCell>
                        <TableCell>{content.type}</TableCell>
                        <TableCell>{content.subject}</TableCell>
                        <TableCell>{content.size}</TableCell>
                        <TableCell>{content.downloads}</TableCell>
                        <TableCell>{content.status}</TableCell>
                        <TableCell>{content.uploadDate}</TableCell>
                        <TableCell>
                          <Button variant="ghost" size="sm">Download</Button>
                        </TableCell>
                      </TableRow>
                    ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="videos">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredContent
              .filter((content) => content.type === "Video")
              .map((video) => (
                <Card key={video.id} className="overflow-hidden">
                  {/* Video Preview */}
                  <div className="relative group aspect-video bg-gray-200">
                    {video.url ? (
                      <video
                        className="w-full h-full object-cover"
                        src={video.url}
                        poster={video.thumbnail || "/video-placeholder.jpg"}
                        controls={false}
                        preload="metadata"
                        muted
                      />
                    ) : (
                      <div className="w-full h-full bg-gray-300 flex items-center justify-center text-sm text-gray-600">
                        No video available
                      </div>
                    )}
                    <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40 group-hover:bg-opacity-60 transition duration-200">
                      <button
                        onClick={() => window.open(video.url || "#", "_blank")}
                        className="bg-white rounded-full p-3 shadow-md hover:scale-105 transition"
                      >
                        <Video className="w-6 h-6 text-primary-orange" />
                      </button>
                    </div>
                  </div>

                  {/* Video Metadata */}
                  <CardHeader>
                    <CardTitle className="text-lg">{video.title}</CardTitle>
                    <p className="text-sm text-muted-foreground">By {video.author}</p>
                  </CardHeader>
                  <CardContent className="space-y-2 text-sm">
                    <p><strong>Subject:</strong> {video.subject}</p>
                    <p><strong>Size:</strong> {video.size}</p>
                    <p><strong>Downloads:</strong> {video.downloads}</p>
                    <p><strong>Status:</strong> <Badge className={getStatusColor(video.status)}>{video.status}</Badge></p>
                    <p><strong>Upload Date:</strong> {video.uploadDate}</p>

                    {/* Related Content */}
                    <div className="mt-3 border-t pt-2">
                      <p className="font-medium text-sm mb-1 text-gray-700">Related Content</p>
                      <ul className="list-disc list-inside space-y-1 text-gray-600 text-xs">
                        <li>Video Notes - PDF</li>
                        <li>Practice Worksheet</li>
                        <li>Follow-up Quiz</li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              ))}
          </div>
        </TabsContent>


      </Tabs>
    </div>
  )
}
