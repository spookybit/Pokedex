import React from 'react';
import PokemonIndexItem from './pokemon_index_item';
import PokemonDetailContainer from './pokemon_detail_container';
import { Route, Link, NavLink } from 'react-router-dom';

class PokemonIndex extends React.Component {
  componentDidMount() {
    this.props.requestAllPokemon();
  }

  render () {
    const { pokemon } = this.props;

    const pokeList = pokemon.map((poke) => (
      <PokemonIndexItem key={poke.id} pokemon={poke}/>
    ));


    return (
      <div>

        <ul>

          {pokeList}
          <Route path="/pokemon/:pokemonId" component={PokemonDetailContainer} />
        </ul>
      </div>
    );
  }

}

export default PokemonIndex;
