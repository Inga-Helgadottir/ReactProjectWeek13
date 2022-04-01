// fetch pokemons - DO NOT run this unless something happens to the pokemons in db.json

// const [pokemons, setPokemons] = useState([]);

// useEffect(() => {
//   const getPokemons = async () => {
//     const pokemonFromDB = await fetchPokemons();
//     setPokemons(pokemonFromDB);
//   };
//   getPokemons();
// }, []);
/*
  const fetchPokemons = async () => {
    const res = await fetch(
      "https://pokeapi.co/api/v2/pokemon?limit=10&offset=200"
    );
    const data = await res.json();
    data.results.map((p) => fetchPokemon(p.url));
    return data;
  };

  const fetchPokemon = async (url) => {
    const res = await fetch(url);
    const data = await res.json();
    addPokemon(data);
    return data;
  };

  const addPokemon = async (p) => {
    const pokemonToAdd = {
      pokemonAlt: p.name,
      pokemonSrc: p.sprites.front_default,
    };
    const res = await fetch(`http://localhost:5000/pokemons`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(pokemonToAdd),
    });

    const data = await res.json();

    setPokemons([...pokemons, data]);
  };*/
