'use client'

import { Award, Users, Clock, Heart, Star, CheckCircle } from 'lucide-react'

export default function About() {
  const stats = [
    { number: '500+', label: 'Happy Pets Treated', icon: Heart },
    { number: '5+', label: 'Years of Experience', icon: Award },
    { number: '24/7', label: 'Emergency Availability', icon: Clock },
    { number: '4.9/5', label: 'Customer Rating', icon: Star },
  ]

  const teamMembers = [
    {
      name: 'Dr. Sarah Johnson',
      role: 'Lead Veterinarian',
      image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      specialties: ['Small Animal Medicine', 'Surgery', 'Emergency Care'],
    },
    {
      name: 'Dr. Michael Chen',
      role: 'Veterinary Surgeon',
      image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      specialties: ['Orthopedic Surgery', 'Soft Tissue Surgery', 'Dental Care'],
    },
    {
      name: 'Lisa Rodriguez',
      role: 'Veterinary Technician',
      image: 'https://images.unsplash.com/photo-1594824475317-29bb4b71b2e4?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      specialties: ['Patient Care', 'Laboratory Services', 'Anesthesia'],
    },
  ]

  const values = [
    {
      title: 'Compassionate Care',
      description: 'We treat every pet with the same love and attention we would give our own.',
      icon: Heart,
    },
    {
      title: 'Expert Knowledge',
      description: 'Our team stays current with the latest veterinary medicine advances.',
      icon: Award,
    },
    {
      title: 'Always Available',
      description: 'Emergency services available 24/7 because pets don\'t get sick on schedule.',
      icon: Clock,
    },
    {
      title: 'Community Focused',
      description: 'We\'re proud to serve our local community and build lasting relationships.',
      icon: Users,
    },
  ]

  return (
    <section id="about" className="section-padding bg-primary-50">
      <div className="container-max">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-accent-900 mb-4">
            About Amigos Pet Clinic
          </h2>
          <p className="text-xl text-accent-600 max-w-3xl mx-auto">
            Founded with a passion for animal welfare, we've been providing exceptional 
            veterinary care to pets and peace of mind to their families for over 5 years.
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <stat.icon className="text-primary-600" size={32} />
              </div>
              <div className="text-3xl font-bold text-accent-900 mb-2">{stat.number}</div>
              <div className="text-accent-600">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Story Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-3xl font-bold text-accent-900 mb-6">Our Story</h3>
            <div className="space-y-4 text-accent-600">
              <p>
                Amigos Pet Clinic was founded in 2019 with a simple mission: to provide 
                compassionate, high-quality veterinary care that treats every pet like family. 
                What started as a small neighborhood clinic has grown into a trusted healthcare 
                partner for hundreds of pet families.
              </p>
              <p>
                Our state-of-the-art facility combines modern medical technology with a 
                warm, welcoming environment that helps both pets and their owners feel 
                comfortable during visits.
              </p>
              <p>
                We believe that preventive care is the foundation of pet health, which is 
                why we focus on building long-term relationships with our clients and 
                providing education to help pets live their healthiest, happiest lives.
              </p>
            </div>
          </div>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1576201836106-db1758fd1c97?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
              alt="Modern veterinary clinic interior"
              className="rounded-2xl shadow-lg"
            />
            {/* <div className="absolute -bottom-6 -right-6 bg-primary-50 rounded-xl shadow-lg p-4 border border-secondary-200"> */}
              <div className="flex items-center space-x-2">
                <CheckCircle className="text-secondary-600" size={20} />
                <span className="font-semibold text-accent-900">AAHA Accredited</span>
              </div>
            {/* </div> */}
          </div>
        </div>

        {/* Values Section */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-accent-900 text-center mb-12">Our Values</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-secondary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <value.icon className="text-secondary-600" size={32} />
                </div>
                <h4 className="text-xl font-semibold text-accent-900 mb-3">{value.title}</h4>
                <p className="text-accent-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Team Section */}
        <div>
          <h3 className="text-3xl font-bold text-accent-900 text-center mb-12">Meet Our Team</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="card text-center">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                />
                <h4 className="text-xl font-semibold text-accent-900 mb-2">{member.name}</h4>
                <p className="text-primary-600 font-medium mb-4">{member.role}</p>
                <div className="space-y-2">
                  {member.specialties.map((specialty, specialtyIndex) => (
                    <div
                      key={specialtyIndex}
                      className="inline-block bg-primary-100 text-accent-700 text-sm px-3 py-1 rounded-full mr-2 mb-2"
                    >
                      {specialty}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
