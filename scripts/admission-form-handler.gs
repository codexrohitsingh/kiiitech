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

function doPost(e) {
  var SPREADSHEET_ID = '1UaMTyzzkD5Y5Rmu9ursmmIikgJEOsn7cynA7O1YsR_s';
  var SHEET_NAME = 'Sheet1';

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

    var data;
    if (e.postData && e.postData.contents) {
      // Try parsing as JSON
      try {
        data = JSON.parse(e.postData.contents);
      } catch (err) {
        // If not JSON, it might be form data or plain text
        data = e.parameter;
      }
    } else {
      // Fallback to parameters
      data = e.parameter;
    }
    
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

    return ContentService.createTextOutput(JSON.stringify({ 
      'result': 'success', 
      'message': 'Data added successfully' 
    })).setMimeType(ContentService.MimeType.JSON);

  } catch (error) {
    console.error('Error in doPost:', error.toString());
    return ContentService.createTextOutput(JSON.stringify({ 
      'result': 'error', 
      'message': error.toString() 
    })).setMimeType(ContentService.MimeType.JSON);
  }
}

/**
 * Handle CORS preflight requests.
 */
function doOptions(e) {
  return ContentService.createTextOutput("")
    .setMimeType(ContentService.MimeType.TEXT);
}
