'use client'

import { Smile, Heart, Shield, Clock, CheckCircle, AlertCircle } from 'lucide-react'
import AnimatedSection from '../../components/AnimatedSection'

export default function DentalPage() {
  const dentalServices = [
    "Anesthesia",
    "Pulse Ox Monitor", 
    "Teeth Cleaning",
    "IV Catheter",
    "Scaling",
    "Polishing",
    "Fluoride Application",
    "Sedation Recovery"
  ]

  const dentalPricing = [
    { weight: "0-25 LBS", price: "$150" },
    { weight: "25.1 TO 50 LBS", price: "$175" },
    { weight: "50.1 TO 75 LBS", price: "$200" },
    { weight: "75.1 LBS ABOVE", price: "$250" }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 to-secondary-50">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary-600 to-secondary-600">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="text-center text-primary-50 max-w-4xl mx-auto">
              <div className="flex justify-center mb-6">
                <div className="bg-primary-50/20 p-4 rounded-full">
                  <Smile size={48} className="text-primary-50" />
                </div>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Dental Special at $135
              </h1>
              <p className="text-xl leading-relaxed mb-8">
                Professional dental cleaning services to keep your pet's teeth and gums healthy
              </p>
              <div className="bg-primary-50/20 backdrop-blur-sm border border-primary-50/30 p-6 rounded-2xl max-w-2xl mx-auto">
                <div className="flex items-center justify-center mb-4">
                  <AlertCircle size={24} className="text-primary-50 mr-3" />
                  <h3 className="text-xl font-bold text-primary-50">Important Requirement</h3>
                </div>
                <p className="text-primary-50 text-lg font-medium">
                  5+ YEARS OLD PETS REQUIRED BLOOD WORK
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Dental Services Included */}
      <section className="py-16 bg-primary-50">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-accent-900 mb-4">What's Included in Our Dental Special</h2>
                <p className="text-xl text-accent-600">Comprehensive dental care package for your pet's oral health</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {dentalServices.map((service, index) => (
                  <div key={index} className="bg-gradient-to-br from-secondary-50 to-primary-50 p-6 rounded-2xl border-2 border-primary-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                    <div className="text-center">
                      <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-primary-600 to-secondary-600 rounded-xl mb-4 mx-auto">
                        <CheckCircle className="w-6 h-6 text-primary-50" />
                      </div>
                      <h4 className="text-lg font-bold text-accent-900 mb-2">{service}</h4>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Pricing by Weight */}
      <section className="py-16 bg-secondary-50">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <div className="flex justify-center mb-6">
                  <div className="bg-secondary-100 p-4 rounded-full">
                    <Shield size={32} className="text-secondary-600" />
                  </div>
                </div>
                <h2 className="text-3xl font-bold text-accent-900 mb-4">Dental Cleaning Pricing</h2>
                <p className="text-xl text-accent-600">Pricing based on your pet's weight category</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {dentalPricing.map((item, index) => (
                  <div key={index} className="bg-gradient-to-br from-primary-100 to-secondary-100 p-8 rounded-2xl border-2 border-primary-300 hover:shadow-lg transition-all duration-300">
                    <div className="text-center">
                      <div className="flex items-center justify-center w-16 h-16 bg-primary-600 rounded-full mb-4 mx-auto">
                        <Heart size={24} className="text-primary-50" />
                      </div>
                      <h3 className="text-xl font-bold text-accent-900 mb-2">{item.weight}</h3>
                      <div className="text-3xl font-bold text-primary-600 mb-2">{item.price}</div>
                      <p className="text-accent-600">Complete dental cleaning package</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-16 bg-primary-50">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-accent-900 mb-4">Additional Dental Services</h2>
                <p className="text-xl text-accent-600">Extra services available if needed during your pet's dental procedure</p>
              </div>
              
              <div className="bg-gradient-to-br from-secondary-50 to-primary-50 p-8 rounded-2xl border-2 border-primary-200">
                <div className="text-center">
                  <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary-600 to-secondary-600 rounded-full mb-6 mx-auto">
                    <Smile size={24} className="text-primary-50" />
                  </div>
                  <h3 className="text-2xl font-bold text-accent-900 mb-4">Tooth Extractions</h3>
                  <p className="text-xl text-accent-600 mb-4">
                    If tooth extractions are needed during the dental procedure
                  </p>
                  <div className="bg-primary-100 border border-primary-300 p-6 rounded-xl">
                    <p className="text-lg font-bold text-primary-600">
                      EXTRACTIONS START FROM $10 TO $60
                    </p>
                    <p className="text-accent-700 mt-2">
                      Pricing depends on the complexity and number of extractions needed
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Important Notes */}
      <section className="py-16 bg-secondary-50">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="max-w-4xl mx-auto">
              <div className="bg-gradient-to-br from-primary-100 to-secondary-100 p-8 rounded-2xl border-2 border-primary-300">
                <div className="text-center">
                  <div className="flex items-center justify-center w-16 h-16 bg-secondary-600 rounded-full mb-6 mx-auto">
                    <AlertCircle size={24} className="text-primary-50" />
                  </div>
                  <h3 className="text-2xl font-bold text-accent-900 mb-6">Important Information</h3>
                  <div className="space-y-4 text-left max-w-2xl mx-auto">
                    <div className="flex items-start">
                      <CheckCircle size={20} className="text-secondary-600 mr-3 mt-1 flex-shrink-0" />
                      <p className="text-lg text-accent-700">
                        <strong>Age Requirement:</strong> Pets 5+ years old require pre-anesthetic blood work
                      </p>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle size={20} className="text-secondary-600 mr-3 mt-1 flex-shrink-0" />
                      <p className="text-lg text-accent-700">
                        <strong>Appointment Required:</strong> Dental procedures are by appointment only
                      </p>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle size={20} className="text-secondary-600 mr-3 mt-1 flex-shrink-0" />
                      <p className="text-lg text-accent-700">
                        <strong>Recovery Included:</strong> Sedation recovery monitoring is part of our service
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-br from-primary-600 to-secondary-600">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="text-center text-primary-50 max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold mb-6">Schedule Your Pet's Dental Cleaning</h2>
              <p className="text-xl mb-8">
                Give your pet the gift of healthy teeth and fresh breath with our professional dental services
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="bg-primary-50 hover:bg-primary-100 text-primary-600 font-bold py-4 px-8 rounded-lg transition-colors duration-200"
                >
                  Book Appointment
                </a>
                <a
                  href="/services"
                  className="border-2 border-primary-50 hover:bg-primary-50 hover:text-primary-600 text-primary-50 font-bold py-4 px-8 rounded-lg transition-colors duration-200"
                >
                  View All Services
                </a>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  )
}
