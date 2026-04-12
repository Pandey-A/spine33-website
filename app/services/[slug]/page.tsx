import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { CheckCircle2 } from "lucide-react"
import { Header } from "@/components/spine33/header"
import { Footer } from "@/components/spine33/footer"
import { ContactForm } from "@/components/spine33/contact-form"
import { getSpineServiceBySlug, spineServices } from "@/lib/spine-services"

type ServicePageProps = {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return spineServices.map((service) => ({ slug: service.slug }))
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const { slug } = await params
  const service = getSpineServiceBySlug(slug)

  if (!service) {
    return {
      title: "Service Not Found | Spine33",
    }
  }

  return {
    title: `${service.title} | Spine33`,
    description: service.shortDescription,
  }
}

export default async function ServicePage({ params }: ServicePageProps) {
  const { slug } = await params
  const service = getSpineServiceBySlug(slug)

  if (!service) {
    notFound()
  }

  return (
    <main className="min-h-screen bg-white">
      <Header />

      <section className="py-12 lg:py-16 bg-gradient-to-b from-[#f9f9fc] to-[#ffffff]">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <Link href="/#services" className="inline-flex mb-5 text-sm font-medium text-[#8b0000] hover:text-[#1a0000] transition-colors">
            ← Back to Services
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden border border-gray-200 shadow-sm bg-gray-100">
              <Image src={service.image} alt={service.title} fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" priority />
            </div>

            <div>
              <p className="text-[#f9c722] font-medium tracking-wide uppercase text-sm mb-2">Spine33 Service</p>
              <h1 className="text-4xl md:text-5xl font-serif font-bold text-[#1a0000] mb-4">{service.title}</h1>
              <p className="text-gray-700 text-lg leading-relaxed mb-6">{service.overview}</p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {service.conditions.map((item) => (
                  <div key={item} className="flex items-center gap-2 text-gray-700">
                    <CheckCircle2 className="w-5 h-5 text-[#f9c722] flex-shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-10 lg:py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6 grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          <div className="rounded-2xl border border-[#f3e0c4] bg-gradient-to-b from-[#fffaf2] to-white p-6">
            <h2 className="text-2xl font-serif font-bold text-[#1a0000] mb-4">Who Can Benefit</h2>
            <ul className="space-y-3">
              {service.whoItsFor.map((item) => (
                <li key={item} className="text-gray-700 leading-relaxed flex items-start gap-2">
                  <span className="mt-2 w-2 h-2 rounded-full bg-[#f9c722] flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border border-[#e2e2e2] bg-gradient-to-b from-[#fafafa] to-white p-6">
            <h2 className="text-2xl font-serif font-bold text-[#1a0000] mb-4">Treatment Approach</h2>
            <ul className="space-y-3">
              {service.treatments.map((item) => (
                <li key={item} className="text-gray-700 leading-relaxed flex items-start gap-2">
                  <span className="mt-2 w-2 h-2 rounded-full bg-[#1a0000] flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <ContactForm
        defaultService={service.title}
        sectionId="service-contact-form"
        showSpecialties={false}
        title={`Consult for ${service.title}`}
        subtitle="Fill this quick form and our team will call you to guide the next step."
      />

      <Footer />
    </main>
  )
}
