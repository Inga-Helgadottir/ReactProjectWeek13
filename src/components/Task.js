import React from "react";
import "../styles/tasks.css";
import { FaTimes } from "react-icons/fa";
import PropTypes from "prop-types";

const Task = ({
  id,
  taskName,
  pokemonSrc,
  pokemonAlt,
  status,
  onDelete,
  toggleChecked,
}) => {
  return (
    <div className="task">
      <div id="checkboxLabel">
        <input
          type="checkbox"
          value={status}
          checked={status}
          onChange={() => toggleChecked(id)}
        />
        <label>{taskName}</label>
      </div>
      <div id="imgs">
        <img id="pokemonImg" src={pokemonSrc} alt={pokemonAlt} />
        <FaTimes id="X" onClick={() => onDelete(id)} />
      </div>
    </div>
  );
};

export default Task;

Task.propTypes = {
  taskName: PropTypes.string.isRequired,
  pokemonSrc: PropTypes.string.isRequired,
  pokemonAlt: PropTypes.string.isRequired,
  status: PropTypes.bool.isRequired,
};
