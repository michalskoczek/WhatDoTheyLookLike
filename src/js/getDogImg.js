async function getRandomImages(url) {
  try {
    const request = await fetch(url);
    const data = await request.json();
    const urls = data.message;
    return urls;
  } catch (error) {
    console.log(error);
  }
}

export default getRandomImages;
