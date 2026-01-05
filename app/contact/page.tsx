import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import FooterCTA from '@/components/home/FooterCTA'
import { MapPin, Phone, Mail } from 'lucide-react'

export default function ContactPage() {
  const locations = [
    {
      country: 'Saudi Arabia',
      city: 'Jeddah',
      address: 'Al-Madinah Al-Munawarah Rd, Al Faisaliyah, Jeddah 23442, Saudi Arabia',
      phone: '+966 12 123 4567',
      email: 'jeddah@satmicrosystems.com'
    },
    {
      country: 'Saudi Arabia',
      city: 'Riyadh',
      address: 'King Fahd Road, Al Olaya, Riyadh 12251, Saudi Arabia',
      phone: '+966 11 234 5678',
      email: 'riyadh@satmicrosystems.com'
    },
    {
      country: 'India',
      city: 'New Delhi',
      address: 'Connaught Place, New Delhi, Delhi 110001, India',
      phone: '+91 11 2345 6789',
      email: 'delhi@satmicrosystems.com'
    },
    {
      country: 'United States',
      city: 'New Jersey',
      address: '123 Main Street, Newark, NJ 07102, United States',
      phone: '+1 973 123 4567',
      email: 'newjersey@satmicrosystems.com'
    },
    {
      country: 'Turkey',
      city: 'Istanbul',
      address: 'Büyükdere Cd., Levent, Istanbul 34394, Turkey',
      phone: '+90 212 345 6789',
      email: 'istanbul@satmicrosystems.com'
    },
    {
      country: 'Kazakhstan',
      city: 'Almaty',
      address: 'Al-Farabi Avenue, Almaty 050059, Kazakhstan',
      phone: '+7 727 123 4567',
      email: 'almaty@satmicrosystems.com'
    },
    {
      country: 'United Arab Emirates',
      city: 'Dubai',
      address: 'Sheikh Zayed Road, Dubai, UAE',
      phone: '+971 4 123 4567',
      email: 'dubai@satmicrosystems.com'
    },
    {
      country: 'United Kingdom',
      city: 'London',
      address: 'Canary Wharf, London E14 5AB, United Kingdom',
      phone: '+44 20 1234 5678',
      email: 'london@satmicrosystems.com'
    }
  ]

  return (
    <>
      <Header />
      <main className="min-h-screen bg-white">
        <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
          <div className="max-w-4xl mx-auto px-6">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4 text-center">We're Here To Help</h1>
            <p className="text-xl text-purple-600 font-semibold mb-3 text-center">
              Contact Us For Consultation
            </p>
            <p className="text-lg text-gray-600 mb-12 text-center">
              Unlock Your Special Coupon - Watch for Details in Your Mail
            </p>
            
            <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-lg">
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                    placeholder="Your full name"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                    placeholder="your.email@example.com"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Phone *
                  </label>
                  <input
                    type="tel"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                    placeholder="+1 234 567 8900"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Message / Requirement *
                  </label>
                  <textarea
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                    placeholder="Tell us about your requirements..."
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-purple-btn text-white px-8 py-4 rounded-lg font-semibold hover:bg-purple-700 transition-colors"
                >
                  Send
                </button>
              </form>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-12 text-center">Our Locations</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {locations.map((location, index) => (
                <div key={index} className="bg-gray-50 rounded-2xl p-6 hover:shadow-lg transition-shadow">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{location.country}</h3>
                  <p className="text-sm text-purple-600 font-semibold mb-4">{location.city}</p>
                  
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <MapPin className="w-5 h-5 text-gray-600 flex-shrink-0 mt-0.5" />
                      <p className="text-sm text-gray-600">{location.address}</p>
                    </div>
                    
                    <div className="flex items-center gap-3">
                      <Phone className="w-5 h-5 text-gray-600 flex-shrink-0" />
                      <a href={`tel:${location.phone}`} className="text-sm text-gray-600 hover:text-purple-600 transition-colors">
                        {location.phone}
                      </a>
                    </div>
                    
                    <div className="flex items-center gap-3">
                      <Mail className="w-5 h-5 text-gray-600 flex-shrink-0" />
                      <a href={`mailto:${location.email}`} className="text-sm text-gray-600 hover:text-purple-600 transition-colors">
                        {location.email}
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <FooterCTA />
      <Footer />
    </>
  )
}
