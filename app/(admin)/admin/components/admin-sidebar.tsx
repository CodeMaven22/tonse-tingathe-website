"use client"
import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import {
  LayoutDashboard,
  Users,
  UserCheck,
  Video,
  Calendar,
  FileText,
  MessageSquare,
  BarChart3,
  FolderOpen,
  Settings,
  ChevronLeft,
  ChevronRight,
  Heart,
} from "lucide-react"

const navigation = [
  { name: "Dashboard", href: "/admin", icon: LayoutDashboard },
  { name: "Students", href: "/admin/students", icon: Users },
  { name: "Instructors", href: "/admin/instructors", icon: UserCheck },
  { name: "Sessions", href: "/admin/sessions", icon: Video },
  { name: "Schedule", href: "/admin/schedule", icon: Calendar },
  { name: "Resources", href: "/admin/resources", icon: FileText },
  // { name: "Messages", href: "/admin/messages", icon: MessageSquare },
  // { name: "Reports", href: "/admin/reports", icon: BarChart3 },
  // { name: "Documents", href: "/admin/documents", icon: FolderOpen },
  // { name: "Settings", href: "/admin/settings", icon: Settings },
]

export default function AdminSidebar() {
  const [collapsed, setCollapsed] = useState(false)
  const pathname = usePathname()

  return (
    <div
      className={cn(
        "bg-white border-r border-gray-200 flex flex-col transition-all duration-300",
        collapsed ? "w-16" : "w-64",
      )}
    >
      {/* Header */}
      <div className="p-4 border-b border-gray-200">
        <div className="flex items-center justify-between">
          {!collapsed && (
            <div className="flex items-center space-x-2">
              <Heart className="h-8 w-8 text-primary-orange" />
              <div>
                <h1 className="text-lg font-bold text-gray-900">Tonse Tingathe</h1>
                <p className="text-xs text-gray-500">Admin Panel</p>
              </div>
            </div>
          )}
          <button
            onClick={() => setCollapsed(!collapsed)}
            className="p-1 rounded-md hover:bg-gray-100 transition-colors"
          >
            {collapsed ? (
              <ChevronRight className="h-4 w-4 text-gray-600" />
            ) : (
              <ChevronLeft className="h-4 w-4 text-gray-600" />
            )}
          </button>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4 space-y-2">
        {navigation.map((item) => {
          const isActive = pathname === item.href
          return (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                "flex items-center space-x-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors",
                isActive ? "bg-primary-orange text-white" : "text-gray-700 hover:bg-gray-100 hover:text-gray-900",
              )}
            >
              <item.icon className="h-5 w-5 flex-shrink-0" />
              {!collapsed && <span>{item.name}</span>}
            </Link>
          )
        })}
      </nav>

      {/* Footer */}
      {!collapsed && (
        <div className="p-4 border-t border-gray-200">
          <div className="text-xs text-gray-500 text-center">
            <p>Tonse Tingathe Admin</p>
            <p>Version 1.0.0</p>
          </div>
        </div>
      )}
    </div>
  )
}
