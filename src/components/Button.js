import React from "react";

const button = ({ name, color }) => {
  return (
    <button style={color} className="myButton">
      {name}
    </button>
  );
};

export default button;
