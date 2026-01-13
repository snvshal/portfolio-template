import { BlogPost, Project } from "./types"

export const projects: Project[] = [
  {
    title: "E-commerce Platform",
    description: "A modern e-commerce platform built with Next.js and Stripe",
    image: "/placeholder.svg?height=600&width=800",
    category: "Website",
    tags: ["Next.js", "Stripe", "Tailwind CSS"],
  },
  {
    title: "Task Management App",
    description: "A productivity app for managing tasks and projects",
    image: "/placeholder.svg?height=600&width=800",
    category: "Application",
    tags: ["React", "Firebase", "Framer Motion"],
  },
  {
    title: "Finance Dashboard",
    description: "A dashboard for tracking personal finances and investments",
    image: "/placeholder.svg?height=600&width=800",
    category: "UI Design",
    tags: ["Figma", "UI/UX", "Dashboard"],
  },
  {
    title: "Travel Blog",
    description: "A blog for sharing travel experiences and photography",
    image: "/placeholder.svg?height=600&width=800",
    category: "Website",
    tags: ["Next.js", "MDX", "Tailwind CSS"],
  },
  {
    title: "Weather App",
    description: "A weather application with real-time data and forecasts",
    image: "/placeholder.svg?height=600&width=800",
    category: "Application",
    tags: ["React", "API", "Geolocation"],
  },
  {
    title: "Portfolio Redesign",
    description: "A portfolio website redesign for a photographer",
    image: "/placeholder.svg?height=600&width=800",
    category: "UI Design",
    tags: ["Figma", "UI/UX", "Portfolio"],
  },
]

