import { Instrument_Serif } from "next/font/google"
import Link from "next/link"
import Image from "next/image"
const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  display: "swap",
  weight: "400",
  preload: true
})

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center py-16 gap-8">
      <Image
        src="/virts-logo.svg"
        alt="Virts Creative Logo"
        width={36}
        height={36}
      />
      <h1
        className={`text-6xl mx-auto max-w-5xl font-bold text-center ${instrumentSerif.className}`}
      >
        I elevate startups and small-medium businesses through design and
        development
      </h1>
      <Link
        href="/contact"
        className="mt-8 mx-auto px-8 py-4 bg-yellow-500 text-text-dark rounded-full hover:opacity-90 transition-opacity"
      >
        Book my 15-minute intro call
      </Link>
    </div>
  )
}
