import Image from "next/image"
import Link from "next/link"
import { spineServices } from "@/lib/spine-services"

const cardStyles = [
  {
    cardClass: "bg-gradient-to-b from-[#fff7f7] to-white border-[#f4c9c9]",
    titleClass: "text-[#8b0000]",
    buttonClass: "bg-[#8b0000] hover:bg-[#6f0000] text-white",
  },
  {
    cardClass: "bg-gradient-to-b from-[#f7f9ff] to-white border-[#ccd7ff]",
    titleClass: "text-[#1f3a8a]",
    buttonClass: "bg-[#1f3a8a] hover:bg-[#172c67] text-white",
  },
  {
    cardClass: "bg-gradient-to-b from-[#fff9f0] to-white border-[#f1ddbc]",
    titleClass: "text-[#7a3e00]",
    buttonClass: "bg-[#7a3e00] hover:bg-[#5f3000] text-white",
  },
  {
    cardClass: "bg-gradient-to-b from-[#fff6fb] to-white border-[#f2cfe3]",
    titleClass: "text-[#8f2d67]",
    buttonClass: "bg-[#8f2d67] hover:bg-[#70224f] text-white",
  },
  {
    cardClass: "bg-gradient-to-b from-[#f6fffa] to-white border-[#bfe8d5]",
    titleClass: "text-[#0f6a4b]",
    buttonClass: "bg-[#0f6a4b] hover:bg-[#0b533b] text-white",
  },
  {
    cardClass: "bg-gradient-to-b from-[#f7f7f7] to-white border-[#d6d6d6]",
    titleClass: "text-[#2f2f2f]",
    buttonClass: "bg-[#2f2f2f] hover:bg-[#1f1f1f] text-white",
  },
]

export function Services() {
  return (
    <section id="services" className="py-12 lg:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <p className="text-[#f9c722] font-medium tracking-wide uppercase text-sm mb-2">
            Specialised Spine & Posture Care
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-[#1a0000] mb-4">
            OUR SERVICES
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-pretty">
            Targeted treatment across all spine concerns including back pain, posture issues, sciatica, slip disc, and pregnancy-related discomfort.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {spineServices.map((service, index) => {
            const style = cardStyles[index % cardStyles.length]

            return (
            <div
              key={index}
              className={`group rounded-2xl border overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 ${style.cardClass}`}
            >
              {/* Service Image */}
              <Link href={`/services/${service.slug}`} className="block relative aspect-square bg-white/80 overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </Link>
              
              {/* Content */}
              <div className="p-5 md:p-6">
                <Link href={`/services/${service.slug}`} className="block">
                  <h3 className={`text-2xl md:text-[27px] font-serif font-bold tracking-tight leading-none mb-3 ${style.titleClass}`}>
                    {service.title}
                  </h3>
                </Link>
                <p className="text-gray-700 text-sm leading-relaxed min-h-[52px]">
                  {service.conditions.join(", ")}
                </p>
                <Link
                  href={`/services/${service.slug}`}
                  className={`inline-flex mt-5 px-5 py-2.5 rounded-md text-sm font-semibold transition-colors ${style.buttonClass}`}
                >
                  Explore
                </Link>
              </div>
            </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
