import Header from "@/components/Header"
import Footer from "@/components/Footer"
import { Car, Heart, Briefcase, Home, Truck, Bike, Users, Shield } from "lucide-react"

export default function PracticeAreas() {
  const practiceAreas = [
    {
      icon: Car,
      title: "Auto Accidents",
      description: "Comprehensive representation for car, truck, and motorcycle accidents with proven results.",
      cases: "500+ Cases",
      recovery: "$25M+ Recovered",
    },
    {
      icon: Heart,
      title: "Medical Malpractice",
      description: "Fighting for victims of medical negligence and hospital errors with expert medical testimony.",
      cases: "200+ Cases",
      recovery: "$15M+ Recovered",
    },
    {
      icon: Briefcase,
      title: "Workplace Injuries",
      description: "Protecting workers' rights and securing compensation for on-the-job injuries.",
      cases: "300+ Cases",
      recovery: "$8M+ Recovered",
    },
    {
      icon: Home,
      title: "Premises Liability",
      description: "Slip and fall, inadequate security, and property-related injury cases.",
      cases: "150+ Cases",
      recovery: "$5M+ Recovered",
    },
    {
      icon: Truck,
      title: "Trucking Accidents",
      description: "Specialized expertise in complex commercial vehicle and trucking accident cases.",
      cases: "100+ Cases",
      recovery: "$12M+ Recovered",
    },
    {
      icon: Bike,
      title: "Bicycle & Pedestrian",
      description: "Advocating for vulnerable road users injured in traffic accidents.",
      cases: "80+ Cases",
      recovery: "$3M+ Recovered",
    },
    {
      icon: Users,
      title: "Wrongful Death",
      description: "Compassionate representation for families who have lost loved ones due to negligence.",
      cases: "50+ Cases",
      recovery: "$10M+ Recovered",
    },
    {
      icon: Shield,
      title: "Product Liability",
      description: "Holding manufacturers accountable for defective and dangerous products.",
      cases: "75+ Cases",
      recovery: "$6M+ Recovered",
    },
  ]

  return (
    <main>
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-r from-gray-800 to-gray-900 text-white">
        <div className="container-max section-padding">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-serif text-5xl font-bold mb-6">Our Practice Areas</h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              We specialize in a wide range of personal injury cases, bringing data-driven strategies and proven
              expertise to every client we serve.
            </p>
          </div>
        </div>
      </section>

      {/* Practice Areas Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container-max section-padding">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {practiceAreas.map((area, index) => {
              const Icon = area.icon
              return (
                <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                  <div className="w-16 h-16 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-full flex items-center justify-center mb-6">
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="font-semibold text-xl text-gray-800 mb-4">{area.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{area.description}</p>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-gray-500">Experience:</span>
                      <span className="font-medium text-yellow-600">{area.cases}</span>
                    </div>
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-gray-500">Total Recovery:</span>
                      <span className="font-medium text-green-600">{area.recovery}</span>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="container-max section-padding">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl font-bold text-gray-800 mb-4">Why Choose Our Legal Services?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our data-driven approach and extensive experience across all practice areas ensures you get the maximum
              compensation possible.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8">
              <div className="text-4xl font-bold text-yellow-500 mb-2">95%</div>
              <div className="text-lg font-semibold text-gray-800 mb-2">Success Rate</div>
              <p className="text-gray-600">We win 95% of the cases we take on</p>
            </div>
            <div className="text-center p-8">
              <div className="text-4xl font-bold text-yellow-500 mb-2">$50M+</div>
              <div className="text-lg font-semibold text-gray-800 mb-2">Total Recovery</div>
              <p className="text-gray-600">Over $50 million recovered for our clients</p>
            </div>
            <div className="text-center p-8">
              <div className="text-4xl font-bold text-yellow-500 mb-2">24/7</div>
              <div className="text-lg font-semibold text-gray-800 mb-2">Availability</div>
              <p className="text-gray-600">Round-the-clock support when you need it</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-gray-800 to-gray-900 text-white">
        <div className="container-max section-padding text-center">
          <h2 className="font-serif text-4xl font-bold mb-4">Need Legal Help?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Don't wait. The sooner you contact us, the better we can protect your rights and build your case.
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
