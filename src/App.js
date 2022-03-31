import "./styles/App.css";
import Button from "./components/Button.js";
import Form from "./components/Form";

function App() {
  const red = {backgroundColor: "#E3261A"};
  const green = {backgroundColor: "#1AE32E"};


  return (
    <div className="App">
      <Form />

      <Button name="Add task" color={green} />
      <Button name="Done" color={red}  />
    </div>
  );
}
export default App;
