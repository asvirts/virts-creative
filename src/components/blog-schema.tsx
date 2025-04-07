import { BlogPost } from "@/lib/contentful"

type BlogSchemaProps = {
  post: BlogPost
  url: string
}

export default function BlogSchema({ post, url }: BlogSchemaProps) {
  const { fields } = post

  // Format date for schema
  const datePublished = new Date(fields.publishDate).toISOString()

  // Build schema
  const schema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: fields.title,
    description: fields.excerpt,
    image: fields.featuredImage?.fields.file.url
      ? `https:${fields.featuredImage.fields.file.url}`
      : "",
    datePublished,
    dateModified: datePublished,
    author: {
      "@type": "Person",
      name: fields.author?.fields.name || "Virts Creative",
      image: fields.author?.fields.picture?.fields.file.url
        ? `https:${fields.author.fields.picture.fields.file.url}`
        : ""
    },
    publisher: {
      "@type": "Organization",
      name: "Virts Creative",
      logo: {
        "@type": "ImageObject",
        url: "https://virtscreative.com/logo.png"
      }
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url
    },
    keywords: fields.seoMetadata?.fields.keywords?.join(", ") || ""
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
