import type React from "react"
import type { Metadata } from "next"
import { Nunito, Inter } from "next/font/google"
import "./globals.css"

const nunito = Nunito({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-nunito",
})

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

export const metadata: Metadata = {
  title: "Jerrod Lew - Content Creator",
  description: "Portfolio of Jerrod Lew, Social Media Content Creator",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${nunito.variable} ${inter.variable} dark`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
