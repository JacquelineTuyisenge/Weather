// Function to fetch weather data (simulated with hardcoded data)
async function getWeatherData(location) {
    // Simulate an API call with a delay using setTimeout
    return new Promise((resolve) => {
      setTimeout(() => {
        const hardcodedData = {
          main: { temp: 25 }, // Temperature in Celsius
          weather: [{ description: 'Sunny', icon: '01d' }],
        };
        resolve(hardcodedData);
      }, 1000); // Simulate a 1-second delay
    });
  }
  
  // Function to display weather information on the webpage
  function displayWeatherInfo(weather) {
    const weatherDataDiv = document.getElementById('weatherData');
    weatherDataDiv.innerHTML = `
      <div class="weather-info">
        <p>Temperature: ${weather.temperature} &#8451;</p>
        <p>Description: ${weather.description}</p>
        <img src="https://example.com/weather-icons/${weather.icon}.png" alt="${weather.description}">
      </div>
    `;
  }
  
  // Function to process the JSON data and extract the required information
function processWeatherData(data) {
    if (!data || !data.main || !data.weather) {
      console.error('Invalid weather data received.');
      return null;
    }
  
    return {
      temperature: data.main.temp,
      description: data.weather[0].description,
      icon: data.weather[0].icon,
    };
  }
  
  // Function to handle form submission
  async function handleFormSubmit(event) {
    event.preventDefault();
    const location = document.getElementById('location').value;
    const weatherData = await getWeatherData(location);
  
    if (weatherData) {
      const weatherInfo = processWeatherData(weatherData);
      if (weatherInfo) {
        displayWeatherInfo(weatherInfo);
      }
    } else {
      // Handle the case when the weather data is not available
      const weatherDataDiv = document.getElementById('weatherData');
      weatherDataDiv.innerHTML = '<p>Weather data not available.</p>';
    }
  }
  
  // Add event listener to the form
  const weatherForm = document.getElementById('weatherForm');
  weatherForm.addEventListener('submit', handleFormSubmit);
  