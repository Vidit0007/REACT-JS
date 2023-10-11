// src/Weather.js
import React, { useState } from "react";
import './wheather.css';

const Weather = () => {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState(null);

  const apiKey = "e57af8a489280dc21d2e8fd004b0df2f";

  const fetchWeatherData = () => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`
    )
      .then((response) => response.json())
      .then((data) => setWeatherData(data))
      .catch((error) => {
        console.error("Error fetching weather data: ", error);
      });
  };

  return (
    <div className="weather-container">
      <div className="weather-card">
        <h2 className="heading">Weather App</h2>
        <input className="input"
          type="text"
          placeholder="Enter city name"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button className="button" onClick={fetchWeatherData}>Get Weather</button>

        {weatherData && (
          
          <div className="div">
            <h3 className="heading2">
              Weather in {weatherData.name}, {weatherData.sys.country}
            </h3>
            <p className="para1">Temperature: {weatherData.main.temp}°C</p>
            <p className="para2">Weather: {weatherData.weather[0].description}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Weather;
