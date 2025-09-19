import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import AnimatedSection from '@/components/AnimatedSection'
import { Shield, Clock, Heart, Award } from 'lucide-react'

export default function ClinicPolicies() {
  const policies = [
    "Quality affordable care to all pets",
    "Both walk-ins /appointments",
    "All surgeries must be scheduled by appointments",
    "We require prior examination of the pet before scheduling surgery",
    "We don't accept checks",
    "For you and others protection, all dogs must be on a leash and properly restrained while in the clinic /premises",
    "All cats must be in an appropriate carrier",
    "Please keep an eye on your pets at all times"
  ]

  return (
    <main className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-secondary-50 pt-20 pb-16">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-6xl font-bold text-accent-900 mb-6">
                Clinic Policies
              </h1>
              <p className="text-xl text-accent-600 mb-8">
                Important guidelines for visiting Amigos Pet Clinic
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Policies Section */}
      <section className="py-16 bg-primary-50">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-accent-900 mb-8 text-center">Our Clinic Policies</h2>
              <div className="bg-primary-100 p-8 rounded-lg">
                <div className="grid grid-cols-1 gap-6">
                  {policies.map((policy, index) => (
                    <div key={index} className="flex items-start">
                      <Shield className="w-5 h-5 text-secondary-600 mr-3 mt-1 flex-shrink-0" />
                      <p className="text-accent-700 text-lg">{policy}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Hours Section */}
      <section className="py-16 bg-primary-50">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="max-w-4xl mx-auto">
              <div className="bg-primary-50 p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold text-accent-900 mb-6">Hours of Operation</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center py-2 border-b border-secondary-200">
                    <span className="font-medium text-accent-900">Monday - Friday</span>
                    <span className="text-accent-700">8:00AM - 5:00PM</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-secondary-200">
                    <span className="font-medium text-accent-900">Saturday</span>
                    <span className="text-accent-700">8:00AM - 3:00PM</span>
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <span className="font-medium text-accent-900">Sunday</span>
                    <span className="text-accent-700">Closed</span>
                  </div>
                </div>
                <div className="mt-6 p-4 bg-secondary-50 border-l-4 border-secondary-500 rounded-lg">
                  <div className="flex items-start">
                    <Clock className="w-5 h-5 text-secondary-600 mr-2 mt-1" />
                    <div>
                      <p className="font-semibold text-secondary-800">Emergency Care</p>
                      <p className="text-secondary-700 text-sm">
                        We are not an emergency hospital. For after hour, weekend and holiday care 
                        @VCA animal emergency hospital southeast.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-primary-50">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-accent-900 mb-8">Contact Information</h2>
              <div className="bg-primary-100 p-8 rounded-lg">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-bold text-accent-900 mb-4">Address</h3>
                    <p className="text-accent-700">4215 Spencer Hwy</p>
                    <p className="text-accent-700">Pasadena, TX 77504</p>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-accent-900 mb-4">Phone</h3>
                    <p className="text-accent-700 text-lg font-medium">832 991 8811</p>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <Footer />
    </main>
  )
}
