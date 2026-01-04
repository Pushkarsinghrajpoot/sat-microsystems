'use client'

import { ChevronDown, Sun, Mail, Globe, Menu } from 'lucide-react'

export default function Header() {
  return (
    <header className="bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <img src="https://satmz.com/wp-content/uploads/2023/03/main_logo.png" alt="SAT microsystems" className="h-12" />
          </div>

          <nav className="hidden lg:flex items-center space-x-8">
            <div className="flex items-center space-x-1 nav-link cursor-pointer">
              <span>Capabilities</span>
              <ChevronDown className="w-4 h-4" />
            </div>
            <div className="flex items-center space-x-1 nav-link cursor-pointer">
              <span>Industries</span>
              <ChevronDown className="w-4 h-4" />
            </div>
            <a href="#" className="nav-link">Ecosystem</a>
            <div className="flex items-center space-x-1 nav-link cursor-pointer">
              <span>Who We Are</span>
              <ChevronDown className="w-4 h-4" />
            </div>
            <div className="flex items-center space-x-1 nav-link cursor-pointer">
              <span>Resources</span>
              <ChevronDown className="w-4 h-4" />
            </div>
            <div className="flex items-center space-x-1 nav-link cursor-pointer">
              <span>Careers</span>
              <ChevronDown className="w-4 h-4" />
            </div>
          </nav>

          <div className="flex items-center space-x-3">
            <button className="p-2 hover:bg-gray-100 rounded-full">
              <Sun className="w-5 h-5 text-gray-600" />
            </button>
            <button className="p-2 hover:bg-gray-100 rounded-full">
              <Mail className="w-5 h-5 text-gray-600" />
            </button>
            <button className="flex items-center space-x-1 p-2 hover:bg-gray-100 rounded-full">
              <Globe className="w-5 h-5 text-gray-600" />
              <span className="text-sm font-medium text-gray-700">En</span>
              <ChevronDown className="w-4 h-4 text-gray-600" />
            </button>
            <button className="lg:hidden p-2 hover:bg-gray-100 rounded-full">
              <Menu className="w-6 h-6 text-gray-600" />
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}
