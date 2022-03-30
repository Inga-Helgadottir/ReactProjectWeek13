import "./styles/App.css";
import Button from "./components/Button.js";
import Form from "./components/Form";
import Task from "./components/Task";

function App() {
  // background colors for buttons
  const red = { backgroundColor: "#E3261A" };
  const green = { backgroundColor: "#1AE32E" };

  return (
    <div className="App">
      <Task
        taskName="this task is long for the best css"
        pokemonSrc="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png"
        pokemonAlt="pokemon"
      />
      <Form />

      <h2>Button test</h2>
      <Button name="Add task" color={green} />
      <Button name="Done" color={red} />
    </div>
  );
}
export default App;
