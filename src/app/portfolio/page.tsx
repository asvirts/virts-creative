import Link from "next/link"
import Image from "next/image"

export const metadata = {
  title: "Portfolio | Our Web Design & Development Work",
  description:
    "Explore our portfolio of web design and development projects. See how we've helped businesses transform their digital presence.",
  keywords:
    "web design portfolio, web development projects, case studies, client work"
}

export default function PortfolioPage() {
  const projects = [
    {
      id: 1,
      title: "Eco Solutions Rebrand",
      category: "Branding & Web Design",
      description:
        "A complete rebrand and website redesign for an eco-friendly products company.",
      image: "/placeholder.svg?height=600&width=800&text=Eco+Solutions"
    },
    {
      id: 2,
      title: "TechStart Dashboard",
      category: "Web Application",
      description:
        "A custom dashboard for a tech startup to manage their customer data and analytics.",
      image: "/placeholder.svg?height=600&width=800&text=TechStart"
    },
    {
      id: 3,
      title: "Culinary Delights",
      category: "E-commerce",
      description:
        "An e-commerce platform for a gourmet food delivery service with online ordering.",
      image: "/placeholder.svg?height=600&width=800&text=Culinary+Delights"
    },
    {
      id: 4,
      title: "Fitness First",
      category: "Web Design & Development",
      description:
        "A responsive website for a fitness center with class scheduling and member portal.",
      image: "/placeholder.svg?height=600&width=800&text=Fitness+First"
    },
    {
      id: 5,
      title: "Urban Photography",
      category: "Portfolio Website",
      description:
        "A portfolio website for a professional photographer showcasing their work.",
      image: "/placeholder.svg?height=600&width=800&text=Urban+Photography"
    },
    {
      id: 6,
      title: "Legal Advisors",
      category: "Corporate Website",
      description:
        "A professional website for a law firm with service information and contact forms.",
      image: "/placeholder.svg?height=600&width=800&text=Legal+Advisors"
    }
  ]

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
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <Link
                key={project.id}
                href={`/portfolio/project-${project.id}`}
                className="group"
              >
                <div className="overflow-hidden rounded-lg">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    width={800}
                    height={600}
                    className="aspect-[4/3] w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="mt-4 space-y-2">
                  <div className="text-sm font-medium text-gray-500">
                    {project.category}
                  </div>
                  <h3 className="text-xl font-bold group-hover:underline">
                    {project.title}
                  </h3>
                  <p className="text-gray-500">{project.description}</p>
                </div>
              </Link>
            ))}
          </div>
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
          <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-2 lg:gap-12">
            {[
              {
                name: "Sarah Johnson",
                company: "Eco Solutions",
                quote:
                  "Working with Virts Creative transformed our online presence. Their team understood our vision and delivered a website that exceeded our expectations."
              },
              {
                name: "Michael Chen",
                company: "TechStart",
                quote:
                  "The team at Virts Creative is exceptional. They created a beautiful, functional website that perfectly represents our brand and has significantly increased our conversions."
              },
              {
                name: "Emily Rodriguez",
                company: "Culinary Delights",
                quote:
                  "Our e-commerce site has never performed better. The user experience is seamless, and our customers love how easy it is to navigate and make purchases."
              },
              {
                name: "David Kim",
                company: "Fitness First",
                quote:
                  "The website Virts Creative designed for us has helped us attract new members and streamline our class scheduling. It's been a game-changer for our business."
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
