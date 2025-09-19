'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X, Phone, Calendar } from 'lucide-react'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { name: 'Home', href: '/' },
    { 
      name: 'Services', 
      href: '/services',
      submenu: [
        { name: 'All Services', href: '/services' },
        { name: 'Wellness & Medical', href: '/wellness' },
        { name: 'Dental Special $135', href: '/dental' },
        { name: 'Surgical Services', href: '/surgical' },
      ]
    },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ]

  return (
    <nav className="fixed top-0 w-full bg-primary-50/95 backdrop-blur-sm border-b border-secondary-200 z-50">
      <div className="container-max">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-primary-600 rounded-lg flex items-center justify-center">
              <span className="text-primary-50 font-bold text-lg">A</span>
            </div>
            <span className="font-bold text-xl text-accent-900">Amigos Pet Clinic</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="/" className="text-accent-700 hover:text-primary-600 transition-colors">Home</a>
            <div className="relative group">
              <a href="/services" className="text-accent-700 hover:text-primary-600 transition-colors">Services</a>
              <div className="absolute top-full left-0 mt-2 w-56 bg-primary-50 border border-secondary-200 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="py-2">
                  <a href="/services" className="block px-4 py-2 text-accent-700 hover:bg-primary-100 hover:text-primary-600 transition-colors">All Services</a>
                  <a href="/wellness" className="block px-4 py-2 text-accent-700 hover:bg-primary-100 hover:text-primary-600 transition-colors">Wellness & Medical</a>
                  <a href="/dental" className="block px-4 py-2 text-accent-700 hover:bg-primary-100 hover:text-primary-600 transition-colors">Dental Special $135</a>
                  <a href="/surgical" className="block px-4 py-2 text-accent-700 hover:bg-primary-100 hover:text-primary-600 transition-colors">Surgical Services</a>
                </div>
              </div>
            </div>
            <a href="/about" className="text-accent-700 hover:text-primary-600 transition-colors">About</a>
            <a href="/contact" className="text-accent-700 hover:text-primary-600 transition-colors">Contact</a>
          </div>

          {/* Desktop CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <a 
              href="tel:+18329918811" 
              className="text-secondary-600 hover:text-secondary-700 font-medium transition-colors"
            >
              (832) 991-8811
            </a>
            <a 
              href="/contact" 
              className="bg-primary-600 text-primary-50 px-6 py-2 rounded-lg hover:bg-primary-700 transition-colors font-medium"
            >
              Contact Us
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg text-accent-700 hover:bg-primary-100 transition-colors duration-200"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-secondary-200">
            <div className="flex flex-col space-y-4">
              <Link
                href="/"
                className="text-accent-700 hover:text-primary-600 font-medium transition-colors duration-200 px-4 py-2"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <div className="px-4">
                <div className="text-accent-700 font-medium py-2">Services</div>
                <div className="pl-4 space-y-2">
                  <Link
                    href="/services"
                    className="block text-accent-600 hover:text-primary-600 transition-colors duration-200 py-1"
                    onClick={() => setIsOpen(false)}
                  >
                    All Services
                  </Link>
                  <Link
                    href="/wellness"
                    className="block text-accent-600 hover:text-primary-600 transition-colors duration-200 py-1"
                    onClick={() => setIsOpen(false)}
                  >
                    Wellness & Medical
                  </Link>
                  <Link
                    href="/dental"
                    className="block text-accent-600 hover:text-primary-600 transition-colors duration-200 py-1"
                    onClick={() => setIsOpen(false)}
                  >
                    Dental Special $135
                  </Link>
                  <Link
                    href="/surgical"
                    className="block text-accent-600 hover:text-primary-600 transition-colors duration-200 py-1"
                    onClick={() => setIsOpen(false)}
                  >
                    Surgical Services
                  </Link>
                </div>
              </div>
              <Link
                href="/about"
                className="text-accent-700 hover:text-primary-600 font-medium transition-colors duration-200 px-4 py-2"
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
              <Link
                href="/contact"
                className="text-accent-700 hover:text-primary-600 font-medium transition-colors duration-200 px-4 py-2"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
              <div className="px-4 pt-4 border-t border-secondary-200">
                <Link
                  href="tel:+18329918811"
                  className="flex items-center space-x-2 text-accent-700 hover:text-primary-600 transition-colors duration-200 mb-4"
                >
                  <Phone size={18} />
                  <span className="font-medium">(832) 991-8811</span>
                </Link>
                <Link
                  href="/contact"
                  className="btn-primary flex items-center justify-center space-x-2 w-full"
                >
                  <Phone size={18} />
                  <span>Contact Us</span>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
