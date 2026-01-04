'use client'

import { Globe, ChevronDown, Facebook, Twitter, Linkedin, Instagram, Youtube } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-8">
          <a href="#" className="text-base hover:text-gray-300 transition-colors">Home</a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-lg font-bold mb-4">Capabilities</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-gray-300 transition-colors">AI & Generative AI</a></li>
              <li><a href="#" className="hover:text-gray-300 transition-colors">Cloud</a></li>
              <li><a href="#" className="hover:text-gray-300 transition-colors">Engineering</a></li>
              <li><a href="#" className="hover:text-gray-300 transition-colors">Software</a></li>
            </ul>
            <div className="mt-6">
              <h4 className="font-semibold mb-3 text-sm">More Capabilities</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-gray-300 transition-colors">Business Process Operations</a></li>
                <li><a href="#" className="hover:text-gray-300 transition-colors">Cybersecurity</a></li>
                <li><a href="#" className="hover:text-gray-300 transition-colors">Data and AI</a></li>
                <li><a href="#" className="hover:text-gray-300 transition-colors">Digital Design and Manufacturing Services</a></li>
                <li><a href="#" className="hover:text-gray-300 transition-colors">Digital Engineering</a></li>
                <li><a href="#" className="hover:text-gray-300 transition-colors">Digital Workplace</a></li>
                <li><a href="#" className="hover:text-gray-300 transition-colors">EdTech</a></li>
                <li><a href="#" className="hover:text-gray-300 transition-colors">Enterprise Applications Transformation</a></li>
                <li><a href="#" className="hover:text-gray-300 transition-colors">Enterprise Platforms and Edge Services</a></li>
                <li><a href="#" className="hover:text-gray-300 transition-colors">Enterprise Transformation Advisory</a></li>
                <li><a href="#" className="hover:text-gray-300 transition-colors">Global Capability Center (GCC)</a></li>
                <li><a href="#" className="hover:text-gray-300 transition-colors">Intelligent Operations</a></li>
                <li><a href="#" className="hover:text-gray-300 transition-colors">Modern Applications</a></li>
                <li><a href="#" className="hover:text-gray-300 transition-colors">Networks</a></li>
                <li><a href="#" className="hover:text-gray-300 transition-colors">Operational Technology</a></li>
                <li><a href="#" className="hover:text-gray-300 transition-colors">Physical AI and AIoT</a></li>
                <li><a href="#" className="hover:text-gray-300 transition-colors">Product Engineering</a></li>
                <li><a href="#" className="hover:text-gray-300 transition-colors">Supply Chain</a></li>
                <li><a href="#" className="hover:text-gray-300 transition-colors">Unified Service Management (USM)</a></li>
              </ul>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Industries</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-gray-300 transition-colors">Aerospace and Defense</a></li>
              <li><a href="#" className="hover:text-gray-300 transition-colors">Automotive</a></li>
              <li><a href="#" className="hover:text-gray-300 transition-colors">Banking</a></li>
              <li><a href="#" className="hover:text-gray-300 transition-colors">Capital Markets</a></li>
              <li><a href="#" className="hover:text-gray-300 transition-colors">Consumer Goods</a></li>
              <li><a href="#" className="hover:text-gray-300 transition-colors">Energy and Utilities</a></li>
              <li><a href="#" className="hover:text-gray-300 transition-colors">Financial Crime Compliance and Risk</a></li>
              <li><a href="#" className="hover:text-gray-300 transition-colors">Financial Services</a></li>
              <li><a href="#" className="hover:text-gray-300 transition-colors">Fintech</a></li>
              <li><a href="#" className="hover:text-gray-300 transition-colors">Insurance</a></li>
              <li><a href="#" className="hover:text-gray-300 transition-colors">Life Sciences and Healthcare</a></li>
              <li><a href="#" className="hover:text-gray-300 transition-colors">Manufacturing</a></li>
              <li><a href="#" className="hover:text-gray-300 transition-colors">Mining and Natural Resources</a></li>
              <li><a href="#" className="hover:text-gray-300 transition-colors">Oil and Gas</a></li>
              <li><a href="#" className="hover:text-gray-300 transition-colors">Private Equity</a></li>
              <li><a href="#" className="hover:text-gray-300 transition-colors">Public Sector</a></li>
              <li><a href="#" className="hover:text-gray-300 transition-colors">Retail</a></li>
              <li><a href="#" className="hover:text-gray-300 transition-colors">Technology</a></li>
              <li><a href="#" className="hover:text-gray-300 transition-colors">Telecom Media and Entertainment Services</a></li>
              <li><a href="#" className="hover:text-gray-300 transition-colors">Travel, Transport, Logistics & Hospitality</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Ecosystem</h3>
            
            <div className="mt-6">
              <h3 className="text-lg font-bold mb-4">Who We Are</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-gray-300 transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-gray-300 transition-colors">Analyst Recognitions</a></li>
                <li><a href="#" className="hover:text-gray-300 transition-colors">Annual Report 2025</a></li>
                <li><a href="#" className="hover:text-gray-300 transition-colors">Awards and Recognition</a></li>
                <li><a href="#" className="hover:text-gray-300 transition-colors">Code of Business Ethics and Conduct</a></li>
                <li><a href="#" className="hover:text-gray-300 transition-colors">Corporate Social Responsibility</a></li>
                <li><a href="#" className="hover:text-gray-300 transition-colors">Diversity & Inclusion</a></li>
                <li><a href="#" className="hover:text-gray-300 transition-colors">Global Presence</a></li>
                <li><a href="#" className="hover:text-gray-300 transition-colors">Investor Relations</a></li>
                <li><a href="#" className="hover:text-gray-300 transition-colors">Leadership</a></li>
                <li><a href="#" className="hover:text-gray-300 transition-colors">Newsroom</a></li>
                <li><a href="#" className="hover:text-gray-300 transition-colors">Privacy Trust Center</a></li>
                <li><a href="#" className="hover:text-gray-300 transition-colors">Strategic Alliances</a></li>
                <li><a href="#" className="hover:text-gray-300 transition-colors">Sustainability</a></li>
              </ul>
            </div>

            <div className="mt-6">
              <h3 className="text-lg font-bold mb-4">Resources</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-gray-300 transition-colors">Trends and Insights</a></li>
                <li><a href="#" className="hover:text-gray-300 transition-colors">Case Studies</a></li>
                <li><a href="#" className="hover:text-gray-300 transition-colors">Events and Webinars</a></li>
              </ul>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Careers</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-gray-300 transition-colors">Careers Overview</a></li>
              <li><a href="#" className="hover:text-gray-300 transition-colors">Meet our people</a></li>
              <li><a href="#" className="hover:text-gray-300 transition-colors">Explore job opportunities</a></li>
              <li><a href="#" className="hover:text-gray-300 transition-colors">Careers by LoB</a></li>
              <li><a href="#" className="hover:text-gray-300 transition-colors">Americas</a></li>
              <li><a href="#" className="hover:text-gray-300 transition-colors">Asia Pacific</a></li>
              <li><a href="#" className="hover:text-gray-300 transition-colors">Europe and Africa</a></li>
              <li><a href="#" className="hover:text-gray-300 transition-colors">India</a></li>
            </ul>

            <div className="mt-6">
              <h3 className="text-lg font-bold mb-4">Global Presence</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-gray-300 transition-colors">Americas</a></li>
                <li><a href="#" className="hover:text-gray-300 transition-colors">EMEA</a></li>
                <li><a href="#" className="hover:text-gray-300 transition-colors">APAC</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center space-x-4">
              <img src="https://images.unsplash.com/photo-1633409361618-c73427e4e206?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80" alt="TRUSTe" className="h-12" />
            </div>

            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center hover:bg-gray-800 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center hover:bg-gray-800 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center hover:bg-gray-800 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center hover:bg-gray-800 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center hover:bg-gray-800 transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center hover:bg-gray-800 transition-colors">
                <Globe className="w-5 h-5" />
              </a>
            </div>

            <div className="flex items-center space-x-2 px-4 py-2 border border-gray-700 rounded-lg">
              <Globe className="w-5 h-5" />
              <span className="text-sm">English</span>
              <ChevronDown className="w-4 h-4" />
            </div>
          </div>

          <div className="mt-8 text-center text-sm text-gray-400">
            <p className="mb-2">Copyright © 2026 SAT microsystems Limited</p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="#" className="hover:text-gray-300 transition-colors">Contact Us</a>
              <span>/</span>
              <a href="#" className="hover:text-gray-300 transition-colors">Disclaimer</a>
              <span>/</span>
              <a href="#" className="hover:text-gray-300 transition-colors">Privacy Statement</a>
              <span>/</span>
              <a href="#" className="hover:text-gray-300 transition-colors">Terms of use</a>
              <span>/</span>
              <a href="#" className="hover:text-gray-300 transition-colors">Sitemap</a>
              <span>/</span>
              <a href="#" className="hover:text-gray-300 transition-colors">Raise a Grievance</a>
            </div>
            <p className="mt-4">
              We use cookies on our site. Please read more about <a href="#" className="text-blue-400 hover:text-blue-300 transition-colors">cookies policy</a> here.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
