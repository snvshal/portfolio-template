"use server"

import { Resend } from "resend"
import { EmailTemplate } from "@/components/email-template"

const resend = new Resend(process.env.RESEND_API_KEY)

export type EmailFormData = {
  name: string
  email: string
  subject: string
  message: string
}

export async function sendEmail(
  formData: FormData
): Promise<{ success: boolean; message: string }> {
  try {
    // Extract form data
    const name = formData.get("name") as string
    const email = formData.get("email") as string
    const subject = formData.get("subject") as string
    const message = formData.get("message") as string

    // Validate form data
    if (!name || !email || !subject || !message) {
      return {
        success: false,
        message: "Please fill in all fields",
      }
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailPattern.test(email)) {
      return {
        success: false,
        message: "Please enter a valid email address",
      }
    }

    // Send email using Resend
    const { error } = await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      // to: "your-email@example.com", // Replace with your email
      to: process.env.EMAIL_ADDRESS as string,
      subject: `Portfolio Contact: ${subject}`,
      react: await EmailTemplate({ name, email, subject, message }),
      text: message,
    })

    if (error) {
      console.error("Error sending email:", error)
      return {
        success: false,
        message: "Failed to send email. Please try again later.",
      }
    }

    return {
      success: true,
      message: "Your message has been sent! I'll get back to you soon.",
    }
  } catch (error) {
    console.error("Error in sendEmail:", error)
    return {
      success: false,
      message: "An unexpected error occurred. Please try again later.",
    }
  }
}
