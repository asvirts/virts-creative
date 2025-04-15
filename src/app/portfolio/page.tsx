import Link from "next/link"
import {
  getAllProjects,
  getAllProjectCategories,
  PortfolioProject
} from "@/lib/contentful"

export const metadata = {
  title: "Portfolio | Our Web Design & Development Work",
  description:
    "Explore our portfolio of web design and development projects. See how we've helped businesses transform their digital presence.",
  keywords:
    "web design portfolio, web development projects, case studies, client work"
}

export default async function PortfolioPage() {
  // Fetch projects and categories from Contentful
  const projects = await getAllProjects()
  const categories = await getAllProjectCategories()

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-white to-gray-100">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Our Portfolio
              </h1>
              <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Explore our recent projects and see how we've helped businesses
                transform their digital presence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          {projects.length === 0 ? (
            <div className="text-center py-12">
              <h2 className="text-xl font-medium text-gray-500">
                No projects found. Check back soon!
              </h2>
            </div>
          ) : (
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {projects.map((project) => (
                <Link
                  key={project.sys.id}
                  href={`/portfolio/${project.fields.slug}`}
                  className="group"
                >
                  <div className="overflow-hidden rounded-lg">
                    <img
                      src={`https:${project.fields.featuredImage.fields.file.url}`}
                      alt={
                        project.fields.featuredImage.fields.title ||
                        project.fields.title
                      }
                      width={800}
                      height={600}
                      className="aspect-[4/3] w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <div className="mt-4 space-y-2">
                    <div className="text-sm font-medium text-gray-500">
                      {project.fields.category}
                    </div>
                    <h3 className="text-xl font-bold group-hover:underline">
                      {project.fields.title}
                    </h3>
                    <p className="text-gray-500">
                      {project.fields.description}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Testimonials */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Client Testimonials
              </h2>
              <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Here's what our clients have to say about working with us.
              </p>
            </div>
          </div>
          <div className="mx-auto grid w-full gap-6 py-12 lg:grid-cols-3 lg:gap-12">
            {[
              {
                name: "Brad Coleman",
                company: "Toyotech of Acadiana",
                quote:
                  "Andrew did a fantastic job building our website! With the little bit of info he had to work with, he created a perfect space for our customers to find us, contact and interact us. He also accomplished it in a very short time frame which helped us a lot. Thank you, and much appreciated!"
              },
              {
                name: "Meghan Streets",
                company: "Covenant Child Development Center",
                quote:
                  "Andrew was knowledgeable and professional. He created a logo for our preschool and built a website that has elevated our business. His technical skills are topnotch. He was available for any issues or questions that arose during our time with him. I would highly recommend Andrew and will continue to call on him for future projects."
              },
              {
                name: "Alex Young",
                company: "Adetrio",
                quote:
                  "Andrew took what was a very high level brief and some hastily generated content and used his excellent design and communication skills to create a beautiful and very effective one page website for my freelancing activities. I can't recommend Andrew highly enough for this and I am very pleased with the results."
              }
            ].map((testimonial, index) => (
              <div
                key={index}
                className="flex flex-col justify-between rounded-lg border p-6 shadow-sm"
              >
                <div className="space-y-4">
                  <div className="flex items-center gap-1 text-yellow-500">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="h-5 w-5"
                      >
                        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-gray-500">{testimonial.quote}</p>
                </div>
                <div className="mt-6 flex items-center space-x-2">
                  <div className="rounded-full bg-gray-100 p-1">
                    <div className="h-8 w-8 rounded-full bg-gray-300" />
                  </div>
                  <div>
                    <p className="font-medium">{testimonial.name}</p>
                    <p className="text-sm text-gray-500">
                      {testimonial.company}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
