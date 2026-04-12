import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Youtube, Linkedin } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const quickLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/#about" },
  { name: "Our Doctors", href: "/#doctors" },
  { name: "Services", href: "/#services" },
  { name: "Contact", href: "/#contact-form" },
]

const services = [
  { name: "Back Pain Treatment", href: "/services/back-pain" },
  { name: "Spondylitis Care", href: "/services/spondylitis" },
  { name: "Disc Bulge Treatment", href: "/services/disc-bulge" },
  { name: "Pregnancy Back Pain", href: "/services/pregnancy-back-pain" },
  { name: "Spinal Stenosis", href: "/services/spinal-canal-stenosis" },
]

export function Footer() {
  return (
    <footer id="contact" className="bg-[#e5e7eb] text-[#1f2937]">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* About Column */}
          <div>
            <Link href="/" className="inline-block mb-4">
              <Image
                src="/services/Screenshot_2026-04-03_at_7.01.06_PM-removebg-preview.png"
                alt="Spine33 logo"
                width={180}
                height={64}
                className="h-12 w-auto"
              />
            </Link>
            <p className="text-[#4b5563] text-sm leading-relaxed mb-4">
              We are Posture and Back Pain Specialists. Our sole focus is to take the pain out of your life – anything arising out of your spine.
            </p>
            <div className="flex items-center gap-3">
              <a 
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white flex items-center justify-center text-[#1a0000] border border-gray-300 hover:bg-[#f9c722] hover:border-[#f9c722] transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a 
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white flex items-center justify-center text-[#1a0000] border border-gray-300 hover:bg-[#f9c722] hover:border-[#f9c722] transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a 
                href="https://www.youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white flex items-center justify-center text-[#1a0000] border border-gray-300 hover:bg-[#f9c722] hover:border-[#f9c722] transition-colors"
                aria-label="Youtube"
              >
                <Youtube className="w-4 h-4" />
              </a>
              <a 
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white flex items-center justify-center text-[#1a0000] border border-gray-300 hover:bg-[#f9c722] hover:border-[#f9c722] transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-serif font-bold text-[#111827] mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="text-[#4b5563] hover:text-[#1a0000] transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-serif font-bold text-[#111827] mb-4">
              Our Services
            </h3>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service.name}>
                  <Link 
                    href={service.href}
                    className="text-[#4b5563] hover:text-[#1a0000] transition-colors text-sm"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-serif font-bold text-[#111827] mb-4">
              Contact Us
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#6b7280] flex-shrink-0 mt-0.5" />
                <span className="text-[#4b5563] text-sm">
                  Opp Rakshak Bandhu, Manewada Road, Nagpur, India, 440024
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[#6b7280] flex-shrink-0" />
                <a href="tel:+919145330033" className="text-[#4b5563] hover:text-[#1a0000] transition-colors text-sm">
                  +91 9145330033
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-[#6b7280] flex-shrink-0" />
                <a href="mailto:spine33ngp@gmail.com" className="text-[#4b5563] hover:text-[#1a0000] transition-colors text-sm">
                  spine33ngp@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-[#6b7280] flex-shrink-0" />
                <span className="text-[#4b5563] text-sm">
                  Mon - Sat: 9:00 - 21:00
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-300">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-[#6b7280] text-sm text-center md:text-left">
              &copy; {new Date().getFullYear()} Spine33. All rights reserved.
            </p>
            <div className="flex items-center gap-6 text-sm">
              <Link href="/privacy-policy" className="text-[#6b7280] hover:text-[#1a0000] transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms-of-service" className="text-[#6b7280] hover:text-[#1a0000] transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
