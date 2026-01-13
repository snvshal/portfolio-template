import { Github, Linkedin, Twitter } from "lucide-react"

export default function Footer() {
  return (
    <footer className="border-t border-ink/20 w-full bg-paper">
      <div className="flex flex-col max-w-6xl mx-auto items-center border-x border-ink/20 py-6 md:py-8 justify-between gap-4 px-6 md:px-16 md:flex-row">
        <div className="flex items-center gap-2">
          <div className="h-6 w-6 rounded-full bg-ink"></div>
          <span className="text-sm font-serif font-semibold">John Doe</span>
        </div>
        <p className="text-center text-sm text-muted-foreground md:text-left font-serif">
          © {new Date().getFullYear()} John Doe. All rights reserved.
        </p>
        <div className="flex gap-4">
          <a
            href="https://github.com/snvshal/portfolio-template"
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
            href="https://twitter.com/snvshal"
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
  )
}
