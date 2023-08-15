import type { RequestHandler } from "@sveltejs/kit";

import { google } from "googleapis";
const sheets = google.sheets('v4');
import { PUBLIC_SPREADSHEET_ID } from '$env/static/public';
import { SECRET_CREDENTIALS } from '$env/static/private';

const credentials = JSON.parse(
	Buffer.from(SECRET_CREDENTIALS, "base64").toString()
)

/**
 * Authenticates the Google Sheets API service account and returns the authentication token.
 * @returns {JSONClient | Compute} The authentication token provided by the Google Sheets API.
 */
const initAuth = async () => {
	const auth = new google.auth.GoogleAuth({
		projectId: "stuco-spreadsheet-test",
		credentials: {
			client_email: credentials.client_email,
			private_key: credentials.private_key,

		},
		scopes: ['https://www.googleapis.com/auth/spreadsheets.readonly'],
	})

	const authClient = await auth.getClient();
	google.options({
		auth: authClient as any,
	})
} 


const getSheet = async (spreadsheetId: string) => {
	return await sheets.spreadsheets.get({
		spreadsheetId,
	});
}

const getSpreadSheetValues = async (spreadsheetId: string, sheetName: string) => {
	return await sheets.spreadsheets.values.get({
		spreadsheetId,
		range: sheetName
	})
}

export const GET: RequestHandler = async ({ url }) => {
	await initAuth();

	const maxResults = url.searchParams.get('maxResults');

	const range = maxResults === null ? "Events!A:C" : `Events!A1:C${(+maxResults) + 1}`;

	const values = (await getSpreadSheetValues(PUBLIC_SPREADSHEET_ID, range)).data.values;

	return new Response(JSON.stringify(values));
};