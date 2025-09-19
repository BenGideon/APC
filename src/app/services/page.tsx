'use client'

import { Suspense } from 'react'
import { useSearchParams } from 'next/navigation'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import AnimatedSection from '@/components/AnimatedSection'
import { Heart, Shield, Stethoscope, Scissors, DollarSign, CheckCircle } from 'lucide-react'

function ServicesContent() {
  const searchParams = useSearchParams()
  const searchQuery = searchParams.get('search')?.toLowerCase() || ''

  const services = [
    {
      title: "Wellness & Medical Services",
      icon: <Stethoscope className="w-8 h-8" />,
      items: [
        "Wellness examinations",
        "Vaccinations (Rabies, DHPP, FVRCP)",
        "Parasite prevention and treatment",
        "Diagnostic testing (blood work, urinalysis)",
        "Microchipping",
        "Health certificates",
        "Prescription medications",
        "Nutritional counseling"
      ]
    },
    {
      title: "Surgical Services",
      icon: <Scissors className="w-8 h-8" />,
      items: [
        "Spay and neuter procedures",
        "Soft tissue surgery",
        "Mass removals",
        "Laceration repairs",
        "Bladder stones, ear hematomas",
        "Certain biopsies, Abscess, wound dressing",
        "Cyst removals, pyometra, C-sections",
        "Splint applications"
      ]
    }
  ]

  const packages = [
    {
      name: "PUPPY PACK 1",
      price: "$32",
      description: "DHPP"
    },
    {
      name: "PUPPY PACK 2", 
      price: "$45",
      description: "DHPP + LEPTO"
    },
    {
      name: "PUPPY PACK 3",
      price: "$37", 
      description: "DHPP + BORDETELLA"
    },
    {
      name: "PUPPY PACK 4",
      price: "$62",
      description: "DHLPP + RABIES + BORDATELLA"
    },
    {
      name: "ADULT ANNUAL PACK",
      price: "$89",
      description: "DHLPP + RABIES + BORDATELLA + HEARTWORM TEST"
    },
    {
      name: "CHIP",
      price: "$39",
      description: "MICROCHIP + REGISTRATION"
    },
    {
      name: "CAT PACK",
      price: "$52",
      description: "RABIES, FELINE LEUKEMIA, RHINOTRACHEITIS, CALICIVIRUS, PANLEUKOPENA, CHLAMYDOPHILA"
    },
    {
      name: "ANNUAL CAT PACK",
      price: "$75",
      description: "FVRCP + LEUKEMIA + RABIES + FECAL EXAM"
    }
  ]

  const pricing = [
    "VISIT/Consultation/Pet Exam $20 / Consulta $20",
    "Vaccination Visit $10 (Current Clients)",
    "Emergency Visit $45",
    "Same Day Appointment $30"
  ]

  const offersDiscounts = [
    "$5 off for veterans, senior citizens, students, and teachers.",
    "Free first office visit for shelter adopted pets within 2 days after adoption."
  ]

  const additionalServices = [
    {
      name: "X-RAY",
      price: "$99",
      description: "STARTS AT"
    },
    {
      name: "BLOOD WORK",
      price: "$99",
      description: "STARTS AT"
    },
    {
      name: "THYROID TEST",
      price: "$55",
      description: ""
    },
    {
      name: "PREGNANCY TEST",
      price: "$60",
      description: ""
    },
    {
      name: "MICROCHIP + REGISTRATION",
      price: "$39",
      description: ""
    },
    {
      name: "DEWORMING GENERAL",
      price: "$12",
      description: ""
    }
  ]

  const individualPricing = [
    { service: "Rabies - 1 yr", price: "$12", note: "Dog & Cat" },
    { service: "Rabies - 3 yr", price: "$28", note: "Dog & Cat" },
    { service: "DA2PP, Lepto 4 strains", price: "$30", note: "Dog" },
    { service: "Canine influenza", price: "$40", note: "" },
    { service: "FVRCP + Leukemia", price: "$38", note: "Cat" },
    { service: "Deworming general", price: "$12", note: "" },
    { service: "Fecal float", price: "$20", note: "" },
    { service: "Parvo test", price: "$39", note: "" },
    { service: "Skin scrapping test", price: "$20", note: "" },
    { service: "Ear swab test", price: "$18", note: "" },
    { service: "Ear cytology", price: "$35", note: "" },
    { service: "Heart worm test", price: "$25", note: "" },
    { service: "Lyme + Heart worm test + Anaplasma test", price: "$45", note: "" },
    { service: "Feline combo test for leukemia and feline AIDS", price: "$45", note: "" },
    { service: "Bordatella vaccine dog", price: "$16", note: "" },
    { service: "Nail trim starts at cat/dog", price: "$12", note: "" },
    { service: "Anal sac expression Starts at", price: "$15", note: "" },
    { service: "Tail docks puppy starts at", price: "$15+", note: "" }
  ]

  const dentalPricing = [
    { weight: "0-25 LBS", price: "$150" },
    { weight: "25.1 TO 50 LBS", price: "$175" },
    { weight: "50.1 TO 75 LBS", price: "$200" },
    { weight: "75.1 LBS ABOVE", price: "$250" }
  ]

  return (
    <main className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-50 via-secondary-50 to-primary-100 pt-24 pb-20 overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-32 h-32 bg-primary-200 rounded-full opacity-10"></div>
          <div className="absolute bottom-20 right-20 w-24 h-24 bg-secondary-200 rounded-full opacity-15"></div>
          <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-primary-300 rounded-full opacity-10"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <AnimatedSection>
            <div className="text-center max-w-5xl mx-auto">
              <div className="inline-flex items-center bg-secondary-100 text-secondary-600 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Heart className="w-4 h-4 mr-2" />
                Professional Veterinary Care
              </div>
              <h1 className="text-5xl md:text-7xl font-bold text-accent-900 mb-8 leading-tight">
                Our Services & 
                <span className="text-primary-600 block">Pricing</span>
              </h1>
              <p className="text-xl md:text-2xl text-accent-700 mb-12 leading-relaxed max-w-3xl mx-auto">
                Comprehensive veterinary care for your beloved pets with transparent, 
                <span className="font-semibold text-primary-600"> affordable pricing</span>
              </p>
              
              {/* Quick stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary-600 mb-1">$20</div>
                  <div className="text-sm text-accent-600">Exam Starting</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary-600 mb-1">$10</div>
                  <div className="text-sm text-accent-600">Vaccination Visit</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary-600 mb-1">Walk-ins</div>
                  <div className="text-sm text-accent-600">Welcome</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary-600 mb-1">Licensed</div>
                  <div className="text-sm text-accent-600">Veterinarians</div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Our Services & Pricing */}
      <section className="py-20 bg-white relative">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="text-center mb-16">
              <div className="inline-flex items-center bg-primary-100 text-primary-600 px-4 py-2 rounded-full text-sm font-medium mb-4">
                <Heart className="w-4 h-4 mr-2" />
                Complete Care Services
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-accent-900 mb-6">Our Services & Pricing</h2>
              <p className="text-lg text-accent-700 max-w-3xl mx-auto mb-8">
                Comprehensive veterinary care with transparent pricing. From routine check-ups to specialized treatments, we're here for your pet's health.
              </p>
              <div className="bg-gradient-to-r from-secondary-100 to-primary-100 border border-secondary-300 p-6 rounded-2xl max-w-3xl mx-auto">
                <div className="flex items-center justify-center mb-2">
                  <CheckCircle className="w-5 h-5 text-secondary-600 mr-2" />
                  <p className="text-accent-900 font-semibold">
                    <strong>Note:</strong> Enquire with us for any additional services and products.
                  </p>
                </div>
              </div>
            </div>

            {/* Quick Services Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
              {pricing.slice(0, 6).map((item, index) => (
                <div key={index} className="group bg-gradient-to-br from-primary-50 to-primary-100 p-6 rounded-2xl border border-primary-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                  <div className="flex items-center justify-center w-12 h-12 bg-primary-600 rounded-xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    <DollarSign className="w-6 h-6 text-primary-50" />
                  </div>
                  <h3 className="font-bold text-accent-900 mb-2 text-lg">{item}</h3>
                  <div className="inline-flex items-center bg-secondary-100 text-secondary-600 px-3 py-1 rounded-full text-sm font-medium">
                    Special Rate
                  </div>
                </div>
              ))}
            </div>

            {/* Vaccination Packages */}
            <div className="mb-16">
              <h3 className="text-2xl font-bold text-accent-900 mb-8 text-center">Vaccination Packages</h3>
              <div className="bg-gradient-to-r from-secondary-100 to-primary-100 border border-secondary-300 p-4 rounded-2xl max-w-3xl mx-auto mb-8">
                <p className="text-accent-900 font-medium text-center">
                  <strong>Note:</strong> Below prices are subject to change anytime.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
                {packages.map((pkg, index) => (
                  <div key={index} className="group bg-gradient-to-br from-secondary-50 to-primary-50 p-6 rounded-2xl border-2 border-primary-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                    <div className="text-center">
                      <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-primary-600 to-secondary-600 rounded-xl mb-4 mx-auto group-hover:scale-110 transition-transform duration-300">
                        <Shield className="w-6 h-6 text-primary-50" />
                      </div>
                      <h4 className="text-lg font-bold text-accent-900 mb-2">{pkg.name}</h4>
                      <div className="text-2xl font-bold text-primary-600 mb-3">{pkg.price}</div>
                      <p className="text-sm text-accent-700 leading-tight">{pkg.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Special Offers */}
            <div>
              <h3 className="text-2xl font-bold text-accent-900 mb-8 text-center">Special Offers & Discounts</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                {offersDiscounts.map((offer, index) => (
                  <div key={index} className="group bg-gradient-to-br from-secondary-50 to-white p-6 rounded-2xl shadow-lg border border-secondary-200 hover:shadow-xl transition-all duration-300">
                    <div className="flex items-start space-x-4">
                      <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-secondary-500 to-secondary-600 rounded-xl group-hover:scale-110 transition-transform duration-300">
                        <Heart className="w-6 h-6 text-primary-50" />
                      </div>
                      <div className="flex-1">
                        <div className="inline-flex items-center bg-secondary-100 text-secondary-600 px-3 py-1 rounded-full text-sm font-medium mb-2">
                          DISCOUNT
                        </div>
                        <p className="text-accent-900 font-semibold leading-relaxed">{offer}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Dental Services */}
      <section className="py-20 bg-gradient-to-br from-accent-900 to-primary-700 text-primary-50 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-32 h-32 bg-primary-400 rounded-full opacity-10"></div>
          <div className="absolute bottom-20 right-20 w-24 h-24 bg-secondary-400 rounded-full opacity-15"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <AnimatedSection>
            <div className="text-center max-w-6xl mx-auto">
              <div className="inline-flex items-center bg-primary-600 text-primary-100 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Heart className="w-4 h-4 mr-2" />
                Professional Dental Care
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-8">Dental Special - $135</h2>
              <p className="text-xl mb-6 text-primary-200">Call Today for More Information</p>
              <p className="text-lg mb-12 text-primary-300">5+ YEARS PETS NEEDED BLOOD WORK</p>
              
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-12">
                <div className="bg-accent-900/80 backdrop-blur-sm p-4 rounded-2xl border border-primary-500">
                  <p className="font-semibold">Anesthesia</p>
                </div>
                <div className="bg-accent-900/80 backdrop-blur-sm p-4 rounded-2xl border border-primary-500">
                  <p className="font-semibold">Pulse Ox Monitor</p>
                </div>
                <div className="bg-accent-900/80 backdrop-blur-sm p-4 rounded-2xl border border-primary-500">
                  <p className="font-semibold">Teeth Cleaning</p>
                </div>
                <div className="bg-accent-900/80 backdrop-blur-sm p-4 rounded-2xl border border-primary-500">
                  <p className="font-semibold">IV Catheter</p>
                </div>
                <div className="bg-accent-900/80 backdrop-blur-sm p-4 rounded-2xl border border-primary-500">
                  <p className="font-semibold">Scaling & Polishing</p>
                </div>
                <div className="bg-accent-900/80 backdrop-blur-sm p-4 rounded-2xl border border-primary-500">
                  <p className="font-semibold">Fluoride Application</p>
                </div>
              </div>
              
              <div className="bg-accent-900/60 backdrop-blur-sm p-8 rounded-3xl border border-primary-500">
                <h3 className="text-xl font-bold mb-6 text-primary-100">Dental Pricing by Weight</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  {dentalPricing.map((item, index) => (
                    <div key={index} className="text-center bg-primary-600/30 p-4 rounded-xl border border-primary-400">
                      <p className="font-semibold text-primary-200 mb-1">{item.weight}</p>
                      <p className="text-xl font-bold text-secondary-200">{item.price}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Additional Services & Individual Pricing */}
      <section className="py-20 bg-gradient-to-br from-secondary-50 to-primary-50 relative">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="text-center mb-16">
              <div className="inline-flex items-center bg-secondary-100 text-secondary-600 px-4 py-2 rounded-full text-sm font-medium mb-4">
                <CheckCircle className="w-4 h-4 mr-2" />
                Complete Care Services
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-accent-900 mb-6">Additional Services & Pricing</h2>
              <p className="text-lg text-accent-700 max-w-3xl mx-auto mb-8">
                From routine wellness to specialized treatments, we provide comprehensive care with transparent pricing.
              </p>
              <div className="bg-gradient-to-r from-secondary-100 to-primary-100 border border-secondary-300 p-4 rounded-2xl max-w-xl mx-auto">
                <p className="text-accent-900 font-medium">
                  💡 <strong>Note:</strong> Contact us for any additional services and current pricing.
                </p>
              </div>
            </div>

            {/* Combined Services Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto mb-16">
              {additionalServices.map((service, index) => (
                <div key={index} className="group bg-gradient-to-br from-secondary-50 to-primary-50 p-6 rounded-2xl border-2 border-primary-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <div className="text-center">
                    <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-primary-600 to-secondary-600 rounded-xl mb-4 mx-auto group-hover:scale-110 transition-transform duration-300">
                      <CheckCircle className="w-6 h-6 text-primary-50" />
                    </div>
                    <h4 className="text-lg font-bold text-accent-900 mb-2">{service.name}</h4>
                    <div className="text-2xl font-bold text-primary-600 mb-3">{service.price}</div>
                    {service.description && (
                      <p className="text-sm text-accent-700 leading-tight">{service.description}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Individual Pricing List */}
            <div>
              <h3 className="text-2xl font-bold text-accent-900 mb-8 text-center">Individual Service Pricing</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
                {individualPricing.slice(0, 8).map((item, index) => (
                  <div key={index} className="group bg-white p-6 rounded-2xl shadow-lg border border-primary-200 hover:shadow-xl transition-all duration-300">
                    <div className="flex justify-between items-center">
                      <div className="flex items-center space-x-3">
                        <div className="flex items-center justify-center w-10 h-10 bg-primary-100 rounded-xl group-hover:bg-primary-200 transition-colors duration-300">
                          <DollarSign className="w-5 h-5 text-primary-600" />
                        </div>
                        <div>
                          <h4 className="text-accent-900 font-semibold">{item.service}</h4>
                          {item.note && (
                            <p className="text-accent-600 text-sm">{item.note}</p>
                          )}
                        </div>
                      </div>
                      <div className="text-primary-700 font-bold text-xl">{item.price}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <Footer />
    </main>
  )
}

export default function Services() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ServicesContent />
    </Suspense>
  )
}
