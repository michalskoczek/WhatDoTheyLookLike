async function getCatData(url, apiKey) {
  const request = await fetch(url, {
    headers: {
      'x-api-key': apiKey
    }
  });
  const data = await request.json();
  return data;
}

export default getCatData;