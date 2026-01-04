'use client'

import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

export default function MeetOurClients() {
  const clients = [
    {
      name: 'ALJ Finance',
      logo: '/client/alj_finance.png',
      slug: 'alj-finance',
      tagline: 'Cybersecurity & Digital Infrastructure'
    },
    {
      name: 'Alamthal Financing',
      logo: '/client/Alamthal-Financing-1.png',
      slug: 'alamthal-financing',
      tagline: 'Cybersecurity & Digital Infrastructure'
    },
    {
      name: 'Saudi ETEC',
      logo: '/client/Saudi_ETEC_logo-1.png',
      slug: 'saudi-etec',
      tagline: 'Cybersecurity & Digital Infrastructure'
    }
  ]

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Meet Our Clients</h2>
          <p className="text-lg text-gray-600 max-w-4xl">
            We deliver industry-leading capabilities to clients across all major verticals, including financial services, manufacturing, technology services, telecom and media, retail and CPG, life sciences and healthcare and public services.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {clients.map((client, index) => (
            <Link href={`/clients/${client.slug}`} key={index}>
              <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-xl transition-all duration-300 cursor-pointer card-hover h-full">
                <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 flex items-center justify-center min-h-[200px]">
                  <div className="relative w-full h-32">
                    <Image 
                      src={client.logo}
                      alt={client.name}
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{client.name}</h3>
                  <div className="w-12 h-0.5 bg-purple-600 mb-4"></div>
                  <p className="text-sm text-gray-600 mb-4">{client.tagline}</p>
                  <div className="inline-flex items-center text-purple-600 font-semibold hover:text-purple-700 transition-colors">
                    Read Case Study
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="flex items-center justify-start space-x-2 mb-4">
          <button className="p-2.5 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors">
            <ChevronLeft className="w-4 h-4 text-gray-700" />
          </button>
          <button className="p-2.5 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors">
            <ChevronRight className="w-4 h-4 text-gray-700" />
          </button>
        </div>

        <div className="max-w-lg">
          <div className="progress-bar rounded-full"></div>
        </div>
      </div>
    </section>
  )
}
