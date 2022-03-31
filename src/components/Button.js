import React from "react";
import Proptypes from 'prop-types';

const Button = ({ name, color, onClick }) => {

  /* const onClick = () => {
    console.log('This should add a task') //TODO:
  } */

  return (
    <button onClick={onClick}
    style={{backgroundColor: color}} 
    className="myButton">
      {name}
    </button>
    
  );
};


export default Button;
