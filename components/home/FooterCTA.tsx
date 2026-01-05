'use client'

import { useState } from 'react'
import { ArrowRight, X } from 'lucide-react'
import Link from 'next/link'

export default function FooterCTA() {
  const [showModal, setShowModal] = useState(false)
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the email to your backend
    console.log('Subscribing email:', email)
    setSubscribed(true)
    setTimeout(() => {
      setShowModal(false)
      setSubscribed(false)
      setEmail('')
    }, 2000)
  }

  return (
    <section className="gradient-purple-blue py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-white">
            <div className="text-4xl font-bold mb-2">SAT microsystems</div>
            <div className="text-xl">Supercharging Progress™</div>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/contact"
              className="px-8 py-3 bg-transparent border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-purple-700 transition-all inline-flex items-center justify-center"
            >
              Contact us
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <button
              onClick={() => setShowModal(true)}
              className="px-8 py-3 bg-white text-purple-700 rounded-lg font-semibold hover:bg-gray-100 transition-all inline-flex items-center justify-center"
            >
              Subscribe
              <ArrowRight className="w-5 h-5 ml-2" />
            </button>
          </div>
        </div>
      </div>

      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 px-4">
          <div className="bg-white rounded-2xl p-8 max-w-md w-full relative">
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
            
            {!subscribed ? (
              <>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Subscribe to Our Newsletter</h3>
                <p className="text-gray-600 mb-6">
                  Get the latest updates, news, and insights delivered to your inbox.
                </p>
                
                <form onSubmit={handleSubscribe} className="space-y-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                      placeholder="your.email@example.com"
                    />
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full bg-purple-btn text-white px-8 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors"
                  >
                    Subscribe Now
                  </button>
                </form>
              </>
            ) : (
              <div className="text-center py-8">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Successfully Subscribed!</h3>
                <p className="text-gray-600">
                  Thank you for subscribing. We'll send you updates and newsletters soon.
                </p>
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  )
}
