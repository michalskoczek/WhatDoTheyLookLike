async function getCatData(url, apiKey) {
  const request = await fetch(`${url}/breeds`, {
    headers: {
      'x-api-key': apiKey
    }
  });
  const data = await request.json();
  console.log(data);

  return data;
}

export default getCatData;