# Portfolio Website Template

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Email Setup

This template includes a contact form that allows visitors to send emails to the portfolio owner using [Resend](https://resend.com/). To enable this feature, you need to set up the `RESEND_API_KEY` in your environment variables.

### Steps to Configure Resend Email:

1. Sign up at [Resend](https://resend.com/) and get your API key.
2. Add `RESEND_API_KEY` to your `.env.local` file:

   ```env
   RESEND_API_KEY=your-api-key-here
   ```

3. In `app/actions.ts`, replace the `to` email address with your valid email:

   ```typescript
   const { data, error } = await resend.emails.send({
     from: "Portfolio Contact <onboarding@resend.dev>",
     to: "your-email@example.com", // Replace with your email
     subject: `Portfolio Contact: ${subject}`,
     text: `Name: ${name}\n\nEmail: ${email}\n\nMessage: ${message}`,
   })
   ```

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
