# Contact Form Setup Instructions

## Overview
The contact form is now functional and will save data to Excel and send confirmation emails to users.

## Setup Steps

### 1. Install Python Dependencies
```bash
cd /Users/bengideondokiburra/All\ Git\ Clones/APC
pip install -r requirements.txt
```

### 2. Configure Email Settings
Edit `contact_form_handler.py` and update these variables:
```python
EMAIL_ADDRESS = "your-clinic-email@gmail.com"  # Your clinic's Gmail
EMAIL_PASSWORD = "your-app-password"  # Gmail app password (not regular password)
```

### 3. Gmail App Password Setup
1. Go to Google Account settings
2. Enable 2-Factor Authentication
3. Generate an App Password for "Mail"
4. Use this app password in the script

### 4. Start the Python Server
```bash
python contact_form_handler.py
```
The server will run on `http://localhost:5000`

### 5. Start the Next.js Development Server
```bash
npm run dev
```

## How It Works

1. **User fills form** → Data sent to Next.js API route
2. **API route** → Forwards data to Python Flask server
3. **Python server** → Saves to Excel + sends confirmation email
4. **User gets** → Success message + confirmation email

## Files Created
- `contact_submissions.xlsx` - Excel file with all form submissions
- Form data includes: timestamp, name, email, phone, pet type, reason

## Email Template
Users receive a professional confirmation email with:
- Thank you message
- Response time expectation (24-48 hours)
- Business hours
- Emergency contact info
- Clinic contact details
