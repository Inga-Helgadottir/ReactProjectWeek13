import React from "react";
import PropTypes from "prop-types";

const Button = ({ name, color, onClick }) => {
  return (
    <button
      onClick={onClick}
      style={{ backgroundColor: color }}
      className="myButton"
    >
      {name}
    </button>
  );
};

export default Button;

Button.propTypes = {
  name: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
};
