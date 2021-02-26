fetch('https://api.quotable.io/random')
  .then((res) => res.json())
  .then((data) => console.log(data.content));

//GET Quote

async function getQuote() {
  const apiUrl = 'https://api.quotable.io/random';
  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    console.log(data);
  } catch (err) {
    console.log('whoops !!! no quotes');
  }
}
