"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowRight, Github, Linkedin, Mail, Twitter } from "lucide-react"
import Image from "next/image"
import { projects, skills } from "@/lib/data"
import { Badge } from "@/components/ui/badge"
import PageComponent from "@/components/page"
import { PortfolioItem } from "@/lib/types"
import { ContactForm } from "@/components/contact-form"

export default function Portfolio() {
  return (
    <PageComponent>
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
        <div className="flex max-sm:flex-col gap-4 mt-4 max-sm:w-full">
          <Button className="paper-button font-serif">
            View My Work <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
          <Button variant="outline" className="paper-button-outline font-serif">
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
                products for clients around the world. I specialize in creating
                responsive, accessible websites and applications with React,
                Next.js, and TypeScript.
              </p>
              <p>
                My background in design allows me to bridge the gap between
                design and development, creating seamless user experiences that
                look great and function flawlessly across all devices.
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
              {skills.map((skill) => (
                <Badge
                  key={skill}
                  variant="secondary"
                  className="px-3 py-1 font-serif font-thin paper-tag"
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
          <div className="flex justify-center">
            <div className="relative h-[400px] w-[300px] overflow-hidden rounded-lg paper-photo">
              <Image
                src="/placeholder.svg?height=800&width=600"
                alt="John Doe"
                className="object-cover"
                fill
                priority
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
            <ContactForm />
          </div>
        </div>
      </section>
    </PageComponent>
  )
}

// Project Card Component
function ProjectCard({ project }: { project: PortfolioItem }) {
  return (
    <Card className="overflow-hidden group paper-project">
      <div className="relative aspect-video overflow-hidden">
        <Image
          src={project.image || "/placeholder.svg"}
          alt={project.title}
          className="object-cover transition-transform duration-300 group-hover:scale-105"
          fill
          priority
        />
      </div>
      <CardContent className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-serif font-semibold text-pretty">
            {project.title}
          </h3>
          <span className="text-xs bg-muted px-2 py-1 rounded-full font-serif">
            {project.category}
          </span>
        </div>
        <p className="text-sm text-muted-foreground mb-3 text-pretty font-serif">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-1">
          {project.tags.map((tag) => (
            <Badge
              key={tag}
              variant="secondary"
              className="text-xs text-muted-foreground font-serif font-thin paper-tag"
            >
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
