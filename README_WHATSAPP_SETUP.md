# WhatsApp Integration Setup

## Overview
The contact form now automatically sends WhatsApp messages to customers who submit the form.

## Setup Steps

### 1. Install Dependencies
```bash
pip install twilio
```

### 2. Create Twilio Account
1. Go to [Twilio Console](https://console.twilio.com/)
2. Sign up for a free account
3. Get your Account SID and Auth Token

### 3. Configure WhatsApp Sandbox
1. In Twilio Console, go to "Messaging" → "Try it out" → "Send a WhatsApp message"
2. Follow instructions to join the sandbox
3. Note the sandbox WhatsApp number (usually +1 415 523 8886)

### 4. Update Configuration
Edit `whatsapp_sender.py` and update:
```python
TWILIO_ACCOUNT_SID = "your_account_sid"
TWILIO_AUTH_TOKEN = "your_auth_token"
TWILIO_WHATSAPP_NUMBER = "whatsapp:+14155238886"  # Sandbox number
```

### 5. Test WhatsApp Integration
```bash
# Send test message to specific number
python3 whatsapp_sender.py 2818361597 "Test User" "dog"

# Process all contacts from JSON file
python3 whatsapp_sender.py
```

## How It Works

1. **Customer submits form** → Data saved to contacts.json
2. **API automatically triggers** → WhatsApp script with customer details
3. **WhatsApp message sent** → Professional message with clinic info
4. **Customer receives** → Immediate confirmation via WhatsApp

## Message Template
The WhatsApp message includes:
- Personal greeting with customer name and pet type
- Clinic contact information
- Business hours
- Emergency contact info
- Professional branding with emojis

## Production Setup
For production use:
1. Upgrade to Twilio paid account
2. Get approved WhatsApp Business number
3. Update `TWILIO_WHATSAPP_NUMBER` with your business number

## Manual Usage
```bash
# Send to single number
python3 whatsapp_sender.py [phone] [name] [pet_type]

# Process all pending contacts
python3 whatsapp_sender.py
```
