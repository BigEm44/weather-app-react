import React from 'react';

const Form = (props) => {
  return (
    <div className="form">
    <form onSubmit={props.submit} >
      <input
        onChange={props.change} 
        value={props.value} 
        type="text" 
        placeholder="Enter city name "/>
      <button>Find</button>
      </form>
      </div> 
   );
}
 
export default Form;