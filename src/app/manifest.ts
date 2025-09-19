import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Amigos Pet Clinic - Veterinary Care & Appointment Booking',
    short_name: 'Amigos Pet Clinic',
    description: 'Professional veterinary services with online appointment booking. Caring for your pets with expertise and compassion.',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#0ea5e9',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
    ],
  }
}
