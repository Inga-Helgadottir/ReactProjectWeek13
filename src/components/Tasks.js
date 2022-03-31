import Task from "./Task";
import PropTypes from "prop-types";

const Tasks = ({ tasks, onDelete, toggleChecked }) => {
  return (
    <div>
      {tasks.map((task) => {
        return (
          <Task
            key={task.id}
            id={task.id}
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

export default Tasks;

Tasks.propTypes = {
  tasks: PropTypes.array.isRequired,
};
