import React from 'react';

const Form = (props) => {
  return ( 
    <form>
      <input value={props.value} onChange={props.change} type="text" placeholder="Wpisz nazwę "/>
      </form>
    
   );
}
 
export default Form;