import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react"
import Image from "next/image"

const doctors = [
  {
    name: "Dr. Shwetal Gupta",
    credentials: "BPTh, MPTh (Ortho), C.S.M.T. (Spine)",
    role: "Specialist",
    image: "/doctors/1-removebg-preview.png",
  },
  {
    name: "Dr. Nishchalta Jhanwar",
    credentials: "BPTh, PCES (USA)",
    role: "Specialist",
    image: "/doctors/2-removebg-preview.png",
  },
  {
    name: "Dr. Munira Mamnoon",
    credentials: "BPTh, PCES",
    role: "Specialist",
    image: "/doctors/3-removebg-preview.png",
  },
]

export function Doctors() {
  return (
    <section id="doctors" className="py-12 lg:py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <p className="text-[#f9c722] font-medium tracking-wide uppercase text-sm mb-2">
            Our Doctors
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-[#1a0000] mb-4">
            Meet Our Experts
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-pretty">
            Our team of experienced doctors and physiotherapy specialists has been serving the people of Nagpur and Central India for over 20 years, providing expert spine care and rehabilitation services.
          </p>
        </div>

        {/* Doctors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {doctors.map((doctor, index) => (
            <div
              key={index}
              className="bg-gradient-to-b from-[#fef3c7] to-[#f9c722] rounded-lg overflow-hidden shadow-lg group"
            >
              {/* Image */}
              <div className="h-72 bg-[#1a0000]/10 relative overflow-hidden">
                <Image
                  src={doctor.image}
                  alt={doctor.name}
                  fill
                  className="object-contain object-top scale-110 translate-y-4"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              
              {/* Content */}
              <div className="p-6 text-center">
                <h3 className="text-xl font-serif font-bold text-[#1a0000] mb-1">
                  {doctor.name}
                </h3>
                <p className="text-[#1a0000]/70 text-sm mb-1">
                  {doctor.credentials}
                </p>
                <p className="text-[#1a0000]/80 font-medium text-sm mb-4">
                  {doctor.role}
                </p>
                
                {/* Social Icons */}
                <div className="flex items-center justify-center gap-3">
                  <a 
                    href="#" 
                    className="w-8 h-8 rounded-full bg-[#1a0000] flex items-center justify-center text-white hover:bg-[#1a0000]/80 transition-colors"
                  >
                    <Facebook className="w-4 h-4" />
                  </a>
                  <a 
                    href="#" 
                    className="w-8 h-8 rounded-full bg-[#1a0000] flex items-center justify-center text-white hover:bg-[#1a0000]/80 transition-colors"
                  >
                    <Twitter className="w-4 h-4" />
                  </a>
                  <a 
                    href="#" 
                    className="w-8 h-8 rounded-full bg-[#1a0000] flex items-center justify-center text-white hover:bg-[#1a0000]/80 transition-colors"
                  >
                    <Instagram className="w-4 h-4" />
                  </a>
                  <a 
                    href="#" 
                    className="w-8 h-8 rounded-full bg-[#1a0000] flex items-center justify-center text-white hover:bg-[#1a0000]/80 transition-colors"
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
