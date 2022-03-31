import React from "react";

const button = ({ name, color, onClick }) => {
  /* const onClick = () => {
    console.log('This should add a task') //TODO:
  } */

  return (
    <button onClick={onClick} style={color} className="myButton">
      {name}
    </button>
  );
};

export default button;
