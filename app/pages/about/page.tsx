import { Instrument_Serif } from "next/font/google"
import Link from "next/link"
import Image from "next/image"
const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  display: "swap",
  weight: "400",
  preload: true
})

export default function About() {
  return (
    <div className="flex flex-col items-center justify-center py-16 gap-8">
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
        href="/contact"
        className="mt-8 mx-auto px-8 py-4 bg-yellow-500 text-text-dark rounded-full hover:opacity-90 transition-all"
      >
        Book my 15-minute intro call
      </Link>
      <div className="pt-16">
        <Link href="https://x.com/asvirts" target="_blank">
          <Image
            src="https://67wvo3jvf7.ufs.sh/f/31uuUYnOr3SZwLHHZO9OdtSjfYIKaRLX3B9CEmFnhJgHNvMP"
            alt="Talent Hub Mock Up"
            className="w-full"
            width={1440}
            height={832}
          />
        </Link>
      </div>
    </div>
  )
}
