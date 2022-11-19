export const getPokemonDetail = (pokemon?: string) => {
  const pokemonName = pokemon ?? "ditto";
  return fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`).then(
    (response) => {
      return response.json();
    }
  );
};

export const pokemonService = () => {
  return fetch("https://pokeapi.co/api/v2/pokemon?limit=10").then(
    (response) => {
      return response.json();
    }
  );
};
