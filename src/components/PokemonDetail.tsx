import * as React from "react";
import { useParams } from "react-router-dom";
import { Flex, Avatar, Loader } from "@mantine/core";
import { Link } from "react-router-dom";
import { getPokemonDetail } from "../services";
import { getPokemonImage } from "../utils/pokemon";
import type { Pokemon } from "../types/Pokemon";

const PokemonDetail: React.FC = () => {
  const { pokemonName } = useParams();

  const [pokemon, setPokemon] = React.useState<Pokemon>();
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    setLoading(true);
    getPokemonDetail(pokemonName).then((data) => {
      setPokemon(data);
      setLoading(false);
    });
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <Flex justify={"center"} align={"center"} direction={"column"}>
      <Avatar
        size={120}
        src={getPokemonImage(pokemon?.id ?? 1)}
        alt="it's me"
      />
      <h1>{pokemon?.name}</h1>
      <h2>Height: {pokemon?.height} ft</h2>
      <h2>Weight: {pokemon?.weight} lb</h2>
      <Link to="/">Back to list</Link>
    </Flex>
  );
};

export default PokemonDetail;
