#!/usr/bin/env node

const { createClient } = require("contentful-management")

// Initialize the Contentful Management client
const client = createClient({
  accessToken: process.env.CONTENTFUL_MANAGEMENT_TOKEN || ""
})

async function setupContentfulSpace() {
  try {
    console.log("🚀 Setting up Contentful space...")

    // Get space and environment
    const space = await client.getSpace(process.env.CONTENTFUL_SPACE_ID)
    const environment = await space.getEnvironment("master")

    console.log("✅ Connected to Contentful space and environment")

    // Create Author content type
    console.log("Creating Author content type...")
    const authorContentType = await environment.createContentTypeWithId(
      "author",
      {
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
      }
    )

    await authorContentType.publish()
    console.log("✅ Author content type created and published")

    // Create SEO Metadata content type
    console.log("Creating SEO Metadata content type...")
    const seoContentType = await environment.createContentTypeWithId(
      "seoMetadata",
      {
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
      }
    )

    await seoContentType.publish()
    console.log("✅ SEO Metadata content type created and published")

    // Create Blog Post content type
    console.log("Creating Blog Post content type...")
    const blogPostContentType = await environment.createContentTypeWithId(
      "blogPost",
      {
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
      }
    )

    await blogPostContentType.publish()
    console.log("✅ Blog Post content type created and published")

    console.log("🎉 Contentful setup completed successfully!")
    console.log("You can now add blog posts in your Contentful space.")
    console.log(
      "Visit: https://app.contentful.com/spaces/" +
        process.env.CONTENTFUL_SPACE_ID
    )
  } catch (error) {
    console.error("❌ Error setting up Contentful:", error.message)
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
