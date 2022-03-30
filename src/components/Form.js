import FormItem from "./FormItem";
import "../styles/formStyle.css";

const Form = () => {
  return (
    <form className="form">
      <h2>Add task to list</h2>
      <FormItem label="Task name" />
      <FormItem label="Pokemon name" />
      <input type="submit" value="Save Task" className="myButton" />
    </form>
  );
};

export default Form;
