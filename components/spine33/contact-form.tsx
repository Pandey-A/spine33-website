"use client"

import { useEffect, useState } from "react"
import { ChevronDown, Phone } from "lucide-react"
import emailjs from "@emailjs/browser"
import { useRouter, useSearchParams } from "next/navigation"
import { spineServices } from "@/lib/spine-services"

const EMAILJS_SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "service_t9ce9ir"
const EMAILJS_TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "template_4j4abl3"
const EMAILJS_PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "sOcRWGwpoIz83_3ar"
const DESTINATION_EMAIL = process.env.NEXT_PUBLIC_LEAD_DESTINATION_EMAIL || "spine33ngp@gmail.com"
const HOSPITAL_ADDRESS = "Opp Rakshak Bandhu, Manewada Road, Nagpur, India, 440024"
const MAP_QUERY = "Spine33+Clinic+Opp+Rakshak+Bandhu,+Manewada+Road,+Nagpur,+India,+440024"

type ContactFormProps = {
  defaultService?: string
  sectionId?: string
  showSpecialties?: boolean
  title?: string
  subtitle?: string
}

export function ContactForm({
  defaultService = "",
  sectionId = "contact-form",
  showSpecialties = true,
  title = "Book Your Consultation",
  subtitle = "Share your details and our team will call you shortly.",
}: ContactFormProps) {
  const router = useRouter()
  const searchParams = useSearchParams()
  const selectedDoctorFromQuery = searchParams.get("doctor") || ""

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    doctor: "",
    service: defaultService,
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [status, setStatus] = useState("")
  const [statusType, setStatusType] = useState<"success" | "error" | "">("")

  useEffect(() => {
    setFormData((prev) => ({ ...prev, service: defaultService }))
  }, [defaultService])

  useEffect(() => {
    if (selectedDoctorFromQuery) {
      setFormData((prev) => ({ ...prev, doctor: selectedDoctorFromQuery }))
    }
  }, [selectedDoctorFromQuery])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setStatus("Sending your request...")
    setStatusType("")

    const templateParams = {
      to_email: DESTINATION_EMAIL,
      from_name: formData.name,
      from_email: formData.email || "Not provided",
      from_phone: formData.phone,
      preferred_doctor: formData.doctor || "Not selected",
      service_type: formData.service,
      date: new Date().toLocaleString(),
    }

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams,
        EMAILJS_PUBLIC_KEY,
      )

      setStatus("Thank you. Your request has been sent successfully.")
      setStatusType("success")
      setFormData({
        name: "",
        email: "",
        phone: "",
        doctor: selectedDoctorFromQuery,
        service: defaultService,
      })

      router.push("/thank-you")
    } catch {
      setStatus("Unable to send right now. Please try again in a moment.")
      setStatusType("error")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id={sectionId} className="w-full bg-[#fdfdfd] py-12 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-stretch">
          <div className={`${showSpecialties ? "lg:col-span-4" : "lg:col-span-6 lg:col-start-4"} h-full`}>
            <div className="h-full rounded-2xl border border-gray-200 bg-white shadow-sm p-6 md:p-7 flex flex-col">
              <div>
                <p className="text-[#f9c722] font-medium tracking-wide uppercase text-sm mb-2">Contact Us</p>
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#1a0000] mb-2">{title}</h2>
                <p className="text-gray-500 italic text-sm">{subtitle}</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4 mt-6">
              <div className="relative">
                <select
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  className="w-full px-5 py-3.5 bg-white border border-gray-200 rounded-[18px] text-gray-700 appearance-none focus:outline-none focus:ring-2 focus:ring-[#f9c722]/30 shadow-sm text-sm"
                  required
                >
                  <option value="">Select Service</option>
                  {spineServices.map((service) => (
                    <option key={service.title} value={service.title}>
                      {service.title}
                    </option>
                  ))}
                </select>
                <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" size={16} />
              </div>

              <input
                type="text"
                placeholder="Your Name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-5 py-3.5 bg-white border border-gray-200 rounded-[18px] text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#f9c722]/30 shadow-sm text-sm"
                required
              />

              <input
                type="email"
                placeholder="Email (Optional)"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-5 py-3.5 bg-white border border-gray-200 rounded-[18px] text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#f9c722]/30 shadow-sm text-sm"
              />

              <input
                type="tel"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full px-5 py-3.5 bg-white border border-gray-200 rounded-[18px] text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#f9c722]/30 shadow-sm text-sm"
                required
              />

              <input
                type="text"
                placeholder="Preferred Doctor (Optional)"
                value={formData.doctor}
                onChange={(e) => setFormData({ ...formData, doctor: e.target.value })}
                className="w-full px-5 py-3.5 bg-white border border-gray-200 rounded-[18px] text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#f9c722]/30 shadow-sm text-sm"
              />

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3.5 bg-[#1a0000] text-white font-semibold text-base rounded-[18px] shadow-md hover:bg-[#2b0000] transition-all disabled:opacity-60"
              >
                {isSubmitting ? "Submitting..." : "Send Request"}
              </button>

              {status && (
                <p
                  className={`text-center font-medium text-sm p-2 rounded-md ${
                    statusType === "success"
                      ? "bg-green-100 text-green-700"
                      : statusType === "error"
                        ? "bg-red-100 text-red-700"
                        : "bg-blue-100 text-blue-700"
                  }`}
                >
                  {status}
                </p>
              )}
              </form>
            </div>
          </div>

          {showSpecialties && <div className="lg:col-span-8 h-full flex flex-col">
            <div className="flex items-center gap-4 mb-6">
              <h3 className="text-2xl md:text-3xl font-serif font-bold text-[#1a0000] uppercase tracking-tight">
                Hospital Location
              </h3>
              <div className="flex-1 h-[2px] bg-[#1a0000]/15" />
            </div>

            <div className="rounded-2xl border border-gray-200 overflow-hidden shadow-sm bg-white flex-1 flex flex-col">
              <iframe
                title="Spine33 Hospital Location"
                src={`https://www.google.com/maps?q=${MAP_QUERY}&output=embed`}
                className="w-full h-[420px] lg:h-auto lg:flex-1"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />

              <div className="p-4 md:p-5 border-t border-gray-200 bg-[#fafafa]">
                <p className="text-sm md:text-base text-gray-700 mb-3">{HOSPITAL_ADDRESS}</p>
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${MAP_QUERY}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex px-4 py-2 rounded-md bg-[#1a0000] text-white text-sm font-semibold hover:bg-[#2b0000] transition-colors"
                >
                  Open in Google Maps
                </a>
              </div>
            </div>
          </div>}
        </div>
      </div>

      {/* Floating Action Buttons */}
      <div className="fixed bottom-6 right-6 flex flex-col gap-3 z-50">
        {/* WhatsApp Button */}
        <a
          href="https://wa.me/919890111333?text=Hello%20Spine33"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] text-white shadow-lg hover:bg-[#1FAA56] transition-all hover:scale-110"
          title="Chat on WhatsApp"
        >
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 0C5.373 0 0 5.373 0 12c0 2.184.631 4.21 1.714 5.947L.33 24l6.236-1.993C8.787 23.468 10.34 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.75c-1.467 0-2.91-.347-4.186-.979l-.301-.165-3.116.998.998-3.088-.165-.301C2.597 16.91 2.25 15.467 2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75zm5.35-7.298c-.292-.146-1.727-.852-1.996-.948-.27-.095-.466-.146-.661.146-.196.293-.759.948-.93 1.142-.171.195-.342.22-.634.073-.292-.146-1.234-.455-2.354-1.453-.87-.776-1.457-1.733-1.628-2.026-.171-.293-.018-.451.128-.597.131-.132.292-.342.438-.512.146-.171.195-.293.293-.488.098-.196.049-.365-.024-.511-.074-.146-.661-1.586-.906-2.172-.239-.568-.48-.491-.66-.5-.171-.008-.366-.01-.561-.01-.196 0-.512.073-.78.366-.268.293-1.023.999-1.023 2.435 0 1.435 1.048 2.824 1.194 3.019.146.195 2.062 3.147 4.993 4.414.70.304 1.24.482 1.664.618.704.225 1.336.192 1.84.116.562-.087 1.728-.706 1.976-1.387.248-.682.248-1.267.174-1.387-.074-.122-.27-.196-.563-.341z" />
          </svg>
        </a>

        {/* Call Button */}
        <a
          href="tel:+919890111333"
          className="flex items-center justify-center w-14 h-14 rounded-full bg-blue-500 text-white shadow-lg hover:bg-blue-600 transition-all hover:scale-110"
          title="Call us"
        >
          <Phone size={24} />
        </a>
      </div>
    </section>
  )
}
