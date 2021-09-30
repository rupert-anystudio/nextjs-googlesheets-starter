import { google } from 'googleapis'

async function getSheets() {
  const scopes = ['https://www.googleapis.com/auth/spreadsheets.readonly']
  const jwt = new google.auth.JWT(
    process.env.GOOGLE_SHEETS_CLIENT_EMAIL,
    null,
    // we need to replace the escaped newline characters
    // https://stackoverflow.com/questions/50299329/node-js-firebase-service-account-private-key-wont-parse
    process.env.GOOGLE_SHEETS_PRIVATE_KEY.replace(/\\n/g, '\n'),
    scopes
  )
  return google.sheets({ version: 'v4', auth: jwt })
}

export async function getClients() {
  try {
    const sheets = await getSheets()
    const response = await sheets.spreadsheets.values.get({
      spreadsheetId: process.env.SPREADSHEET_ID,
      range: 'clients',
    })
    const rows = response.data.values
    if (rows.length) {
      return rows.map((row) => ({
        title: row[0],
      }))
    }
  } catch (err) {
    console.log(err)
  }
  return []
}