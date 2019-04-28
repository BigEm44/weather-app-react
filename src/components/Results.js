import React from "react";

const Results = (props) => {
  const {
    date,
    conditions,
    detailedConditions,
     sunrise,
    sunset,
    temperature,
    pressure,
    humidity,
    wind,
    clouds,
    city
  } = props.state;

  const sunriseTime = new Date(sunrise * 1000).toLocaleTimeString();
  const sunsetTime = new Date(sunset * 1000).toLocaleTimeString();

  return (
    <>
      <div className="results">
        <h2> Current weather conditions for <span> {city} </span></h2>
        <h2>Date: <span>{date} </span> </h2>
      
        <ul>
          <li>
            Weather conditions:{" "}
            <span>
              {conditions} - {detailedConditions}
            </span>{" "}
          </li>
          <li>
            Sunrise: <span>{sunriseTime} </span>
          </li>
          <li>
            Sunset: <span>{sunsetTime}</span>{" "}
          </li>
          <li>
            Temperature: <span>{temperature} &#176;C</span>
          </li>
          <li>
            Pressure: <span>{pressure} hPa</span>
          </li>
          <li>
            Humidity: <span>{humidity} %</span>
          </li>
          <li>
            Wind speed: <span>{wind} m/s</span>
          </li>
          <li>
            Clouds: <span>{clouds} %</span>
          </li>
          <li />
        </ul>
      </div>
    </>
  );
};

export default Results;
