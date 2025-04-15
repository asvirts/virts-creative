import "dotenv/config"
import { createClient } from "contentful"

// Initialize Contentful client
const spaceId = process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID
const accessToken = process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN
const previewToken = process.env.NEXT_PUBLIC_CONTENTFUL_PREVIEW_TOKEN

if (!spaceId || !accessToken) {
  throw new Error(
    "Contentful Space ID and Access Token must be defined in environment variables"
  )
}

// Check if we're on the server side
const isServer = typeof window === "undefined"

if (!isServer) {
  console.warn(
    "Warning: Contentful client is being used on the client side. Make sure to only use it in Server Components or API routes."
  )
}

// Create the Contentful client
export const client = createClient({
  space: spaceId,
  accessToken: accessToken
})

// Initialize preview client (for draft content)
export const previewClient = createClient({
  space: spaceId,
  accessToken: previewToken || "",
  host: "preview.contentful.com"
})

// Get the client to use based on preview mode
export function getClient(preview: boolean = false) {
  return preview ? previewClient : client
}

// Type definitions for blog posts
export type BlogPost = {
  sys: {
    id: string
  }
  fields: {
    title: string
    slug: string
    excerpt: string
    content: any
    publishDate: string
    featuredImage: {
      fields: {
        file: {
          url: string
        }
        title: string
      }
    }
    readTime: string
    category: string
    author: {
      fields: {
        name: string
        picture: {
          fields: {
            file: {
              url: string
            }
          }
        }
      }
    }
    seoMetadata: {
      fields: {
        title: string
        description: string
        keywords: string[]
      }
    }
  }
}

// Get all blog posts
export async function getAllPosts(
  preview: boolean = false
): Promise<BlogPost[]> {
  const response = await getClient(preview).getEntries({
    content_type: "blogPost",
    order: "-fields.publishDate"
  })

  return response.items as unknown as BlogPost[]
}

// Get a single blog post by slug
export async function getPostBySlug(
  slug: string,
  preview: boolean = false
): Promise<BlogPost> {
  const response = await getClient(preview).getEntries({
    content_type: "blogPost",
    "fields.slug": slug,
    limit: 1
  })

  if (!response.items.length) {
    throw new Error(`Post with slug "${slug}" not found`)
  }

  return response.items[0] as unknown as BlogPost
}

// Get posts by category
export async function getPostsByCategory(
  category: string,
  preview: boolean = false
): Promise<BlogPost[]> {
  const response = await getClient(preview).getEntries({
    content_type: "blogPost",
    "fields.category": category,
    order: "-fields.publishDate"
  })

  return response.items as unknown as BlogPost[]
}

// Get all categories
export async function getAllCategories(
  preview: boolean = false
): Promise<string[]> {
  const response = await getClient(preview).getEntries({
    content_type: "blogPost",
    select: "fields.category"
  })

  // Extract unique categories
  const categories = response.items.map((item: any) => item.fields.category)
  return ["All", ...Array.from(new Set(categories))]
}

// Type definitions for portfolio projects
export type PortfolioProject = {
  sys: {
    id: string
  }
  fields: {
    title: string
    slug: string
    category: string
    description: string
    detailedDescription: string
    featuredImage: {
      fields: {
        file: {
          url: string
        }
        title: string
      }
    }
    projectImages?: {
      fields: {
        file: {
          url: string
        }
        title: string
      }
    }[]
    technologies?: string[]
    client?: string
    projectDate: string
    projectUrl?: string
    featured: boolean
    seoMetadata?: {
      fields: {
        title: string
        description: string
        keywords: string[]
      }
    }
  }
}

// Get all portfolio projects
export async function getAllProjects(
  preview: boolean = false
): Promise<PortfolioProject[]> {
  const response = await getClient(preview).getEntries({
    content_type: "portfolioProject",
    order: "-fields.projectDate"
  })

  return response.items as unknown as PortfolioProject[]
}

// Get featured portfolio projects
export async function getFeaturedProjects(
  preview: boolean = false
): Promise<PortfolioProject[]> {
  const response = await getClient(preview).getEntries({
    content_type: "portfolioProject",
    "fields.featured": true,
    order: "-fields.projectDate"
  })

  return response.items as unknown as PortfolioProject[]
}

// Get a single portfolio project by slug
export async function getProjectBySlug(
  slug: string,
  preview: boolean = false
): Promise<PortfolioProject> {
  const response = await getClient(preview).getEntries({
    content_type: "portfolioProject",
    "fields.slug": slug,
    limit: 1
  })

  if (!response.items.length) {
    throw new Error(`Project with slug "${slug}" not found`)
  }

  return response.items[0] as unknown as PortfolioProject
}

// Get projects by category
export async function getProjectsByCategory(
  category: string,
  preview: boolean = false
): Promise<PortfolioProject[]> {
  const response = await getClient(preview).getEntries({
    content_type: "portfolioProject",
    "fields.category": category,
    order: "-fields.projectDate"
  })

  return response.items as unknown as PortfolioProject[]
}

// Get all project categories
export async function getAllProjectCategories(
  preview: boolean = false
): Promise<string[]> {
  const response = await getClient(preview).getEntries({
    content_type: "portfolioProject",
    select: "fields.category"
  })

  // Extract unique categories
  const categories = response.items.map((item: any) => item.fields.category)
  return ["All", ...Array.from(new Set(categories))]
}
