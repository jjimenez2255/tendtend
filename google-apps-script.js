// Google Apps Script - Deploy as Web App
// Paste this into Google Apps Script (script.google.com)

function doPost(e) {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  var data = JSON.parse(e.postData.contents);
  
  sheet.appendRow([
    new Date(),
    data.email,
    data.source || 'unknown',
    data.type || 'signup'
  ]);
  
  return ContentService
    .createTextOutput(JSON.stringify({status: 'success'}))
    .setMimeType(ContentService.MimeType.JSON);
}

function doGet(e) {
  return ContentService
    .createTextOutput('Tend Email Capture API')
    .setMimeType(ContentService.MimeType.TEXT);
}
