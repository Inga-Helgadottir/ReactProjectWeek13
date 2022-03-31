import "../styles/formStyle.css";
import { useState, useEffect } from "react";

const Form = ({ onAdd }) => {
  const [taskName, setTaskName] = useState("");
  const [status, setStatus] = useState(false);
  const [pokemonAlt, setPokemonAlt] = useState("");
  const [pokemonSrc, setPokemonSrc] = useState("");
  const [pokemonOptions, setPokemonOptions] = useState([]);

  useEffect(() => {
    const getPokemons = async () => {
      const pokemonsFromDB = await fetchPokemons();
      setPokemonOptions(pokemonsFromDB);
    };
    getPokemons();
  }, []);

  const fetchPokemons = async () => {
    const res = await fetch("http://localhost:5000/pokemons/");
    const data = await res.json();
    return data;
  };

  const findPokemon = async (pokemon) => {
    const res = await fetch("http://localhost:5000/pokemons/");
    const data = await res.json();
    data.map((p) => {
      if (p.pokemonAlt === pokemon) {
        setPokemonAlt(p.pokemonAlt);
        setPokemonSrc(p.pokemonSrc);
      }
    });
    return data;
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (!taskName) {
      alert("Please add a task");
      return;
    }

    onAdd({ taskName, pokemonAlt, pokemonSrc, status });

    setTaskName("");
    setStatus(false);
    setPokemonAlt("");
    setPokemonSrc("");
  };

  return (
    <form className="form" onSubmit={onSubmit}>
      <h2>Add task to list</h2>
      <div className="form-control">
        <label>Task name</label>
        <input
          className="formInput"
          type="text"
          placeholder="task name"
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
        ></input>
      </div>
      <div className="form-control">
        <label>Pokemon name</label>
        <select onChange={(e) => findPokemon(e.target.value)}>
          {pokemonOptions.map((option, index) => (
            <option key={index} value={option.pokemonAlt}>
              {option.pokemonAlt}
            </option>
          ))}
        </select>
      </div>
      <input type="submit" value="Save Task" className="myButton" />
    </form>
  );
};

export default Form;
