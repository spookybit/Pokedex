import {values} from 'lodash';

export const selectAllPokemon = ( {pokemon} ) => (
  Object.values(pokemon)
);
