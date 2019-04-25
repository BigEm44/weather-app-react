import React from 'react';

const Results = (props) => {

    const {date,conditions,detailedConditions,latitude,longitude,sunrise,sunset,temperature,pressure,humidity,wind,clouds,city} = props.state
    return ( 
        <>
        <h2> Current weather conditions for {city} </h2>
        <h2>Date: {date} </h2>
        <h2>Longitude: {longitude} </h2>
        <h2>Latitude: {latitude} </h2>
        <ul>
        
            <li>Weather conditions: {conditions} </li>
            <li>Detailed weather conditions: {detailedConditions} </li>
            <li>Sunrise: {sunrise}  </li>
            <li>Sunset: {sunset}  </li>
            <li>Temperature: {temperature} &#176;C</li>
            <li>Pressure: {pressure} hPa</li>
            <li>Humidity: {humidity} %</li>
            <li>Wind speed: {wind} m/s</li>
            <li>Clouds: {clouds} %</li>
            <li></li>
        </ul>
        </>
     );
}
 
export default Results;