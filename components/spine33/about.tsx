import { CheckCircle } from "lucide-react"
import Image from "next/image"

const highlights = [
  "20+ Years of Expert Spine Care",
  "Non-surgical Treatment Approach",
  "Certified Spine Specialists",
  "State-of-the-art Equipment",
  "Personalized Treatment Plans",
  "Post-treatment Follow-up Care",
]

export function About() {
  return (
    <section id="about" className="py-12 lg:py-16 bg-gradient-to-b from-[#f8f8fa] to-[#f2f3f6]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image Side */}
          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden relative bg-white border border-[#1a0000]/10 shadow-[0_20px_50px_rgba(17,24,39,0.12)]">
              <div className="absolute inset-0 bg-gradient-to-br from-[#f9c722]/25 via-[#f7f2e5]/80 to-[#ffffff]/90" />
              <div className="absolute inset-0 p-6 md:p-8">
                <Image
                  src="/doctors/Meet_our_team_Spine_33-removebg-preview.png"
                  alt="Spine33 medical team"
                  fill
                  className="object-contain object-center"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                />
              </div>
              <div className="hidden sm:block absolute top-6 left-6 bg-white/90 backdrop-blur px-4 py-2 rounded-full border border-[#1a0000]/10 shadow-sm">
                <p className="text-[#1a0000] font-semibold text-sm">Expert Care Since 2006</p>
              </div>
            </div>
            
            {/* Stats Card */}
            <div className="absolute -bottom-4 -right-4 lg:right-auto lg:-left-6 bg-[#1a0000] text-white p-4 sm:p-6 rounded-xl shadow-2xl border border-white/10">
              <div className="text-center">
                <p className="text-3xl sm:text-4xl font-serif font-bold text-[#f9c722]">20+</p>
                <p className="text-xs sm:text-sm uppercase tracking-wide">Years Experience</p>
              </div>
            </div>
          </div>

          {/* Content Side */}
          <div className="lg:pr-4">
            <p className="text-[#f9c722] font-medium tracking-wide uppercase text-sm mb-2">
              About Spine33
            </p>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#1a0000] mb-6 text-balance">
              Dedicated to Your Spine Health & Wellness
            </h2>
            <p className="text-gray-600 mb-6 leading-relaxed text-lg text-pretty">
              At Spine33, we are committed to providing the highest quality spine care and rehabilitation services. 
              Our team of experienced doctors and physiotherapy specialists has been serving the people of Nagpur 
              and Central India for over 20 years.
            </p>
            <p className="text-gray-600 mb-8 leading-relaxed text-lg text-pretty">
              We specialize in non-surgical treatment approaches for various spine conditions, 
              using advanced techniques and state-of-the-art equipment to ensure the best possible outcomes for our patients.
            </p>

            {/* Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
              {highlights.map((highlight, index) => (
                <div key={index} className="flex items-center gap-2.5">
                  <span className="w-6 h-6 rounded-full bg-[#f9c722]/20 border border-[#f9c722]/40 flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-4 h-4 text-[#d39b00]" />
                  </span>
                  <span className="text-gray-700 text-[15px]">{highlight}</span>
                </div>
              ))}
            </div>

            <a
              href="#contact"
              className="inline-block px-8 py-3 bg-[#8b0000] text-white font-medium rounded hover:bg-[#6b0000] transition-colors"
            >
              Learn More About Us
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
