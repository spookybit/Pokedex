import React from 'react';
import PokeListItem from './poke_list_item';

class PokemonIndex extends React.Component {
  componentDidMount() {
    this.props.requestAllPokemon();
  }

  render () {
    const { pokemon } = this.props;

    const pokeList = pokemon.map((poke) => (
      <PokeListItem key={poke.id} name={poke.name} image={poke.image_url}/>
    ));


    return (
      <div>

        <ul>
          {pokeList}
        </ul>
      </div>
    );
  }

}

export default PokemonIndex;
