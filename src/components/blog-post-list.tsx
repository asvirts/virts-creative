"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { BlogPost } from "@/lib/contentful"

interface BlogPostListProps {
  posts: BlogPost[]
}

export default function BlogPostList({ posts }: BlogPostListProps) {
  return (
    <>
      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <Link
            key={post.sys.id}
            href={`/blog/${post.fields.slug}`}
            className="group"
          >
            <div className="space-y-4">
              <div className="overflow-hidden rounded-lg">
                <img
                  src={
                    post.fields.featuredImage?.fields.file.url
                      ? `https:${post.fields.featuredImage.fields.file.url}`
                      : "/placeholder.svg"
                  }
                  alt={
                    post.fields.featuredImage?.fields.title || post.fields.title
                  }
                  className="aspect-video w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <span className="text-sm font-medium text-black">
                    {post.fields.category}
                  </span>
                  <span className="text-sm text-gray-500">•</span>
                  <span className="text-sm text-gray-500">
                    {new Date(post.fields.publishDate).toLocaleDateString(
                      "en-US",
                      {
                        year: "numeric",
                        month: "long",
                        day: "numeric"
                      }
                    )}
                  </span>
                </div>
                <h3 className="text-xl font-bold group-hover:underline">
                  {post.fields.title}
                </h3>
                <p className="text-gray-500">{post.fields.excerpt}</p>
                <div className="flex items-center gap-2 pt-2">
                  <span className="text-sm text-gray-500">
                    {post.fields.readTime}
                  </span>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
      <div className="mt-12 flex justify-center">
        <Button variant="outline" size="lg">
          Load More Articles
        </Button>
      </div>
    </>
  )
}
