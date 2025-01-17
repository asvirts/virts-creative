import { groq } from "next-sanity"
import { client } from "../../../sanity/lib/client"
import Link from "next/link"
import Image from "next/image"
import { urlFor } from "@/sanity/lib/image"

interface Post {
  _id: string
  title: string
  slug: { current: string }
  mainImage: {
    asset: {
      _ref: string
    }
  }
  body: string
}

export default async function BlogPage() {
  const posts = await client.fetch(groq`*[_type == "post"]`)
  console.log(posts)
  return (
    <div>
      <h1 className="text-2xl font-bold">Blog</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 py-16">
        {posts.map((post: Post) => (
          <div
            key={post._id}
            className="bg-white flex flex-col gap-3 p-4 rounded-md shadow-md"
          >
            <Image
              src={urlFor(post.mainImage).width(300).height(150).url()}
              alt={post.title}
              width={300}
              height={150}
              className="rounded-md w-full object-cover"
            />
            <h2 className="text-lg font-bold">{post.title}</h2>
            <Link href={post.slug.current}>Read More</Link>
          </div>
        ))}
      </div>
    </div>
  )
}
