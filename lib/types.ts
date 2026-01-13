export type BlogPost = {
  id: string
  title: string
  slug: string
  excerpt: string
  content: string
  image: string
  date: string
  category: string
  readTime: string
  author: string
}

export type Project = {
  title: string
  description: string
  image: string
  category: string
  tags: string[]
}

export type PortfolioItem = {
  title: string
  description: string
  image: string
  category: string
  tags: string[]
}
