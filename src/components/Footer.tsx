'use client'

import Link from 'next/link'
import { Search } from 'lucide-react'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function Footer() {
  const [searchTerm, setSearchTerm] = useState('')
  const router = useRouter()

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (searchTerm.trim()) {
      // Simple search logic - redirect to services page with search term
      router.push(`/services?search=${encodeURIComponent(searchTerm.trim())}`)
    }
  }

  return (
    <footer className="bg-gradient-to-b from-gray-900 to-gray-950 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* ABOUT Section */}
          <div className="space-y-4">
            <h3 className="text-white font-bold text-sm mb-6 tracking-wider border-b border-gray-700 pb-2">ABOUT</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              <Link href="/about" className="text-primary-400 hover:text-primary-300 transition-colors duration-200 font-medium">
                Amigos Pet Clinic
              </Link>{' '}
              is a full-service animal hospital. Our team is committed to take up all medical, wellness, preventative to less urgent medical, surgical, and dental issues.
            </p>
          </div>

          {/* SEARCH Section */}
          <div className="space-y-4">
            <h3 className="text-white font-bold text-sm mb-6 tracking-wider border-b border-gray-700 pb-2">SEARCH</h3>
            <form onSubmit={handleSearch} className="relative">
              <input
                type="text"
                placeholder="Search for services..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-gray-800 text-white px-3 py-2.5 pr-10 text-sm border border-gray-700 rounded focus:border-primary-500 focus:ring-1 focus:ring-primary-500 focus:outline-none transition-all duration-200 placeholder-gray-500"
              />
              <button 
                type="submit"
                className="absolute right-1 top-1 bottom-1 px-2 bg-primary-600 hover:bg-primary-700 rounded transition-colors duration-200 flex items-center justify-center"
              >
                <Search size={14} className="text-white" />
              </button>
            </form>
          </div>

          {/* INFORMATION Section */}
          <div className="space-y-4">
            <h3 className="text-white font-bold text-sm mb-6 tracking-wider border-b border-gray-700 pb-2">INFORMATION</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/clinic-policies" className="text-gray-300 hover:text-primary-400 text-sm transition-colors duration-200 flex items-center group">
                  <span className="w-1 h-1 bg-primary-500 rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200"></span>
                  Clinic Policies
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-gray-300 hover:text-primary-400 text-sm transition-colors duration-200 flex items-center group">
                  <span className="w-1 h-1 bg-primary-500 rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200"></span>
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* HOURS Section */}
          <div className="space-y-4">
            <h3 className="text-white font-bold text-sm mb-6 tracking-wider border-b border-gray-700 pb-2">HOURS</h3>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between items-center py-1 hover:bg-gray-800 hover:bg-opacity-30 px-2 -mx-2 rounded transition-colors duration-200">
                <span className="text-gray-300 font-medium">Monday</span>
                <span className="text-primary-400 font-medium">8:00AM – 5:00PM</span>
              </div>
              <div className="flex justify-between items-center py-1 hover:bg-gray-800 hover:bg-opacity-30 px-2 -mx-2 rounded transition-colors duration-200">
                <span className="text-gray-300 font-medium">Tuesday</span>
                <span className="text-primary-400 font-medium">8:00AM – 5:00PM</span>
              </div>
              <div className="flex justify-between items-center py-1 hover:bg-gray-800 hover:bg-opacity-30 px-2 -mx-2 rounded transition-colors duration-200">
                <span className="text-gray-300 font-medium">Wednesday</span>
                <span className="text-primary-400 font-medium">8:00AM – 5:00PM</span>
              </div>
              <div className="flex justify-between items-center py-1 hover:bg-gray-800 hover:bg-opacity-30 px-2 -mx-2 rounded transition-colors duration-200">
                <span className="text-gray-300 font-medium">Thursday</span>
                <span className="text-primary-400 font-medium">8:00AM – 5:00PM</span>
              </div>
              <div className="flex justify-between items-center py-1 hover:bg-gray-800 hover:bg-opacity-30 px-2 -mx-2 rounded transition-colors duration-200">
                <span className="text-gray-300 font-medium">Friday</span>
                <span className="text-primary-400 font-medium">8:00AM – 5:00PM</span>
              </div>
              <div className="flex justify-between items-center py-1 hover:bg-gray-800 hover:bg-opacity-30 px-2 -mx-2 rounded transition-colors duration-200">
                <span className="text-gray-300 font-medium">Saturday</span>
                <span className="text-primary-400 font-medium">8:00AM – 3:00PM</span>
              </div>
              <div className="flex justify-between items-center py-1 hover:bg-gray-800 hover:bg-opacity-30 px-2 -mx-2 rounded transition-colors duration-200">
                <span className="text-gray-300 font-medium">Sunday</span>
                <span className="text-red-400 font-medium">Closed</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-500 text-xs tracking-wider">
            AMIGOS PET CLINIC © 2019. ALL RIGHTS RESERVED.
          </p>
        </div>
      </div>
    </footer>
  )
}
