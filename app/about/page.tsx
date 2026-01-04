import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import FooterCTA from '@/components/home/FooterCTA'

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-white">
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">About SAT microsystems</h1>
            <p className="text-xl text-gray-600 mb-12 max-w-4xl">
              We are a leading global technology company dedicated to supercharging progress through innovative solutions in AI, Cloud, and Engineering.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
              <div className="bg-white rounded-2xl p-8 shadow-sm">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h2>
                <p className="text-gray-600 leading-relaxed">
                  To bring together the best of technology and our people to supercharge progress for businesses worldwide.
                </p>
              </div>
              
              <div className="bg-white rounded-2xl p-8 shadow-sm">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h2>
                <p className="text-gray-600 leading-relaxed">
                  To be the most trusted partner for digital transformation, empowering organizations to thrive in the AI-driven future.
                </p>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-3xl p-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Values</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div>
                  <h3 className="text-xl font-bold text-purple-700 mb-3">Innovation</h3>
                  <p className="text-gray-700">
                    Continuously pushing boundaries to deliver cutting-edge solutions.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-purple-700 mb-3">Excellence</h3>
                  <p className="text-gray-700">
                    Committed to delivering exceptional quality in everything we do.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-purple-700 mb-3">Partnership</h3>
                  <p className="text-gray-700">
                    Building lasting relationships based on trust and transparency.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <FooterCTA />
      <Footer />
    </>
  )
}
