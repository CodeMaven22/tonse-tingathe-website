import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Tonse Tingathe Learning Center - Empowering Children with Special Needs",
  description: "Personalized learning for children with autism, Down syndrome, speech delays, and more across Malawi.",
  keywords: "special needs education, autism, Down syndrome, sign language, Malawi, inclusive education",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
