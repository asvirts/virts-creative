import { createClient } from "contentful"

// Initialize Contentful client
export const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID || "",
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN || ""
})

// Initialize preview client (for draft content)
export const previewClient = createClient({
  space: process.env.CONTENTFUL_SPACE_ID || "",
  accessToken: process.env.CONTENTFUL_PREVIEW_TOKEN || "",
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
