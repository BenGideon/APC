'use client'

import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import AnimatedSection from './AnimatedSection'

export default function Services() {
  const services = [
    "VISIT/Consultation/Pet Exam $20 / Consulta $20",
    "Vaccination Visit $10 (Current Clients)",
    "Emergency Visit $45",
    "Same Day Appointment $30"
  ]

  return (
    <section id="services" className="section-padding bg-primary-50">
      <div className="container-max">
        {/* Section Header */}
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-4xl font-bold text-accent-900 mb-4">
            Our Services & Pricing
          </h2>
          <p className="text-xl text-accent-600 max-w-2xl mx-auto">
            Quality veterinary care with transparent, affordable pricing.
          </p>
        </AnimatedSection>

        {/* Services List */}
        <div className="max-w-4xl mx-auto">
          <AnimatedSection>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {services.map((service, index) => (
                <div key={index} className="text-center">
                  <h3 className="text-lg font-semibold text-accent-900 mb-2">{service}</h3>
                  <div className="inline-flex items-center bg-secondary-100 text-secondary-600 px-3 py-1 rounded-full text-sm font-medium">
                    Special Rate
                  </div>
                </div>
              ))}
            </div>
            
            <div className="text-center">
              <Link
                href="/services"
                className="inline-flex items-center bg-primary-600 hover:bg-primary-700 text-primary-50 font-medium py-3 px-8 rounded-lg transition-colors duration-200"
              >
                View All Services & Pricing
                <ArrowRight size={16} className="ml-2" />
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}
