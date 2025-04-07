import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function BlogNotFound() {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex flex-col items-center justify-center flex-1 p-4 text-center">
        <div className="space-y-4 max-w-md">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">
            Blog Post Not Found
          </h1>
          <p className="text-gray-500">
            The blog post you're looking for doesn't exist or has been moved.
          </p>
          <div className="flex flex-col sm:flex-row gap-2 justify-center">
            <Button asChild>
              <Link href="/blog">Back to Blog</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/">Go Home</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
