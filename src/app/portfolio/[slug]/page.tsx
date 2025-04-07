import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  getProjectBySlug,
  getAllProjects,
  PortfolioProject
} from "@/lib/contentful"
import { Metadata } from "next"

// Generate metadata for the page
export async function generateMetadata({
  params
}: {
  params: { slug: string }
}): Promise<Metadata> {
  const project = await getProjectBySlug(params.slug)

  const title = project.fields.seoMetadata?.fields.title || project.fields.title
  const description =
    project.fields.seoMetadata?.fields.description || project.fields.description
  const keywords = project.fields.seoMetadata?.fields.keywords || []

  return {
    title: `${title} | Virts Creative Portfolio`,
    description,
    keywords: keywords.join(", ")
  }
}

// Generate static params for all projects
export async function generateStaticParams() {
  const projects = await getAllProjects()

  return projects.map((project) => ({
    slug: project.fields.slug
  }))
}

export default async function ProjectPage({
  params
}: {
  params: { slug: string }
}) {
  // Fetch the project data
  const project = await getProjectBySlug(params.slug)

  // Format the date for display
  const formattedDate = new Date(project.fields.projectDate).toLocaleDateString(
    "en-US",
    {
      year: "numeric",
      month: "long"
    }
  )

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-white to-gray-100">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                {project.fields.title}
              </h1>
              <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                {project.fields.description}
              </p>
              <div className="flex justify-center pt-4 space-x-2 text-sm">
                <span className="px-3 py-1 rounded-full bg-black text-white">
                  {project.fields.category}
                </span>
                {project.fields.client && (
                  <span className="px-3 py-1 rounded-full bg-gray-100">
                    {project.fields.client}
                  </span>
                )}
                <span className="px-3 py-1 rounded-full bg-gray-100">
                  {formattedDate}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex justify-center">
            <div className="relative w-full max-w-5xl">
              <Image
                src={`https:${project.fields.featuredImage.fields.file.url}`}
                alt={
                  project.fields.featuredImage.fields.title ||
                  project.fields.title
                }
                width={1200}
                height={800}
                className="rounded-lg object-cover w-full aspect-video"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Project Description */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid gap-10 lg:grid-cols-3 lg:gap-16">
            <div className="lg:col-span-2 space-y-6">
              <h2 className="text-3xl font-bold tracking-tighter">
                About This Project
              </h2>
              <div className="prose max-w-none text-gray-500">
                {project.fields.detailedDescription
                  .split("\n")
                  .map((paragraph, index) => (
                    <p key={index} className="mb-4">
                      {paragraph}
                    </p>
                  ))}
              </div>
            </div>
            <div className="space-y-8">
              {/* Project Details */}
              <div className="border rounded-lg p-6 space-y-4">
                <h3 className="text-xl font-bold">Project Details</h3>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="font-semibold">Category:</span>
                    <span>{project.fields.category}</span>
                  </div>
                  {project.fields.client && (
                    <div className="flex justify-between">
                      <span className="font-semibold">Client:</span>
                      <span>{project.fields.client}</span>
                    </div>
                  )}
                  <div className="flex justify-between">
                    <span className="font-semibold">Date:</span>
                    <span>{formattedDate}</span>
                  </div>
                  {project.fields.projectUrl && (
                    <div className="pt-4">
                      <a
                        href={project.fields.projectUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex w-full justify-center rounded-md bg-black px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-gray-800"
                      >
                        Visit Project
                      </a>
                    </div>
                  )}
                </div>
              </div>

              {/* Technologies */}
              {project.fields.technologies &&
                project.fields.technologies.length > 0 && (
                  <div className="border rounded-lg p-6 space-y-4">
                    <h3 className="text-xl font-bold">Technologies</h3>
                    <div className="flex flex-wrap gap-2">
                      {project.fields.technologies.map((tech, index) => (
                        <span
                          key={index}
                          className="bg-gray-100 px-3 py-1 rounded-full text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
            </div>
          </div>
        </div>
      </section>

      {/* Project Gallery */}
      {project.fields.projectImages &&
        project.fields.projectImages.length > 0 && (
          <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
            <div className="container mx-auto px-4 md:px-6">
              <h2 className="text-3xl font-bold tracking-tighter mb-12 text-center">
                Project Gallery
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {project.fields.projectImages.map((image, index) => (
                  <div key={index} className="overflow-hidden rounded-lg">
                    <Image
                      src={`https:${image.fields.file.url}`}
                      alt={
                        image.fields.title ||
                        `${project.fields.title} - Image ${index + 1}`
                      }
                      width={600}
                      height={400}
                      className="aspect-[4/3] w-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

      {/* CTA Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-black text-white">
        <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
          <div className="space-y-3">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
              Ready to Start Your Project?
            </h2>
            <p className="mx-auto max-w-[600px] text-gray-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Let's discuss how we can help bring your vision to life.
            </p>
          </div>
          <div className="mx-auto w-full max-w-sm space-y-2">
            <Link href="/contact">
              <Button
                size="lg"
                className="w-full bg-white text-black hover:bg-gray-200"
              >
                Get in Touch
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
