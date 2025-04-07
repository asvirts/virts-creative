import { MetadataRoute } from "next"
import { getAllPosts } from "@/lib/contentful"

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // Fetch all blog posts
  const posts = await getAllPosts()

  // Generate blog post URLs
  const blogPostUrls = posts.map((post) => ({
    url: `https://virtscreative.com/blog/${post.fields.slug}`,
    lastModified: new Date(post.fields.publishDate),
    changeFrequency: "monthly" as const,
    priority: 0.8
  }))

  // Static pages
  const staticPages = [
    {
      url: "https://virtscreative.com",
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 1.0
    },
    {
      url: "https://virtscreative.com/about",
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8
    },
    {
      url: "https://virtscreative.com/services",
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.9
    },
    {
      url: "https://virtscreative.com/portfolio",
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.9
    },
    {
      url: "https://virtscreative.com/blog",
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.9
    },
    {
      url: "https://virtscreative.com/contact",
      lastModified: new Date(),
      changeFrequency: "yearly" as const,
      priority: 0.7
    }
  ]

  // Combine all URLs
  return [...staticPages, ...blogPostUrls]
}
