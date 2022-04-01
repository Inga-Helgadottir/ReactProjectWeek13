import "./styles/App.css";
import Form from "./components/Form";
import Tasks from "./components/Tasks";
import Header from "./components/Header";
import { useState, useEffect, useRef } from "react";
import { FaSistrix } from "react-icons/fa";
import img from "./pokemon.png";

function App() {
  const [tasks, setTasks] = useState([]);
  const [showAddTask, setShowAddTask] = useState(false);
  const inputRef = useRef(null);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const getTasks = async () => {
      const tasksFromDB = await fetchTasks();
      setTasks(tasksFromDB);
    };
    getTasks();
  }, []);

  //favicon
  var link = document.createElement("link");
  link.type = "image/png";
  link.rel = "icon";
  link.href = img;
  document.getElementsByTagName("head")[0].appendChild(link);

  //search
  const inputTasks = (event) => {
    const value = event.target.value;
    setSearch(value);
  };

  // const searcTodos = todos.filter((el) =>
  const searcTasks = tasks.filter((el) =>
    el.taskName.toLowerCase().includes(search)
  );

  // fetch
  const addTask = async (task) => {
    const res = await fetch(`http://localhost:5000/tasks`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(task),
    });

    const data = await res.json();

    setTasks([...tasks, data]);
  };

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
    const taskToToggle = await fetchTask(id);
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

  const searchStyle = {
    backgroundColor: "#b911f3",
    borderBottom: "solid 2px black",
    position: "relative",
  };

  return (
    <div className="App">
      <Header
        onAdd={() => setShowAddTask(!showAddTask)}
        showAdd={showAddTask}
      />
      {showAddTask && <Form onAdd={addTask} />}
      <div style={searchStyle}>
        <FaSistrix id="searchIcon" />
        <input ref={inputRef} id="task" type="text" onChange={inputTasks} />
      </div>
      {tasks.length > 0 ? (
        <Tasks
          tasks={searcTasks}
          onDelete={deleteTask}
          toggleChecked={toggleChecked}
        />
      ) : (
        <h2>There are no tasks</h2>
      )}
    </div>
  );
}

export default App;
