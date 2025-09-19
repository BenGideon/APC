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
