import React, { useState, useEffect } from "react";
import WeatherWidget from "./WeatherWidget";

const Weather = () => {
  const [searchValue, setSearchValue] = useState("delhi");
  const [tempInfo, setTempInfo] = useState({});

  // They consist of two main keywords- async and await. async is used to make a function asynchronous.
  // It unlocks the use of await inside these functions.Using await in any other case is a syntax error.

  const getWeatherInfo = async () => {
    try {
      let url = `https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&units=metric&appid=84744a3e592b3c3c288ff289e1cc16eb`;

      const res = await fetch(url);
      // console.log(res);

      const data = await res.json();
      // console.log(data);

      // now fetching the data using object destructuring:

      const { temp, humidity, pressure } = data.main;

      // console.log(temp);
      // console.log(humidity);
      // console.log(pressure);

      // fetch weather type and change the name also:
      const { main: weatherType } = data.weather[0];
      // console.log(weatherType);

      const { name, visibility } = data;
      // console.log(name);
      const { speed } = data.wind;
      console.log(speed);

      const { country } = data.sys;
      //       console.log(country, sunset);

      //we make one obj in order to get the data:

      const allWeatherInfo = {
        temp,
        humidity,
        pressure,
        weatherType,
        name,
        speed,
        country,
        visibility,
      };

      setTempInfo(allWeatherInfo);
    } catch (error) {
      console.log(error);
    }
  };

  // we want to show data by default for the first time without users search
  // we can do that by using the useEffect Hook
  useEffect(() => {
    getWeatherInfo();
    document.title = `${searchValue}`;
  });

  return (
    <>
      <div className="Main_hero">
        <div className="hero-search">
          <input
            type="search"
            className="search"
            placeholder="City Name..."
            id="search"
            value={searchValue}
            // we are getting the data value everytime user search
            onChange={(e) => setSearchValue(e.target.value)}
          />
          <button className="searchBtn" type="button" onClick={getWeatherInfo}>
            Search
          </button>
        </div>

        {/* passing data through the props */}
        <WeatherWidget tempInfo={tempInfo} />
      </div>
    </>
  );
};

export default Weather;
