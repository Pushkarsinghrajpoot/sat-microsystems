'use client'

import { Facebook, Twitter, Linkedin, Youtube } from 'lucide-react'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-black text-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div>
            <h3 className="text-lg font-bold mb-6">Solutions</h3>
            <ul className="space-y-3">
              <li><Link href="#" className="text-gray-300 hover:text-white transition-colors">NFT Development</Link></li>
              <li><Link href="#" className="text-gray-300 hover:text-white transition-colors">IT Outsourcing</Link></li>
              <li><Link href="#" className="text-gray-300 hover:text-white transition-colors">Infrastructure Services</Link></li>
              <li><Link href="#" className="text-gray-300 hover:text-white transition-colors">AI-Powered Agents & Automation Solutions</Link></li>
              <li><Link href="#" className="text-gray-300 hover:text-white transition-colors">Staff Augmentation</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6">Company</h3>
            <ul className="space-y-3">
              <li><Link href="/about" className="text-gray-300 hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="#" className="text-gray-300 hover:text-white transition-colors">Team</Link></li>
              <li><Link href="#" className="text-gray-300 hover:text-white transition-colors">Partners & Certifications</Link></li>
              <li><Link href="#" className="text-gray-300 hover:text-white transition-colors">Reviews & Awards</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6">Resources</h3>
            <ul className="space-y-3">
              <li><Link href="/blog" className="text-gray-300 hover:text-white transition-colors">Blog</Link></li>
              <li><Link href="#" className="text-gray-300 hover:text-white transition-colors">Case Studies</Link></li>
              <li><Link href="#" className="text-gray-300 hover:text-white transition-colors">Events</Link></li>
              <li><Link href="#" className="text-gray-300 hover:text-white transition-colors">FAQ</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6">Join Us</h3>
            <ul className="space-y-3">
              <li><Link href="#" className="text-gray-300 hover:text-white transition-colors">Careers</Link></li>
              <li><Link href="#" className="text-gray-300 hover:text-white transition-colors">Open Positions</Link></li>
            </ul>
            <div className="mt-6">
              <Link 
                href="#" 
                className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded-md transition-colors"
              >
                We are hiring
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-6 text-sm text-gray-400">
              <span>© 2025 SAT Microsystems</span>
              <Link href="/blog" className="hover:text-white transition-colors">Blog</Link>
              <Link href="#" className="hover:text-white transition-colors">Case Studies</Link>
              <Link href="#" className="hover:text-white transition-colors">Events</Link>
              <Link href="#" className="hover:text-white transition-colors">FAQ</Link>
            </div>

            <div className="flex space-x-3">
              <a href="#" className="w-10 h-10 rounded-full bg-blue-600 hover:bg-blue-700 flex items-center justify-center transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-blue-400 hover:bg-blue-500 flex items-center justify-center transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-blue-600 hover:bg-blue-700 flex items-center justify-center transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-red-600 hover:bg-red-700 flex items-center justify-center transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
