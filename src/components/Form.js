import React from 'react';

const Form = (props) => {
  return (
    <div className="form">
    <form>
      <input value={props.value} onChange={props.change} type="text" placeholder="Enter city name "/>
      </form>
      </div> 
   );
}
 
export default Form;