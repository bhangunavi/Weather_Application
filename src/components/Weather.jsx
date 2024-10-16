import React, { useEffect, useRef, useState } from "react";
import clear_icons from "../assets/clear.png";
import cloud_icons from "../assets/cloud.png";
import drizzle_icons from "../assets/drizzle.png";
import humidity_icons from "../assets/humidity.png";
import night_icons from "../assets/night.png";
import rain_icons from "../assets/rain.png";
import search_icons from "../assets/search.png";
import snow_icons from "../assets/snow.png";
import wind_icons from "../assets/wind.png";
import "./Weather.css";

const weather = () => {
  const inputRef = useRef();
  const [weatherData, setWeatherData] = useState(false);
  const allIcons = {
    "01d": clear_icons,
    "01n": night_icons,
    "02d": cloud_icons,
    "02n": night_icons,
    "03d": cloud_icons,
    "03n": night_icons,
    "04d": drizzle_icons,
    "04n": night_icons,
    "09d": rain_icons,
    "09n": rain_icons,
    "10d": rain_icons,
    "10n": rain_icons,
    "13d": snow_icons,
    "13n": snow_icons,
  };

  const search = async (city) => {
    if (city === "") {
      alert("Enter City Name");
      return;
    }
    try {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${
        import.meta.env.VITE_APP_ID
      }`;

      const response = await fetch(url);
      const data = await response.json();

      if (!response.ok) {
        alert(data.message);
        return;
      }

      console.log(data);
      const icon = allIcons[data.weather[0].icon] || clear_icons;
      setWeatherData({
        humidity: data.main.humidity,
        temperature: Math.floor(data.main.temp),
        windSpeed: data.wind.speed,
        location: data.name,
        icons: icon,
      });
    } catch (error) {
      setWeatherData(false);
      console.error("Error in fetching weather data");
    }
  };

  useEffect(() => {
    search("Punjab");
  }, []);

  return (
    <div className="weather">
      <div className="search-bar">
        <input ref={inputRef} type="text" placeholder="Search" />
        <img
          src={search_icons}
          id="one"
          alt=""
          onClick={() => search(inputRef.current.value)}
        />
      </div>
      {weatherData ? (
        <>
          <img src={weatherData.icons} alt="" className="weather-icon" />
          <p className="temp">{weatherData.temperature}°c</p>
          <p className="location">{weatherData.location}</p>
          <div className="weather-data">
            <div className="col">
              <img src={humidity_icons} alt="" />
              <div>
                <p>{weatherData.humidity} %</p>
                <span>Humidity</span>
              </div>
            </div>
            <div className="col">
              <img src={wind_icons} alt="" />
              <div>
                <p>{weatherData.windSpeed} Kmph</p>
                <span>Wind Speed</span>
              </div>
            </div>
          </div>
        </>
      ) : (
        <></>
      )}
    </div>
  );
};

export default weather;
