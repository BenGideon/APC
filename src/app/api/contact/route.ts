import { NextRequest, NextResponse } from 'next/server'
import fs from 'fs'
import path from 'path'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, phone, reason, petType } = body

    // Validate required fields
    if (!name || !email || !phone || !reason || !petType) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      )
    }

    // Create contact data
    const contactData = {
      timestamp: new Date().toISOString(),
      name,
      email,
      phone,
      reason,
      petType
    }

    // Save to JSON file (simple solution)
    const dataDir = path.join(process.cwd(), 'data')
    const filePath = path.join(dataDir, 'contacts.json')

    try {
      // Ensure data directory exists
      if (!fs.existsSync(dataDir)) {
        fs.mkdirSync(dataDir, { recursive: true })
      }

      // Read existing data or create empty array
      let contacts = []
      if (fs.existsSync(filePath)) {
        const fileContent = fs.readFileSync(filePath, 'utf8')
        contacts = JSON.parse(fileContent)
      }

      // Add new contact
      contacts.push(contactData)

      // Write back to file
      fs.writeFileSync(filePath, JSON.stringify(contacts, null, 2))

      console.log('Contact form submitted:', contactData)

      // Trigger WhatsApp message
      try {
        const twilio = require('twilio')
        const accountSid = process.env.TWILIO_ACCOUNT_SID
        const authToken = process.env.TWILIO_AUTH_TOKEN
        const whatsappNumber = process.env.TWILIO_WHATSAPP_NUMBER || 'whatsapp:+14155238886'
        
        if (accountSid && authToken) {
          const client = twilio(accountSid, authToken)
          
          // Format phone number for WhatsApp
          const toWhatsapp = phone.startsWith('+') ? `whatsapp:${phone}` : `whatsapp:+1${phone}`
          
          // Create message content
          const messageBody = `🐾 *Amigos Pet Clinic* 🐾

Hello ${name}! 

Thank you for contacting us about your ${petType}. We've received your inquiry and our team will get back to you within 24-48 hours.

📍 *Location:* 4215 Spencer Hwy, Pasadena, TX 77504
📞 *Phone:* (832) 991-8811

*Business Hours:*
Mon-Fri: 8:00AM - 5:00PM
Saturday: 8:00AM - 3:00PM
Sunday: Closed

For emergencies, please contact VCA Animal Emergency Hospital Southeast.

We look forward to caring for your pet! 🐕🐱`
          
          // Send WhatsApp message
          const message = await client.messages.create({
            body: messageBody,
            from: whatsappNumber,
            to: toWhatsapp
          })
          
          console.log(`WhatsApp message sent to ${phone}, SID: ${message.sid}`)
        } else {
          console.log('Twilio credentials not configured')
        }
      } catch (error: unknown) {
        console.error('WhatsApp integration error:', (error as Error).message)
      }
      
      return NextResponse.json({ success: true })
    } catch (fileError) {
      console.error('File operation error:', fileError)
      // Still return success to user, but log the error
      return NextResponse.json({ success: true })
    }

  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
