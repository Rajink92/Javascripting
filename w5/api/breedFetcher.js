const require = ('request');

module.exports = (breed, callback) => {
  const options = {
    url: `https://api.thecatapi.com/v1/breeds/search?q=sib`,
    headers: {
      'x-api-key': '7e2cb31f-5f9d-4b4b-b872-dd2b2b7a2b9a'
    }
  }