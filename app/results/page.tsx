import Header from "@/components/Header"
import Footer from "@/components/Footer"
import { TrendingUp, Award, Users, DollarSign } from "lucide-react"

export default function Results() {
  const caseResults = [
    {
      type: "Auto Accident",
      amount: "$2.5M",
      description: "Secured maximum compensation for client with severe spinal injuries in multi-vehicle collision.",
    },
    {
      type: "Medical Malpractice",
      amount: "$1.8M",
      description: "Won case against hospital for surgical error that resulted in permanent disability.",
    },
    {
      type: "Trucking Accident",
      amount: "$3.2M",
      description: "Largest trucking accident settlement in county history for catastrophic injuries.",
    },
    {
      type: "Workplace Injury",
      amount: "$950K",
      description: "Construction accident case resulting in significant compensation for injured worker.",
    },
    {
      type: "Premises Liability",
      amount: "$750K",
      description: "Slip and fall case at major retail chain with long-term injury complications.",
    },
    {
      type: "Product Liability",
      amount: "$1.2M",
      description: "Defective product case against major manufacturer for design defects.",
    },
  ]

  const stats = [
    {
      icon: DollarSign,
      value: "$50M+",
      label: "Total Recovered",
      description: "Over $50 million recovered for our clients since 2010",
    },
    {
      icon: Users,
      value: "1,000+",
      label: "Cases Won",
      description: "Successfully resolved over 1,000 personal injury cases",
    },
    {
      icon: TrendingUp,
      value: "95%",
      label: "Success Rate",
      description: "95% of our cases result in favorable outcomes",
    },
    {
      icon: Award,
      value: "15+",
      label: "Years Experience",
      description: "Over 15 years of combined legal expertise",
    },
  ]

  return (
    <main>
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-r from-gray-800 to-gray-900 text-white">
        <div className="container-max section-padding">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-serif text-5xl font-bold mb-6">Our Results Speak for Themselves</h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              We've recovered over $50 million for our clients through data-driven strategies and aggressive
              representation. Here are some of our notable case results.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="container-max section-padding">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon
              return (
                <div key={index} className="text-center p-8 bg-gray-50 rounded-xl">
                  <div className="w-16 h-16 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <div className="text-4xl font-bold text-gray-800 mb-2">{stat.value}</div>
                  <div className="text-lg font-semibold text-gray-800 mb-3">{stat.label}</div>
                  <p className="text-gray-600 text-sm">{stat.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Case Results */}
      <section className="py-20 bg-gray-50">
        <div className="container-max section-padding">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl font-bold text-gray-800 mb-4">Recent Case Results</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These results represent some of our recent successes. Every case is unique, and past results do not
              guarantee future outcomes.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseResults.map((result, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-center justify-between mb-4">
                  <span className="bg-yellow-100 text-yellow-800 text-sm font-medium px-3 py-1 rounded-full">
                    {result.type}
                  </span>
                  <span className="text-2xl font-bold text-green-600">{result.amount}</span>
                </div>
                <p className="text-gray-600 leading-relaxed">{result.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Data-Driven Approach */}
      <section className="py-20 bg-white">
        <div className="container-max section-padding">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-serif text-4xl font-bold text-gray-800 mb-6">Our Data-Driven Advantage</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                What sets us apart is our use of advanced data analytics to build stronger cases. We analyze thousands
                of similar cases, settlement patterns, and jury verdicts to develop winning strategies.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <span className="text-gray-700">Comprehensive case analysis using proprietary algorithms</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <span className="text-gray-700">Predictive modeling for settlement negotiations</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <span className="text-gray-700">Real-time market analysis for maximum recovery</span>
                </li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-yellow-50 to-orange-50 p-8 rounded-xl">
              <h3 className="font-semibold text-2xl text-gray-800 mb-6">Recovery Comparison</h3>
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-700">Traditional Firms</span>
                    <span className="font-semibold">$125K Average</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div className="bg-gray-400 h-3 rounded-full" style={{ width: "40%" }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-700">Elite Legal Partners</span>
                    <span className="font-semibold text-yellow-600">$310K Average</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div
                      className="bg-gradient-to-r from-yellow-500 to-orange-500 h-3 rounded-full"
                      style={{ width: "100%" }}
                    ></div>
                  </div>
                </div>
              </div>
              <p className="text-sm text-gray-600 mt-4">
                *Based on similar case types and injury severity over the past 5 years
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-gray-800 to-gray-900 text-white">
        <div className="container-max section-padding text-center">
          <h2 className="font-serif text-4xl font-bold mb-4">Ready to Maximize Your Recovery?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Let our data-driven approach work for you. Contact us today for a free case evaluation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn-primary">Get Free Case Evaluation</button>
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
