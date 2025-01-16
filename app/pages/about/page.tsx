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
        Design is not just what it looks like and feels like. Design is how it
        works.
      </h1>
      <p className="text-lg text-center max-w-3xl text-light">
        Function follows form in every pixel and interaction. I craft digital
        experiences that marry beauty with purpose, ensuring your users don't
        just see the design—they feel it working for them.
      </p>
    </div>
  )
}
