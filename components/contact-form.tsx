"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { sendEmail } from "@/app/actions"
import { toast } from "sonner"

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setIsSubmitting(true)

    const form = event.target as HTMLFormElement
    const formData = new FormData(form)

    try {
      const { success } = await sendEmail(formData)

      if (!success) {
        toast.error("Something went wrong", {
          description: "Your message couldn't be sent.",
        })
      }

      toast.success("Message sent!", {
        description: "Thank you for your message.",
      })

      form.reset()
    } catch (error) {
      toast.error("Something went wrong", {
        description: "Your message couldn't be sent.",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form className="space-y-4 paper-form" onSubmit={handleSubmit}>
      <div className="grid gap-4 md:grid-cols-2">
        <div className="space-y-2">
          <label htmlFor="name" className="text-sm font-medium font-serif">
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
          <label htmlFor="email" className="text-sm font-medium font-serif">
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
        <label htmlFor="subject" className="text-sm font-medium font-serif">
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
        <label htmlFor="message" className="text-sm font-medium font-serif">
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
  )
}
