'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { ArrowRight, Heart, Shield, Clock, Star, ChevronLeft, ChevronRight } from 'lucide-react'
import { motion } from 'framer-motion'
import AnimatedSection from './AnimatedSection'

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const heroImages = [
    {
      src: "/images/hero/veterinarian-examining-dog.jpg",
      alt: "Veterinarian examining a dog"
    },
    {
      src: "/images/hero/happy-dog-at-vet.jpg", 
      alt: "Happy dog at veterinary clinic"
    },
    {
      src: "/images/hero/cat-examination.jpg",
      alt: "Cat examination at veterinary clinic"
    }
  ]

  useEffect(() => {
    setIsVisible(true)
    
    // Auto-advance slideshow every 5 seconds
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [heroImages.length])

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % heroImages.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + heroImages.length) % heroImages.length)
  }

  const features = [
    { icon: Heart, text: 'Walk-ins & Appointments' },
    { icon: Shield, text: 'Licensed Veterinarians' },
    { icon: Clock, text: 'Quick Service' },
    { icon: Star, text: 'Affordable Prices' },
  ]

  return (
    <section id="home" className="relative min-h-screen flex items-center bg-gradient-to-br from-primary-50 to-secondary-50 overflow-hidden">
      {/* Background Animation Elements */}
      <div className="absolute inset-0">
        <motion.div 
          className="absolute top-20 left-10 w-20 h-20 bg-primary-200 rounded-full opacity-20"
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute top-40 right-20 w-16 h-16 bg-secondary-200 rounded-full opacity-20"
          animate={{ y: [0, -15, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />
        <motion.div 
          className="absolute bottom-40 left-20 w-12 h-12 bg-primary-300 rounded-full opacity-20"
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />
        <motion.div 
          className="absolute bottom-20 right-40 w-24 h-24 bg-secondary-300 rounded-full opacity-20"
          animate={{ y: [0, -25, 0] }}
          transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        />
      </div>

      <div className="container-max section-padding relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className={`space-y-8 ${isVisible ? 'animate-slide-up' : 'opacity-0'}`}>
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-accent-900 leading-tight">
                Quality Affordable Care for
                <span className="text-primary-600 block">All Pets</span>
              </h1>
              <p className="text-xl text-accent-600 max-w-2xl">
                Serving Pasadena TX and Greater Houston. Licensed veterinarians with decades of experience 
                treating cats and dogs. We believe prevention is better than cure.
              </p>
            </div>

            {/* Feature Pills */}
            <div className="flex flex-wrap gap-4">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className={`flex items-center space-x-2 bg-primary-50/80 backdrop-blur-sm px-4 py-2 rounded-full border border-secondary-200 ${
                    isVisible ? 'animate-fade-in' : 'opacity-0'
                  }`}
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <feature.icon size={16} className="text-primary-600" />
                  <span className="text-sm font-medium text-accent-700">{feature.text}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className={`flex flex-col sm:flex-row gap-4 ${isVisible ? 'animate-slide-up' : 'opacity-0'}`} style={{ animationDelay: '0.8s' }}>
              <Link
                href="/contact"
                className="btn-primary flex items-center justify-center space-x-2 text-lg px-8 py-4"
              >
                <span>Contact Us</span>
                <ArrowRight size={20} />
              </Link>
              <Link
                href="/services"
                className="btn-secondary flex items-center justify-center space-x-2 text-lg px-8 py-4"
              >
                <span>Our Services</span>
              </Link>
            </div>

            {/* Stats */}
            <div className={`grid grid-cols-3 gap-8 pt-8 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: '1s' }}>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-600">1000+</div>
                <div className="text-sm text-accent-600">Happy Pets</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-600">Decades</div>
                <div className="text-sm text-accent-600">Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-600">Walk-ins</div>
                <div className="text-sm text-accent-600">Welcome</div>
              </div>
            </div>
          </div>

          {/* Right Column - Hero Image Slideshow */}
          <div className={`relative ${isVisible ? 'animate-slide-up' : 'opacity-0'}`} style={{ animationDelay: '0.4s' }}>
            <div className="relative">
              {/* Main Image Container */}
              <div className="relative bg-primary-50 rounded-2xl shadow-2xl overflow-hidden">
                <div className="relative w-full h-96">
                  {heroImages.map((image, index) => (
                    <img
                      key={index}
                      src={image.src}
                      alt={image.alt}
                      className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
                        index === currentImageIndex ? 'opacity-100' : 'opacity-0'
                      }`}
                      loading="eager"
                    />
                  ))}
                  
                  {/* Navigation Arrows */}
                  <button
                    onClick={prevImage}
                    className="absolute left-4 top-1/2 -translate-y-1/2 bg-primary-50/80 backdrop-blur-sm hover:bg-primary-100/90 p-2 rounded-full shadow-lg transition-all duration-200 group"
                  >
                    <ChevronLeft size={20} className="text-accent-900 group-hover:text-primary-600" />
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-4 top-1/2 -translate-y-1/2 bg-primary-50/80 backdrop-blur-sm hover:bg-primary-100/90 p-2 rounded-full shadow-lg transition-all duration-200 group"
                  >
                    <ChevronRight size={20} className="text-accent-900 group-hover:text-primary-600" />
                  </button>
                  
                  {/* Slide Indicators */}
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
                    {heroImages.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentImageIndex(index)}
                        className={`w-2 h-2 rounded-full transition-all duration-300 ${
                          index === currentImageIndex 
                            ? 'bg-primary-600 w-6' 
                            : 'bg-primary-50/60 hover:bg-primary-50/80'
                        }`}
                      />
                    ))}
                  </div>
                </div>
                
                {/* Floating Card */}
                {/* <div className="absolute -bottom-6 -left-6 bg-primary-50 rounded-xl shadow-lg p-4 border border-secondary-200">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-secondary-100 rounded-full flex items-center justify-center">
                      <Heart className="text-secondary-600" size={24} />
                    </div>
                    <div>
                      <div className="font-semibold text-accent-900">Licensed Veterinarians</div>
                      <div className="text-sm text-accent-600">Decades of Experience</div>
                    </div>
                  </div>
                </div> */}
              </div>

              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-secondary-200 rounded-full opacity-20"></div>
              <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-primary-200 rounded-full opacity-20"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
