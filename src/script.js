const searchBtn = document.getElementById("search-btn");
const input = document.getElementById("city");

function displayWeather(data) {
  // Implement logic to display current weather data
  const weatherTemp = document.getElementById("weather-temp");
  const weatherInfo = document.getElementById("weather-info");
  const date = document.getElementById("date");
  const location = document.getElementById("location");

  // Clear previous content.
  weatherTemp.innerHTML = "";
  weatherInfo.innerHTML = "";
  date.innerHTML = "";
  location.innerHTML = "";
  weatherInfo.innerHTML = "";

  if (data.cod === "404") {
    weatherInfo.innerHTML = `<p>${data.message}</p>`;
  } else {
    const cityName = data.name;
    const countryName = data.sys.country;
    const temperature = Math.round(data.main.temp - 273.15); // Convert from kelvin to celsius
    const description = data.weather[0].description;
    const iconCode = data.weather[0].icon;
    const iconUrl = `https://openweathermap.org/img/wn/${iconCode}@4x.png`;

    const now = new Date();
    const days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    const months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    const dayOfWeek = days[now.getDay()];
    const currentDate = now.getDate();
    const monthOfYear = months[now.getMonth()];

    const temperatureHtml = `
        <p>${temperature}&deg;C</p>
        <img src="${iconUrl}" alt="Weather icon" class="w-20">
        `;

    const weatherInfoHtml = `
        <p>${description}</p>
        `;

    const dateHtml = `
        <p>${dayOfWeek} ${currentDate}, ${monthOfYear}</p>
        `;

    const locationHtml = `
        <p>${cityName}, ${countryName}</p>
        `;

    weatherTemp.innerHTML = temperatureHtml;
    weatherInfo.innerHTML = weatherInfoHtml;
    date.innerHTML = dateHtml;
    location.innerHTML = locationHtml;
  }
}

function displayHourly(forecastData) {
  // Implement logic to display hourly forecast data
  const hourlyForecast = document.getElementById("hourly-forecast");

  hourlyForecast.innerHTML = "";
  const next24hours = forecastData.slice(0, 8);

  next24hours.forEach((item) => {
    const dateTime = new Date(item.dt * 1000); // Convert Unix Timestamp to Milliseconds.
    let hour = dateTime.getHours();
    const period = hour >= 12 ? "PM" : "AM"; // Determine AM/PM
    hour = hour % 12; // Convert to 12-hour format
    hour = hour ? hour : 12; // If hour is 0 (midnight), convert to 12

    const hourlyTemperature = Math.round(item.main.temp - 273.15); // Convert kelvin to celsius.
    const iconCode = item.weather[0].icon;
    const iconUrl = `https://openweathermap.org/img/wn/${iconCode}@4x.png`;

    const hourlyForecastHtml = `
      <div class="flex h-36 w-24 flex-shrink-0 flex-col items-center justify-center bg-systemGray6 rounded-2xl">
          <span>${hour}:00 ${period}</span>
          <img class="w-20" src="${iconUrl}" alt="Hourly weather icon">
          <span>${hourlyTemperature}&deg;C</span>
      </div>
  `;

    hourlyForecast.innerHTML += hourlyForecastHtml;
  });
}

function displayFiveDaysForecast(forecastData) {
  // Implement logic to display 5 days weather forecast
  const fiveDaysForecast = document.getElementById("five-days-forecast");
  fiveDaysForecast.innerHTML = ""; // Clear previous data.
  const dailyData = []; // Array to store one data point per day

  forecastData.forEach((item) => {
    // Check if the hour is 12:00 PM
    if (item.dt_txt.slice(11, 13) == 12) {
      dailyData.push(item);
    }
  });

  // Limit data for only five days.
  const fiveDayForecast = dailyData.slice(0, 5);

  fiveDayForecast.forEach((item) => {
    const dateTime = new Date(item.dt * 1000);
    const weekDay = dateTime.toLocaleDateString("en-US", { weekday: "short" });
    const iconCode = item.weather[0].icon;
    const iconUrl = `https://openweathermap.org/img/wn/${iconCode}@4x.png`;
    const weatherDescription = item.weather[0].description;
    const weatherTemp = Math.round(item.main.temp - 273.15); // Convert kelvin to celsius

    const dailyForecastHtml = `
      <div class="grid grid-cols-4 text-center gap-2">
        <span>${weekDay}</span>
        <img class="size-12" src="${iconUrl}" alt="Weather icon">
        <span>${weatherDescription}</span>
        <span>${weatherTemp}&deg;C</span>
      </div>
    `;

    // Append to the container
    fiveDaysForecast.innerHTML += dailyForecastHtml;
  });
}

