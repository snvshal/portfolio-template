# Portfolio Website Template

A **Next.js** portfolio template.

## Quick Start

```bash
git clone https://github.com/snvshal/portfolio-template  
cd portfolio-template  
npm install  
npm run dev  
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Email Setup (Resend)

1. Sign up at [Resend](https://resend.com/) and get your API key.  
2. Add it to `.env.local`:

   ```env
   RESEND_API_KEY=your-api-key-here
   ```

3. Update `app/actions.ts` with your email:

   ```typescript
   to: "your-email@example.com", // Replace with your email
   ```

Done! 🚀
