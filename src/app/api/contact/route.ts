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
        const { spawn } = require('child_process')
        const pythonPath = process.env.NODE_ENV === 'production' ? 'python3' : 'venv/bin/python'
        const pythonProcess = spawn(pythonPath, [
          'whatsapp_sender.py', 
          phone, 
          name, 
          petType
        ], {
          cwd: process.cwd(),
          stdio: 'pipe'
        })
        
        pythonProcess.stdout.on('data', (data: Buffer) => {
          console.log(`WhatsApp stdout: ${data.toString()}`)
        })
        
        pythonProcess.stderr.on('data', (data: Buffer) => {
          console.error(`WhatsApp stderr: ${data.toString()}`)
        })
        
        pythonProcess.on('close', (code: number) => {
          console.log(`WhatsApp script finished with code ${code}`)
        })
        
        pythonProcess.on('error', (error: Error) => {
          console.error('Failed to start WhatsApp script:', error)
        })
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
