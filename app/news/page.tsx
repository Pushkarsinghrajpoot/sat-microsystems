import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import FooterCTA from '@/components/home/FooterCTA'

export default function NewsPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-white">
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Latest News</h1>
            <p className="text-xl text-gray-600 mb-12">
              Stay updated with the latest announcements, acquisitions, and industry insights from SAT microsystems.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* News articles will be dynamically loaded here */}
              <div className="bg-white rounded-2xl p-6 shadow-sm">
                <div className="text-sm text-gray-500 mb-2">Coming Soon</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  News articles will be available here
                </h3>
                <p className="text-gray-600">
                  This page will display all the latest news and press releases from SAT microsystems.
                </p>
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