function displayWeatherInfo(data) {
  // Implement logic to display current weather information.
  const wind = document.getElementById("wind");
  const humidity = document.getElementById("humidity");
  const airPressure = document.getElementById("pressure");
  const visibility = document.getElementById("visibility");
  const feelsLike = document.getElementById("feels-like");
  const todaysHighlight = document.getElementById("todays-highlights");

  // Clear previous data.
  wind.innerHTML = "";
  humidity.innerHTML = "";
  airPressure.innerHTML = "";
  visibility.innerHTML = "";
  feelsLike.innerHTML = "";

  const feelsLikeTemp = Math.round(data.main.feels_like - 273.15); // Convert from kelvin to celsius
  const currWindSpeed = Math.round(data.wind.speed * 3.6);
  const currHumidity = data.main.humidity;
  const currAirPressure = data.main.pressure;
  const currVisibility = Math.round(data.visibility / 1000);

  const currWindHtml = `
    <div class="flex flex-col bg-systemGray6 rounded-xl h-20 p-5">
      <span class="material-symbols-outlined">air</span>
      <div class="flex justify-between">
      <span>SW wind</span>
      <span>${currWindSpeed} km/h</span>
      </div>
    </div>
  `;

  const feelsLikeTempHtml = `
    <div class="flex flex-col bg-systemGray6 rounded-xl h-20 p-5">
      <span class="material-symbols-outlined">device_thermostat</span>
      <div class="flex justify-between">
      <span>Feels like</span>
      <span>${feelsLikeTemp}&deg;C</span>
      </div>
    </div>
  `;

  const currHumidityHtml = `
    <div class="flex flex-col bg-systemGray6 rounded-xl h-20 p-5">
      <span class="material-symbols-outlined">humidity_mid</span>
      <div class="flex justify-between">
      <span>Humidity</span>
      <span>${currHumidity} %</span>
      </div>
    </div>
  `;

  const currAirPressureHtml = `
    <div class="flex flex-col bg-systemGray6 rounded-xl h-20 p-5">
      <span class="material-symbols-outlined">airwave</span>
      <div class="flex justify-between">
      <span>Air pressure</span>
      <span>${currAirPressure} hPa</span>
      </div>
    </div>
  `;

  const currVisibilityHtml = `
    <div class="flex flex-col bg-systemGray6 rounded-xl h-20 p-5">
      <span class="material-symbols-outlined">visibility</span>
      <div class="flex justify-between">
      <span>Visibility</span>
      <span>${currVisibility} km</span>
      </div>
    </div>
  `;

  wind.innerHTML = currWindHtml;
  feelsLike.innerHTML = feelsLikeTempHtml;
  visibility.innerHTML = currVisibilityHtml;
  airPressure.innerHTML = currAirPressureHtml;
  humidity.innerHTML = currHumidityHtml;
}

function getWeather() {
  const city = document.getElementById("city").value;

  if (!city) {
    alert("Please enter your city.");
    return;
  }

  const apiKey = "50c72c73c56d68e2105dd2210c9b52df";
  const currentWeatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
  const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}`;

  const navigation = document.getElementById("navigation");
  const weatherContainer = document.getElementById("weather-container");
  navigation.classList.remove("h-screen");
  weatherContainer.classList.remove("hidden");

  fetch(currentWeatherUrl)
    .then((res) => res.json())
    .then((data) => {
      displayWeather(data);
      displayWeatherInfo(data);
    })
    .catch((error) => {
      console.error(`Error fetching current weather data: ${error.message}`);
      alert(`Error fetching current weather data. Please try again.`);
    });

  fetch(forecastUrl)
    .then((res) => res.json())
    .then((data) => {
      displayHourly(data.list);
      displayFiveDaysForecast(data.list);
    })
    .catch((error) => {
      console.error(`Error fetching forecast data: ${error.message}`);
      alert(`Error fetching forecast data. Please try again.`);
    });
}

searchBtn.addEventListener("click", () => {
  getWeather();
});
