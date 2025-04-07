"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Mail, MapPin, Phone } from "lucide-react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        message: "",
      })
    }, 1500)
  }

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-white to-gray-100">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Contact Us</h1>
              <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Have a project in mind? Get in touch with our team to see how we can help.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
        <div className="container px-4 md:px-6">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold">Get in Touch</h2>
                <p className="mt-2 text-gray-500">
                  Fill out the form below and we'll get back to you as soon as possible.
                </p>
              </div>
              {isSubmitted ? (
                <div className="rounded-lg bg-green-50 p-6 text-green-700">
                  <h3 className="text-xl font-bold">Thank You!</h3>
                  <p className="mt-2">Your message has been received. We'll get back to you shortly.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        required
                      />
                    </div>
                  </div>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="(123) 456-7890"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="company">Company</Label>
                      <Input
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="Your Company"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your project..."
                      className="min-h-[150px]"
                      required
                    />
                  </div>
                  <Button
                    type="submit"
                    className="w-full bg-black text-white hover:bg-gray-800"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              )}
            </div>
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold">Contact Information</h2>
                <p className="mt-2 text-gray-500">Reach out to us directly using the information below.</p>
              </div>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <MapPin className="h-6 w-6 text-gray-500" />
                  <div>
                    <h3 className="font-bold">Our Office</h3>
                    <p className="text-gray-500">
                      123 Design Street
                      <br />
                      San Francisco, CA 94103
                      <br />
                      United States
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Mail className="h-6 w-6 text-gray-500" />
                  <div>
                    <h3 className="font-bold">Email Us</h3>
                    <p className="text-gray-500">
                      info@virtscreative.com
                      <br />
                      support@virtscreative.com
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Phone className="h-6 w-6 text-gray-500" />
                  <div>
                    <h3 className="font-bold">Call Us</h3>
                    <p className="text-gray-500">
                      +1 (555) 123-4567
                      <br />
                      Mon-Fri, 9am-6pm PST
                    </p>
                  </div>
                </div>
              </div>
              <div className="rounded-lg overflow-hidden">
                <iframe
                  title="Office Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d100939.98555098464!2d-122.50764017948551!3d37.75781499657369!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80859a6d00690021%3A0x4a501367f076adff!2sSan%20Francisco%2C%20CA!5e0!3m2!1sen!2sus!4v1623252234181!5m2!1sen!2sus"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Frequently Asked Questions</h2>
              <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Find answers to common questions about our services and process.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-2 lg:gap-12">
            {[
              {
                question: "What is your typical project timeline?",
                answer:
                  "Project timelines vary depending on scope and complexity. A typical website project takes 6-8 weeks from kickoff to launch, while larger projects may take 3-4 months.",
              },
              {
                question: "Do you offer website maintenance services?",
                answer:
                  "Yes, we offer ongoing maintenance packages to keep your website secure, up-to-date, and performing optimally. Our maintenance plans include regular updates, security monitoring, and technical support.",
              },
              {
                question: "How much does a website cost?",
                answer:
                  "Website costs vary based on your specific requirements. We provide custom quotes after understanding your needs. Our projects typically range from $5,000 for basic websites to $25,000+ for complex web applications.",
              },
              {
                question: "Do you help with content creation?",
                answer:
                  "Yes, we offer content creation services including copywriting, photography, and video production to help you present your brand effectively. We can work with your existing content or create new content from scratch.",
              },
              {
                question: "Will my website be mobile-friendly?",
                answer:
                  "Absolutely. All our websites are built with responsive design, ensuring they look and function perfectly on all devices, from desktop computers to smartphones and tablets.",
              },
              {
                question: "Do you provide SEO services?",
                answer:
                  "Yes, we implement on-page SEO best practices in all our website projects. We also offer comprehensive SEO services including keyword research, content optimization, and ongoing SEO strategy.",
              },
            ].map((faq, index) => (
              <div key={index} className="space-y-2">
                <h3 className="text-xl font-bold">{faq.question}</h3>
                <p className="text-gray-500">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

