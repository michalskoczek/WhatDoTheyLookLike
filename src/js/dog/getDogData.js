async function getDogData(url) {
  try {
    const request = await fetch(url);
    const data = await request.json();
    const urls = await data.message;
    return urls;
  } catch (error) {
    console.log(error);
  }
}

export default getDogData;