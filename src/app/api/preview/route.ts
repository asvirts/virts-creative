import { draftMode } from "next/headers"
import { redirect } from "next/navigation"
import { getPostBySlug } from "@/lib/contentful"

export async function GET(request: Request) {
  // Parse query string parameters
  const { searchParams } = new URL(request.url)
  const slug = searchParams.get("slug")
  const secret = searchParams.get("secret")

  // Check the secret and slug
  if (secret !== process.env.CONTENTFUL_PREVIEW_SECRET) {
    return new Response("Invalid token", { status: 401 })
  }

  // If no slug was provided, redirect to the home page
  if (!slug) {
    redirect("/")
  }

  try {
    // Fetch the post to make sure it exists
    await getPostBySlug(slug, true)

    // Enable Draft Mode
    draftMode().enable()

    // Redirect to the post page
    redirect(`/blog/${slug}`)
  } catch (error) {
    // If the post doesn't exist, return 404
    return new Response("Post not found", { status: 404 })
  }
}
