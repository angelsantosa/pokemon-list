export type PokemonListResponse = {
  name: string;
  url: string;
}[];

export interface Pokemon {
  name: string;
  id: number;
  height: number;
  weight: number;
}
