import { PUBLIC_BASE_URL } from '$env/static/public';
import type { PageServerLoad } from "./$types";
import { base } from '$app/paths';


interface SchoolEvent {
	name: string;
	description: string;
	date: string;
}

export const load: PageServerLoad = async () => {
	console.log(`${base}/api/events?maxResults=3`)


	let spreadsheetDataRequest: Response;

	try {
		spreadsheetDataRequest = await fetch(`https://stuco-test.vercel.app//api/events?maxResults=3`);
	
		const spreadsheetData = <string[][]> await spreadsheetDataRequest.json();

		const data = spreadsheetData.slice(1).map(row => ({
			name: row[0],
			description: row[1],
			date: row[2],
		} as SchoolEvent));

		return { events: data };
	} catch (err) {
		console.error(err);
		return {
			events: []
		}
	}
};