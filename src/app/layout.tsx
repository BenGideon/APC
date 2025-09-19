import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Amigos Pet Clinic - Compassionate Veterinary Care',
  description: 'Professional veterinary services with online appointment booking. Caring for your pets with expertise and compassion.',
  keywords: 'veterinary, pet clinic, animal hospital, pet care, veterinarian, appointment booking, emergency vet, pet grooming, vaccinations',
  authors: [{ name: 'Amigos Pet Clinic' }],
  viewport: 'width=device-width, initial-scale=1',
  robots: 'index, follow',
  openGraph: {
    title: 'Amigos Pet Clinic - Compassionate Veterinary Care',
    description: 'Professional veterinary services with online appointment booking. Expert care for dogs, cats, and small animals.',
    type: 'website',
    url: 'https://www.amigospetclinic.com',
    siteName: 'Amigos Pet Clinic',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Amigos Pet Clinic - Compassionate Veterinary Care',
    description: 'Professional veterinary services with online appointment booking.',
  },
  alternates: {
    canonical: 'https://www.amigospetclinic.com',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
}
