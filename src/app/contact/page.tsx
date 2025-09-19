import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import AnimatedSection from '@/components/AnimatedSection'
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react'
import { useState } from 'react'

export default function Contact() {
  return (
    <main className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-secondary-50 pt-20 pb-16">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                Contact Us
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Get in touch with our caring team. We're here to help you and your pets.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {/* Contact Info */}
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-8">Get In Touch</h2>
                  <p className="text-lg text-gray-700 mb-8">
                    We are looking forward to hearing from you. Please feel free to get in touch via the form below, 
                    we will get back to you as soon as possible.
                  </p>
                  
                  <div className="space-y-6">
                    <div className="flex items-start">
                      <div className="bg-secondary-100 p-3 rounded-lg mr-4">
                        <MapPin className="w-6 h-6 text-secondary-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 text-lg mb-1">Address</h3>
                        <p className="text-gray-700">4215 Spencer Hwy, Pasadena, TX 77504</p>
                        <p className="text-sm text-gray-500 mt-1">
                          Our Pasadena veterinarian office is very easy to get to
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="bg-primary-100 p-3 rounded-lg mr-4">
                        <Phone className="w-6 h-6 text-primary-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 text-lg mb-1">Phone</h3>
                        <p className="text-gray-700">832 991 8811</p>
                        <p className="text-sm text-gray-500 mt-1">
                          Call us for appointments or questions
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="bg-accent-100 p-3 rounded-lg mr-4">
                        <Mail className="w-6 h-6 text-accent-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 text-lg mb-1">Email</h3>
                        <p className="text-gray-700">contact@amigospetclinic.com</p>
                        <p className="text-sm text-gray-500 mt-1">
                          Emails are usually answered within 24 to 48 hours
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="bg-secondary-100 p-3 rounded-lg mr-4">
                        <Clock className="w-6 h-6 text-secondary-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 text-lg mb-1">Hours</h3>
                        <div className="text-gray-700">
                          <p>Monday - Friday: 8:00AM - 5:00PM</p>
                          <p>Saturday: 8:00 - 3:00</p>
                          <p>Sunday: Closed</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Contact Form */}
                <div className="bg-gray-50 p-8 rounded-lg">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h3>
                  <form className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        Name/Nombre *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        placeholder="Your full name"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        placeholder="your.email@example.com"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                        Contact Number/Numero De Telefono *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        placeholder="(832) 123-4567"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="reason" className="block text-sm font-medium text-gray-700 mb-2">
                        Reason For Visit/Razon De La Visita *
                      </label>
                      <textarea
                        id="reason"
                        name="reason"
                        rows={4}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        placeholder="Please describe the reason for your visit or any questions you have..."
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-3">
                        Multiple Choice *
                      </label>
                      <div className="space-y-2">
                        <label className="flex items-center">
                          <input
                            type="radio"
                            name="petType"
                            value="dog"
                            className="mr-3 text-primary-600"
                          />
                          <span className="text-gray-700">Dog/Canine/Perro</span>
                        </label>
                        <label className="flex items-center">
                          <input
                            type="radio"
                            name="petType"
                            value="cat"
                            className="mr-3 text-primary-600"
                          />
                          <span className="text-gray-700">Cat/Feline/Gato</span>
                        </label>
                      </div>
                    </div>
                    
                    <button
                      type="submit"
                      className="w-full bg-primary-600 text-white py-3 px-6 rounded-lg hover:bg-primary-700 transition-colors flex items-center justify-center"
                    >
                      <Send className="w-5 h-5 mr-2" />
                      Send Message
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-primary-50">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-accent-900 mb-8 text-center">Find Us</h2>
              <div className="bg-primary-50 p-4 rounded-lg shadow-lg">
                {/* Interactive Map */}
                <div className="rounded-xl overflow-hidden shadow-lg">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3464.8234567890123!2d-95.2091234!3d29.6912345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2s4215%20Spencer%20Hwy%2C%20Pasadena%2C%20TX%2077504!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
                    width="100%"
                    height="300"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Amigos Pet Clinic Location"
                  ></iframe>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Emergency Notice */}
      <section className="py-16 bg-secondary-50">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="max-w-4xl mx-auto text-center">
              <div className="bg-secondary-100 border-l-4 border-secondary-500 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-secondary-800 mb-3">Emergency Care Notice</h3>
                <p className="text-secondary-700">
                  We are not an emergency hospital. For after hour, weekend and holiday care, 
                  please contact VCA Animal Emergency Hospital Southeast.
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <Footer />
    </main>
  )
}
