import Link from "next/link"
import { ArrowRight, CheckCircle, Code, Layout, Palette } from "lucide-react"
import type { Entry } from "contentful"

import { Button } from "@/components/ui/button"
import {
  getFeaturedProjects,
  getAllPosts,
  type PortfolioProject,
  type BlogPost
} from "@/lib/contentful"

// Define ProjectEntry type to match PortfolioProject structure
type ProjectEntry = PortfolioProject

export const metadata = {
  title: "Virts Creative | Web Design & Development Agency",
  description:
    "Professional web design, development, and branding services to help your business stand out online. View our portfolio and contact us for a consultation.",
  keywords:
    "web design, web development, branding, digital agency, responsive design",
  openGraph: {
    title: "Virts Creative | Web Design & Development Agency",
    description:
      "Professional web design, development, and branding services to help your business stand out online.",
    url: "https://virtscreative.com",
    siteName: "Virts Creative",
    locale: "en_US",
    type: "website"
  }
}

export default async function Home() {
  const allFeaturedProjects: PortfolioProject[] = await getFeaturedProjects()
  const projects = allFeaturedProjects.slice(0, 4)

  // Fetch latest blog posts
  const allPosts: BlogPost[] = await getAllPosts()
  const latestPosts = allPosts.slice(0, 4)

  return (
    <div className="flex flex-col items-center justify-center min-h-screen w-full">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-b from-white to-gray-100">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  Elevate Your Digital Presence
                </h1>
                <p className="max-w-[600px] text-gray-500 md:text-xl">
                  We design and develop stunning websites that drive results.
                  Our expert team combines creativity with technical excellence
                  to bring your vision to life.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link href="/contact">
                  <Button
                    size="lg"
                    className="bg-black text-white hover:bg-gray-800"
                  >
                    Get Started
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/portfolio">
                  <Button size="lg" variant="outline">
                    View Our Work
                  </Button>
                </Link>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <img
                src="https://67wvo3jvf7.ufs.sh/f/31uuUYnOr3SZ9bzI6URktQIUP3mXGsiVdoB5cHDTe0lSJYON"
                width={550}
                height={1550}
                alt="Hero image showing web design process"
                className="rounded-lg object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section
        className="w-full py-12 md:py-24 lg:py-32 bg-white"
        id="services"
      >
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Our Services
              </h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                We offer comprehensive digital solutions to help your business
                thrive online.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
            <div className="flex flex-col justify-center space-y-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gray-100">
                <Layout className="h-6 w-6" />
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold">Web Design</h3>
                <p className="text-gray-500">
                  Beautiful, user-friendly designs that engage your audience and
                  reflect your brand identity.
                </p>
              </div>
            </div>
            <div className="flex flex-col justify-center space-y-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gray-100">
                <Code className="h-6 w-6" />
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold">Web Development</h3>
                <p className="text-gray-500">
                  Custom, responsive websites built with the latest technologies
                  for optimal performance.
                </p>
              </div>
            </div>
            <div className="flex flex-col justify-center space-y-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gray-100">
                <Palette className="h-6 w-6" />
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold">Branding</h3>
                <p className="text-gray-500">
                  Cohesive brand identities that communicate your values and
                  connect with your target audience.
                </p>
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <Link href="/services">
              <Button variant="outline" size="lg">
                Learn More About Our Services
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Projects - Updated Section */}
      <section
        className="w-full py-12 md:py-24 lg:py-32 bg-gray-50"
        id="portfolio"
      >
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Featured Projects
              </h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Take a look at some of our recent work that showcases our
                expertise and creativity.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl gap-8 py-12 lg:grid-cols-2">
            {projects.map((project) => (
              <div
                key={project.sys.id}
                className="group relative overflow-hidden rounded-lg shadow-lg transition-all hover:shadow-xl"
              >
                <Link href={`/portfolio/${project.fields.slug}`}>
                  <img
                    src={
                      project.fields.featuredImage?.fields?.file?.url ||
                      "/placeholder.svg"
                    }
                    alt={
                      project.fields.featuredImage?.fields?.title ||
                      project.fields.title
                    }
                    width={600}
                    height={400}
                    className="h-[300px] w-full object-cover transition-all group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 transition-opacity group-hover:opacity-100 flex items-center justify-center">
                    <span className="text-white font-medium">View Project</span>
                  </div>
                  <div className="p-4">
                    <h3 className="text-xl font-bold">
                      {project.fields.title}
                    </h3>
                    <p className="text-gray-500">
                      {project.fields.description || "Web Design & Development"}
                    </p>
                  </div>
                </Link>
              </div>
            ))}
          </div>
          <div className="flex justify-center">
            <Link href="/portfolio">
              <Button variant="outline" size="lg">
                View All Projects
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                What Our Clients Say
              </h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Don't just take our word for it. Here's what our clients have to
                say about working with us.
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

      {/* CTA Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-black text-white">
        <div className="container mx-auto grid items-center justify-center gap-4 px-4 text-center md:px-6">
          <div className="space-y-3">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
              Ready to Transform Your Digital Presence?
            </h2>
            <p className="mx-auto max-w-[600px] text-gray-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Let's discuss how we can help your business grow with a custom
              digital strategy.
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

      {/* Why Choose Us */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Why Choose Virts Creative
              </h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                We combine creativity, technical expertise, and strategic
                thinking to deliver exceptional results.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Expert Team",
                description:
                  "Our team of designers and developers brings years of experience and a passion for excellence."
              },
              {
                title: "Custom Solutions",
                description:
                  "We create tailored solutions that address your unique business needs and goals."
              },
              {
                title: "Results-Driven",
                description:
                  "We focus on delivering websites that not only look great but also drive real business results."
              },
              {
                title: "Collaborative Process",
                description:
                  "We work closely with you throughout the project to ensure your vision is realized."
              },
              {
                title: "Ongoing Support",
                description:
                  "Our relationship doesn't end at launch. We provide continued support to help you succeed."
              },
              {
                title: "SEO Optimization",
                description:
                  "We build websites with search engine optimization in mind to improve your visibility online."
              }
            ].map((feature, index) => (
              <div key={index} className="flex flex-col space-y-2">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <h3 className="font-bold">{feature.title}</h3>
                </div>
                <p className="text-gray-500">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Latest Insights Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-white" id="blog">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Latest Insights
              </h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Explore our recent blog posts for tips, trends, and industry
                insights.
              </p>
            </div>
          </div>
          <div className="mx-auto grid w-full gap-8 py-12 lg:grid-cols-4">
            {latestPosts.length === 0 ? (
              <div className="text-center py-12">
                <h3 className="text-xl font-medium text-gray-500">
                  No blog posts found. Check back soon!
                </h3>
              </div>
            ) : (
              latestPosts.map((post) => (
                <Link
                  key={post.sys.id}
                  href={`/blog/${post.fields.slug}`}
                  className="group"
                >
                  <div className="overflow-hidden rounded-lg">
                    <img
                      src={
                        post.fields.featuredImage?.fields?.file?.url
                          ? `https:${post.fields.featuredImage.fields.file.url}`
                          : "/placeholder.svg"
                      }
                      alt={
                        post.fields.featuredImage?.fields?.title ||
                        post.fields.title
                      }
                      width={600}
                      height={400}
                      className="aspect-[4/3] w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <div className="mt-4 space-y-2">
                    <div className="text-sm font-medium text-gray-500">
                      {post.fields.category} •{" "}
                      {new Date(post.fields.publishDate).toLocaleDateString(
                        "en-US",
                        { year: "numeric", month: "long", day: "numeric" }
                      )}
                    </div>
                    <h3 className="text-xl font-bold group-hover:underline">
                      {post.fields.title}
                    </h3>
                    <p className="text-gray-500">{post.fields.excerpt}</p>
                  </div>
                </Link>
              ))
            )}
          </div>
          <div className="flex justify-center">
            <Link href="/blog">
              <Button variant="outline" size="lg">
                View All Insights
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
