import Task from "./Task";
import PropTypes from "prop-types";

const Tasks = ({ tasks, onDelete, toggleChecked }) => {
  return (
    <div>
      {tasks.map((task, index) => {
        return (
          <Task
            key={index}
            id={index}
            taskName={task.taskName}
            pokemonSrc={task.pokemonSrc}
            pokemonAlt={task.pokemonAlt}
            status={task.status}
            onDelete={onDelete}
            toggleChecked={toggleChecked}
          />
        );
      })}
    </div>
  );
};

Tasks.propTypes = {
  tasks: PropTypes.array.isRequired,
};

export default Tasks;
