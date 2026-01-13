import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import PageComponent from "@/components/page"
import { blogPosts } from "@/lib/data"
import { MarkdownRenderer } from "@/components/markdown-renderer"

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const resolvedParams = await params
  const post = blogPosts.find((p) => p.slug === resolvedParams.slug)

  if (!post) {
    return {
      title: "Post Not Found",
    }
  }

  return {
    title: `${post.title} | John Doe's Blog`,
    description: post.excerpt,
  }
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }))
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const resolvedParams = await params
  const post = blogPosts.find((p) => p.slug === resolvedParams.slug)

  if (!post) {
    notFound()
  }

  const relatedPosts = blogPosts
    .filter((p) => p.category === post.category && p.id !== post.id)
    .slice(0, 3)

  return (
    <PageComponent>
      {/* Back Button */}
      <Link
        href="/blog"
        className="inline-flex items-center gap-2 text-primary hover:text-primary/80 mb-8 font-serif"
      >
        <ArrowLeft className="h-4 w-4" />
        <span>Back to Blog</span>
      </Link>

      {/* Article Header */}
      <article className="max-w-3xl mx-auto">
        <header className="mb-8">
          <div className="flex items-center gap-4 mb-4">
            <span className="text-sm font-serif text-muted-foreground">
              {post.date}
            </span>
            <span className="text-sm bg-muted px-3 py-1 rounded-full font-serif">
              {post.category}
            </span>
            <span className="text-sm font-serif text-muted-foreground">
              {post.readTime} read
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl text-pretty font-serif font-bold tracking-tight mb-4">
            {post.title}
          </h1>
          <p className="text-lg text-muted-foreground text-pretty font-serif">
            {post.excerpt}
          </p>
        </header>

        {/* Featured Image */}
        <div className="relative aspect-video overflow-hidden rounded-lg mb-12 paper-project border-0 shadow-md">
          <Image
            src={post.image || "/placeholder.svg"}
            alt={post.title}
            className="object-cover"
            fill
            priority
          />
        </div>

        {/* Article Content */}
        <div className="paper-card mb-12">
          <div className="prose prose-sm md:prose-base max-w-none font-serif text-foreground">
            <div className="whitespace-pre-wrap leading-relaxed">
              <MarkdownRenderer content={post.content} />
            </div>
          </div>
        </div>

        {/* Author Info */}
        <div className="paper-card mb-12">
          <div className="flex items-center gap-4">
            <div className="h-16 w-16 rounded-full bg-secondary flex items-center justify-center flex-shrink-0">
              <span className="text-xl font-serif font-bold">
                {post.author.charAt(0)}
              </span>
            </div>
            <div>
              <h3 className="font-serif font-semibold text-lg">
                {post.author}
              </h3>
              <p className="text-sm text-muted-foreground font-serif">
                Frontend Developer & UI Designer
              </p>
            </div>
          </div>
        </div>

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <section>
            <h2 className="text-2xl font-serif font-bold mb-6">
              Related Articles
            </h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {relatedPosts.map((relatedPost) => (
                <Link
                  key={relatedPost.id}
                  href={`/blog/${relatedPost.slug}`}
                  className="paper-project group p-4 rounded-lg hover:shadow-lg transition-shadow"
                >
                  <div className="relative aspect-video overflow-hidden rounded mb-3 bg-secondary">
                    <Image
                      src={relatedPost.image || "/placeholder.svg"}
                      alt={relatedPost.title}
                      className="object-cover group-hover:scale-105 transition-transform"
                      fill
                      priority
                    />
                  </div>
                  <h3 className="font-serif font-semibold line-clamp-2 group-hover:text-primary transition-colors">
                    {relatedPost.title}
                  </h3>
                  <p className="text-xs text-muted-foreground font-serif mt-2">
                    {relatedPost.date}
                  </p>
                </Link>
              ))}
            </div>
          </section>
        )}
      </article>
    </PageComponent>
  )
}
