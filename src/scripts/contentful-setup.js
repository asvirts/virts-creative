#!/usr/bin/env node

// Load environment variables from .env.local
require("dotenv").config({ path: ".env.local" })

const { createClient } = require("contentful-management")

// Initialize the Contentful Management client
const client = createClient({
  accessToken: process.env.CONTENTFUL_MANAGEMENT_TOKEN || ""
})

// Log token info for debugging (truncated for security)
const truncatedToken = process.env.CONTENTFUL_MANAGEMENT_TOKEN
  ? `${process.env.CONTENTFUL_MANAGEMENT_TOKEN.slice(
      0,
      5
    )}...${process.env.CONTENTFUL_MANAGEMENT_TOKEN.slice(-5)}`
  : "Not found"
console.log(`Using management token: ${truncatedToken}`)

async function setupContentfulSpace() {
  try {
    console.log("🚀 Setting up Contentful space...")

    // Get space and environment
    const space = await client.getSpace(process.env.CONTENTFUL_SPACE_ID)
    const environment = await space.getEnvironment("master")

    console.log("✅ Connected to Contentful space and environment")

    // Helper function to create or update content type
    async function createOrUpdateContentType(contentTypeId, contentTypeData) {
      console.log(`Creating/updating ${contentTypeId} content type...`)
      try {
        // Try to get the content type first
        let contentType
        try {
          contentType = await environment.getContentType(contentTypeId)
          console.log(
            `⚠️ Content type ${contentTypeId} already exists, updating...`
          )
        } catch (error) {
          // Content type doesn't exist, create it
          contentType = await environment.createContentTypeWithId(
            contentTypeId,
            contentTypeData
          )
          console.log(`✅ Content type ${contentTypeId} created`)
        }

        // Always publish the content type
        await contentType.publish()
        console.log(`✅ Content type ${contentTypeId} published`)
        return contentType
      } catch (error) {
        console.error(
          `Error creating/updating ${contentTypeId}:`,
          error.message
        )
        throw error
      }
    }

    // Create Author content type
    await createOrUpdateContentType("author", {
      name: "Author",
      description: "Author of blog posts",
      displayField: "name",
      fields: [
        {
          id: "name",
          name: "Name",
          type: "Symbol",
          required: true
        },
        {
          id: "bio",
          name: "Biography",
          type: "Text"
        },
        {
          id: "picture",
          name: "Picture",
          type: "Link",
          linkType: "Asset"
        },
        {
          id: "email",
          name: "Email",
          type: "Symbol"
        },
        {
          id: "socialLinks",
          name: "Social Links",
          type: "Object"
        }
      ]
    })

    // Create SEO Metadata content type
    await createOrUpdateContentType("seoMetadata", {
      name: "SEO Metadata",
      description: "SEO metadata for blog posts",
      displayField: "title",
      fields: [
        {
          id: "title",
          name: "SEO Title",
          type: "Symbol",
          required: true
        },
        {
          id: "description",
          name: "SEO Description",
          type: "Text",
          required: true
        },
        {
          id: "keywords",
          name: "Keywords",
          type: "Array",
          items: {
            type: "Symbol"
          }
        },
        {
          id: "canonicalUrl",
          name: "Canonical URL",
          type: "Symbol"
        },
        {
          id: "ogImage",
          name: "Open Graph Image",
          type: "Link",
          linkType: "Asset"
        }
      ]
    })

    // Create Blog Post content type
    await createOrUpdateContentType("blogPost", {
      name: "Blog Post",
      description: "Blog post content type",
      displayField: "title",
      fields: [
        {
          id: "title",
          name: "Title",
          type: "Symbol",
          required: true
        },
        {
          id: "slug",
          name: "Slug",
          type: "Symbol",
          required: true,
          validations: [
            {
              unique: true
            }
          ]
        },
        {
          id: "excerpt",
          name: "Excerpt",
          type: "Text",
          required: true
        },
        {
          id: "content",
          name: "Content",
          type: "Text",
          required: true
        },
        {
          id: "publishDate",
          name: "Publish Date",
          type: "Date",
          required: true
        },
        {
          id: "featuredImage",
          name: "Featured Image",
          type: "Link",
          linkType: "Asset",
          required: true
        },
        {
          id: "readTime",
          name: "Read Time",
          type: "Symbol",
          required: true
        },
        {
          id: "category",
          name: "Category",
          type: "Symbol",
          required: true
        },
        {
          id: "author",
          name: "Author",
          type: "Link",
          linkType: "Entry",
          validations: [
            {
              linkContentType: ["author"]
            }
          ]
        },
        {
          id: "seoMetadata",
          name: "SEO Metadata",
          type: "Link",
          linkType: "Entry",
          validations: [
            {
              linkContentType: ["seoMetadata"]
            }
          ]
        }
      ]
    })

    // Create Portfolio Project content type
    await createOrUpdateContentType("portfolioProject", {
      name: "Portfolio Project",
      description: "Portfolio project content type",
      displayField: "title",
      fields: [
        {
          id: "title",
          name: "Title",
          type: "Symbol",
          required: true
        },
        {
          id: "slug",
          name: "Slug",
          type: "Symbol",
          required: true,
          validations: [
            {
              unique: true
            }
          ]
        },
        {
          id: "category",
          name: "Category",
          type: "Symbol",
          required: true
        },
        {
          id: "description",
          name: "Short Description",
          type: "Text",
          required: true
        },
        {
          id: "detailedDescription",
          name: "Detailed Description",
          type: "Text",
          required: true
        },
        {
          id: "featuredImage",
          name: "Featured Image",
          type: "Link",
          linkType: "Asset",
          required: true
        },
        {
          id: "projectImages",
          name: "Project Images",
          type: "Array",
          items: {
            type: "Link",
            linkType: "Asset"
          }
        },
        {
          id: "technologies",
          name: "Technologies",
          type: "Array",
          items: {
            type: "Symbol"
          }
        },
        {
          id: "client",
          name: "Client",
          type: "Symbol"
        },
        {
          id: "projectDate",
          name: "Project Date",
          type: "Date",
          required: true
        },
        {
          id: "projectUrl",
          name: "Project URL",
          type: "Symbol"
        },
        {
          id: "featured",
          name: "Featured Project",
          type: "Boolean",
          defaultValue: {
            "en-US": false
          }
        },
        {
          id: "seoMetadata",
          name: "SEO Metadata",
          type: "Link",
          linkType: "Entry",
          validations: [
            {
              linkContentType: ["seoMetadata"]
            }
          ]
        }
      ]
    })

    console.log("🎉 Contentful setup completed successfully!")
    console.log(
      "You can now add blog posts and portfolio projects in your Contentful space."
    )
    console.log(
      "Visit: https://app.contentful.com/spaces/" +
        process.env.CONTENTFUL_SPACE_ID
    )
  } catch (error) {
    console.error("❌ Error setting up Contentful:", error)
    if (error.details && error.details.errors) {
      console.error(
        "Error details:",
        JSON.stringify(error.details.errors, null, 2)
      )
    }
    process.exit(1)
  }
}

setupContentfulSpace()
