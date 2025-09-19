'use client'

import { Scissors, Heart, Shield, Clock, CheckCircle, AlertTriangle, Stethoscope } from 'lucide-react'
import AnimatedSection from '../../components/AnimatedSection'

export default function SurgicalPage() {
  const surgicalServices = [
    "Dog and cat spay neuters",
    "Cherry Eye",
    "Lacerations fight, bite wounds",
    "Tumor removals",
    "Foreign body removals",
    "Hernias",
    "Feline de claw",
    "Tail docks"
  ]

  const advancedSurgeries = [
    "Bladder stones",
    "Ear hematomas", 
    "Certain biopsies",
    "Abscess",
    "Wound dressing",
    "Cyst removals",
    "Pyometra",
    "C-sections",
    "Splint applications"
  ]

  const requirements = [
    "Surgery scheduling required doctor's exam",
    "Doctor's approval required",
    "Heart worm testing required",
    "Current immunizations required",
    "By appointments and availability only"
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
                  <Scissors size={48} className="text-primary-50" />
                </div>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Surgical Services
              </h1>
              <p className="text-xl leading-relaxed mb-8">
                Professional surgical procedures performed with care and precision by our experienced veterinary team
              </p>
              <div className="bg-primary-50/20 backdrop-blur-sm border border-primary-50/30 p-6 rounded-2xl max-w-3xl mx-auto">
                <div className="flex items-center justify-center mb-4">
                  <AlertTriangle size={24} className="text-primary-50 mr-3" />
                  <h3 className="text-xl font-bold text-primary-50">Important Note</h3>
                </div>
                <p className="text-primary-50 text-lg">
                  Surgery scheduling requires doctor's exam, approval, heart worm testing, immunizations and by appointments and availability. Enquire with us for any additional services and products.
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Common Surgical Procedures */}
      <section className="py-16 bg-primary-50">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-accent-900 mb-4">Common Surgical Procedures</h2>
                <p className="text-xl text-accent-600">Routine and specialized surgical services for your pet's health needs</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {surgicalServices.map((service, index) => (
                  <div key={index} className="bg-gradient-to-br from-secondary-50 to-primary-50 p-6 rounded-2xl border-2 border-primary-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                    <div className="text-center">
                      <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-primary-600 to-secondary-600 rounded-xl mb-4 mx-auto">
                        <Scissors className="w-6 h-6 text-primary-50" />
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

      {/* Advanced Surgical Services */}
      <section className="py-16 bg-secondary-50">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <div className="flex justify-center mb-6">
                  <div className="bg-secondary-100 p-4 rounded-full">
                    <Stethoscope size={32} className="text-secondary-600" />
                  </div>
                </div>
                <h2 className="text-3xl font-bold text-accent-900 mb-4">Advanced Surgical Services</h2>
                <p className="text-xl text-accent-600">Specialized procedures for complex medical conditions</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {advancedSurgeries.map((service, index) => (
                  <div key={index} className="bg-gradient-to-br from-primary-100 to-secondary-100 p-6 rounded-2xl border-2 border-primary-300 hover:shadow-lg transition-all duration-300">
                    <div className="text-center">
                      <div className="flex items-center justify-center w-12 h-12 bg-primary-600 rounded-xl mb-4 mx-auto">
                        <Heart className="w-6 h-6 text-primary-50" />
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

      {/* Surgery Requirements */}
      <section className="py-16 bg-primary-50">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <div className="flex justify-center mb-6">
                  <div className="bg-primary-100 p-4 rounded-full">
                    <Shield size={32} className="text-primary-600" />
                  </div>
                </div>
                <h2 className="text-3xl font-bold text-accent-900 mb-4">Pre-Surgical Requirements</h2>
                <p className="text-xl text-accent-600">Important steps to ensure your pet's safety during surgery</p>
              </div>
              
              <div className="space-y-4">
                {requirements.map((requirement, index) => (
                  <div key={index} className="bg-gradient-to-br from-secondary-50 to-primary-50 p-6 rounded-xl border-2 border-primary-200 hover:bg-primary-100 transition-colors duration-200">
                    <div className="flex items-center">
                      <div className="flex items-center justify-center w-8 h-8 bg-secondary-100 rounded-full mr-4">
                        <CheckCircle size={16} className="text-secondary-600" />
                      </div>
                      <p className="text-accent-900 font-semibold text-lg">{requirement}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Emergency Services */}
      <section className="py-16 bg-secondary-50">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="max-w-4xl mx-auto">
              <div className="bg-gradient-to-br from-primary-100 to-secondary-100 p-8 rounded-2xl border-2 border-primary-300">
                <div className="text-center">
                  <div className="flex items-center justify-center w-16 h-16 bg-secondary-600 rounded-full mb-6 mx-auto">
                    <Clock size={24} className="text-primary-50" />
                  </div>
                  <h3 className="text-2xl font-bold text-accent-900 mb-6">Emergency Surgical Services</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
                    <div className="bg-primary-50 p-6 rounded-xl border border-primary-200">
                      <h4 className="text-lg font-bold text-accent-900 mb-3">Trauma Surgery</h4>
                      <ul className="space-y-2 text-accent-700">
                        <li>• Fight wounds and lacerations</li>
                        <li>• Bite wound repairs</li>
                        <li>• Emergency foreign body removal</li>
                      </ul>
                    </div>
                    <div className="bg-primary-50 p-6 rounded-xl border border-primary-200">
                      <h4 className="text-lg font-bold text-accent-900 mb-3">Critical Procedures</h4>
                      <ul className="space-y-2 text-accent-700">
                        <li>• Emergency C-sections</li>
                        <li>• Pyometra surgery</li>
                        <li>• Bladder stone removal</li>
                      </ul>
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
              <h2 className="text-3xl font-bold mb-6">Need Surgical Services for Your Pet?</h2>
              <p className="text-xl mb-8">
                Contact us to schedule a consultation and discuss your pet's surgical needs with our experienced veterinary team
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="bg-primary-50 hover:bg-primary-100 text-primary-600 font-bold py-4 px-8 rounded-lg transition-colors duration-200"
                >
                  Schedule Consultation
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
