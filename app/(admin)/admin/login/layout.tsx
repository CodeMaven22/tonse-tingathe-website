import type React from "react"
export default function LoginLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <div className="min-h-screen bg-gradient-to-br from-primary-orange via-orange-400 to-red-500">{children}</div>
}
