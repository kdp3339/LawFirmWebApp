"use client"

import { useEffect, useState } from "react"
import { ArrowRight, Shield, TrendingUp, Users, Award, Phone } from "lucide-react"

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const stats = [
    { icon: Award, value: "$50M+", label: "Recovered for Clients" },
    { icon: Users, value: "1,000+", label: "Cases Won" },
    { icon: TrendingUp, value: "95%", label: "Success Rate" },
    { icon: Shield, value: "24/7", label: "Support Available" },
  ]

  return (
    <section className="relative min-h-screen flex items-center justify-center hero-bg">
      {/* Content */}
      <div className="relative z-20 container-max section-padding py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Main Content */}
          <div className="text-white">
            <div
              className={`transition-all duration-1000 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <div className="inline-flex items-center bg-yellow-500/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
                <span className="text-yellow-400 text-sm font-medium">🏆 #1 Data-Driven Law Firm</span>
              </div>

              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                Higher Recoveries Through
                <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent block">
                  Cutting-Edge Technology
                </span>
              </h1>

              <p className="text-xl text-gray-200 mb-8 leading-relaxed">
                A data-driven personal injury firm delivering superior results through advanced analytics, trusted local
                attorneys, and proven legal strategies.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <button className="btn-primary group">
                  Get Free Consultation
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="btn-secondary">
                  <Phone className="mr-2 h-5 w-5" />
                  Call Now: (555) 123-4567
                </button>
              </div>

              {/* Trust Indicators */}
              <div className="flex flex-wrap items-center gap-6 text-sm text-gray-300">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <span>No Win, No Fee</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <span>Free Case Review</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <span>Available 24/7</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Stats Cards */}
          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat, index) => {
              const Icon = stat.icon
              return (
                <div
                  key={stat.label}
                  className={`bg-white/10 backdrop-blur-md rounded-xl p-6 text-white transition-all duration-1000 hover:bg-white/20 hover:scale-105 ${
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                  }`}
                  style={{ transitionDelay: `${index * 200}ms` }}
                >
                  <Icon className="h-8 w-8 text-yellow-400 mb-3" />
                  <div className="text-2xl font-bold mb-1">{stat.value}</div>
                  <div className="text-sm text-gray-300">{stat.label}</div>
                </div>
              )
            })}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
