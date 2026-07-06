/**
 * Contract Opportunities - Google Sheets form handler
 *
 * SETUP (one-time):
 * 1. Create a Google Sheet with columns: Date | Name | Sector | Email | Phone
 *    (Or import contract-opportunities-registrations.csv)
 * 2. Extensions -> Apps Script -> paste this file -> Save
 * 3. Replace SHEET_ID below with your spreadsheet ID (from the sheet URL)
 * 4. Deploy -> New deployment -> Web app
 *    - Execute as: Me
 *    - Who has access: Anyone
 * 5. Copy the web app URL into contract-opportunities.html -> SHEETS_ENDPOINT
 */

var SHEET_ID = 'PASTE_YOUR_SPREADSHEET_ID_HERE';
var SHEET_NAME = 'Registrations';

function doPost(e) {
  try {
    var data = JSON.parse(e.postData.contents);
    var sheet = SpreadsheetApp.openById(SHEET_ID).getSheetByName(SHEET_NAME);

    if (!sheet) {
      var ss = SpreadsheetApp.openById(SHEET_ID);
      sheet = ss.insertSheet(SHEET_NAME);
      sheet.appendRow(['Date', 'Name', 'Sector', 'Email', 'Phone']);
    }

    if (sheet.getLastRow() === 0) {
      sheet.appendRow(['Date', 'Name', 'Sector', 'Email', 'Phone']);
    }

    sheet.appendRow([
      new Date(),
      data.name || '',
      data.sector || '',
      data.email || '',
      data.phone || ''
    ]);

    return ContentService
      .createTextOutput(JSON.stringify({ success: true }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    return ContentService
      .createTextOutput(JSON.stringify({ success: false, error: String(err) }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet() {
  return ContentService
    .createTextOutput('Contract Opportunities form endpoint is live.')
    .setMimeType(ContentService.MimeType.TEXT);
}
