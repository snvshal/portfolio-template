import Link from "next/link"
import { Button } from "@/components/ui/button"
import { MobileNav } from "@/components/mobile-nav"

export default function Header() {
  return (
    <header className="sticky top-0 border-ink/20 z-40 w-full border-b shadow-sm">
      <div className="flex h-16 max-w-6xl mx-auto px-6 md:px-16 items-center justify-between border-x border-ink/20 bg-paper backdrop-blur supports-[backdrop-filter]:bg-paper/60">
        <div className="flex items-center gap-2">
          <Link
            href="/"
            className="flex items-center gap-2 hover:opacity-70 transition-opacity"
          >
            <div className="h-8 w-8 rounded-full bg-foreground"></div>
            <span className="text-lg font-serif font-semibold">John Doe</span>
          </Link>
        </div>
        <nav className="hidden md:flex items-center gap-6">
          <Link
            href="/#work"
            className="text-sm font-medium hover:text-primary"
          >
            Work
          </Link>
          <Link
            href="/#about"
            className="text-sm font-medium hover:text-primary"
          >
            About
          </Link>
          <Link href="/blog" className="text-sm font-medium hover:text-primary">
            Blog
          </Link>
          <Link
            href="/#contact"
            className="text-sm font-medium hover:text-primary"
          >
            Contact
          </Link>
          <Button
            variant="outline"
            size="sm"
            className="font-serif bg-transparent border-ink/20 hover:border-primary hover:text-secondary hover:bg-primary"
          >
            Resume
          </Button>
        </nav>
        <MobileNav />
      </div>
    </header>
  )
}
