"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X, ChevronDown, Phone, Mail, MapPin, Clock, Facebook, Instagram, Youtube } from "lucide-react"

const services = [
  { name: "Back Pain", href: "/services/back-pain" },
  { name: "Spondylitis", href: "/services/spondylitis" },
  { name: "Disc Bulge", href: "/services/disc-bulge" },
  { name: "Pregnancy Back Pain", href: "/services/pregnancy-back-pain" },
  { name: "Spinal Canal Stenosis", href: "/services/spinal-canal-stenosis" },
  { name: "Headaches with Neck Pain", href: "/services/headaches-with-neck-pain" },
]

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)

  return (
    <header className="w-full">
      {/* Top Bar */}
      <div className="bg-[#1a0000] text-white text-sm">
        <div className="max-w-7xl mx-auto px-4 py-2">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-2 lg:gap-4">
            <div className="flex flex-wrap items-center gap-4 lg:gap-6 text-xs lg:text-sm">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#f9c722]" />
                <span>Mon - Sat 9:00-21:00, Sun - CLOSED</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#f9c722]" />
                <a href="tel:+919145330033" className="hover:text-[#f9c722] transition-colors">+91 9145330033</a>
              </div>
              <div className="hidden md:flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#f9c722]" />
                <a href="mailto:spine33ngp@gmail.com" className="hover:text-[#f9c722] transition-colors">spine33ngp@gmail.com</a>
              </div>
            </div>
            <div className="hidden lg:flex items-center gap-2">
              <MapPin className="w-4 h-4 text-[#f9c722]" />
              <span className="text-xs">Opp Rakshak Bandhu, Manewada Road, Nagpur, India, 440024</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center">
              <Image
                src="/services/Screenshot_2026-04-03_at_7.01.06_PM-removebg-preview.png"
                alt="Spine33 logo"
                width={180}
                height={64}
                className="h-12 lg:h-14 w-auto"
                priority
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8">
              <Link href="/" className="text-[#1a0000] hover:text-[#f9c722] font-medium transition-colors">
                Home
              </Link>
              <Link href="#about" className="text-[#1a0000] hover:text-[#f9c722] font-medium transition-colors">
                About Spine33
              </Link>
              <Link href="#doctors" className="text-[#1a0000] hover:text-[#f9c722] font-medium transition-colors">
                Meet Our Doctors
              </Link>
              
              {/* Services Dropdown */}
              <div className="relative">
                <button 
                  className="flex items-center gap-1 text-[#1a0000] hover:text-[#f9c722] font-medium transition-colors"
                  onMouseEnter={() => setServicesOpen(true)}
                  onMouseLeave={() => setServicesOpen(false)}
                >
                  Services
                  <ChevronDown className="w-4 h-4" />
                </button>
                {servicesOpen && (
                  <div 
                    className="absolute top-full left-0 w-56 bg-white shadow-lg rounded-md py-2 mt-1"
                    onMouseEnter={() => setServicesOpen(true)}
                    onMouseLeave={() => setServicesOpen(false)}
                  >
                    {services.map((service) => (
                      <Link 
                        key={service.name}
                        href={service.href}
                        className="block px-4 py-2 text-[#1a0000] hover:bg-[#f9c722] hover:text-[#1a0000] transition-colors"
                      >
                        {service.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            </nav>

            {/* Social Icons - Desktop */}
            <div className="hidden lg:flex items-center gap-3">
              <a href="#" className="w-10 h-10 rounded-full bg-[#1a0000] flex items-center justify-center text-white hover:bg-[#f9c722] hover:text-[#1a0000] transition-colors">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-[#1a0000] flex items-center justify-center text-white hover:bg-[#f9c722] hover:text-[#1a0000] transition-colors">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-[#1a0000] flex items-center justify-center text-white hover:bg-[#f9c722] hover:text-[#1a0000] transition-colors">
                <Youtube className="w-6 h-6" />
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="lg:hidden p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6 text-[#1a0000]" />
              ) : (
                <Menu className="w-6 h-6 text-[#1a0000]" />
              )}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="lg:hidden py-4 border-t">
              <nav className="flex flex-col gap-4">
                <Link href="/" className="text-[#1a0000] hover:text-[#f9c722] font-medium">
                  Home
                </Link>
                <Link href="#about" className="text-[#1a0000] hover:text-[#f9c722] font-medium">
                  About Spine33
                </Link>
                <Link href="#doctors" className="text-[#1a0000] hover:text-[#f9c722] font-medium">
                  Meet Our Doctors
                </Link>
                <div>
                  <button 
                    className="flex items-center gap-1 text-[#1a0000] hover:text-[#f9c722] font-medium"
                    onClick={() => setServicesOpen(!servicesOpen)}
                  >
                    Services
                    <ChevronDown className={`w-4 h-4 transition-transform ${servicesOpen ? 'rotate-180' : ''}`} />
                  </button>
                  {servicesOpen && (
                    <div className="pl-4 mt-2 flex flex-col gap-2">
                      {services.map((service) => (
                        <Link 
                          key={service.name}
                          href={service.href}
                          className="text-[#1a0000] hover:text-[#f9c722] text-sm"
                        >
                          {service.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              </nav>
              <div className="flex items-center gap-3 mt-4 pt-4 border-t">
                <a href="#" className="w-8 h-8 rounded-full bg-[#1a0000] flex items-center justify-center text-white">
                  <Facebook className="w-4 h-4" />
                </a>
                <a href="#" className="w-8 h-8 rounded-full bg-[#1a0000] flex items-center justify-center text-white">
                  <Instagram className="w-4 h-4" />
                </a>
                <a href="#" className="w-8 h-8 rounded-full bg-[#1a0000] flex items-center justify-center text-white">
                  <Youtube className="w-4 h-4" />
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}
