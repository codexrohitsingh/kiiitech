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
      fullName: (data.fullName || data.name || 'Anonymous').toString().trim(),
      email: (data.email || '').toString().trim(),
      phone: (data.phone || '').toString().trim(),
      dob: (data.dob || '').toString().trim(),
      gender: (data.gender || '').toString().trim(),
      course: (data.course || '').toString().toUpperCase().trim(),
      qualification: (data.qualification || '').toString().trim(),
      passingYear: (data.passingYear || '').toString().trim(),
      marks: (data.marks || '').toString().trim(),
      address: (data.address || '').toString().trim()
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
    var emailStatus = "Email skipped (no email provided)";
    if (rowData.email && rowData.email.indexOf("@") !== -1) {
      try {
        sendConfirmationEmail(rowData);
        emailStatus = "Email sent successfully";
      } catch (err) {
        emailStatus = "Failed to send email: " + err.toString();
        console.error(emailStatus);
      }
    }

    var result = JSON.stringify({ 
      'result': 'success', 
      'message': 'Data added successfully',
      'email_status': emailStatus 
    });
    
    // Handle JSONP callback
    if (e.parameter.callback) {
      return ContentService.createTextOutput(e.parameter.callback + '(' + result + ')')
        .setMimeType(ContentService.MimeType.JAVASCRIPT);
    }

    return ContentService.createTextOutput(result).setMimeType(ContentService.MimeType.JSON);

  } catch (error) {
    console.error('Critical Error in script:', error.toString());
    var errorResult = JSON.stringify({ 'result': 'error', 'message': 'Spreadsheet error: ' + error.toString() });
    
    if (e.parameter && e.parameter.callback) {
      return ContentService.createTextOutput(e.parameter.callback + '(' + errorResult + ')')
        .setMimeType(ContentService.MimeType.JAVASCRIPT);
    }
    
    return ContentService.createTextOutput(errorResult).setMimeType(ContentService.MimeType.JSON);
  }
}

/**
 * Sends a confirmation email using the provided template.
 */
function sendConfirmationEmail(data) {
  var alias = "office@kiitech.org";
  var subject = "Admission Confirmation - KIITech";
  
  var htmlBody = getEmailHtml(data.fullName, data.email, data.course, data.phone);

  // Use MailApp as primary for reliability, GmailApp as fallback for alias
  try {
    // If you want to use the alias, you MUST have it configured in your Gmail settings.
    // If not, use MailApp which sends from the script's primary account.
    GmailApp.sendEmail(data.email, subject, "", {
      from: alias,
      htmlBody: htmlBody
    });
  } catch (aliasError) {
    // Fallback: This will send from your personal email (the one that deployed the script)
    MailApp.sendEmail({
      to: data.email,
      subject: subject,
      htmlBody: htmlBody
    });
  }
}

/**
 * Manual processing of missed rows.
 */
function sendEmailForNewEntry() {
   var ss = SpreadsheetApp.openById(SPREADSHEET_ID);
   var sheet = ss.getSheetByName(SHEET_NAME);
   if (!sheet) return;

   var data = sheet.getDataRange().getValues();
   var scriptProperties = PropertiesService.getScriptProperties();
   var lastRowProcessed = parseInt(scriptProperties.getProperty("LAST_ROW_PROCESSED") || 1); 
 
   for (var i = lastRowProcessed; i < data.length; i++) {
     var row = data[i];
     var fullName = row[1];
     var email = row[2];
     var phone = row[3];
     var course = row[6];
 
     if (email && email.toString().includes("@")) {
       try {
         sendConfirmationEmail({
           fullName: fullName,
           email: email,
           course: course,
           phone: phone
         });
       } catch (err) {
         console.error("Batch processing failed for row " + (i+1) + ": " + err.toString());
       }
     }
     scriptProperties.setProperty("LAST_ROW_PROCESSED", (i + 1).toString());
   }
}

/**
 * Returns the HTML template for the admission confirmation email.
 */
