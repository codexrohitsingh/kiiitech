/**
 * Google Apps Script to handle Admission Form submissions.
 * 
 * INSTRUCTIONS:
 * 1. Open your Google Sheet: https://docs.google.com/spreadsheets/d/1UaMTyzzkD5Y5Rmu9ursmmIikgJEOsn7cynA7O1YsR_s/edit
 * 2. Go to Extensions -> Apps Script.
 * 3. Delete any code in the editor and paste this code.
 * 4. Click 'Deploy' -> 'New Deployment'.
 * 5. Select type: 'Web App'.
 * 6. Set 'Execute as': 'Me'.
 * 7. Set 'Who has access': 'Anyone'.
 * 8. Copy the Web App URL and paste it into SCRIPT_URL in app/admissions/apply/page.tsx.
 */

var SPREADSHEET_ID = '1UaMTyzzkD5Y5Rmu9ursmmIikgJEOsn7cynA7O1YsR_s';
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
        'Full Name', 
        'Email', 
        'Phone', 
        'DOB', 
        'Gender', 
        'Course', 
        'Qualification', 
        'Passing Year', 
        'Marks (%)', 
        'Address'
      ]);
      sheet.getRange(1, 1, 1, 11).setFontWeight('bold').setBackground('#f3f3f3');
    }

    var data = e.parameter;
    
    // Ensure all fields exist, even if empty
    var rowData = {
      fullName: data.fullName || '',
      email: data.email || '',
      phone: data.phone || '',
      dob: data.dob || '',
      gender: data.gender || '',
      course: (data.course || '').toUpperCase(),
      qualification: data.qualification || '',
      passingYear: data.passingYear || '',
      marks: data.marks || '',
      address: data.address || ''
    };

    var newRow = [
      new Date(),
      rowData.fullName,
      rowData.email,
      rowData.phone,
      rowData.dob,
      rowData.gender,
      rowData.course,
      rowData.qualification,
      rowData.passingYear,
      rowData.marks,
      rowData.address
    ];

    sheet.appendRow(newRow);

    // --- EMAIL LOGIC ---
    if (rowData.email) {
      sendConfirmationEmail(rowData);
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

function sendConfirmationEmail(data) {
  var subject = "Admission Application Received - Kalam Institute";
  
  var htmlBody = `
    <html>
      <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
        <div style="max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #ddd; border-radius: 10px;">
          <h2 style="color: #d32f2f; text-align: center;">Kalam Institute of Technology</h2>
          <p>Dear <strong>${data.fullName}</strong>,</p>
          <p>Thank you for applying to Kalam Institute. We have received your application for the <strong>${data.course}</strong> program.</p>
          
          <div style="background: #f9f9f9; padding: 15px; border-radius: 5px; margin: 20px 0;">
            <h3 style="margin-top: 0;">Application Details:</h3>
            <p><strong>Name:</strong> ${data.fullName}</p>
            <p><strong>Course:</strong> ${data.course}</p>
            <p><strong>Email:</strong> ${data.email}</p>
            <p><strong>Phone:</strong> ${data.phone}</p>
          </div>
          
          <p>Our admissions team will review your application and contact you shortly for the next steps.</p>
          
          <p>Best regards,<br>
          <strong>Admissions Team</strong><br>
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
