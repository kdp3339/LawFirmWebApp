import Header from "@/components/Header"
import Footer from "@/components/Footer"
import { Users, Award, Target, Heart } from "lucide-react"

export default function About() {
  const values = [
    {
      icon: Users,
      title: "Client-Focused",
      description: "Every decision we make is centered around achieving the best outcome for our clients.",
    },
    {
      icon: Award,
      title: "Excellence",
      description: "We maintain the highest standards of legal practice and professional service.",
    },
    {
      icon: Target,
      title: "Results-Driven",
      description: "Our data-driven approach ensures we maximize recovery for every case.",
    },
    {
      icon: Heart,
      title: "Compassionate",
      description: "We understand the challenges you face and provide support every step of the way.",
    },
  ]

  const team = [
    {
      name: "John Smith",
      title: "Managing Partner",
      experience: "20+ years",
      specialty: "Personal Injury Law",
    },
    {
      name: "Sarah Davis",
      title: "Senior Attorney",
      experience: "15+ years",
      specialty: "Medical Malpractice",
    },
    {
      name: "Michael Johnson",
      title: "Data Analytics Director",
      experience: "10+ years",
      specialty: "Legal Technology",
    },
  ]

  return (
    <main>
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-r from-gray-800 to-gray-900 text-white">
        <div className="container-max section-padding">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-serif text-5xl font-bold mb-6">About Elite Legal Partners</h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              We are a forward-thinking personal injury law firm that combines traditional legal expertise with
              cutting-edge technology to deliver superior results for our clients.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-white">
        <div className="container-max section-padding">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-serif text-4xl font-bold text-gray-800 mb-6">Our Story</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Founded in 2010, Elite Legal Partners was born from a simple belief: that personal injury victims
                deserve better representation. We saw how traditional law firms were failing to leverage data and
                technology to build stronger cases.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Today, we've recovered over $50 million for our clients using our proprietary data analysis methods and
                cutting-edge legal strategies. Our success rate speaks for itself - 95% of our cases result in favorable
                outcomes for our clients.
              </p>
              <div className="grid grid-cols-3 gap-4 mt-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-yellow-500">$50M+</div>
                  <div className="text-sm text-gray-600">Recovered</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-yellow-500">1000+</div>
                  <div className="text-sm text-gray-600">Cases Won</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-yellow-500">95%</div>
                  <div className="text-sm text-gray-600">Success Rate</div>
                </div>
              </div>
            </div>
            <div className="bg-gray-100 rounded-xl p-8">
              <h3 className="font-semibold text-2xl text-gray-800 mb-4">Our Mission</h3>
              <p className="text-gray-600 mb-6">
                To revolutionize personal injury law by combining data-driven insights with compassionate legal
                representation, ensuring every client receives the maximum compensation they deserve.
              </p>
              <h3 className="font-semibold text-2xl text-gray-800 mb-4">Our Vision</h3>
              <p className="text-gray-600">
                To be the leading personal injury law firm that sets the standard for innovation, results, and client
                satisfaction in the legal industry.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-gray-50">
        <div className="container-max section-padding">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl font-bold text-gray-800 mb-4">Our Values</h2>
            <p className="text-xl text-gray-600">The principles that guide everything we do</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon
              return (
                <div key={index} className="text-center p-6 bg-white rounded-xl shadow-lg">
                  <div className="w-16 h-16 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="font-semibold text-xl text-gray-800 mb-3">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-20 bg-white">
        <div className="container-max section-padding">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl font-bold text-gray-800 mb-4">Meet Our Team</h2>
            <p className="text-xl text-gray-600">Experienced professionals dedicated to your success</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="text-center p-8 bg-gray-50 rounded-xl">
                <div className="w-24 h-24 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <span className="text-white text-2xl font-bold">
                    {member.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </span>
                </div>
                <h3 className="font-semibold text-xl text-gray-800 mb-2">{member.name}</h3>
                <p className="text-yellow-600 font-medium mb-2">{member.title}</p>
                <p className="text-gray-600 mb-1">{member.experience} Experience</p>
                <p className="text-gray-600">{member.specialty}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
