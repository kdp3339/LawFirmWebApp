"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X, Phone, Mail, Scale } from "lucide-react"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navigation = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Practice Areas", href: "/practice-areas" },
    { name: "Results", href: "/results" },
    { name: "Contact", href: "/contact" },
  ]

  return (
    <>
      {/* Top Bar */}
      <div className="bg-gray-900 text-white py-2 hidden md:block">
        <div className="container-max section-padding">
          <div className="flex justify-between items-center text-sm">
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span>(555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span>contact@elitelegal.com</span>
              </div>
            </div>
            <div className="text-yellow-400 font-medium">Free Consultation Available 24/7</div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header
        className={`fixed w-full z-50 transition-all duration-300 ${
          isScrolled ? "bg-white/95 backdrop-blur-md shadow-lg" : "bg-transparent"
        }`}
      >
        <nav className="container-max section-padding">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-lg flex items-center justify-center">
                <Scale className="h-6 w-6 text-white" />
              </div>
              <div>
                <div className={`font-serif font-bold text-xl ${isScrolled ? "text-gray-800" : "text-white"}`}>
                  Elite Legal
                </div>
                <div className={`text-sm ${isScrolled ? "text-gray-600" : "text-yellow-400"}`}>Partners</div>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`font-medium transition-colors hover:text-yellow-500 ${
                    isScrolled ? "text-gray-700" : "text-white"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <button className="btn-primary">Free Consultation</button>
            </div>

            {/* Mobile menu button */}
            <button
              className={`lg:hidden p-2 ${isScrolled ? "text-gray-800" : "text-white"}`}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </nav>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white border-t shadow-lg">
            <div className="section-padding py-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block py-3 text-gray-700 font-medium hover:text-yellow-500 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <button className="btn-primary w-full mt-4">Free Consultation</button>
            </div>
          </div>
        )}
      </header>
    </>
  )
}
