"use client"

import { useState, useEffect } from "react"

const slides = [
  {
    superTitle: "We are Posture and Back Pain Specialists",
    title: "Everything Back & Neck Pain",
    subtitle: "Our sole focus is to take the pain out of your life – anything arising out of your spine.",
    primaryBtn: { text: "VIEW OUR TEAM", href: "#doctors" },
    secondaryBtn: { text: "BOOK A VISIT", href: "#contact" },
  },
  {
    superTitle: "20+ Years of Expert Care",
    title: "Serving Nagpur & Central India",
    subtitle: "We have been there for more than a decade serving the community in all verticals of physiotherapy.",
    primaryBtn: { text: "READ MORE", href: "#about" },
    secondaryBtn: { text: "MORE ABOUT US", href: "#about" },
  },
]

export function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 3000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section id="hero" className="relative h-[500px] md:h-[600px] lg:h-[700px] bg-[#161b2e] overflow-hidden">
      {/* Hero Banner Image */}
      <div
        className="absolute inset-0 bg-center bg-cover"
        style={{ backgroundImage: "url('/Spine%2033%20banner.png')" }}
      />

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-60">
        <div className="absolute inset-0 bg-gradient-to-br from-[#222944] via-[#161b2e] to-[#121727]" />
      </div>

      {/* Slides */}
      <div className="relative h-full">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 flex items-center transition-opacity duration-1000 ${
              index === currentSlide ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
          >
            <div className="w-full max-w-7xl mx-auto px-6 md:px-10 lg:px-16">
              <p className="text-white text-sm md:text-base lg:text-lg font-semibold mb-4 italic text-left">
                {slide.superTitle}
              </p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-6 max-w-4xl leading-tight text-left text-balance">
                {slide.title}
              </h1>
              <p className="text-white/90 text-base md:text-xl lg:text-2xl font-medium mb-8 max-w-3xl text-left leading-relaxed text-pretty">
                {slide.subtitle}
              </p>
              <div className="flex flex-col sm:flex-row items-start gap-4">
                <a
                  href={slide.primaryBtn.href}
                  className="px-8 py-3 bg-[#180000] text-white font-semibold rounded hover:bg-[#2a0000] transition-colors w-full sm:w-auto text-center"
                >
                  {slide.primaryBtn.text}
                </a>
                <a
                  href={slide.secondaryBtn.href}
                  className="px-8 py-3 bg-[#f9c722] text-[#1a0000] font-semibold rounded hover:bg-[#d4a91a] transition-colors w-full sm:w-auto text-center"
                >
                  {slide.secondaryBtn.text}
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === currentSlide ? "bg-[#f9c722]" : "bg-white/40"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  )
}
