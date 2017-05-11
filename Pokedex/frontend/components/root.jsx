import React from 'react';
import { Provider } from 'react-redux';
// import PokemonIndex from './pokemon/pokemon_index';
import PokeListContainer from './pokemon/pokemon_index_container';

const Root = ({store}) => (
  <Provider store={store}>
    <PokeListContainer />
  </Provider>
);

export default Root;
