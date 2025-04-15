"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { getPostsByCategory, BlogPost } from "@/lib/contentful"

interface BlogCategoryFilterProps {
  categories: string[]
  initialPosts: BlogPost[]
  isPreviewMode: boolean
  onPostsFiltered: (filteredPosts: BlogPost[]) => void
}

export default function BlogCategoryFilter({
  categories,
  initialPosts,
  isPreviewMode,
  onPostsFiltered
}: BlogCategoryFilterProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>("All")

  // Handle category selection
  const handleCategorySelect = async (category: string) => {
    setSelectedCategory(category)

    // Filter posts based on selected category
    if (category === "All") {
      onPostsFiltered(initialPosts)
    } else {
      const filteredPosts = await getPostsByCategory(category, isPreviewMode)
      onPostsFiltered(filteredPosts)
    }
  }

  // Initialize with all posts
  useEffect(() => {
    onPostsFiltered(initialPosts)
  }, [initialPosts, onPostsFiltered])

  return (
    <div className="flex flex-wrap items-center justify-center gap-2 md:gap-4">
      {categories.map((category) => (
        <Button
          key={category}
          variant={selectedCategory === category ? "default" : "outline"}
          className="rounded-full"
          onClick={() => handleCategorySelect(category)}
        >
          {category}
        </Button>
      ))}
    </div>
  )
}
