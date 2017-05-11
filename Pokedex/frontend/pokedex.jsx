import React from 'react';
import ReactDOM from 'react-dom';

import Root from './components/root';
import configureStore from './store/store';


document.addEventListener("DOMContentLoaded", ()=> {
  const store = configureStore();
  const rootEl = document.getElementById('root');
  ReactDOM.render(<Root store={store}/>, rootEl);
});


// import {receiveAllPokemon, requestAllPokemon} from './actions/pokemon_actions';
// import { fetchAllPokemon} from './util/api_util';
// import {selectAllPokemon} from './reducers/selectors';

// window.receiveAllPokemon = receiveAllPokemon;
// window.fetchAllPokemon = fetchAllPokemon;
//
// window.store = store;
// window.requestAllPokemon = requestAllPokemon;
// window.selectAllPokemon = selectAllPokemon;
