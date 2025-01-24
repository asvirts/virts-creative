import { Instrument_Serif } from "next/font/google"
import Image from "next/image"

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  display: "swap",
  weight: "400",
  preload: true
})

export async function generateMetadata() {
  return {
    title: "About Virts Creative - Web Design & Development",
    description:
      "Empowering businesses to thrive with innovative web solutions and creative design",
    openGraph: {
      title: "Virts Creative - Web Design & Development",
      description:
        "Empowering businesses to thrive with innovative web solutions and creative design",
      type: "website",
      url: "https://www.virtscreative.com",
      images: [
        {
          url: "https://67wvo3jvf7.ufs.sh/f/31uuUYnOr3SZ1rOEgRti9d86EqgU4mahPb2BwIWVcFjsvJL3",
          width: 1500,
          height: 500,
          alt: "Virts Creative Logo"
        }
      ]
    }
  }
}

export default function About() {
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
        Design is not just what it looks like and feels like. Design is how it
        works.
      </h1>
      <p className="text-lg text-center max-w-3xl text-light">
        Function follows form in every pixel and interaction. I craft digital
        experiences that marry beauty with purpose, ensuring your users
        don&apos;t just see the design—they feel it working for them.
      </p>
      <section>
        <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
          <div className="container">
            <div className="grid grid-cols-1 gap-y-12 md:grid-cols-2 md:items-center md:gap-x-12 lg:gap-x-20">
              <div>
                <h1 className="rb-5 mb-5 text-4xl font-bold md:mb-6 md:text-5xl lg:text-6xl ${helvetica.className} text-dark">
                  Long heading is what you see here in this feature section
                </h1>
                <p className="md:text-md text-light">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse varius enim in eros elementum tristique. Duis
                  cursus, mi quis viverra ornare, eros dolor interdum nulla, ut
                  commodo diam libero vitae erat.
                </p>
              </div>
              <div>
                <Image
                  src="https://67wvo3jvf7.ufs.sh/f/31uuUYnOr3SZmjeJPfBJFz4nbW2LMDNtOP7jpI1sgh5ScClu"
                  className="w-full object-cover"
                  alt="Relume placeholder image"
                  width={500}
                  height={500}
                />
              </div>
            </div>
          </div>
        </section>
      </section>
    </div>
  )
}
