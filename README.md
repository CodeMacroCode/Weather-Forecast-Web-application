# Weatherio

Weatherio is a simple web-based weather application that allows users to search for weather information by city. The application provides current weather conditions, 5-day weather forecasts, and a list of recent searches stored locally.

## Github Repository

[https://github.com/CodeMacroCode/Weather-Forecast-Web-application.git](https://github.com/CodeMacroCode/Weather-Forecast-Web-application.git)

## Features

- Search for weather by city name.
- Display current weather conditions including temperature, description, and location.
- 5-day weather forecast with daily breakdowns.
- Recent searches stored locally using `localStorage`.
- Responsive design using Tailwind CSS.

## Technologies Used

- HTML
- CSS (Tailwind CSS)
- JavaScript
- OpenWeatherMap API

## Installation and Setup

1. Clone the repository: `git clone https://github.com/your-username/weatherio.git`
2. Open the `index.html` file in your web browser.

## API Key

You will need to obtain an API key from OpenWeatherMap to use the application.

- Sign up for a free account at [https://openweathermap.org/](https://openweathermap.org/)
- Get your API key from your account dashboard.
- Replace the placeholder API key in the `script.js` file with your actual API key.

## Acknowledgements

- OpenWeatherMap for providing the weather data API.
- Tailwind CSS for the responsive design framework.

## Setup Instructions

### 1. Clone the Repository

First, clone the repository to your local machine:

````bash
git clone https://github.com/CodeMacroCode/Weather-Forecast-Web-application.git

### 2. Obtain an API Key

You'll need an API key from OpenWeatherMap to access weather data. Follow these steps:

1. **Sign up for a free account:** [https://openweathermap.org/](https://openweathermap.org/)
2. **Get your API key:** Navigate to your account dashboard and find your API key.

### 3. Replace the Placeholder API Key

Open the `script.js` file and replace the placeholder API key with your actual API key:

```javascript
const apiKey = 'YOUR_API_KEY'; // Replace with your actual API key
````

### 4. Run the Application

Open the `index.html` file in your web browser. You should now be able to search for weather information by city.

## Usage

1. **Enter a city name:** Type the name of the city you want to check the weather for in the search bar.
2. **View current weather:** The application will display the current weather conditions for the city, including temperature, description, and location.
3. **Explore the 5-day forecast:** Scroll down to view the 5-day weather forecast with daily breakdowns.
4. **Check recent searches:** The application stores your recent searches locally using `localStorage`. You can access them by clicking on the "Recent Searches" tab.

## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvements, please feel free to open an issue or submit a pull request.

## License

This project is licensed under the MIT License. See the `LICENSE` file for details.

## Acknowledgements

- **OpenWeatherMap:** For providing the weather data API.
- **Tailwind CSS:** For the responsive design framework.
- **Icons8:** For the weather icons used in the application.

Enjoy using Weatherio!
