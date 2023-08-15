import { a as PUBLIC_BASE_URL } from "../../chunks/public.js";
const load = async () => {
  console.log(`${PUBLIC_BASE_URL}/api/events?maxResults=3`);
  const spreadsheetDataRequest = await fetch(`${PUBLIC_BASE_URL}/api/events?maxResults=3`);
  const spreadsheetData = await spreadsheetDataRequest.json();
  const data = spreadsheetData.slice(1).map((row) => ({
    name: row[0],
    description: row[1],
    date: row[2]
  }));
  return { events: data };
};
export {
  load
};
