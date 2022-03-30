import React from "react";
import "../styles/tasks.css";

const Task = ({ taskName, pokemonSrc, pokemonAlt }) => {
  return (
    <div className="task">
      <input type="checkbox"></input>
      <label>{taskName}</label>
      <img src={pokemonSrc} alt={pokemonAlt} />
    </div>
  );
};

export default Task;
