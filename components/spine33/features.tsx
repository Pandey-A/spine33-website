"use client"

import { Users, ClipboardCheck, Heart, CalendarCheck, ChevronDown } from "lucide-react"
import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"

const doctors = [
  "Dr. Shwetal Gupta",
  "Dr. Nishchalta Jhanwar",
  "Dr. Munira Mamnoon",
]

const features = [
  {
    icon: Users,
    title: "Expert Spine Specialists",
    description: "Experienced doctors and physiotherapy experts dedicated to spine care, pain relief, and long-term recovery.",
    gradient: "from-[#fef3c7] to-[#fcd34d]",
    readMoreHref: "/read-more/expert-spine-specialists",
  },
  {
    icon: ClipboardCheck,
    title: "Quick Assessment",
    description: "Get a fast and accurate evaluation of your spine, posture, pain points, and mobility concerns.",
    gradient: "from-[#fcd34d] to-[#f9c722]",
    readMoreHref: "/read-more/quick-assessment",
  },
  {
    icon: Heart,
    title: "Pain-Free Treatment",
    description: "Advanced non-surgical treatments and physiotherapy procedures designed for safe and effective recovery.",
    gradient: "from-[#f9c722] to-[#eab308]",
    readMoreHref: "/read-more/pain-free-treatment",
  },
  {
    icon: CalendarCheck,
    title: "Book Your Consultation",
    description: "Choose your preferred specialist and schedule your visit in just a few minutes.",
    gradient: "from-[#eab308] to-[#ca8a04]",
    hasDropdown: true,
  },
]

export function Features() {
  const router = useRouter()
  const [selectedDoctor, setSelectedDoctor] = useState("")
  const [dropdownOpen, setDropdownOpen] = useState(false)

  return (
    <section id="features" className="relative z-20  md:-mt-8 lg:-mt-18 pb-8 md:pb-12  ">
      <div className="max-w-7xl mx-auto px-0 sm:px-4 md:px-6 ">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0 bg-[#1a0000]/10 border border-[#1a0000]/10 rounded-lg overflow-hidden">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`bg-gradient-to-b ${feature.gradient} p-6 lg:p-8 flex flex-col border-b sm:border-b-0 border-[#1a0000]/20`}
            >
              <div className="w-16 h-16 rounded-full bg-white/30 flex items-center justify-center mb-4">
                <feature.icon className="w-8 h-8 text-[#1a0000]" />
              </div>
              <h3 className="text-xl font-serif font-bold text-[#1a0000] mb-3">
                {feature.title}
              </h3>
              <p className="text-[#1a0000]/80 text-sm leading-relaxed mb-4 flex-grow">
                {feature.description}
              </p>

              {!feature.hasDropdown && (
                <Link
                  href={feature.readMoreHref}
                  className="inline-flex items-center justify-center px-4 py-2 rounded border border-[#1a0000] text-[#1a0000] text-sm font-medium hover:bg-[#1a0000] hover:text-white transition-colors mt-auto w-fit"
                >
                  Read More
                </Link>
              )}
              
              {feature.hasDropdown && (
                <div className="relative mt-auto">
                  <button
                    onClick={() => setDropdownOpen(!dropdownOpen)}
                    className="w-full flex items-center justify-between px-4 py-3 bg-white rounded border border-[#1a0000]/20 text-[#1a0000] text-sm"
                  >
                    <span>{selectedDoctor || "Select Doctor"}</span>
                    <ChevronDown className={`w-4 h-4 transition-transform ${dropdownOpen ? 'rotate-180' : ''}`} />
                  </button>
                  {dropdownOpen && (
                    <div className="absolute top-full left-0 right-0 mt-1 bg-white rounded border border-[#1a0000]/20 shadow-lg z-10">
                      {doctors.map((doctor) => (
                        <button
                          key={doctor}
                          onClick={() => {
                            setSelectedDoctor(doctor)
                            setDropdownOpen(false)
                            router.push(`/?doctor=${encodeURIComponent(doctor)}#contact-form`)
                          }}
                          className="w-full px-4 py-2 text-left text-sm text-[#1a0000] hover:bg-[#f9c722]/20 transition-colors"
                        >
                          {doctor}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
