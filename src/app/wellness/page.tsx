'use client'

import { Heart, Stethoscope, Shield, Clock, CheckCircle, Activity } from 'lucide-react'
import AnimatedSection from '../../components/AnimatedSection'

export default function WellnessPage() {
  const wellnessServices = [
    "Wellness examinations",
    "New puppy / kitten examinations", 
    "Annual physical examinations",
    "Senior pet examinations",
    "Pet vaccinations",
    "Parasite prevention and treatments",
    "Heartworm, flea, tick control, preventions and treatments",
    "Euthanasia cremation services"
  ]

  const inHouseTests = [
    "Fecal exams",
    "Skin scrapping test", 
    "Ear mite exams",
    "Ear cytology",
    "Heart worm test",
    "Parvo test",
    "Giardia test",
    "Lepto test",
    "Urine analysis",
    "Pregnancy test",
    "Glaucoma test"
  ]

  const labServices = [
    "Complete health profiles",
    "Pre-anesthetic blood exam",
    "Senior health profile", 
    "Diabetes test",
    "Liver health profiles",
    "Kidney health profiles",
    "Pancreatic health profiles",
    "Thyroid testing",
    "Phenobarbital test",
    "NSAID panels"
  ]

  const medicalServices = [
    "Sick pet services",
    "Complete medical exams (walk ins/appointments both welcome)",
    "Less urgent medical",
    "Day time hospitalizations",
    "Fluids for certain medical/sick patients (***subject to availability)"
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
                  <Heart size={48} className="text-primary-50" />
                </div>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Wellness & Medical Services
              </h1>
              <p className="text-xl leading-relaxed">
                Comprehensive healthcare services to keep your pets healthy and happy throughout their lives
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Wellness Examinations */}
      <section className="py-16 bg-primary-50">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-accent-900 mb-4">Wellness Examinations</h2>
                <p className="text-xl text-accent-600">Preventive care to maintain your pet's optimal health</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {wellnessServices.map((service, index) => (
                  <div key={index} className="bg-gradient-to-br from-secondary-50 to-primary-50 p-6 rounded-2xl border-2 border-primary-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                    <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-primary-600 to-secondary-600 rounded-xl mb-4 mx-auto">
                      <CheckCircle className="w-6 h-6 text-primary-50" />
                    </div>
                    <h4 className="text-lg font-bold text-accent-900 text-center mb-2">{service}</h4>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* In-House Testing */}
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
                <h2 className="text-3xl font-bold text-accent-900 mb-4">In-House Testing Services</h2>
                <p className="text-xl text-accent-600">Quick and accurate diagnostic testing for immediate results</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {inHouseTests.map((test, index) => (
                  <div key={index} className="bg-primary-50 p-4 rounded-xl border border-secondary-200 text-center hover:bg-primary-100 transition-colors duration-200">
                    <div className="flex items-center justify-center w-8 h-8 bg-secondary-100 rounded-full mb-3 mx-auto">
                      <Activity size={16} className="text-secondary-600" />
                    </div>
                    <p className="text-accent-900 font-semibold text-sm">{test}</p>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* IDEXX Lab Services */}
      <section className="py-16 bg-primary-50">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <div className="flex justify-center mb-6">
                  <div className="bg-primary-100 p-4 rounded-full">
                    <Shield size={32} className="text-primary-600" />
                  </div>
                </div>
                <h2 className="text-3xl font-bold text-accent-900 mb-4">In-House IDEXX Laboratory</h2>
                <p className="text-xl text-accent-600">Advanced laboratory testing for comprehensive health profiles</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {labServices.map((service, index) => (
                  <div key={index} className="bg-gradient-to-br from-primary-100 to-secondary-100 p-6 rounded-2xl border border-primary-300 hover:shadow-lg transition-all duration-300">
                    <div className="flex items-center justify-center w-10 h-10 bg-primary-600 rounded-lg mb-4 mx-auto">
                      <Shield size={20} className="text-primary-50" />
                    </div>
                    <h4 className="text-lg font-bold text-accent-900 text-center mb-2">{service}</h4>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Medical Services */}
      <section className="py-16 bg-secondary-50">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <div className="flex justify-center mb-6">
                  <div className="bg-secondary-100 p-4 rounded-full">
                    <Clock size={32} className="text-secondary-600" />
                  </div>
                </div>
                <h2 className="text-3xl font-bold text-accent-900 mb-4">Medical Services</h2>
                <p className="text-xl text-accent-600">Comprehensive medical care for sick pets</p>
              </div>
              
              <div className="space-y-4">
                {medicalServices.map((service, index) => (
                  <div key={index} className="bg-primary-50 p-6 rounded-xl border-2 border-primary-200 hover:bg-primary-100 transition-colors duration-200">
                    <div className="flex items-center">
                      <div className="flex items-center justify-center w-8 h-8 bg-secondary-100 rounded-full mr-4">
                        <CheckCircle size={16} className="text-secondary-600" />
                      </div>
                      <p className="text-accent-900 font-semibold text-lg">{service}</p>
                    </div>
                  </div>
                ))}
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
              <h2 className="text-3xl font-bold mb-6">Ready to Schedule Your Pet's Wellness Exam?</h2>
              <p className="text-xl mb-8">
                Contact us today to book an appointment or visit us for walk-in services
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="bg-primary-50 hover:bg-primary-100 text-primary-600 font-bold py-4 px-8 rounded-lg transition-colors duration-200"
                >
                  Contact Us Today
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
