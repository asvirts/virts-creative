#!/usr/bin/env node

// Load environment variables from .env.local
require("dotenv").config({ path: ".env.local" })

const { createClient } = require("contentful-management")

// Initialize the Contentful Management client
const client = createClient({
  accessToken: process.env.CONTENTFUL_MANAGEMENT_TOKEN || ""
})

async function createSampleContent() {
  try {
    console.log("🚀 Creating sample content in Contentful...")

    // Get space and environment
    const space = await client.getSpace(process.env.CONTENTFUL_SPACE_ID)
    const environment = await space.getEnvironment("master")

    console.log("✅ Connected to Contentful space and environment")

    // Create author
    console.log("Creating sample author...")
    const authorEntry = await environment.createEntry("author", {
      fields: {
        name: {
          "en-US": "Jane Doe"
        },
        bio: {
          "en-US":
            "Jane is a web developer and technical writer with over 5 years of experience in the industry."
        },
        email: {
          "en-US": "jane@example.com"
        },
        socialLinks: {
          "en-US": {
            twitter: "https://twitter.com/janedoe",
            linkedin: "https://linkedin.com/in/janedoe"
          }
        }
      }
    })

    // Create and upload a sample image for the author
    console.log("Uploading author image...")
    const authorImageUpload = await environment.createAsset({
      fields: {
        title: {
          "en-US": "Jane Doe Profile Picture"
        },
        file: {
          "en-US": {
            contentType: "image/jpeg",
            fileName: "jane-doe.jpg",
            upload:
              "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&h=200&auto=format"
          }
        }
      }
    })

    const authorImageProcessed = await authorImageUpload.processForAllLocales()
    const authorImage = await authorImageProcessed.publish()

    // Update the author with the image
    authorEntry.fields.picture = {
      "en-US": {
        sys: {
          type: "Link",
          linkType: "Asset",
          id: authorImage.sys.id
        }
      }
    }

    const publishedAuthor = await (await authorEntry.update()).publish()
    console.log("✅ Author created and published")

    // Create SEO metadata entry
    console.log("Creating SEO metadata...")
    const seoEntry = await environment.createEntry("seoMetadata", {
      fields: {
        title: {
          "en-US":
            "Getting Started with Next.js and Contentful | Virts Creative"
        },
        description: {
          "en-US":
            "Learn how to build a blazing-fast blog using Next.js and Contentful CMS. This guide covers setup, deployment, and best practices."
        },
        keywords: {
          "en-US": [
            "Next.js",
            "Contentful",
            "Web Development",
            "JAMstack",
            "React"
          ]
        }
      }
    })

    const publishedSeo = await (await seoEntry.update()).publish()
    console.log("✅ SEO metadata created and published")

    // Create blog post featured image
    console.log("Uploading blog post featured image...")
    const postImageUpload = await environment.createAsset({
      fields: {
        title: {
          "en-US": "Getting Started with Next.js and Contentful"
        },
        file: {
          "en-US": {
            contentType: "image/jpeg",
            fileName: "nextjs-contentful.jpg",
            upload:
              "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1200&h=800&auto=format"
          }
        }
      }
    })

    const postImageProcessed = await postImageUpload.processForAllLocales()
    const postImage = await postImageProcessed.publish()
    console.log("✅ Blog post image uploaded and published")

    // Create blog post
    console.log("Creating sample blog post...")
    const blogPostEntry = await environment.createEntry("blogPost", {
      fields: {
        title: {
          "en-US": "Getting Started with Next.js and Contentful"
        },
        slug: {
          "en-US": "getting-started-with-nextjs-and-contentful"
        },
        excerpt: {
          "en-US":
            "Learn how to build a blazing-fast blog using Next.js and Contentful CMS. This guide covers everything from initial setup to deployment."
        },
        content: {
          "en-US": `# Getting Started with Next.js and Contentful

## Introduction

Next.js and Contentful make a powerful combination for creating modern web applications. Next.js is a React framework that enables server-side rendering and static site generation, while Contentful is a headless CMS that provides a flexible content infrastructure.

## Setting Up Your Next.js Project

First, let's create a new Next.js project:

\`\`\`bash
npx create-next-app my-blog
cd my-blog
\`\`\`

This command creates a new Next.js application with a default structure. Now, let's install the Contentful SDK:

\`\`\`bash
npm install contentful
\`\`\`

## Connecting to Contentful

Create a new file called \`contentful.js\` in your project's \`lib\` directory:

\`\`\`javascript
import { createClient } from 'contentful';

export const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
});
\`\`\`

Don't forget to add your Contentful credentials to your \`.env.local\` file:

\`\`\`
CONTENTFUL_SPACE_ID=your_space_id
CONTENTFUL_ACCESS_TOKEN=your_access_token
\`\`\`

## Creating Content Models in Contentful

Before we can fetch content, we need to define our content models in Contentful. For a blog, we might want to create:

1. **Blog Post** - with fields for title, slug, content, featured image, etc.
2. **Author** - with fields for name, bio, profile picture, etc.
3. **Category** - with fields for name and description.

## Fetching Data from Contentful

Now, let's create a function to fetch blog posts from Contentful:

\`\`\`javascript
export async function getAllPosts() {
  const entries = await client.getEntries({
    content_type: 'blogPost',
    order: '-fields.publishedDate',
  });
  
  return entries.items;
}
\`\`\`

## Creating Blog Pages

Using Next.js, we can create static pages for our blog posts. Create a file called \`[slug].js\` in the \`pages/blog\` directory:

\`\`\`javascript
import { getAllPosts, getPostBySlug } from '../lib/contentful';

export default function BlogPost({ post }) {
  return (
    <div>
      <h1>{post.fields.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: post.fields.content }} />
    </div>
  );
}

export async function getStaticPaths() {
  const posts = await getAllPosts();
  
  return {
    paths: posts.map(post => ({
      params: { slug: post.fields.slug },
    })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const post = await getPostBySlug(params.slug);
  
  return {
    props: {
      post,
    },
  };
}
\`\`\`

## Conclusion

You now have a basic Next.js blog that fetches content from Contentful. From here, you can expand your application by adding features like:

- Pagination for blog posts
- Categories and tags
- Search functionality
- Comments section
- And much more!

The combination of Next.js and Contentful gives you a powerful, flexible foundation for building modern web applications.`
        },
        publishDate: {
          "en-US": new Date().toISOString()
        },
        featuredImage: {
          "en-US": {
            sys: {
              type: "Link",
              linkType: "Asset",
              id: postImage.sys.id
            }
          }
        },
        readTime: {
          "en-US": "5 min read"
        },
        category: {
          "en-US": "Web Development"
        },
        author: {
          "en-US": {
            sys: {
              type: "Link",
              linkType: "Entry",
              id: publishedAuthor.sys.id
            }
          }
        },
        seoMetadata: {
          "en-US": {
            sys: {
              type: "Link",
              linkType: "Entry",
              id: publishedSeo.sys.id
            }
          }
        }
      }
    })

    await (await blogPostEntry.update()).publish()
    console.log("✅ Blog post created and published")

    console.log("🎉 Sample content created successfully!")
    console.log(
      "Visit: https://app.contentful.com/spaces/" +
        process.env.CONTENTFUL_SPACE_ID
    )
  } catch (error) {
    console.error("❌ Error creating sample content:", error.message)
    if (error.details && error.details.errors) {
      console.error(
        "Error details:",
        JSON.stringify(error.details.errors, null, 2)
      )
    }
    process.exit(1)
  }
}

createSampleContent()
