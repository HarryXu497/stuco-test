const load = async () => {
  const spreadsheetDataRequest = await fetch("http://localhost:5173/api/events?maxResults=3");
  const spreadsheetData = await spreadsheetDataRequest.json();
  const data = spreadsheetData.slice(1).map((row) => ({
    name: row[0],
    description: row[1],
    date: row[2]
  }));
  console.log(data);
  return { events: data };
};
export {
  load
};
