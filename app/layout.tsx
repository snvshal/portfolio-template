import type React from "react"
import "@/app/globals.css"
import { Merriweather, Lora } from "next/font/google"
import { Toaster } from "@/components/ui/sonner"

const serif = Lora({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
})

const body = Merriweather({
  weight: ["300", "400", "700", "900"],
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
})

export const metadata = {
  title: "John Doe | Frontend Developer & UI Designer",
  description:
    "Portfolio of John Doe, a frontend developer and UI designer specializing in creating responsive, accessible websites and applications.",
  generator: "v0.dev",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body className={`${serif.variable} ${body.variable} font-body`}>
        {children}
        <Toaster />
      </body>
    </html>
  )
}
