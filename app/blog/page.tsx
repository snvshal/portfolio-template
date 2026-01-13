import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { blogPosts } from "@/lib/data"
import { BlogPost } from "@/lib/types"
import PageComponent from "@/components/page"

export const metadata = {
  title: "Blog | John Doe",
  description: "Thoughts on web development, design, and technology",
}

export default function BlogsPage() {
  return (
    <PageComponent>
      {/* Hero Section */}
      <section className="paper-card flex flex-col items-start gap-4 pb-12 md:pb-16">
        <h1 className="text-3xl font-serif font-bold tracking-tight sm:text-5xl md:text-6xl">
          Blog & Articles
        </h1>
        <p className="max-w-[600px] text-lg text-muted-foreground md:text-xl font-serif">
          Thoughts on web development, UI design, and technology. Join me as I
          share insights from my journey as a developer.
        </p>
      </section>

      {/* Blog Grid */}
      <section className="py-12 md:py-24">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
      </section>
    </PageComponent>
  )
}

// Blog Card Component
function BlogCard({ post }: { post: BlogPost }) {
  return (
    <Link href={`/blog/${post.slug}`}>
      <Card className="overflow-hidden group paper-project h-full hover:shadow-lg transition-shadow cursor-pointer">
        <div className="relative aspect-video overflow-hidden bg-secondary">
          <Image
            src={post.image || "/placeholder.svg"}
            alt={post.title}
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            fill
            priority
          />
        </div>
        <CardContent className="p-4 flex flex-col h-full">
          <div className="mb-2">
            <div className="flex items-center justify-between gap-2 mb-2">
              <span className="text-xs font-serif text-muted-foreground">
                {post.date}
              </span>
              <span className="text-xs bg-muted px-2 py-1 rounded-full font-serif">
                {post.category}
              </span>
            </div>
          </div>
          <h3 className="font-serif font-semibold text-lg mb-2 line-clamp-2 text-pretty group-hover:text-primary transition-colors">
            {post.title}
          </h3>
          <p className="text-sm text-muted-foreground text-pretty mb-4 font-serif line-clamp-3 flex-grow">
            {post.excerpt}
          </p>
          <div className="flex items-center justify-between">
            <span className="text-xs text-muted-foreground font-serif">
              {post.readTime} read
            </span>
            <ArrowRight className="h-4 w-4 text-primary group-hover:translate-x-1 transition-transform" />
          </div>
        </CardContent>
      </Card>
    </Link>
  )
}
