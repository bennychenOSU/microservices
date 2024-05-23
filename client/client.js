
fetch('http://localhost:3000/weather-images/?svg=day.svg')
  .then(response => response.json())
  .then(data => {
    console.log(data); // This will log the JSON response containing the SVG content
    // You can now use the SVG content in the data object
  })
  .catch(error => console.error('Error fetching data:', error));