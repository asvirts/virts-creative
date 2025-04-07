import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { getAllPosts, getAllCategories, BlogPost } from "@/lib/contentful"
import { Metadata } from "next"
import { draftMode } from "next/headers"

export const metadata: Metadata = {
  title: "Blog | Web Design & Development Insights",
  description:
    "Stay updated with the latest trends and insights in web design, development, and digital marketing.",
  keywords:
    "web design blog, development insights, digital marketing tips, design trends",
  openGraph: {
    title: "Blog | Web Design & Development Insights",
    description:
      "Stay updated with the latest trends and insights in web design, development, and digital marketing.",
    url: "https://virtscreative.com/blog",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog | Web Design & Development Insights",
    description:
      "Stay updated with the latest trends and insights in web design, development, and digital marketing."
  }
}

export default async function BlogPage() {
  // Check if preview mode is enabled
  const { isEnabled: isPreviewMode } = await draftMode()

  // Fetch posts and categories from Contentful
  const posts = await getAllPosts(isPreviewMode)
  const categories = await getAllCategories(isPreviewMode)

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-white to-gray-100">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Our Blog
              </h1>
              <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Insights, tips, and trends in web design, development, and
                digital marketing.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Categories */}
      <section className="w-full py-6 md:py-10 bg-white border-b">
        <div className="container px-4 md:px-6">
          <div className="flex flex-wrap items-center justify-center gap-2 md:gap-4">
            {categories.map((category, index) => (
              <Button
                key={index}
                variant={index === 0 ? "default" : "outline"}
                className="rounded-full"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
        <div className="container px-4 md:px-6">
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
                        post.fields.featuredImage?.fields.title ||
                        post.fields.title
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
        </div>
      </section>

      {/* Newsletter */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Subscribe to Our Newsletter
              </h2>
              <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Stay updated with our latest insights and industry news.
              </p>
            </div>
            <div className="mx-auto w-full max-w-md space-y-2">
              <form className="flex space-x-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                />
                <Button
                  type="submit"
                  className="bg-black text-white hover:bg-gray-800"
                >
                  Subscribe
                </Button>
              </form>
              <p className="text-xs text-gray-500">
                By subscribing, you agree to our Terms of Service and Privacy
                Policy.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
