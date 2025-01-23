import { Instrument_Serif } from "next/font/google"
import Link from "next/link"
import Image from "next/image"
const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  display: "swap",
  weight: "400",
  preload: true,
  fallback: ["system-ui", "arial"],
  adjustFontFallback: true
})

const projects = [
  {
    name: "Covenant Child Development Center",
    tags: ["Branding", "Design", "Development", "CMS"],
    image:
      "https://67wvo3jvf7.ufs.sh/f/31uuUYnOr3SZXMLbPO2urfNOqtnyMZPiYc10xoeR5Hb43QmB"
  },
  {
    name: "MyJAM",
    tags: ["Design", "Development"],
    image:
      "https://67wvo3jvf7.ufs.sh/f/31uuUYnOr3SZ3TJLwYnOr3SZaBYUL5Wk1CDGeJv6E2dRcKfh"
  },
  {
    name: "Case By Case",
    tags: ["Design", "Development", "E-commerce"],
    image:
      "https://67wvo3jvf7.ufs.sh/f/31uuUYnOr3SZAvLBHDYSkbiFERZeSHQCfgVP3stYl7UXDuIn",
    link: "https://www.stuller.com/case-by-case-custom-jewelry-displays"
  },
  {
    name: "Bond Medical Center",
    tags: ["Design", "Development", "CMS"],
    image:
      "https://67wvo3jvf7.ufs.sh/f/31uuUYnOr3SZfdgpeiV6qWHUSygFbjtl7EA0MCJx8wKRnZd2",
    link: "https://bondmedicalcenter.com/"
  },
  {
    name: "Elite Training of Louisiana",
    tags: ["Design", "Development", "CMS"],
    image:
      "https://67wvo3jvf7.ufs.sh/f/31uuUYnOr3SZge5K2FI0QLKxEwoVy6DkqsOGn72zcCFjvJBI",
    link: "https://elitetrainingla.com/"
  },
  {
    name: "MKON Client Sites",
    tags: ["Design", "Development"],
    image:
      "https://67wvo3jvf7.ufs.sh/f/31uuUYnOr3SZDpFBkq5WIf87VUzRhOSMyDmCalN3ngeHqkcx"
  }
]

export async function generateMetadata() {
  return {
    title: "Virts Creative - Web Design & Development",
    description:
      "Elevating startups and small-medium businesses through design and development",
    openGraph: {
      title: "Virts Creative - Web Design & Development",
      description:
        "Elevating startups and small-medium businesses through design and development",
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

export default function Home() {
  return (
    <div>
      <section className="flex flex-col items-center justify-center py-16 px-4 gap-8">
        <div className="flex items-center justify-center gap-4 bg-white dark:bg-gray-950 border border-border dark:border-gray-700 rounded-full px-4 py-2">
          <Image
            src="https://67wvo3jvf7.ufs.sh/f/31uuUYnOr3SZ0iN8cYWeli5WA4cU1kKJZaDVESHtuF3mr0BY"
            alt="Reviewer"
            className="rounded-full border border-yellow-500"
            width={24}
            height={24}
            priority
            quality={75}
            loading="eager"
          />
          <p className="text-sm text-dark dark:text-white">
            &quot;Andrew was so great to work with!&quot;
          </p>
        </div>
        <Image
          src="/virts-logo.svg"
          alt="Virts Creative Logo"
          width={36}
          height={36}
          priority
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
          className="mt-8 mx-auto px-8 py-4 bg-yellow-500 dark:bg-yellow-600 text-text-dark rounded-full hover:opacity-90 transition-all"
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
              loading="lazy"
              quality={75}
            />
          </Link>
        </div>
      </section>
      <section className="py-32 gap-8 px-4">
        <div className="flex flex-wrap items-center gap-4 text-start">
          <h2 className="text-4xl text-dark dark:text-white">Featured work</h2>
          <div className="text-4xl text-light">
            A selection of recent projects.
          </div>
        </div>
        <div className="flex flex-wrap items-center justify-between py-8 gap-x-4 gap-y-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="w-full sm:w-[calc(50%-1rem)] md:w-[calc(33.33%-1rem)] flex flex-col p-3 bg-white dark:bg-gray-800  rounded gap-4"
            >
              {project.link ? (
                <Link href={project.link} target="_blank">
                  <Image
                    src={project.image}
                    alt={`${project.name} Logo`}
                    width={445}
                    height={300}
                    className="rounded object-cover w-full h-[200px] lg:h-[300px] hover:opacity-90 transition-opacity"
                    loading="lazy"
                    quality={75}
                  />
                </Link>
              ) : (
                <Image
                  src={project.image}
                  alt={`${project.name} Logo`}
                  width={445}
                  height={300}
                  className="rounded object-cover w-full h-[300px]"
                />
              )}
              <h3 className="text-dark dark:text-white text-2xl">
                {project.name}
              </h3>
              <div className="flex items-center justify-start gap-2">
                {project.tags.map((tag, index) => (
                  <div
                    key={index}
                    className="px-2 py-1 bg-yellow-500 dark:bg-gray-600 rounded-full"
                  >
                    <p className="text-xs text-dark dark:text-white">{tag}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
