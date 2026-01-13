"use client"

import { useState } from "react"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Menu } from "lucide-react"

export function MobileNav() {
  const [open, setOpen] = useState(false)
  const handleLinkClick = () => setOpen(false)

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="h-6 w-6" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="bg-paper">
        <nav className="flex flex-col gap-6 mt-8">
          <Link
            href="/#work"
            className="text-lg font-medium hover:text-primary font-serif"
            onClick={handleLinkClick}
          >
            Work
          </Link>
          <Link
            href="/#about"
            className="text-lg font-medium hover:text-primary font-serif"
            onClick={handleLinkClick}
          >
            About
          </Link>
          <Link
            href="/blog"
            className="text-lg font-medium hover:text-primary font-serif"
            onClick={handleLinkClick}
          >
            Blog
          </Link>
          <Link
            href="/#contact"
            className="text-lg font-medium hover:text-primary font-serif"
            onClick={handleLinkClick}
          >
            Contact
          </Link>
          <Button
            variant="outline"
            className="font-serif mt-4 bg-transparent border-ink/20 hover:border-primary hover:text-secondary hover:bg-primary"
          >
            Resume
          </Button>
        </nav>
      </SheetContent>
    </Sheet>
  )
}
