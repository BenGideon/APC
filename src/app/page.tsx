import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import Footer from '@/components/Footer'
import AnimatedSection from '@/components/AnimatedSection'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      
      {/* Map Section */}
      <section className="py-16 bg-primary-50">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-accent-900 mb-8 text-center">Visit Our Clinic</h2>
              <div className="bg-primary-50 p-4 rounded-lg shadow-lg">
                <div className="rounded-xl overflow-hidden shadow-lg">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3464.8234567890123!2d-95.2091234!3d29.6912345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2s4215%20Spencer%20Hwy%2C%20Pasadena%2C%20TX%2077504!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
                    width="100%"
                    height="400"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Amigos Pet Clinic Location"
                  ></iframe>
                </div>
                <div className="mt-4 text-center">
                  <p className="text-accent-700 font-medium">4215 Spencer Hwy, Pasadena, TX 77504</p>
                  <p className="text-accent-600">Call us: (832) 991-8811</p>
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
