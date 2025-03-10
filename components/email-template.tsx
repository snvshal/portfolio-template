import * as React from "react"
import { EmailFormData } from "@/app/actions"

const styles = {
  container: {
    fontFamily:
      "'SF Pro Display', -apple-system, BlinkMacSystemFont, sans-serif",
    backgroundColor: "#fff",
    padding: "28px",
    maxWidth: "560px",
    margin: "0 auto",
    color: "#222",
    borderRadius: "10px",
    border: "1px solid #e6e6e6",
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.06)",
  },
  title: {
    fontSize: "22px",
    fontWeight: "600",
    color: "#111",
    marginBottom: "24px",
    paddingBottom: "12px",
    borderBottom: "1px solid #ebebeb",
  },
  info: {
    fontSize: "15px",
    color: "#333",
    marginBottom: "14px",
    display: "flex",
    borderBottom: "1px solid #ebebeb",
    paddingBottom: "2px",
  },
  label: {
    fontWeight: "500",
    color: "#666",
    minWidth: "80px",
    paddingRight: "8px",
  },
  link: {
    color: "#1d72b8",
    textDecoration: "none",
    borderBottom: "1px dotted #1d72b8",
  },
  messageBlock: {
    marginTop: "28px",
  },
  messageLabel: {
    fontWeight: "500",
    color: "#444",
    marginBottom: "8px",
    display: "block",
  },
  message: {
    backgroundColor: "#f7f7f7",
    padding: "18px",
    color: "#222",
    fontSize: "15px",
    lineHeight: "1.6",
    borderRadius: "8px",
    border: "1px solid #e0e0e0",
  },
  footer: {
    fontSize: "13px",
    color: "#777",
    marginTop: "28px",
    paddingTop: "12px",
    textAlign: "center" as const,
    borderTop: "1px solid #ebebeb",
  },
}

export const EmailTemplate: React.FC<EmailFormData> = ({
  name,
  email,
  subject,
  message,
}) => {
  return (
    <div style={styles.container}>
      <h2 style={styles.title}>New Message</h2>

      <div style={styles.info}>
        <span style={styles.label}>Name:</span>
        <span>{name}</span>
      </div>

      <div style={styles.info}>
        <span style={styles.label}>Email:</span>
        <a href={`mailto:${email}`} style={styles.link}>
          {email}
        </a>
      </div>

      <div style={styles.info}>
        <span style={styles.label}>Subject:</span>
        <span>{subject}</span>
      </div>

      <div style={styles.messageBlock}>
        <span style={styles.messageLabel}>Message:</span>
        <div style={styles.message}>{message}</div>
      </div>

      <div style={styles.footer}>
        <span>Sent from your portfolio · 2025</span>
      </div>
    </div>
  )
}
