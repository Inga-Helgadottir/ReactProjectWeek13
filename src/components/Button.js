import React from "react";
import Proptypes from 'prop-types';

const button = ({ name, color, onAdd }) => {

  /* const onClick = () => {
    console.log('This should add a task') //TODO:
  } */

  return (
    <button onClick={onAdd}
    style={color} 
    className="myButton">
      {name}
    </button>
    
  );
};


export default button;
