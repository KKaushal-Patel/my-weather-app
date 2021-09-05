import React, { useEffect } from "react";

const WeatherWidget = (props) => {
  const [weatherState, setWeatherState] = React.useState("");

  const {
    temp,
    humidity,
    pressure,
    weatherType,
    name,
    speed,
    country,
    visibility,
  } = props.tempInfo;

  useEffect(() => {
    if (weatherType) {
      switch (weatherType) {
        case "Clouds":
          setWeatherState("imgCloudy");
          break;
        case "Haze":
          setWeatherState("imgHaze");
          break;
        case "Sun":
          setWeatherState("imgSun");
          break;
        case "Clear":
          setWeatherState("imgClear");
          break;
        case "Mist":
          setWeatherState("imgMist");
          break;
        case "Smoke":
          setWeatherState("imgMist");
          break;
        case "Drizzle":
          setWeatherState("imgRain");
          break;
        case "Rain":
          setWeatherState("imgRain");
          break;
        case "Thunderstorm":
          setWeatherState("imgThunderstorm");
          break;

        default:
          setWeatherState("imgSun");
          break;
      }
    }
  }, [weatherType]);

  // converting sec in hour
  // let sec = sunset;
  // let date = new Date(sec * 1000); // into miliseconds
  // let timeStr = `${date.getHours()}:${date.getMinutes()}`;

  return (
    <>
      {/*  widget  */}
      <div className="hero_widget">
        <div className="icon_weather">
          <i className={weatherState}> </i>
        </div>
        <div className="widget_inner">
          <div className="temp">
            <h3 className="degree">{temp} &deg;C</h3>
          </div>
          <div className="location">
            <p className="weatherType">{weatherType}</p>
            <p className="loc">
              {name}, {country}
            </p>
          </div>
        </div>
        <div className="extraInfo">
          <div className="circle">
            <span> {visibility}m </span>
            <span>Visibility</span>
          </div>
          <div className="circle">
            <span> {humidity}&#37;</span>
            <span>Humidity</span>
          </div>
          <div className="circle">
            <span>{pressure} MM</span>
            <span>Pressure </span>
          </div>
          <div className="circle">
            <span>{speed} mps</span>
            <span>Speed </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default WeatherWidget;
