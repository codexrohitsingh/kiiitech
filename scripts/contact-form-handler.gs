/**
 * Google Apps Script to handle Contact Form submissions.
 * 
 * INSTRUCTIONS:
 * 1. Open your Google Sheet: https://docs.google.com/spreadsheets/d/1Fqt65NJIbUEvuDPkwP0NJMU13MxV_q5jukORFSuxfK0/edit
 * 2. Go to Extensions -> Apps Script.
 * 3. Delete any code in the editor and paste this code.
 * 4. Click 'Deploy' -> 'New Deployment'.
 * 5. Select type: 'Web App'.
 * 6. Set 'Execute as': 'Me'.
 * 7. Set 'Who has access': 'Anyone'.
 * 8. Copy the Web App URL and paste it into SCRIPT_URL in app/contact/page.tsx.
 */

var SPREADSHEET_ID = '1Fqt65NJIbUEvuDPkwP0NJMU13MxV_q5jukORFSuxfK0';
var SHEET_NAME = 'Sheet1';

function doGet(e) {
  return handleRequest(e);
}

function doPost(e) {
  return handleRequest(e);
}

function handleRequest(e) {
  try {
    var ss = SpreadsheetApp.openById(SPREADSHEET_ID);
    var sheet = ss.getSheetByName(SHEET_NAME);
    
    if (!sheet) {
      sheet = ss.insertSheet(SHEET_NAME);
      sheet.appendRow([
        'Timestamp', 
        'Name', 
        'Email', 
        'Phone', 
        'Subject', 
        'Message'
      ]);
      sheet.getRange(1, 1, 1, 6).setFontWeight('bold').setBackground('#f3f3f3');
    }

    var data = e.parameter;
    
    var name = data.name || data.fullName || 'Unknown';
    var email = data.email || 'No Email';
    var phone = data.phone || 'No Phone';
    var subject = data.subject || 'No Subject';
    var message = data.message || 'No Message';

    var newRow = [
      new Date(),
      name,
      email,
      phone,
      subject,
      message
    ];

    sheet.appendRow(newRow);

    // --- EMAIL LOGIC ---
    if (email && email !== 'No Email') {
      sendContactConfirmationEmail({
        name: name,
        email: email,
        subject: subject,
        message: message
      });
    }

    var result = JSON.stringify({ 'result': 'success', 'message': 'Data added successfully' });
    
    // Handle JSONP callback
    if (e.parameter.callback) {
      return ContentService.createTextOutput(e.parameter.callback + '(' + result + ')')
        .setMimeType(ContentService.MimeType.JAVASCRIPT);
    }

    return ContentService.createTextOutput(result).setMimeType(ContentService.MimeType.JSON);

  } catch (error) {
    console.error('Error in script:', error.toString());
    var errorResult = JSON.stringify({ 'result': 'error', 'message': error.toString() });
    
    if (e.parameter && e.parameter.callback) {
      return ContentService.createTextOutput(e.parameter.callback + '(' + errorResult + ')')
        .setMimeType(ContentService.MimeType.JAVASCRIPT);
    }
    
    return ContentService.createTextOutput(errorResult).setMimeType(ContentService.MimeType.JSON);
  }
}

function sendContactConfirmationEmail(data) {
  var subject = "Message Received - Kalam Institute";
  
  var htmlBody = `
    <html>
      <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
        <div style="max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #ddd; border-radius: 10px;">
          <h2 style="color: #0b1633; text-align: center;">Kalam Institute of Technology</h2>
          <p>Dear <strong>${data.name}</strong>,</p>
          <p>Thank you for reaching out to us. We have received your message regarding "<strong>${data.subject}</strong>".</p>
          
          <div style="background: #f9f9f9; padding: 15px; border-radius: 5px; margin: 20px 0;">
            <h3 style="margin-top: 0;">Your Message:</h3>
            <p>${data.message}</p>
          </div>
          
          <p>Our team will review your inquiry and get back to you as soon as possible.</p>
          
          <p>Best regards,<br>
          <strong>Support Team</strong><br>
          Kalam Institute of Technology<br>
          Jamshedpur, Jharkhand</p>
          
          <hr style="border: 0; border-top: 1px solid #eee; margin: 20px 0;">
          <p style="font-size: 12px; color: #777; text-align: center;">
            This is an automated email. Please do not reply directly to this message.
          </p>
        </div>
      </body>
    </html>
  `;

  try {
    MailApp.sendEmail({
      to: data.email,
      subject: subject,
      htmlBody: htmlBody
    });
  } catch (err) {
    console.error("Failed to send email: " + err.toString());
  }
}
