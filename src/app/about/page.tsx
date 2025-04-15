import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CheckCircle } from "lucide-react"

export const metadata = {
  title: "About Us | Virts Creative Web Design Agency",
  description:
    "Learn about Virts Creative, our team, our mission, and our approach to web design and development.",
  keywords:
    "about Virts Creative, web design agency, design team, company mission, agency values"
}

export default function AboutPage() {
  const team = [
    {
      name: "Andrew Virts",
      role: "Founder & Creative Director",
      bio: "With over 5 years of experience in design and development, Andrew founded Virts Creative with a vision to help businesses succeed online.",
      image: "https://67wvo3jvf7.ufs.sh/f/31uuUYnOr3SZmjeJPfBJFz4nbW2LMDNtOP7jpI1sgh5ScClu"
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
                About Virts Creative
              </h1>
              <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                We're a team of passionate designers and developers dedicated to
                creating exceptional digital experiences.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 items-center">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter">The Story</h2>
              <p className="text-gray-500 md:text-xl/relaxed">
                Founded in 2024, Virts Creative began with a simple mission: to
                help businesses succeed online through thoughtful design and
                powerful technology.
              </p>
              <p className="text-gray-500 md:text-xl/relaxed">
                Andrew has worked for digital marketing agencies as well as large e-commerce platforms like Stuller.
              </p>
              <p className="text-gray-500 md:text-xl/relaxed">
                Today, we continue to be driven by our commitment to excellence,
                innovation, and delivering results that exceed our clients'
                expectations.
              </p>
            </div>
            <div className="flex justify-center">
              <img
                src="https://67wvo3jvf7.ufs.sh/f/31uuUYnOr3SZmjeJPfBJFz4nbW2LMDNtOP7jpI1sgh5ScClu"
                alt="Virts Creative team working together"
                width={600}
                height={600}
                className="rounded-lg object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Our Values
              </h2>
              <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                The principles that guide our work and relationships.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl gap-8 py-12 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Excellence",
                description:
                  "We strive for excellence in everything we do, from design and development to client communication."
              },
              {
                title: "Innovation",
                description:
                  "We embrace new technologies and approaches to deliver cutting-edge solutions for our clients."
              },
              {
                title: "Collaboration",
                description:
                  "We believe in the power of collaboration, both within our team and with our clients."
              },
              {
                title: "Integrity",
                description:
                  "We operate with honesty, transparency, and a commitment to doing what's right."
              },
              {
                title: "Results",
                description:
                  "We focus on delivering measurable results that help our clients achieve their business goals."
              },
              {
                title: "Growth",
                description:
                  "We're committed to continuous learning and growth, both as individuals and as a company."
              }
            ].map((value, index) => (
              <div key={index} className="flex flex-col space-y-2">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <h3 className="font-bold">{value.title}</h3>
                </div>
                <p className="text-gray-500">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Meet The Team
              </h2>
              <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                The talented individuals who bring creativity and expertise to
                every project.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl gap-8 py-12 md:grid-cols-2 lg:grid-cols-4">
            {team.map((member, index) => (
              <div
                key={index}
                className="flex flex-col items-center space-y-4 text-center"
              >
                <img
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  width={200}
                  height={200}
                  className="rounded-full object-cover h-40 w-40"
                />
                <div className="space-y-2">
                  <h3 className="font-bold">{member.name}</h3>
                  <p className="text-sm text-gray-500">{member.role}</p>
                  <p className="text-sm text-gray-500">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                The Process
              </h2>
              <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                How we work with clients to deliver exceptional results.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl gap-8 py-12 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                step: "01",
                title: "Discovery",
                description:
                  "We start by understanding your business, goals, and target audience to create a tailored strategy."
              },
              {
                step: "02",
                title: "Planning",
                description:
                  "We develop a detailed project plan including sitemap, wireframes, and technical specifications."
              },
              {
                step: "03",
                title: "Design & Development",
                description:
                  "We create the visual design and build your website with a focus on performance and usability."
              },
              {
                step: "04",
                title: "Launch & Support",
                description:
                  "We deploy your website and provide ongoing support to ensure continued success."
              }
            ].map((process, index) => (
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

      {/* CTA Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-black text-white">
        <div className="container mx-auto grid items-center justify-center gap-4 px-4 text-center md:px-6">
          <div className="space-y-3">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
              Ready to Work Together?
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
