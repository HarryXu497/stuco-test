import { env } from '$env/dynamic/public';
import type { PageServerLoad } from "./$types";


interface SchoolEvent {
	name: string;
	description: string;
	date: string;
}

export const load: PageServerLoad = async () => {
	// TODO: make base url env variable
	const spreadsheetDataRequest = await fetch(`https://${env.PUBLIC_BASE_URL}/api/events?maxResults=3`);

	const spreadsheetData = <string[][]> await spreadsheetDataRequest.json();

	const data = spreadsheetData.slice(1).map(row => ({
		name: row[0],
		description: row[1],
		date: row[2],
	} as SchoolEvent));

	return { events: data };
};