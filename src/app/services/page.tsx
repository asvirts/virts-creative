import Link from "next/link"
import Image from "next/image"
import {
  ArrowRight,
  CheckCircle,
  Code,
  Layout,
  Palette,
  Smartphone
} from "lucide-react"
import { Button } from "@/components/ui/button"

export const metadata = {
  title: "Webflow Experts | Virts Creative - Lafayette, LA",
  description:
    "Lafayette's premier Webflow design and development agency. We create custom, responsive websites that drive business growth and deliver measurable results.",
  keywords:
    "webflow development, webflow design, custom website, Lafayette LA, responsive design, SEO optimization, e-commerce"
}

export default function ServicesPage() {
  const services = [
    {
      icon: <Layout className="h-10 w-10" />,
      title: "Custom Webflow Website Design",
      description:
        "Beautiful, branded designs that capture your unique voice and vision while driving measurable business results.",
      features: [
        "Mobile-first responsive design",
        "Brand-aligned visual elements",
        "User experience (UX) optimization",
        "Conversion-focused layouts",
        "Custom animations and interactions"
      ]
    },
    {
      icon: <Code className="h-10 w-10" />,
      title: "Webflow E-Commerce Solutions",
      description:
        "Secure, user-friendly online stores that make selling your products effortless.",
      features: [
        "Custom product pages",
        "Streamlined checkout process",
        "Inventory management",
        "Payment gateway integration",
        "Order fulfillment automation"
      ]
    },
    {
      icon: <Palette className="h-10 w-10" />,
      title: "SEO-Optimized Architecture",
      description:
        "Strategic site structure and content implementation that helps you rank higher in search results and attract more qualified traffic.",
      features: [
        "Technical SEO implementation",
        "Content organization strategy",
        "Meta data optimization",
        "Schema markup",
        "Page speed optimization"
      ]
    },
    {
      icon: <Smartphone className="h-10 w-10" />,
      title: "Website Maintenance & Support",
      description:
        "Ongoing partnership to keep your site secure, updated, and performing at its best.",
      features: [
        "Regular performance monitoring",
        "Content updates and management",
        "Security maintenance",
        "Analytics reporting",
        "Conversion optimization"
      ]
    }
  ]

  const processSteps = [
    {
      step: "01",
      title: "Strategic Discovery",
      description:
        "We begin by understanding your business goals, target audience, and competitive landscape. This foundation ensures every design decision supports your long-term success."
    },
    {
      step: "02",
      title: "Collaborative Design",
      description:
        "Unlike traditional agencies where designers and developers work separately, our Webflow approach enables real-time collaboration. You'll see your website take shape from day one, with opportunities to provide feedback throughout the process."
    },
    {
      step: "03",
      title: "Dynamic Development",
      description:
        "Leveraging Webflow's powerful capabilities, we build interactive, animated experiences that engage visitors and highlight your unique value proposition."
    },
    {
      step: "04",
      title: "Launch & Optimization",
      description:
        "Your website journey doesn't end at launch. We implement analytics tracking and conversion optimization to ensure your site continually improves its performance."
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
                Transform Your Online Presence with Lafayette's Premier Webflow
                Experts
              </h1>
              <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Expert Webflow Development & Design Services in Lafayette, LA
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-[800px] mx-auto">
            <p className="text-gray-700 text-lg mb-6">
              At Virts Creative, we don't just build websites—we craft digital
              experiences that drive business growth. As Lafayette's leading
              Webflow design and development agency, we combine cutting-edge
              technology with strategic design to create websites that not only
              look stunning but deliver measurable results.
            </p>
            <h2 className="text-2xl font-bold mb-4">
              Why Choose Our Webflow Development Services?
            </h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-bold">
                  Rapid, Responsive Designs That Convert
                </h3>
                <p className="text-gray-700">
                  Our Webflow expertise allows us to build lightning-fast, fully
                  responsive websites in days rather than months. Every pixel is
                  purposefully placed to guide visitors toward meaningful
                  action—whether that's making a purchase, scheduling a
                  consultation, or signing up for your services.
                </p>
              </div>
              <div>
                <h3 className="font-bold">
                  Seamless User Experiences Across All Devices
                </h3>
                <p className="text-gray-700">
                  With mobile traffic accounting for over 60% of web visits,
                  your site must perform flawlessly on every screen size. Our
                  mobile-first approach ensures your customers enjoy a
                  consistent, intuitive experience whether they're on phones,
                  tablets, or desktops.
                </p>
              </div>
              <div>
                <h3 className="font-bold">
                  Custom Solutions for Your Unique Business Goals
                </h3>
                <p className="text-gray-700">
                  From small businesses to large enterprises like Stuller, we
                  tailor our approach to your specific industry, audience, and
                  objectives. No templates, no cookie-cutter solutions—just
                  strategic design that aligns perfectly with your brand vision.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Detail */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-4">
              Services That Set Us Apart
            </h2>
          </div>
          <div className="grid gap-12 md:gap-16">
            {services.map((service, index) => (
              <div key={index} className="grid gap-6 lg:grid-cols-2 lg:gap-12">
                <div className="flex flex-col justify-center space-y-4">
                  <div className="inline-block rounded-lg bg-gray-100 p-3">
                    {service.icon}
                  </div>
                  <div className="space-y-2">
                    <h2 className="text-3xl font-bold tracking-tighter">
                      {service.title}
                    </h2>
                    <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed">
                      {service.description}
                    </p>
                  </div>
                  <ul className="grid gap-2">
                    {service.features.map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className="flex items-center gap-2"
                      >
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
      <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Our Webflow Development Process
              </h2>
              <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                We follow a structured approach to ensure your project delivers
                exceptional results.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl gap-8 py-12 md:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((process, index) => (
              <div
                key={index}
                className="flex flex-col items-center space-y-2 text-center"
              >
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

      {/* Why Webflow Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-[800px] mx-auto">
            <h2 className="text-3xl font-bold tracking-tighter mb-6">
              Why Webflow Is the Superior Choice for Your Business
            </h2>
            <p className="text-gray-700 mb-6">
              Webflow combines the flexibility of custom code with the ease of a
              visual interface. This means:
            </p>
            <ul className="space-y-2 mb-8">
              <li className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-green-500" />
                <span>
                  <strong>Faster launch times</strong> without sacrificing
                  quality or customization
                </span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-green-500" />
                <span>
                  <strong>Superior site performance</strong> with optimized code
                  and AWS hosting
                </span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-green-500" />
                <span>
                  <strong>Enhanced security</strong> without constant plugin
                  updates
                </span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-green-500" />
                <span>
                  <strong>Easier content management</strong> for your team
                </span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-green-500" />
                <span>
                  <strong>Better SEO results</strong> due to clean code and
                  faster load times
                </span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-black text-white">
        <div className="container mx-auto grid items-center justify-center gap-4 px-4 text-center md:px-6">
          <div className="space-y-3">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
              Ready to Elevate Your Digital Presence?
            </h2>
            <p className="mx-auto max-w-[700px] text-gray-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Whether you're launching a new brand, refreshing an outdated site,
              or seeking to improve conversions on your current platform, our
              Webflow development services deliver the perfect blend of
              creativity, technology, and strategy.
            </p>
            <p className="mx-auto max-w-[700px] text-gray-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Contact Virts Creative today to schedule a consultation and
              discover how our Lafayette-based Webflow experts can transform
              your online presence into your most powerful business asset.
            </p>
          </div>
          <div className="mx-auto w-full max-w-sm space-y-2">
            <Link href="/contact">
              <Button
                size="lg"
                className="w-full bg-white text-black hover:bg-gray-200"
              >
                Contact Us
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
