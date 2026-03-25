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

function doGet(e) {
  return ContentService.createTextOutput("Contact Form Script is Active. Send a POST request to submit data.")
    .setMimeType(ContentService.MimeType.TEXT);
}

function doPost(e) {
  var SPREADSHEET_ID = '1Fqt65NJIbUEvuDPkwP0NJMU13MxV_q5jukORFSuxfK0';
  var SHEET_NAME = 'Sheet1';

  try {
    // Open the spreadsheet
    var ss = SpreadsheetApp.openById(SPREADSHEET_ID);
    var sheet = ss.getSheetByName(SHEET_NAME);
    
    // Create sheet if it doesn't exist
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

    // Get the data from the request
    var data = {};
    
    // 1. Check for URL parameters (sent via application/x-www-form-urlencoded)
    if (e && e.parameter) {
      for (var key in e.parameter) {
        data[key] = e.parameter[key];
      }
    }
    
    // 2. Check for JSON content in postData (sent via application/json)
    if (e && e.postData && e.postData.contents) {
      try {
        var jsonData = JSON.parse(e.postData.contents);
        for (var key in jsonData) {
          data[key] = jsonData[key];
        }
      } catch (err) {
        // Not JSON or empty contents
      }
    }
    
    // Validate data - ensure we have at least a name
    var name = data.name || data.fullName || 'Unknown';
    var email = data.email || 'No Email';
    var phone = data.phone || 'No Phone';
    var subject = data.subject || 'No Subject';
    var message = data.message || 'No Message';

    // Append the row
    var newRow = [
      new Date(),
      name,
      email,
      phone,
      subject,
      message
    ];

    sheet.appendRow(newRow);

    // Return success response
    var response = {
      'result': 'success',
      'message': 'Data appended successfully',
      'row': newRow
    };

    return ContentService.createTextOutput(JSON.stringify(response))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (error) {
    // Log the error for debugging in Apps Script console
    console.error('Script Error:', error.toString());
    
    return ContentService.createTextOutput(JSON.stringify({
      'result': 'error',
      'message': error.toString()
    })).setMimeType(ContentService.MimeType.JSON);
  }
}

function doOptions(e) {
  return ContentService.createTextOutput("")
    .setMimeType(ContentService.MimeType.TEXT);
}
