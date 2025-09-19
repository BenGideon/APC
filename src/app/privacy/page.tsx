import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import AnimatedSection from '@/components/AnimatedSection'
import { Shield, Eye, Lock, Database } from 'lucide-react'

export default function Privacy() {
  return (
    <main className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-secondary-50 pt-20 pb-16">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                Privacy Policy
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Your privacy is important to us. Learn how we collect, use, and protect your information.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Privacy Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="max-w-4xl mx-auto prose prose-lg">
              
              <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-lg mb-8">
                <h2 className="text-2xl font-bold text-blue-800 mb-2">Who We Are</h2>
                <p className="text-blue-700">Our website address is: https://amigospetclinic.com/</p>
              </div>

              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                    <Database className="w-6 h-6 mr-3 text-blue-600" />
                    What Personal Data We Collect and Why We Collect It
                  </h2>
                  
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-800 mb-3">Comments</h3>
                      <p className="text-gray-700 mb-3">
                        When visitors leave comments on the site we collect the data shown in the comments form, 
                        and also the visitor's IP address and browser user agent string to help spam detection.
                      </p>
                      <p className="text-gray-700">
                        An anonymized string created from your email address (also called a hash) may be provided 
                        to the Gravatar service to see if you are using it. The Gravatar service privacy policy is 
                        available here: https://automattic.com/privacy/. After approval of your comment, your profile 
                        picture is visible to the public in the context of your comment.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold text-gray-800 mb-3">Media</h3>
                      <p className="text-gray-700">
                        If you upload images to the website, you should avoid uploading images with embedded 
                        location data (EXIF GPS) included. Visitors to the website can download and extract any 
                        location data from images on the website.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold text-gray-800 mb-3">Contact Forms</h3>
                      <p className="text-gray-700">
                        Information submitted through our contact forms is used solely to respond to your inquiries 
                        and provide veterinary services. We do not share this information with third parties.
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                    <Lock className="w-6 h-6 mr-3 text-green-600" />
                    Cookies
                  </h2>
                  
                  <div className="space-y-4">
                    <p className="text-gray-700">
                      If you leave a comment on our site you may opt-in to saving your name, email address and 
                      website in cookies. These are for your convenience so that you do not have to fill in your 
                      details again when you leave another comment. These cookies will last for one year.
                    </p>
                    
                    <p className="text-gray-700">
                      If you have an account and you log in to this site, we will set a temporary cookie to determine 
                      if your browser accepts cookies. This cookie contains no personal data and is discarded when you 
                      close your browser.
                    </p>
                    
                    <p className="text-gray-700">
                      When you log in, we will also set up several cookies to save your login information and your 
                      screen display choices. Login cookies last for two days, and screen options cookies last for a 
                      year. If you select "Remember Me", your login will persist for two weeks. If you log out of your 
                      account, the login cookies will be removed.
                    </p>
                    
                    <p className="text-gray-700">
                      If you edit or publish an article, an additional cookie will be saved in your browser. This 
                      cookie includes no personal data and simply indicates the post ID of the article you just edited. 
                      It expires after 1 day.
                    </p>
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                    <Eye className="w-6 h-6 mr-3 text-purple-600" />
                    Embedded Content from Other Websites
                  </h2>
                  <p className="text-gray-700">
                    Articles on this site may include embedded content (e.g. videos, images, articles, etc.). 
                    Embedded content from other websites behaves in the exact same way as if the visitor has 
                    visited the other website.
                  </p>
                  <p className="text-gray-700 mt-3">
                    These websites may collect data about you, use cookies, embed additional third-party tracking, 
                    and monitor your interaction with that embedded content, including tracking your interaction 
                    with the embedded content if you have an account and are logged in to that website.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Analytics</h2>
                  <p className="text-gray-700">
                    We may use analytics services to understand how visitors interact with our website. 
                    This helps us improve our services and user experience.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Who We Share Your Data With</h2>
                  <p className="text-gray-700">
                    We do not sell, trade, or otherwise transfer your personal information to third parties 
                    without your consent, except as described in this privacy policy.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">How Long We Retain Your Data</h2>
                  <p className="text-gray-700 mb-3">
                    If you leave a comment, the comment and its metadata are retained indefinitely. This is so 
                    we can recognize and approve any follow-up comments automatically instead of holding them 
                    in a moderation queue.
                  </p>
                  <p className="text-gray-700">
                    For users that register on our website (if any), we also store the personal information they 
                    provide in their user profile. All users can see, edit, or delete their personal information 
                    at any time (except they cannot change their username). Website administrators can also see 
                    and edit that information.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                    <Shield className="w-6 h-6 mr-3 text-red-600" />
                    What Rights You Have Over Your Data
                  </h2>
                  <p className="text-gray-700 mb-3">
                    If you have an account on this site, or have left comments, you can request to receive an 
                    exported file of the personal data we hold about you, including any data you have provided to us.
                  </p>
                  <p className="text-gray-700">
                    You can also request that we erase any personal data we hold about you. This does not include 
                    any data we are obliged to keep for administrative, legal, or security purposes.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Where We Send Your Data</h2>
                  <p className="text-gray-700">
                    Visitor comments may be checked through an automated spam detection service.
                  </p>
                  <div className="bg-white p-8 rounded-lg shadow-lg text-center">
                    <div className="bg-secondary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                      <Shield className="w-8 h-8 text-secondary-600" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Data Protection</h3>
                    <p className="text-gray-700">
                      We implement industry-standard security measures to protect your personal information.
                    </p>
                  </div>
                  <div className="bg-white p-8 rounded-lg shadow-lg text-center">
                    <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                      <Eye className="w-8 h-8 text-primary-600" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Transparency</h3>
                    <p className="text-gray-700">
                      We are transparent about what information we collect and how we use it.
                    </p>
                  </div>
                  <div className="bg-white p-8 rounded-lg shadow-lg text-center">
                    <div className="bg-accent-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                      <Lock className="w-8 h-8 text-accent-600" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Your Control</h3>
                    <p className="text-gray-700">
                      You have control over your personal information and can request changes or deletion.
                    </p>
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Additional Information</h2>
                  
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-800 mb-2">How We Protect Your Data</h3>
                      <p className="text-gray-700">
                        We implement appropriate security measures to protect your personal information against 
                        unauthorized access, alteration, disclosure, or destruction.
                      </p>
                    </div>
                    
                    <div>
                      <h3 className="text-xl font-semibold text-gray-800 mb-2">What Data Breach Procedures We Have in Place</h3>
                      <p className="text-gray-700">
                        In the event of a data breach, we will notify affected users and relevant authorities 
                        as required by law.
                      </p>
                    </div>
                    
                    <div>
                      <h3 className="text-xl font-semibold text-gray-800 mb-2">What Third Parties We Receive Data From</h3>
                      <p className="text-gray-700">
                        We may receive data from third-party services that you choose to connect with our website, 
                        such as social media platforms or payment processors.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Information</h2>
                  <p className="text-gray-700 mb-3">
                    If you have any questions about this Privacy Policy, please contact us:
                  </p>
                  <div className="space-y-2">
                    <p className="text-gray-700"><strong>Phone:</strong> (832) 991-8811</p>
                    <p className="text-gray-700"><strong>Email:</strong> contact@amigospetclinic.com</p>
                    <p className="text-gray-700"><strong>Address:</strong> 4215 Spencer Hwy, Pasadena, TX 77504</p>
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
