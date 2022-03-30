import "./styles/App.css";
import Button from "./components/Button.js";

function App() {
  const red = {
    backgroundColor: "red"
  }

  const green = {
    backgroundColor: "green"
  }

  return (
  <div className="App">

  <h2>Button test</h2>
  <Button name="Add task" color={green}/>
  <Button name="Done" color={red}/>
  
  </div>
  )
}

export default App;
