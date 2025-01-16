import { Instrument_Serif } from "next/font/google"

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  display: "swap",
  weight: "400",
  preload: true
})

export default function Home() {
  return (
    <div className="">
      <h1
        className={`text-6xl font-bold text-center ${instrumentSerif.className}`}
      >
        I elevate startups and small-medium businesses through design and
        development
      </h1>
    </div>
  )
}
