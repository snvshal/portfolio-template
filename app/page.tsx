"use client"

import React, { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  ArrowRight,
  Github,
  Linkedin,
  Mail,
  Twitter,
  X,
  Menu,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { sendEmail } from "@/app/actions"
import { toast } from "sonner"
import { projects } from "@/lib/data"

export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [year, setYear] = useState("")

  useEffect(() => {
    setYear(new Date().getFullYear().toString())
  }, [])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setIsSubmitting(true)

    const form = event.target as HTMLFormElement
    const formData = new FormData(form)

    try {
      const { success } = await sendEmail(formData)

      if (!success) {
        toast.error("Something went wrong", {
          description: "Your message couldn't be sent. Please try again later.",
        })
      }

      toast.success("Message sent!", {
        description: "Thank you for your message. I'll get back to you soon.",
      })

      form.reset()
    } catch (error) {
      toast.error("Something went wrong", {
        description: "Your message couldn't be sent. Please try again later.",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen bg-paper text-ink">
      <header className="sticky top-0 z-40 w-full border-b bg-paper/95 backdrop-blur supports-[backdrop-filter]:bg-paper/60 shadow-sm">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-full bg-ink"></div>
            <span className="text-lg font-serif font-semibold">John Doe</span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <Link
              href="#work"
              className="text-sm font-medium hover:text-primary"
            >
              Work
            </Link>
            <Link
              href="#about"
              className="text-sm font-medium hover:text-primary"
            >
              About
            </Link>
            <Link
              href="#contact"
              className="text-sm font-medium hover:text-primary"
            >
              Contact
            </Link>
            <Button variant="outline" size="sm" className="font-serif">
              Resume
            </Button>
          </nav>
          <div className="flex items-center gap-2 md:hidden">
            <Button variant="ghost" size="icon" onClick={toggleMenu}>
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-paper border-b shadow-md">
            <nav className="container py-4 flex flex-col space-y-4">
              <Link
                href="#work"
                className="text-lg font-serif font-medium hover:text-primary px-2 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Work
              </Link>
              <Link
                href="#about"
                className="text-lg font-serif font-medium hover:text-primary px-2 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link
                href="#contact"
                className="text-lg font-serif font-medium hover:text-primary px-2 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
              <Button
                variant="outline"
                className="font-serif w-full justify-start"
              >
                Resume
              </Button>
            </nav>
          </div>
        )}
      </header>

      <main className="container max-w-5xl mx-auto py-12 md:py-24">
        {/* Hero Section */}
        <section className="paper-card flex flex-col items-start gap-4 pb-12 md:pb-24">
          <h1 className="text-3xl font-serif font-bold tracking-tight sm:text-5xl md:text-6xl">
            Frontend Developer <br />
            <span className="text-muted-foreground">& UI Designer</span>
          </h1>
          <p className="max-w-[600px] text-lg text-muted-foreground md:text-xl font-serif">
            I build accessible, user-friendly websites and applications with
            modern technologies. Currently focused on creating intuitive user
            experiences at Studio XYZ.
          </p>
          <div className="flex gap-4 mt-4">
            <Button className="paper-button font-serif">
              View My Work <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              className="paper-button-outline font-serif"
            >
              Contact Me
            </Button>
          </div>
        </section>

        {/* Work Section */}
        <section id="work" className="py-12 md:py-24 border-t border-ink/10">
          <h2 className="text-2xl font-serif font-bold tracking-tight sm:text-3xl mb-8">
            Selected Work
          </h2>

          <Tabs defaultValue="all" className="mb-12">
            <TabsList className="mb-8 paper-tabs">
              <TabsTrigger value="all" className="font-serif">
                All
              </TabsTrigger>
              <TabsTrigger value="websites" className="font-serif">
                Websites
              </TabsTrigger>
              <TabsTrigger value="apps" className="font-serif">
                Applications
              </TabsTrigger>
              <TabsTrigger value="design" className="font-serif">
                UI Design
              </TabsTrigger>
            </TabsList>
            <TabsContent
              value="all"
              className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
            >
              {projects.map((project, index) => (
                <ProjectCard key={index} project={project} />
              ))}
            </TabsContent>
            <TabsContent
              value="websites"
              className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
            >
              {projects
                .filter((p) => p.category === "Website")
                .map((project, index) => (
                  <ProjectCard key={index} project={project} />
                ))}
            </TabsContent>
            <TabsContent
              value="apps"
              className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
            >
              {projects
                .filter((p) => p.category === "Application")
                .map((project, index) => (
                  <ProjectCard key={index} project={project} />
                ))}
            </TabsContent>
            <TabsContent
              value="design"
              className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
            >
              {projects
                .filter((p) => p.category === "UI Design")
                .map((project, index) => (
                  <ProjectCard key={index} project={project} />
                ))}
            </TabsContent>
          </Tabs>
        </section>

        {/* About Section */}
        <section id="about" className="py-12 md:py-24 border-t border-ink/10">
          <div className="grid gap-8 md:grid-cols-2">
            <div className="paper-card">
              <h2 className="text-2xl font-serif font-bold tracking-tight sm:text-3xl mb-4">
                About Me
              </h2>
              <div className="space-y-4 text-muted-foreground font-serif">
                <p>
                  I'm a frontend developer with 5+ years of experience building
                  products for clients around the world. I specialize in
                  creating responsive, accessible websites and applications with
                  React, Next.js, and TypeScript.
                </p>
                <p>
                  My background in design allows me to bridge the gap between
                  design and development, creating seamless user experiences
                  that look great and function flawlessly across all devices.
                </p>
                <p>
                  When I'm not coding, you can find me hiking, reading sci-fi
                  novels, or experimenting with new cooking recipes.
                </p>
              </div>

              <h3 className="text-xl font-serif font-bold mt-8 mb-4">
                Technologies I Work With
              </h3>
              <div className="flex flex-wrap gap-2">
                {[
                  "React",
                  "Next.js",
                  "TypeScript",
                  "Tailwind CSS",
                  "Node.js",
                  "Figma",
                  "Framer Motion",
                  "GraphQL",
                ].map((tech) => (
                  <div
                    key={tech}
                    className="px-3 py-1 bg-muted rounded-full text-sm font-serif paper-tag"
                  >
                    {tech}
                  </div>
                ))}
              </div>
            </div>
            <div className="flex justify-center">
              <div className="relative h-[400px] w-[300px] overflow-hidden rounded-lg paper-photo">
                <Image
                  src="/placeholder.svg?height=800&width=600"
                  alt="John Doe"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-12 md:py-24 border-t border-ink/10">
          <h2 className="text-2xl font-serif font-bold tracking-tight sm:text-3xl mb-8">
            Get In Touch
          </h2>
          <div className="grid gap-8 md:grid-cols-2">
            <div className="paper-card">
              <p className="text-muted-foreground mb-6 font-serif">
                I'm currently available for freelance work and full-time
                opportunities. If you're interested in working together, have a
                question, or just want to say hi, feel free to reach out!
              </p>
              <div className="space-y-4">
                <a
                  href="mailto:hello@johndoe.com"
                  className="flex items-center gap-2 text-muted-foreground hover:text-primary font-serif"
                >
                  <Mail className="h-5 w-5" />
                  <span>hello@johndoe.com</span>
                </a>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-muted-foreground hover:text-primary font-serif"
                >
                  <Github className="h-5 w-5" />
                  <span>github.com/johndoe</span>
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-muted-foreground hover:text-primary font-serif"
                >
                  <Linkedin className="h-5 w-5" />
                  <span>linkedin.com/in/johndoe</span>
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-muted-foreground hover:text-primary font-serif"
                >
                  <Twitter className="h-5 w-5" />
                  <span>twitter.com/johndoe</span>
                </a>
              </div>
            </div>
            <div>
              <form className="space-y-4 paper-form" onSubmit={handleSubmit}>
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-2">
                    <label
                      htmlFor="name"
                      className="text-sm font-medium font-serif"
                    >
                      Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      required
                      className="flex h-10 w-full rounded-md border border-input bg-paper px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 font-serif"
                      placeholder="Your name"
                    />
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="email"
                      className="text-sm font-medium font-serif"
                    >
                      Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      className="flex h-10 w-full rounded-md border border-input bg-paper px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 font-serif"
                      placeholder="Your email"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="subject"
                    className="text-sm font-medium font-serif"
                  >
                    Subject
                  </label>
                  <input
                    id="subject"
                    name="subject"
                    required
                    className="flex h-10 w-full rounded-md border border-input bg-paper px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 font-serif"
                    placeholder="Subject"
                  />
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="message"
                    className="text-sm font-medium font-serif"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    className="flex min-h-[120px] w-full rounded-md border border-input bg-paper px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 font-serif"
                    placeholder="Your message"
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full paper-button font-serif"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-ink/10 py-6 md:py-8 bg-paper">
        <div className="container flex flex-col items-center justify-between gap-4 md:flex-row">
          <div className="flex items-center gap-2">
            <div className="h-6 w-6 rounded-full bg-ink"></div>
            <span className="text-sm font-serif font-semibold">John Doe</span>
          </div>
          <p className="text-center text-sm text-muted-foreground md:text-left font-serif">
            © {year} John Doe. All rights reserved.
          </p>
          <div className="flex gap-4">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary"
            >
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary"
            >
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary"
            >
              <Twitter className="h-5 w-5" />
              <span className="sr-only">Twitter</span>
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}

type PortfolioItem = {
  title: string
  description: string
  image: string
  category: string
  tags: string[]
}

// Project Card Component
function ProjectCard({ project }: { project: PortfolioItem }) {
  return (
    <Card className="overflow-hidden group paper-project">
      <div className="relative aspect-video overflow-hidden">
        <Image
          src={project.image || "/placeholder.svg"}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <CardContent className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-serif font-semibold">{project.title}</h3>
          <span className="text-xs bg-muted px-2 py-1 rounded-full font-serif">
            {project.category}
          </span>
        </div>
        <p className="text-sm text-muted-foreground mb-3 font-serif">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-1">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs text-muted-foreground bg-muted px-2 py-0.5 rounded-full font-serif paper-tag"
            >
              {tag}
            </span>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
