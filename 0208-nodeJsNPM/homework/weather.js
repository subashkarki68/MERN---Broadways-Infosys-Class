const axios = require("axios");

const apiKey = "a6c54d40719a7cf6458c5e7d401ffd9b"; // Replace with your API key
const city = "Kathmandu"; // Replace with the city you want to get the weather for
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

axios
  .get(apiUrl)
  .then((response) => {
    // Handle successful response
    const weatherData = response.data;
    console.log(
      `Current weather in ${city}:`,
      weatherData.weather[0].description
    );
  })
  .catch((error) => {
    // Handle error
    console.error("Error fetching weather data:", error.message);
  });
