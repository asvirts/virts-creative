#!/usr/bin/env node

// Load environment variables from .env.local
require("dotenv").config({ path: ".env.local" })

const { createClient } = require("contentful-management")

// Initialize the Contentful Management client
const client = createClient({
  accessToken: process.env.CONTENTFUL_MANAGEMENT_TOKEN || ""
})

async function createSampleProject() {
  try {
    console.log("🚀 Creating sample portfolio project in Contentful...")

    // Get space and environment
    const space = await client.getSpace(process.env.CONTENTFUL_SPACE_ID)
    const environment = await space.getEnvironment("master")

    console.log("✅ Connected to Contentful space and environment")

    // Helper function to create or get an asset
    async function createOrGetAsset(assetId, assetData) {
      let asset
      try {
        // Try to get the asset first
        asset = await environment.getAsset(assetId)
        console.log(`✅ Asset ${assetId} already exists`)

        // Check if it's published
        if (asset.isPublished()) {
          console.log(`✅ Asset ${assetId} is already published`)
        } else {
          console.log(`Publishing asset ${assetId}...`)
          await asset.publish()
          console.log(`✅ Asset ${assetId} published`)
        }
      } catch (error) {
        // Asset doesn't exist, create it
        console.log(`Creating asset ${assetId}...`)
        asset = await environment.createAssetWithId(assetId, assetData)

        // Process and publish the asset
        try {
          await asset.processForAllLocales()

          // Wait for asset processing (this might take a few seconds)
          console.log("Waiting for asset processing...")
          await new Promise((resolve) => setTimeout(resolve, 5000))

          await asset.publish()
          console.log(`✅ Asset ${assetId} created and published`)
        } catch (pubError) {
          console.log(`Warning: Could not publish asset: ${pubError.message}`)
          // Continue anyway
        }
      }

      return asset
    }

    // Helper function to create or get an entry
    async function createOrGetEntry(contentTypeId, entryId, entryData) {
      let entry
      try {
        // Try to get the entry first
        entry = await environment.getEntry(entryId)
        console.log(`✅ ${contentTypeId} entry already exists`)

        // Check if it's published
        if (entry.isPublished()) {
          console.log(`✅ ${contentTypeId} entry is already published`)
        } else {
          console.log(`Publishing ${contentTypeId} entry...`)
          await entry.publish()
          console.log(`✅ ${contentTypeId} entry published`)
        }
      } catch (error) {
        // Entry doesn't exist, create it
        console.log(`Creating ${contentTypeId} entry...`)
        entry = await environment.createEntryWithId(
          contentTypeId,
          entryId,
          entryData
        )

        try {
          await entry.publish()
          console.log(`✅ ${contentTypeId} entry created and published`)
        } catch (pubError) {
          console.log(`Warning: Could not publish entry: ${pubError.message}`)
          // Continue anyway
        }
      }

      return entry
    }

    // Create or get the sample image asset
    const assetId = "sample-project-image"
    const asset = await createOrGetAsset(assetId, {
      fields: {
        title: {
          "en-US": "Sample Project Image"
        },
        description: {
          "en-US": "A sample image for a portfolio project"
        },
        file: {
          "en-US": {
            contentType: "image/jpeg",
            fileName: "sample-project.jpg",
            upload:
              "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=1200&h=800&fit=crop"
          }
        }
      }
    })

    // Create or get SEO metadata for the project
    const seoMetadataId = "sample-project-seo"
    const seoMetadata = await createOrGetEntry("seoMetadata", seoMetadataId, {
      fields: {
        title: {
          "en-US": "Eco Solutions Website Redesign | Virts Creative Portfolio"
        },
        description: {
          "en-US":
            "A complete website redesign and rebrand for Eco Solutions, an eco-friendly products company."
        },
        keywords: {
          "en-US": [
            "website redesign",
            "branding",
            "eco-friendly",
            "portfolio",
            "Virts Creative"
          ]
        }
      }
    })

    // Create or get the portfolio project
    const projectId = "eco-solutions-project"
    const portfolioProject = await createOrGetEntry(
      "portfolioProject",
      projectId,
      {
        fields: {
          title: {
            "en-US": "Eco Solutions Website Redesign"
          },
          slug: {
            "en-US": "eco-solutions-website-redesign"
          },
          category: {
            "en-US": "Branding & Web Design"
          },
          description: {
            "en-US":
              "A complete rebrand and website redesign for an eco-friendly products company."
          },
          detailedDescription: {
            "en-US":
              "Eco Solutions approached us with a challenge: their existing website didn't reflect their modern approach to sustainable products.\n\nWe worked closely with their team to develop a comprehensive rebrand and website redesign that showcased their eco-friendly products in a contemporary, user-friendly way.\n\nThe new website features an intuitive e-commerce platform, detailed product information with sustainability metrics, and a blog section to share environmental news and tips.\n\nThe result was a 45% increase in online sales and a 30% improvement in average time spent on the website."
          },
          featuredImage: {
            "en-US": {
              sys: {
                type: "Link",
                linkType: "Asset",
                id: asset.sys.id
              }
            }
          },
          technologies: {
            "en-US": [
              "React",
              "Next.js",
              "Tailwind CSS",
              "Contentful",
              "Vercel"
            ]
          },
          client: {
            "en-US": "Eco Solutions"
          },
          projectDate: {
            "en-US": "2023-06-15"
          },
          projectUrl: {
            "en-US": "https://example.com/eco-solutions"
          },
          featured: {
            "en-US": true
          },
          seoMetadata: {
            "en-US": {
              sys: {
                type: "Link",
                linkType: "Entry",
                id: seoMetadata.sys.id
              }
            }
          }
        }
      }
    )

    console.log("🎉 Sample portfolio project created successfully!")
    console.log(
      "Visit: https://app.contentful.com/spaces/" +
        process.env.CONTENTFUL_SPACE_ID +
        "/entries/" +
        portfolioProject.sys.id
    )
  } catch (error) {
    console.error("❌ Error creating sample portfolio project:", error.message)
    if (error.details && error.details.errors) {
      console.error(
        "Error details:",
        JSON.stringify(error.details.errors, null, 2)
      )
    }
    process.exit(1)
  }
}

createSampleProject()
