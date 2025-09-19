# Amigos Pet Clinic Website

A high-performance, mobile-first website for Amigos Pet Clinic with dynamic appointment booking, built with Next.js 14, TypeScript, Tailwind CSS, and Supabase.

## Features

- 🏥 **Modern Pet Clinic Website** - Beautiful, responsive design with hero animations
- 📅 **Dynamic Appointment Booking** - FullCalendar integration with real-time availability
- 💳 **Stripe Payment Integration** - Secure online payments for services
- 🔐 **Admin Dashboard** - Manage appointments, services, and availability
- 📱 **Mobile-First Design** - Optimized for all devices
- ⚡ **High Performance** - Lighthouse 95+ score optimized
- 🔒 **Secure Backend** - Supabase with Row Level Security

## Tech Stack

- **Frontend**: Next.js 14, React 18, TypeScript
- **Styling**: Tailwind CSS, Framer Motion, GSAP
- **Backend**: Supabase (PostgreSQL, Auth, Real-time)
- **Payments**: Stripe
- **Calendar**: FullCalendar
- **Deployment**: Vercel
- **Domain**: GoDaddy (configured for Vercel)

## Quick Start

### Prerequisites

- Node.js 18+ (recommended: Node.js 24)
- npm or yarn
- Supabase account
- Stripe account (for payments)

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd APC
   ```

2. **Switch to Node.js 24** (if using nvm)
   ```bash
   nvm use 24
   ```

3. **Install dependencies**
   ```bash
   npm install
   ```

4. **Set up environment variables**
   ```bash
   cp .env.local.example .env.local
   ```
   
   Fill in your environment variables:
   ```env
   # Supabase
   NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
   SUPABASE_SERVICE_ROLE_KEY=your_supabase_service_role_key

   # Stripe
   NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=your_stripe_publishable_key
   STRIPE_SECRET_KEY=your_stripe_secret_key
   STRIPE_WEBHOOK_SECRET=your_stripe_webhook_secret
   ```

5. **Set up Supabase database**
   - Create a new Supabase project
   - Run the SQL schema from `supabase-schema.sql` in your Supabase SQL editor
   - This will create all necessary tables, policies, and sample data

6. **Start the development server**
   ```bash
   npm run dev
   ```

7. **Open your browser**
   Navigate to `http://localhost:3000` (or the port shown in terminal)

## Database Setup

The `supabase-schema.sql` file contains:

- **Tables**: appointments, services, time_slots, admin_users
- **Row Level Security**: Policies for secure data access
- **Functions**: Booking logic and availability management
- **Sample Data**: Default services and time slots for 3 months
- **Indexes**: Optimized for performance

### Key Tables

- `appointments` - Store all appointment bookings
- `services` - Available veterinary services with pricing
- `time_slots` - Available appointment times with availability status
- `admin_users` - Admin dashboard access control

## Features Overview

### 🏠 Homepage
- Hero section with animations
- Services overview
- About section with team
- Contact form
- Mobile-responsive navigation

### 📅 Appointment Booking
- Interactive calendar (FullCalendar)
- Real-time availability checking
- Multi-step booking process
- Form validation
- Email confirmations

### 💳 Payment Integration
- Stripe payment processing
- Secure payment forms
- Payment status tracking
- Refund handling

### 🔐 Admin Dashboard
- Appointment management
- Service configuration
- Availability management
- Customer communication

## Deployment

### Vercel Deployment

1. **Connect to Vercel**
   ```bash
   npm install -g vercel
   vercel login
   vercel
   ```

2. **Configure environment variables in Vercel dashboard**
   - Add all environment variables from `.env.local`

3. **Custom Domain Setup**
   - Add your GoDaddy domain in Vercel dashboard
   - Update DNS records in GoDaddy:
     - CNAME: www → cname.vercel-dns.com
     - A: @ → 76.76.19.61

### Environment Variables

Required environment variables for production:

```env
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
SUPABASE_SERVICE_ROLE_KEY=
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=
STRIPE_SECRET_KEY=
STRIPE_WEBHOOK_SECRET=
```

## Development

### Project Structure

```
src/
├── app/                 # Next.js 14 App Router
│   ├── api/            # API routes
│   ├── booking/        # Appointment booking page
│   ├── globals.css     # Global styles
│   ├── layout.tsx      # Root layout
│   └── page.tsx        # Homepage
├── components/         # React components
│   ├── About.tsx
│   ├── Contact.tsx
│   ├── Footer.tsx
│   ├── Hero.tsx
│   ├── Navigation.tsx
│   └── Services.tsx
├── lib/               # Utilities and configurations
│   └── supabase.ts    # Supabase client
├── types/             # TypeScript type definitions
└── utils/             # Helper functions
    └── cn.ts          # Class name utility
```

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run type-check` - Run TypeScript checks

### Key Components

- **Hero**: Animated landing section with call-to-actions
- **Services**: Interactive service cards with pricing
- **About**: Team information and clinic story
- **Contact**: Contact form with validation
- **Booking**: Multi-step appointment booking flow

## API Routes

- `GET /api/appointments?date=YYYY-MM-DD` - Get available time slots
- `GET /api/appointments?email=user@example.com` - Get user appointments
- `POST /api/appointments` - Create new appointment
- `GET /api/services` - Get available services

## Performance Optimizations

- Next.js 14 App Router for optimal performance
- Image optimization with Next.js Image component
- Tailwind CSS for minimal bundle size
- Code splitting and lazy loading
- Optimized fonts and assets

## Security Features

- Row Level Security (RLS) in Supabase
- Input validation and sanitization
- Secure API endpoints
- Environment variable protection
- HTTPS enforcement

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## Support

For support, email support@amigospetclinic.com or create an issue in the repository.

## License

MIT License - see LICENSE file for details.

---

**Amigos Pet Clinic** - Caring for your furry friends with love and expertise. 🐾
