import "./styles/App.css";
import Button from "./components/Button";
// import Form from "./components/Form";
import Tasks from "./components/Tasks";
import { useState, useEffect } from "react";

function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const getTasks = async () => {
      const tasksFromDB = await fetchTasks();
      setTasks(tasksFromDB);
    };
    getTasks();
  }, []);
  // background colors for buttons
  const red = { backgroundColor: "#E3261A" };
  const green = { backgroundColor: "#1AE32E" };
  // fetch
  const fetchTasks = async () => {
    const res = await fetch("http://localhost:5000/tasks");
    const data = await res.json();
    return data;
  };

  const fetchTask = async (id) => {
    const res = await fetch(`http://localhost:5000/tasks/${id}`);
    const data = await res.json();

    return data;
  };

  const deleteTask = async (id) => {
    await fetch(`http://localhost:5000/tasks/${id}`, {
      method: "DELETE",
    });

    setTasks(tasks.filter((task) => task.id !== id));
  };

  const toggleChecked = async (id) => {
    console.log(id);
    const taskToToggle = await fetchTask(id);
    console.log(taskToToggle);
    const updatedTask = { ...taskToToggle, status: !taskToToggle.status };

    const res = await fetch(`http://localhost:5000/tasks/${id}`, {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(updatedTask),
    });

    const data = await res.json();

    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, status: data.status } : task
      )
    );
  };
  return (
    <div className="App">
      <Tasks
        tasks={tasks}
        onDelete={deleteTask}
        toggleChecked={toggleChecked}
      />

      <Button name="Add task" color={green} />
      <Button name="Done" color={red} />
    </div>
  );
}

export default App;
