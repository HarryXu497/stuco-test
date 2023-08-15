import { google } from "googleapis";
import { P as PUBLIC_SPREADSHEET_ID } from "../../../../chunks/public.js";
const sheets = google.sheets("v4");
const initAuth = async () => {
  const auth = new google.auth.GoogleAuth({
    keyFile: "./credentials.json",
    scopes: ["https://www.googleapis.com/auth/spreadsheets.readonly"]
  });
  const authClient = await auth.getClient();
  google.options({
    auth: authClient
  });
};
const getSpreadSheetValues = async (spreadsheetId, sheetName) => {
  return await sheets.spreadsheets.values.get({
    spreadsheetId,
    range: sheetName
  });
};
const GET = async ({ url }) => {
  await initAuth();
  const maxResults = url.searchParams.get("maxResults");
  const range = maxResults === null ? "Events!A:C" : `Events!A1:C${+maxResults + 1}`;
  const values = (await getSpreadSheetValues(PUBLIC_SPREADSHEET_ID, range)).data.values;
  return new Response(JSON.stringify(values));
};
export {
  GET
};
