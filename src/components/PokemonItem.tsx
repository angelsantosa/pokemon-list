import * as React from "react";
import { Avatar } from "@mantine/core";
import { Link } from "react-router-dom";

interface PokemonItemProps {
  name: string;
  avatar: string;
}

const PokemonItem: React.FC<PokemonItemProps> = ({ avatar, name }) => {
  return (
    <>
      <tr>
        <td>{name}</td>
        <td>
          <Avatar src={avatar} alt="it's me" />
        </td>
        <td>
          <Link to={`/pokemon/${name}`}>Details</Link>
        </td>
      </tr>
    </>
  );
};

export default PokemonItem;
