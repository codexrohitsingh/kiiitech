const axios = require('axios');
const { parse } = require('csv-parse/sync');
const fs = require('fs');
const path = require('path');
const nodemailer = require('nodemailer');

// Config
// The user provided this specific sheet URL in their code
const sheetUrl = 'https://docs.google.com/spreadsheets/d/1m_fL2P9P-qSj7qi45uULJkE62P-qNB_BTZ26Hzb2n3k/export?format=csv&gid=102243265';

// Track sent emails
const sentFile = path.join(__dirname, '../sent.json');
let sentEmails = {};

// Load previously sent emails
if (fs.existsSync(sentFile)) {
    try {
        sentEmails = JSON.parse(fs.readFileSync(sentFile, 'utf-8'));
    } catch (err) {
        console.error('Error reading sent.json, starting fresh:', err);
        sentEmails = {};
    }
}

// Configure Nodemailer
const transporter = nodemailer.createTransport({
  host: "smtp.hostinger.com",
  port: 465,
  secure: true, // true for 465
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// Function to send HTML email
async function sendEmail(to, subject, htmlContent) {
    const mailOptions = {
      from: '"Kalam Institute" <office@kiitech.org>',
      to,
      subject,
      html: htmlContent,
    };

    await transporter.sendMail(mailOptions);
    console.log(`Email sent to ${to}`);
}

// Main processing function
async function processEmails() {
    try {
        console.log('Fetching sheet data...');
        const response = await axios.get(sheetUrl);
        const records = parse(response.data, {
            columns: true,
            skip_empty_lines: true,
            trim: true
        });

        console.log(`Found ${records.length} records. Processing...`);

        for (let idx = 0; idx < records.length; idx++) {
            const row = records[idx];

            // Map sheet columns to fields
            const name = (row['Full Name'] || row['fullName'] || row['Name'] || `user_${idx + 2}`).trim();
            let email = row['Email'] || row['email'] ? (row['Email'] || row['email']).trim() : '';
            email = email.replace(/^"|"$/g, '');

            if (!email || !email.includes('@')) {
                console.log(`Skipping ${name}: Invalid email`);
                continue;
            }

            if (sentEmails[email]) {
                // console.log(`Skipping ${name}: Email already sent`);
                continue;
            }

            const course = row['Course'] || row['course'] || 'General';

            const htmlBody = `
<html> 
<body style="margin:0; padding:0; background:#090a0e; font-family:'Segoe UI', Roboto, Arial, sans-serif;"> 
  <div style="max-width:720px; margin:0 auto; background:#14161e; color: #fff; padding: 20px; border-radius: 10px;"> 
    <h2 style="color:#f8b851;">KALAM INSTITUTE OF TECHNOLOGY</h2>
    <p>Dear <b>${name}</b>,</p>
    <p>Your admission application for <b>${course}</b> has been received successfully.</p>
    <div style="background:#16191f; padding:15px; border-radius:8px; border:1px solid #232426; margin: 20px 0;">
      <p style="color:#ffcc82;">We have received your details and our team will contact you soon for the next steps in the admission process.</p>
    </div>
    <p style="color:#adadad; font-size:12px;">Thank you for choosing Kalam Institute.</p>
  </div>
</body> 
</html> 
`;
            try {
                await sendEmail(email, 'Admission Application Received - Kalam Institute', htmlBody);

                sentEmails[email] = true;
                fs.writeFileSync(sentFile, JSON.stringify(sentEmails, null, 2));
            } catch (err) {
                console.error(`Failed to send email to ${email}:`, err);
            }
        }
    } catch (error) {
        console.error('Error processing emails:', error);
    }
}

// Initial processing
processEmails();

// Repeat every 60 seconds if running as a service
if (process.argv.includes('--watch')) {
    console.log('Watching for new entries every 60 seconds...');
    setInterval(processEmails, 60 * 1000);
}