export const skills: string[] = [
  "React",
  "Next.js",
  "TypeScript",
  "Tailwind CSS",
  "Node.js",
  "Figma",
  "Framer Motion",
  "GraphQL",
]

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "Getting Started with Next.js 15",
    slug: "getting-started-with-nextjs-15",
    excerpt:
      "Learn the fundamentals of Next.js 15 and how to build modern web applications with the latest features.",
    content: `# Getting Started with Next.js 15

Next.js 15 brings exciting new features and improvements to the React framework. In this comprehensive guide, we'll explore what's new and how to make the most of it.

## What's New in Next.js 15

### 1. Improved Performance
The latest version includes significant performance improvements, making your applications faster than ever.

### 2. Better Developer Experience
New tooling and features make development more intuitive and enjoyable.

### 3. Enhanced Type Safety
Built-in TypeScript support with better type inference.

## Getting Started

To create a new Next.js 15 project, run:

\`\`\`bash
npx create-next-app@latest my-app
cd my-app
npm run dev
\`\`\`

## Building Your First Page

Create a new file in the \`app\` directory and start building!

## Conclusion

Next.js 15 is a powerful tool for building modern web applications. Start exploring today!`,
    image: "/placeholder.svg",
    date: "Jan 10, 2025",
    category: "Next.js",
    readTime: "5 min",
    author: "John Doe",
  },
  {
    id: "2",
    title: "Mastering Tailwind CSS for Modern Design",
    slug: "mastering-tailwind-css",
    excerpt:
      "Discover advanced techniques and best practices for creating beautiful designs with Tailwind CSS utility-first approach.",
    content: `# Mastering Tailwind CSS

Tailwind CSS has revolutionized the way we write CSS. Let's explore advanced techniques to master this powerful framework.

## Utility-First Approach

Tailwind follows a utility-first philosophy, allowing you to build complex components without writing custom CSS.

## Advanced Features

### Custom Configuration
Extend Tailwind with your own color schemes and spacing systems.

### Component Composition
Learn how to create reusable component patterns.

### Performance Optimization
Tips for keeping your CSS bundle small and efficient.

## Best Practices

1. Use semantic class names
2. Leverage component composition
3. Customize your theme appropriately

## Conclusion

Tailwind CSS is an essential tool for modern web development. Master it to boost your productivity!`,
    image: "/placeholder.svg",
    date: "Jan 8, 2025",
    category: "CSS",
    readTime: "7 min",
    author: "John Doe",
  },
  {
    id: "3",
    title: "React Performance Optimization Techniques",
    slug: "react-performance-optimization",
    excerpt:
      "Learn essential techniques to optimize your React applications and improve user experience dramatically.",
    content: `# React Performance Optimization

Performance is crucial for user experience. Let's explore key optimization techniques in React.

## Understanding React Rendering

React's reconciliation algorithm is powerful but requires optimization for large applications.

## Key Optimization Techniques

### 1. Code Splitting
Use dynamic imports to load code on demand.

### 2. Memoization
Prevent unnecessary re-renders with React.memo and useMemo.

### 3. Virtual Scrolling
Optimize long lists with virtualization.

## Tools and Monitoring

- React DevTools Profiler
- Lighthouse
- Web Vitals

## Best Practices

Follow these guidelines for optimal performance and user experience.

## Conclusion

Optimizing React applications is an ongoing process. Start with these techniques!`,
    image: "/placeholder.svg",
    date: "Jan 5, 2025",
    category: "React",
    readTime: "6 min",
    author: "John Doe",
  },
  {
    id: "4",
    title: "The Art of Responsive Web Design",
    slug: "art-of-responsive-design",
    excerpt:
      "Master the principles of responsive design and create websites that look perfect on any device.",
    content: `# The Art of Responsive Web Design

Creating responsive websites is now essential. Let's explore the principles and practices.

## Mobile-First Approach

Start with mobile and enhance for larger screens. This philosophy ensures a great experience for all users.

## Breakpoints and Media Queries

Understanding breakpoints is crucial for responsive design.

## Flexible Layouts

Use flexbox and grid to create flexible layouts.

## Images and Media

Optimize images for different screen sizes using responsive image techniques.

## Testing

Always test your design on real devices and use browser developer tools.

## Conclusion

Responsive design is fundamental to modern web development.`,
    image: "/placeholder.svg",
    date: "Jan 3, 2025",
    category: "Design",
    readTime: "8 min",
    author: "John Doe",
  },
  {
    id: "5",
    title: "TypeScript Best Practices for Developers",
    slug: "typescript-best-practices",
    excerpt:
      "Improve your TypeScript skills with essential best practices and patterns used by professional developers.",
    content: `# TypeScript Best Practices

TypeScript brings type safety to JavaScript. Here are essential best practices.

## Type System Fundamentals

Understanding TypeScript's type system is key to writing better code.

## Common Patterns

### Generics
Write reusable, type-safe code with generics.

### Union Types
Use union types for flexible yet safe code.

### Interfaces vs Types
Understand when to use each approach.

## Advanced Techniques

- Utility types
- Conditional types
- Mapped types

## Performance Tips

- Enable strict mode
- Use const assertions
- Avoid any types

## Conclusion

TypeScript elevates your JavaScript development. Master these practices!`,
    image: "/placeholder.svg",
    date: "Dec 31, 2024",
    category: "TypeScript",
    readTime: "9 min",
    author: "John Doe",
  },
  {
    id: "6",
    title: "Building Accessible Web Applications",
    slug: "building-accessible-web-apps",
    excerpt:
      "Learn how to build inclusive web applications that work for everyone, regardless of abilities or technology.",
    content: `# Building Accessible Web Applications

Accessibility is a fundamental right. Learn to build inclusive applications.

## Web Content Accessibility Guidelines (WCAG)

WCAG provides standards for accessible web content.

## Key Principles

### Perceivable
Content must be perceivable to all users.

### Operable
Users must be able to navigate and interact.

### Understandable
Content must be clear and understandable.

### Robust
Content must work with assistive technologies.

## Implementation

- Use semantic HTML
- Provide alt text for images
- Ensure keyboard navigation
- Use proper contrast ratios

## Tools

- axe DevTools
- WAVE
- Lighthouse

## Conclusion

Accessibility benefits everyone. Make it a priority in your projects!`,
    image: "/placeholder.svg",
    date: "Dec 28, 2024",
    category: "Accessibility",
    readTime: "7 min",
    author: "John Doe",
  },
]
