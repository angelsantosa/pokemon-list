import * as React from "react";
import { Table } from "@mantine/core";
import PokemonItem from "./PokemonItem";
import { pokemonService } from "../services";
import { getPokemonId, getPokemonImage } from "../utils/pokemon";
import type { PokemonListResponse } from "../types/Pokemon";

const PokemonList: React.FC = () => {
  const [pokemons, setPokemons] = React.useState<PokemonListResponse>([]);

  React.useEffect(() => {
    pokemonService().then((data) => {
      setPokemons(data.results);
    });
  }, []);

  const rows = pokemons.map((pokemon, idx) => (
    <PokemonItem
      key={idx}
      name={pokemon.name}
      avatar={getPokemonImage(getPokemonId(pokemon.url))}
    />
  ));
  return (
    <>
      <div>
        <h1>Pokemon List</h1>
      </div>
      <Table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Imagene</th>
            <th></th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </Table>
    </>
  );
};

export default PokemonList;
