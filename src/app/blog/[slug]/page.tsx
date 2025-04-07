import { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { getPostBySlug, getAllPosts } from "@/lib/contentful"
import ReactMarkdown from "react-markdown"
import BlogSchema from "@/components/blog-schema"
import { draftMode } from "next/headers"

type PageProps = {
  params: {
    slug: string
  }
  searchParams: Record<string, string | string[] | undefined>
}

// Generate metadata for the page
export async function generateMetadata({
  params
}: PageProps): Promise<Metadata> {
  const { isEnabled: isPreviewMode } = await draftMode()

  try {
    const post = await getPostBySlug(params.slug, isPreviewMode)
    const { fields } = post

    return {
      title: fields.seoMetadata?.fields.title || fields.title,
      description: fields.seoMetadata?.fields.description || fields.excerpt,
      keywords: fields.seoMetadata?.fields.keywords || [],
      openGraph: {
        title: fields.seoMetadata?.fields.title || fields.title,
        description: fields.seoMetadata?.fields.description || fields.excerpt,
        url: `https://virtscreative.com/blog/${params.slug}`,
        type: "article",
        publishedTime: new Date(fields.publishDate).toISOString(),
        images: [
          {
            url: fields.featuredImage?.fields.file.url || "",
            width: 1200,
            height: 630,
            alt: fields.featuredImage?.fields.title || fields.title
          }
        ]
      },
      twitter: {
        card: "summary_large_image",
        title: fields.seoMetadata?.fields.title || fields.title,
        description: fields.seoMetadata?.fields.description || fields.excerpt,
        images: [fields.featuredImage?.fields.file.url || ""]
      }
    }
  } catch (error) {
    return {
      title: "Blog Post Not Found",
      description: "The requested blog post could not be found."
    }
  }
}

// Generate static paths for all blog posts
export async function generateStaticParams() {
  const posts = await getAllPosts()

  return posts.map((post) => ({
    slug: post.fields.slug
  }))
}

export default async function BlogPostPage({ params }: PageProps) {
  // Check if preview mode is enabled
  const { isEnabled: isPreviewMode } = await draftMode()

  try {
    const post = await getPostBySlug(params.slug, isPreviewMode)
    const { fields } = post

    const publishDate = new Date(fields.publishDate).toLocaleDateString(
      "en-US",
      {
        year: "numeric",
        month: "long",
        day: "numeric"
      }
    )

    return (
      <div className="flex flex-col min-h-screen">
        {/* Add structured data for SEO */}
        <BlogSchema
          post={post}
          url={`https://virtscreative.com/blog/${params.slug}`}
        />

        {/* Hero Section with Featured Image */}
        <section className="w-full relative h-[400px] md:h-[500px] lg:h-[600px]">
          <div className="absolute inset-0">
            <img
              src={
                fields.featuredImage?.fields.file.url
                  ? `https:${fields.featuredImage.fields.file.url}`
                  : "/placeholder.svg"
              }
              alt={fields.featuredImage?.fields.title || fields.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40" />
          </div>

          <div className="container mx-auto relative z-10 h-full flex flex-col justify-end pb-12 px-4 md:px-6">
            <div className="max-w-3xl text-white">
              <div className="flex items-center gap-2 mb-4">
                <span className="text-sm font-medium bg-white/20 px-3 py-1 rounded-full">
                  {fields.category}
                </span>
                <span className="text-sm">•</span>
                <span className="text-sm">{publishDate}</span>
                <span className="text-sm">•</span>
                <span className="text-sm">{fields.readTime}</span>
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">
                {fields.title}
              </h1>
              <p className="mt-4 text-lg md:text-xl opacity-90">
                {fields.excerpt}
              </p>

              {/* Author information if available */}
              {fields.author && (
                <div className="flex items-center mt-6 gap-3">
                  {fields.author.fields.picture && (
                    <div className="w-12 h-12 rounded-full overflow-hidden relative">
                      <img
                        src={`https:${fields.author.fields.picture.fields.file.url}`}
                        alt={fields.author.fields.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  )}
                  <div>
                    <div className="text-sm font-medium">
                      By {fields.author.fields.name}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Article Content */}
        <article className="container mx-auto max-w-3xl px-4 md:px-6 py-12 md:py-16 lg:py-20">
          <div className="prose lg:prose-lg prose-headings:font-bold prose-h2:text-2xl prose-h3:text-xl prose-img:rounded-lg prose-img:mx-auto max-w-none">
            <ReactMarkdown>{fields.content}</ReactMarkdown>
          </div>

          {/* Tags */}
          <div className="mt-12 pt-6 border-t">
            <div className="flex flex-wrap gap-2">
              {fields.seoMetadata?.fields.keywords?.map((keyword, index) => (
                <span
                  key={index}
                  className="bg-gray-100 px-3 py-1 rounded-full text-sm"
                >
                  {keyword}
                </span>
              ))}
            </div>
          </div>

          {/* Back to Blog */}
          <div className="mt-12">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-black font-medium hover:underline"
            >
              ← Back to Blog
            </Link>
          </div>
        </article>

        {/* Newsletter */}
        <section className="w-full py-12 md:py-24 bg-gray-50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
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
                  <button
                    type="submit"
                    className="bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800"
                  >
                    Subscribe
                  </button>
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
  } catch (error) {
    notFound()
  }
}