function getEmailHtml(fullName, email, course, phone) {
  fullName = fullName || "Applicant";
  course = (course || "Your Program").toUpperCase();
  phone = phone || "the provided contact number";
  
  return ` 
  <html> 
  <head> 
    <meta charset="utf-8" /> 
    <meta name="viewport" content="width=device-width" /> 
    <title>Admission Confirmation - KIITech</title> 
  </head> 
  <body style="margin:0; padding:0; background:#0d0f14; font-family:'Segoe UI', Roboto, Arial, sans-serif; color:#fff;"> 
    <div style="display:none; max-height:0; overflow:hidden; opacity:0; mso-hide:all;"> 
      Your admission application for KIITech has been received. 
    </div> 
    <div style="max-width:720px; margin:30px auto; border-radius:12px; overflow:hidden; box-shadow:0 4px 18px rgba(0,0,0,0.5);"> 
      <div style="background:#1f2737; padding:30px 20px; text-align:center;"> 
        <div style="color:#ffc15e; font-weight:700; font-size:20px; letter-spacing:0.05em;"> 
          KIITech - Dr. A.P.J. Abdul Kalam Institute of Innovation and Technology 
        </div> 
        <div style="color:#cfd1d5; font-size:12px; margin-top:4px;"> 
          Admissions 2026-27 · Majhgaon 
        </div> 
      </div> 
      <div style="background:#242b3a; padding:28px 20px; text-align:center;"> 
        <div style="font-size:24px; font-weight:700; color:#ffe08c;"> 
          THANK YOU, <span style="color:#fff3b8;">${fullName}!</span> 
        </div> 
        <div style="font-size:15px; font-weight:500; color:#ffdd95; margin-top:6px;"> 
          Your application for <span style="color:#fff3b8; font-weight:700;">${course}</span> has been received successfully. 
        </div> 
      </div> 
      <div style="background:#1b1f29; padding:32px 24px 24px 24px;"> 
        <div style="font-size:16px; margin-bottom:10px;">Dear <b>${fullName}</b>,</div> 
        <div style="font-size:14.2px; color:#dcdcdc; margin-bottom:20px;"> 
          Thanks for applying to <span style="color:#ffdd95; font-weight:600;">KIITech</span>. Here are your application details: 
        </div> 
        <div style="background:#242830; padding:20px; border-radius:10px; border:1px solid #2e323d; margin-bottom:25px;"> 
          <div style="font-size:15px; font-weight:700; color:#ffd07f; margin-bottom:12px;">APPLICATION DETAILS</div> 
          <div style="font-size:14px; margin-bottom:8px;"><b>Name:</b> <span style="color:#e6e6e6;">${fullName}</span></div> 
          <div style="font-size:14px; margin-bottom:8px;"><b>Course:</b> <span style="color:#e6e6e6;">${course}</span></div> 
          <div style="font-size:14px; margin-bottom:8px;"><b>Email:</b> <span style="color:#a6cdfd;">${email}</span></div> 
          <div style="font-size:12px; color:#999; margin-top:10px;"> 
            Our admissions team will contact you shortly on ${phone} for further steps. 
          </div> 
        </div> 
        <div style="text-align:center; margin-bottom:25px;"> 
          <a href="mailto:office@kiitech.org" style="display:inline-block; background:#ffc15e; color:#1b1f29; font-weight:700; border-radius:8px; padding:12px 25px; font-size:15px; text-decoration:none; border:1px solid #ffd97a;"> 
            Contact Admissions 
          </a> 
        </div> 
        <div style="font-size:13px; color:#aaa; margin-bottom:20px;"> 
          Please keep your documents (10th/12th marksheet, ID proof) ready for the next phase of admission. 
        </div> 
        <div style="border-top:1px solid #2e323d; padding-top:20px; font-size:12.5px; color:#dcdcdc;"> 
          <div style="font-weight:700; color:#ffd07f;"> 
            KIITech - Dr. A.P.J. Abdul Kalam Institute of Innovation and Technology 
          </div> 
          <div>Majhgaon - 833214, West Singhbhum, Jharkhand, India</div> 
          <div style="margin-top:12px; color:#ffe6a0;"> 
            Admissions Team<br/> 
            Email: office@kiitech.org · Phone: +91 9337736501 
          </div> 
        </div> 
      </div> 
    </div> 
  </body> 
  </html> 
  `;
}
