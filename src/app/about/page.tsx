import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import AnimatedSection from '@/components/AnimatedSection'
import { MapPin, Phone, Mail, Clock, Shield, Heart, Award } from 'lucide-react'

export default function About() {
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
                About Amigos Pet Clinic
              </h1>
              <p className="text-xl text-accent-600 mb-8">
                Serving Pasadena TX and Greater Houston with compassionate veterinary care
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Main About Content */}
      <section className="py-16 bg-primary-50">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
                <div>
                  <h2 className="text-3xl font-bold text-accent-900 mb-6">Our Story</h2>
                  <p className="text-lg text-accent-700 mb-6">
                    If you live in Pasadena TX or Greater Houston, then you have picked the perfect site to find a veterinarian. 
                    Amigos Pet Clinic is a full-service animal hospital. We are interested in giving high quality but affordable 
                    services in a quick way possible to reduce the wait time.
                  </p>
                  <p className="text-lg text-accent-700 mb-6">
                    We believe that prevention is better than cure. Our doctors are licensed veterinarians and have decades of 
                    experience in treating both cats and dogs. Our team is committed to take up all medical, wellness, preventative 
                    to less urgent medical, surgical, and dental issues.
                  </p>
                  <div className="bg-secondary-50 border-l-4 border-secondary-500 p-4 rounded-lg">
                    <p className="text-secondary-800 font-medium">
                      Our clinic accepts both WALK-INS AND APPOINTMENTS. For most of the services you do not need any appointments. 
                      If possible, please call before coming so that our staff members can advise you on your necessity.
                    </p>
                  </div>
                </div>
                <div className="bg-primary-100 p-8 rounded-lg">
                  <img 
                    src="/images/about/clinic-interior.jpg" 
                    alt="Amigos Pet Clinic Interior" 
                    className="w-full h-64 object-cover rounded-lg mb-4"
                  />
                  <p className="text-center text-accent-600">Our modern, welcoming clinic facility</p>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-primary-50">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-accent-900 mb-4">Our Values</h2>
              <p className="text-xl text-accent-600">What drives us to provide the best care for your pets</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <div className="bg-primary-50 p-8 rounded-lg shadow-lg text-center">
                <div className="bg-secondary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Heart className="w-8 h-8 text-secondary-600" />
                </div>
                <h3 className="text-xl font-bold text-accent-900 mb-4">Compassionate Care</h3>
                <p className="text-accent-700">
                  We treat every pet with the love and care they deserve, understanding the special bond between pets and their families.
                </p>
              </div>
              <div className="bg-primary-50 p-8 rounded-lg shadow-lg text-center">
                <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Shield className="w-8 h-8 text-primary-600" />
                </div>
                <h3 className="text-xl font-bold text-accent-900 mb-4">Prevention First</h3>
                <p className="text-accent-700">
                  We believe that prevention is better than cure, focusing on wellness and preventative care to keep your pets healthy.
                </p>
              </div>
              <div className="bg-primary-50 p-8 rounded-lg shadow-lg text-center">
                <div className="bg-accent-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Award className="w-8 h-8 text-accent-600" />
                </div>
                <h3 className="text-xl font-bold text-accent-900 mb-4">Quality & Affordability</h3>
                <p className="text-accent-700">
                  High-quality veterinary care shouldn't break the bank. We provide excellent service at affordable prices.
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Clinic Policies */}
      <section className="py-16 bg-primary-50">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-accent-900 mb-4">Clinic Policies</h2>
              <div className="bg-primary-100 p-8 rounded-lg">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {policies.map((policy, index) => (
                    <div key={index} className="flex items-start">
                      <Shield className="w-5 h-5 text-secondary-600 mr-3 mt-1 flex-shrink-0" />
                      <p className="text-accent-700">{policy}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-primary-50 p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold text-accent-900 mb-6">Important Guidelines</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center py-2 border-b border-secondary-200">
                    <span className="font-medium text-accent-900">Monday - Friday</span>
                    <span className="text-accent-700">8:00AM - 5:00PM</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-secondary-200">
                    <span className="font-medium text-accent-900">Saturday</span>
                    <span className="text-accent-700">8:00 - 3:00</span>
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

      {/* Location & Hours */}
      <section className="py-16 bg-primary-50">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-accent-900 mb-12 text-center">Visit Our Clinic</h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                <div className="bg-primary-50 p-8 rounded-lg shadow-lg">
                  <h3 className="text-2xl font-bold text-accent-900 mb-6">Location & Contact</h3>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <MapPin className="w-6 h-6 text-secondary-600 mr-3 mt-1" />
                      <div>
                        <p className="font-semibold text-accent-900">Address</p>
                        <p className="text-accent-700">4215 Spencer Hwy<br />Pasadena, TX 77504</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Phone className="w-6 h-6 text-secondary-600 mr-3 mt-1" />
                      <div>
                        <p className="font-semibold text-accent-900">Phone</p>
                        <p className="text-accent-700">832 991 8811</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Mail className="w-6 h-6 text-secondary-600 mr-3 mt-1" />
                      <div>
                        <p className="font-semibold text-accent-900">Email</p>
                        <p className="text-accent-700">contact@amigospetclinic.com</p>
                        <p className="text-sm text-accent-500 mt-1">Emails are usually answered within 24 to 48 hours</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-primary-50 p-8 rounded-lg shadow-lg">
                  <h3 className="text-2xl font-bold text-accent-900 mb-6">Hours of Operation</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center py-2 border-b border-secondary-200">
                      <span className="font-medium text-accent-900">Monday - Friday</span>
                      <span className="text-accent-700">8:00AM - 5:00PM</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-secondary-200">
                      <span className="font-medium text-accent-900">Saturday</span>
                      <span className="text-accent-700">8:00 - 3:00</span>
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
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-primary-50">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="text-center max-w-4xl mx-auto mb-12">
              <h2 className="text-3xl font-bold text-accent-900 mb-6">Our Experienced Team</h2>
              <p className="text-xl text-accent-700 mb-8">
                Our doctors are licensed veterinarians with decades of experience in treating both cats and dogs. 
                Our team is committed to providing comprehensive medical, wellness, preventative, surgical, and dental care.
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto mb-12">
              {/* Team Photo */}
              <div className="relative">
                <img
                  src="/images/about/veterinary-team.jpg"
                  alt="Our veterinary team"
                  className="w-full h-80 object-cover rounded-lg shadow-lg"
                />
                <div className="absolute -bottom-6 -right-6 bg-primary-50 rounded-xl shadow-lg p-4 border border-secondary-200">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary-600">20+</div>
                    <div className="text-sm text-accent-600">Years Experience</div>
                  </div>
                </div>
              </div>
              
              {/* Clinic Interior */}
              <div className="relative">
                <img
                  src="/images/about/clinic-interior.jpg"
                  alt="Modern clinic interior"
                  className="w-full h-80 object-cover rounded-lg shadow-lg"
                />
                <div className="absolute -bottom-6 -left-6 bg-secondary-100 rounded-xl shadow-lg p-4 border border-primary-200">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-secondary-600">Modern</div>
                    <div className="text-sm text-accent-600">Equipment</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="text-center">
              <div className="bg-gradient-to-r from-primary-600 to-secondary-600 text-primary-50 p-8 rounded-lg">
                <h3 className="text-2xl font-bold mb-4">Decades of Experience</h3>
                <p className="text-lg">
                  Our veterinary team brings years of expertise in animal care, ensuring your pets receive 
                  the highest quality treatment with compassion and professionalism.
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
