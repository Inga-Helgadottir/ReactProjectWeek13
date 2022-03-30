import "./styles/App.css";
import Form from "./components/Form";
import { useState, useEffect } from "react";

function App() {
  // const [showAddTask, setShowAddTask] = useState(false);
  // const [tasks, setTasks] = useState([]);

  // useEffect(() => {
  //   const getTasks = async () => {
  //     const tasksFromServer = await fetchTasks();
  //     setTasks(tasksFromServer);
  //   };
  //   getTasks();
  // }, []);
  useEffect(() => {
    const getTasks = async () => {
      const tasksFromServer = await fetchTasks();
      // setTasks(tasksFromServer);
    };
    // getTasks();
  }, []);
  const fetchTasks = async () => {
    const res = await fetch("https://pokeapi.co/api/v2/pokemon/");
    const data = await res.json();
    console.log(data);
    return data;
  };

  return (
    <div className="App">
      <Form />
    </div>
  );
}
export default App;
