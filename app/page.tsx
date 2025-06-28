import Header from "@/components/Header"
import Hero from "@/components/Hero"
import Footer from "@/components/Footer"
import { Shield, Users, TrendingUp, Award, Star } from "lucide-react"

export default function Home() {
  const features = [
    {
      icon: Shield,
      title: "Data-Driven Approach",
      description: "We use advanced analytics to build stronger cases and maximize your recovery.",
    },
    {
      icon: Users,
      title: "Experienced Team",
      description: "Our team of expert attorneys has decades of combined experience in personal injury law.",
    },
    {
      icon: TrendingUp,
      title: "Proven Results",
      description: "95% success rate with over $50M recovered for our clients.",
    },
    {
      icon: Award,
      title: "Award-Winning Service",
      description: "Recognized as the top personal injury firm in the region for three consecutive years.",
    },
  ]

  const testimonials = [
    {
      name: "Sarah Johnson",
      text: "Elite Legal Partners got me the compensation I deserved. Their data-driven approach made all the difference.",
      rating: 5,
    },
    {
      name: "Michael Chen",
      text: "Professional, responsive, and results-oriented. I couldn't have asked for better representation.",
      rating: 5,
    },
    {
      name: "Emily Rodriguez",
      text: "They turned my case around completely. The technology they use is impressive and effective.",
      rating: 5,
    },
  ]

  return (
    <main>
      <Header />
      <Hero />

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="container-max section-padding">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl font-bold text-gray-800 mb-4">Why Choose Elite Legal Partners?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We combine cutting-edge technology with legal expertise to deliver superior results for our clients.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon
              return (
                <div
                  key={index}
                  className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="font-semibold text-xl text-gray-800 mb-3">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="container-max section-padding">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl font-bold text-gray-800 mb-4">What Our Clients Say</h2>
            <p className="text-xl text-gray-600">Real stories from real clients who got the justice they deserved.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-50 p-8 rounded-xl">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic">"{testimonial.text}"</p>
                <p className="font-semibold text-gray-800">- {testimonial.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-gray-800 to-gray-900 text-white">
        <div className="container-max section-padding text-center">
          <h2 className="font-serif text-4xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Don't wait. Contact us today for a free consultation and let us fight for the compensation you deserve.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn-primary">Get Free Consultation</button>
            <button className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-gray-800 font-semibold px-8 py-4 rounded-lg transition-all duration-300">
              Call (555) 123-4567
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
