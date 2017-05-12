import React from 'react';
import ReactDOM from 'react-dom';

import configureStore from './store/store';

import { Provider } from 'react-redux';
import PokeListContainer from './components/pokemon/pokemon_index_container';
import { HashRouter, Route } from 'react-router-dom';



document.addEventListener("DOMContentLoaded", ()=> {
  const store = configureStore();
  window.store = store;
  const rootEl = document.getElementById('root');
  const Root = () => (
      <Provider store={store}>
        <HashRouter>
          <Route path="/" component={PokeListContainer} />
        </HashRouter>
      </Provider>
    );

  ReactDOM.render(<Root store={store}/>, rootEl);
});


import {receiveAllPokemon, requestAllPokemon, receiveSinglePokemon, requestSinglePokemon} from './actions/pokemon_actions';
import { fetchAllPokemon, fetchSinglePokemon } from './util/api_util';
import {selectAllPokemon} from './reducers/selectors';

window.receiveAllPokemon = receiveAllPokemon;
window.fetchAllPokemon = fetchAllPokemon;
window.fetchSinglePokemon = fetchSinglePokemon;
window.receiveSinglePokemon = receiveSinglePokemon;
window.requestSinglePokemon = requestSinglePokemon;


window.requestAllPokemon = requestAllPokemon;
window.selectAllPokemon = selectAllPokemon;
