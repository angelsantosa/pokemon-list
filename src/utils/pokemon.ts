export const getPokemonId = (url: string) => {
  const urlParts = url.split("/");
  return urlParts[urlParts.length - 2];
};

export const getPokemonImage = (pokemon: string | number) =>
  `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon}.png`;
