import { RECEIVE_SINGLE_POKEMON } from '../actions/pokemon_actions';
import { merge } from 'lodash';

const pokemonDetailReducer = (state = {items: []}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_SINGLE_POKEMON:
      return merge({}, action.pokemon);
    default:
      return state;
  }
};

export default pokemonDetailReducer;
