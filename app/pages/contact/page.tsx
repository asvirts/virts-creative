import { Instrument_Serif } from "next/font/google"
import Link from "next/link"
import Image from "next/image"
const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  display: "swap",
  weight: "400",
  preload: true
})

export default function Contact() {
  return (
    <div className="flex flex-col items-center justify-center py-16 px-4 gap-8">
      <div className="flex items-center justify-center gap-4 bg-white border border-border rounded-full px-4 py-2">
        <Image
          src="https://67wvo3jvf7.ufs.sh/f/31uuUYnOr3SZ0iN8cYWeli5WA4cU1kKJZaDVESHtuF3mr0BY"
          alt="Reviewer"
          className="rounded-full border border-yellow-500"
          width={24}
          height={24}
        />
        <p className="text-sm">“Andrew was so great to work with!”</p>
      </div>
      <Image
        src="/virts-logo.svg"
        alt="Virts Creative Logo"
        width={36}
        height={36}
      />
      <h1
        className={`text-4xl lg:text-6xl  mx-auto max-w-5xl font-bold text-center ${instrumentSerif.className}`}
      >
        I elevate startups and small-medium businesses through design and
        development
      </h1>
      <Link
        href="https://calendly.com/andrewvirts/15-minute-intro-call"
        target="_blank"
        className="mt-8 mx-auto px-8 py-4 bg-yellow-500 text-text-dark rounded-full hover:opacity-90 transition-all"
      >
        Book my 15-minute intro call
      </Link>
      <div className="pt-16">
        <form className="w-full max-w-lg mx-auto space-y-6">
          <div className="flex gap-4">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                placeholder="Your name"
                required
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                placeholder="your@email.com"
                required
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
              placeholder="Your message"
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full px-8 py-4 bg-yellow-500 text-text-dark rounded-full hover:opacity-90 transition-all font-medium"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  )
}
