import React, { Component } from "react";
import "../styles/App.css";
import Header from "./Header";
import Form from "./Form";
import Results from "./Results";

class App extends Component {

state={
  value: "",
  city: "",
  Conditions:"",
  detailedConditions:"",
  latitude:"",
  temperature:"",
  pressure:"",
  humidity:"",
  wind:"",
  clouds:"",
}
 
handleInputForm = (e) =>{
  console.log(e.target.value);
  
  this.setState({
    value: e.target.value
  })
}

componentDidUpdate = () =>{

handleSubmitForm = (e) => {
  e.preventDefault()

  
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
    <Results/>
    </div>

  )
}

}

export default App