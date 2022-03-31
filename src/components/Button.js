import React from "react";
import Proptypes from 'prop-types';

const button = ({ name, color, onClick }) => {

  /* const onClick = () => {
    console.log('This should add a task') //TODO:
  } */

  return (
    <button onClick={onClick}
    style={color} 
    className="myButton">
      {name}
    </button>
    
  );
};

button.Proptypes = {
  text: Proptypes.string,
  color: Proptypes.string,
  onClick: Proptypes.func
}

export default button;
