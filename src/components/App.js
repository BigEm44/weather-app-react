import React, { Component } from "react";
import "../styles/App.css";
import Header from "./Header";
import Form from "./Form";
import Results from "./Results";
import anemometer from "../img/anemometer.jpg"
import thunderstorm from "../img/thunderstorm.jpg" 
import drizzle from "../img/drizzle.jpg"
import rain from "../img/rain.jpg"
import snow from "../img/snow.jpg"
import clearSky from "../img/clearSky.jpg"
import clouds from "../img/clouds.jpg"
import mist from "../img/mist.jpg"
import smoke from "../img/smoke.jpg"
import haze from "../img/haze.jpg"
import dust from "../img/dust.jpg"
import fog from "../img/fog.jpg"
import squall from "../img/squall.jpg"
import tornado from "../img/tornado.jpg"

  /*data weather[0].main - 
Thunderstorm
Drizzle
Rain
Snow
Clear
Clouds
Mist
Smoke
Haze
Dust
Fog
Sand
Ash
Squall
Tornado
*/

const APIkey = "d3334eb120bec7fa718c730d966bf414";
class App extends Component {


  state = {
    value: "",
    city: "",
    conditions: "",
    detailedConditions: "",
    sunrise: "",
    sunset: "",
    temperature: "",
    pressure: "",
    humidity: "",
    wind: "",
    clouds: "",
    error: false
  };

  handleInputForm = (e) => {
    console.log(e.target.value);

    this.setState({
      value: e.target.value
    });
  };

  componentDidUpdate(prevProps, prevState) {
    if (this.state.value.length === 0) return;
    if (prevState.value !== this.state.value) {
      const API = `http://api.openweathermap.org/data/2.5/weather?q=${
        this.state.value
      }&APPID=${APIkey}&units=metric`;

      fetch(API)
        .then((response) => {
          if (response.ok) {
            return response;
          }
          throw Error("City not found");
        })
        .then((response) => response.json())
        .then((data) => {
          const time = new Date().toLocaleString();
          this.setState((state) => ({
            error: false,
            date: time,
            conditions: data.weather[0].main,
            detailedConditions: data.weather[0].description,
            sunrise: data.sys.sunrise,
            sunset: data.sys.sunset,
            temperature: data.main.temp,
            pressure: data.main.pressure,
            humidity: data.main.humidity,
            wind: data.wind.speed,
            clouds: data.clouds.all,
            city: state.value
          }));
        })
        .catch(() => {
          this.setState((prevState) => ({
            error: true,
            city: prevState.value
          }));
        });
    }
  }

  render() {
    const{conditions} = this.state
    let bgc = {
      backgroundImage: `url(${anemometer})`
    }

    if(conditions === "Thunderstorm"){
      bgc.backgroundImage = `url(${thunderstorm})`
    }else if(conditions === "Drizzle"){
      bgc.backgroundImage = `url(${drizzle})`
    }else if(conditions === "Rain"){
      bgc.backgroundImage = `url(${rain})`
    }else if(conditions === "Snow"){
      bgc.backgroundImage = `url(${snow})`
    }else if(conditions === "Clear"){
      bgc.backgroundImage = `url(${clearSky})`
    }else if(conditions === "Clouds"){
      bgc.backgroundImage = `url(${clouds})`
    }else if(conditions === "Mist"){
      bgc.backgroundImage = `url(${mist})`
    }else if(conditions === "Smoke"){
      bgc.backgroundImage = `url(${smoke})`
    }else if(conditions === "Haze"){
      bgc.backgroundImage = `url(${haze})`
    }else if(conditions === "Dust"){
      bgc.backgroundImage = `url(${dust})`
    }else if(conditions === "Fog"){
      bgc.backgroundImage = `url(${fog})`
    }else if(conditions === "Squall"){
      bgc.backgroundImage = `url(${squall})`
    }else if(conditions === "Tornado"){
      bgc.backgroundImage = `url(${tornado})`
    }

    return (
   
      <div className="App" style={bgc}>
        <Header />
        <Form value={this.state.value} change={this.handleInputForm} />
        <Results state={this.state} />
      </div>
    );
  }
}

export default App;
