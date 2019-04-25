import React, { Component } from "react";
import "../styles/App.css";
import Header from "./Header";
import Form from "./Form";
import Results from "./Results";

const APIkey = 'd3334eb120bec7fa718c730d966bf414' 
class App extends Component {

state={
  value: "",
  city: "",
  conditions:"",
  detailedConditions:"",
  sunrise:"",
  sunset:"",
  temperature:"",
  pressure:"",
  humidity:"",
  wind:"",
  clouds:"",
  error:false
}
 
handleInputForm = (e) =>{
  console.log(e.target.value);
  
  this.setState({
    value: e.target.value
  })
}

componentDidUpdate(prevProps, prevState) {
//dać warunek 
if(prevState.value !== this.state.value) {

 const API = `http://api.openweathermap.org/data/2.5/weather?q=${this.state.value}&APPID=${APIkey}&units=metric`


// fetch(API)
// .then(response => {
//   if (response.ok) {
//     return response
//   }
// })
// .then(response => response.json())
// .then(data => console.log(data))
// .catch(err => console.log(err))

// }
// }
  fetch(API)
  .then(response => {
    if(response.ok){
      return response}
    throw Error("City not found")
  })
  .then(response => response.json())
  .then(data => {
    const time = new Date().toLocaleString()
    this.setState((state) => ({
      error: false,
      date: time,
      conditions: data.weather.main,
      detailedConditions: data.weather.description,
      latitude: data.coord.lat,
      longitude: data.coord.lon,
      sunrise: data.sys.sunrise,
      sunset: data.sys.sunset,
      temperature: data.main.temp,
      pressure: data.main.pressure,
      humidity: data.main.humidity,
      wind: data.wind.speed,
      clouds: data.clouds.all,
      city: state.value
    }))
  })
  .catch(() => {
    this.setState(prevState => ({
      error: true,
      city: prevState.value
    }))
  })

}
}


render(){
  return(
   
    <div className="App">
    <Header/>
    <Form 
    value={this.state.value}
    change={this.handleInputForm}
    />
    <Results state={this.state} />

    </div>

  )
}

}

export default App