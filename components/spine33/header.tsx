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
              <a href="https://www.facebook.com/profile.php?id=61586912152085" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-[#1a0000] flex items-center justify-center text-white hover:bg-[#f9c722] hover:text-[#1a0000] transition-colors">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="https://www.instagram.com/spine33_clinic/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-[#1a0000] flex items-center justify-center text-white hover:bg-[#f9c722] hover:text-[#1a0000] transition-colors">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="https://www.youtube.com/@spine33clinic" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-[#1a0000] flex items-center justify-center text-white hover:bg-[#f9c722] hover:text-[#1a0000] transition-colors">
                <Youtube className="w-6 h-6" />
              </a>
              <a href="https://share.google/k0Z8Wb82SgHnX9OvI" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-[#1a0000] flex items-center justify-center text-white hover:bg-[#f9c722] hover:text-[#1a0000] transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                </svg>
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
                <a href="https://www.facebook.com/profile.php?id=61586912152085" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-[#1a0000] flex items-center justify-center text-white">
                  <Facebook className="w-4 h-4" />
                </a>
                <a href="https://www.instagram.com/spine33_clinic/" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-[#1a0000] flex items-center justify-center text-white">
                  <Instagram className="w-4 h-4" />
                </a>
                <a href="https://www.youtube.com/@spine33clinic" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-[#1a0000] flex items-center justify-center text-white">
                  <Youtube className="w-4 h-4" />
                </a>
                <a href="https://share.google/k0Z8Wb82SgHnX9OvI" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-[#1a0000] flex items-center justify-center text-white">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                  </svg>
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}
