import type React from "react"
import Navigation from "./components/navigation"
import Footer from "./components/footer"
import LiveSessionButton from "./components/live-session-button"

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Navigation />
      <main className="min-h-screen">{children}</main>
      <Footer />
      <LiveSessionButton />
    </>
  )
}
