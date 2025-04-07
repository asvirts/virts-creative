import Link from "next/link"
import Image from "next/image"
import { ArrowRight, CheckCircle, Code, Layout, Palette, Smartphone } from "lucide-react"
import { Button } from "@/components/ui/button"

export const metadata = {
  title: "Services | Web Design, Development & Branding",
  description:
    "Explore our comprehensive web design, development, and branding services tailored to help your business succeed online.",
  keywords: "web design services, web development, branding services, responsive design, SEO optimization",
}

export default function ServicesPage() {
  const services = [
    {
      icon: <Layout className="h-10 w-10" />,
      title: "Web Design",
      description: "We create beautiful, user-friendly websites that engage your audience and drive conversions.",
      features: [
        "Custom design tailored to your brand",
        "User experience (UX) optimization",
        "Responsive design for all devices",
        "Wireframing and prototyping",
        "Visual identity implementation",
      ],
    },
    {
      icon: <Code className="h-10 w-10" />,
      title: "Web Development",
      description: "We build robust, scalable websites and web applications using the latest technologies.",
      features: [
        "Custom website development",
        "E-commerce solutions",
        "Content management systems",
        "Web application development",
        "API integration and development",
      ],
    },
    {
      icon: <Palette className="h-10 w-10" />,
      title: "Branding",
      description: "We help you establish a strong brand identity that resonates with your target audience.",
      features: [
        "Logo design and visual identity",
        "Brand strategy and positioning",
        "Brand guidelines and style guides",
        "Marketing collateral design",
        "Brand messaging and voice",
      ],
    },
    {
      icon: <Smartphone className="h-10 w-10" />,
      title: "Digital Marketing",
      description: "We help you reach and engage your target audience through effective digital marketing strategies.",
      features: [
        "Search engine optimization (SEO)",
        "Content marketing strategy",
        "Social media marketing",
        "Email marketing campaigns",
        "Analytics and performance tracking",
      ],
    },
  ]

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-white to-gray-100">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Our Services</h1>
              <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Comprehensive digital solutions to help your business thrive online.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Detail */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
        <div className="container px-4 md:px-6">
          <div className="grid gap-12 md:gap-16">
            {services.map((service, index) => (
              <div key={index} className="grid gap-6 lg:grid-cols-2 lg:gap-12">
                <div className="flex flex-col justify-center space-y-4">
                  <div className="inline-block rounded-lg bg-gray-100 p-3">{service.icon}</div>
                  <div className="space-y-2">
                    <h2 className="text-3xl font-bold tracking-tighter">{service.title}</h2>
                    <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed">{service.description}</p>
                  </div>
                  <ul className="grid gap-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-2">
                        <CheckCircle className="h-5 w-5 text-green-500" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex items-center justify-center">
                  <Image
                    src={`/placeholder.svg?height=400&width=600&text=${service.title}`}
                    alt={`${service.title} service illustration`}
                    width={600}
                    height={400}
                    className="rounded-lg object-cover"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Our Process</h2>
              <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                We follow a structured approach to ensure your project is delivered on time and exceeds expectations.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl gap-8 py-12 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                step: "01",
                title: "Discovery",
                description: "We learn about your business, goals, and target audience to create a tailored strategy.",
              },
              {
                step: "02",
                title: "Planning",
                description:
                  "We develop a detailed project plan including sitemap, wireframes, and technical specifications.",
              },
              {
                step: "03",
                title: "Design & Development",
                description:
                  "We create the visual design and build your website with a focus on performance and usability.",
              },
              {
                step: "04",
                title: "Launch & Support",
                description: "We deploy your website and provide ongoing support to ensure continued success.",
              },
            ].map((process, index) => (
              <div key={index} className="flex flex-col items-center space-y-2 text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-black text-white">
                  <span className="text-xl font-bold">{process.step}</span>
                </div>
                <h3 className="text-xl font-bold">{process.title}</h3>
                <p className="text-gray-500">{process.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-black text-white">
        <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
          <div className="space-y-3">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Ready to Start Your Project?</h2>
            <p className="mx-auto max-w-[600px] text-gray-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Contact us today to discuss how we can help bring your vision to life.
            </p>
          </div>
          <div className="mx-auto w-full max-w-sm space-y-2">
            <Link href="/contact">
              <Button size="lg" className="w-full bg-white text-black hover:bg-gray-200">
                Get in Touch
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

