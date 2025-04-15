"use client"

import { useState } from "react"
import { BlogPost } from "@/lib/contentful"
import BlogCategoryFilter from "@/components/blog-category-filter"
import BlogPostList from "@/components/blog-post-list"

interface BlogContentProps {
  initialPosts: BlogPost[]
  categories: string[]
  isPreviewMode: boolean
}

export default function BlogContent({
  initialPosts,
  categories,
  isPreviewMode
}: BlogContentProps) {
  const [filteredPosts, setFilteredPosts] = useState<BlogPost[]>(initialPosts)

  return (
    <>
      {/* Blog Categories */}
      <section className="w-full py-6 md:py-10 bg-white border-b">
        <div className="container px-4 md:px-6">
          <BlogCategoryFilter
            categories={categories}
            initialPosts={initialPosts}
            isPreviewMode={isPreviewMode}
            onPostsFiltered={setFilteredPosts}
          />
        </div>
      </section>

      {/* Blog Posts */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
        <div className="container px-4 md:px-6">
          <BlogPostList posts={filteredPosts} />
        </div>
      </section>
    </>
  )
}
