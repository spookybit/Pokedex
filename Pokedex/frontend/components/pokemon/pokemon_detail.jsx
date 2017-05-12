import React from 'react';
import { Link } from 'react-router-dom';
// import ItemDetailContainer from './item_detail_container';

class PokemonDetail extends React.Component {

  componentDidMount() {
    this.props.requestSinglePokemon(this.props.match.params.pokemonId);
  }

  componentWillReceiveProps(newProps) {
    if (this.props.pokemonDetail.id !== newProps.match.params.pokemonId) {
      this.props.requestSinglePokemon(newProps.match.params.pokemonId);
    }
  }

  render () {
    const items = this.props.pokemonDetail.items.map((item) => (
      <Link to={`/pokemon/${this.props.match.params.pokemonId}/item/${item.id}`}>
        <img key={item.id} src={item.image_url} width="70" height="70"/>
      </Link>
    ));

    return (

      <div className="pokedetail">
        <img src={this.props.pokemonDetail.image_url} />
        <ul>
          <li>{this.props.pokemonDetail.name}</li>
          <li>Poke Type: {this.props.pokemonDetail.poke_type}</li>
          <li>Attack: {this.props.pokemonDetail.attack}</li>
          <li>Defense: {this.props.pokemonDetail.defense}</li>
          <li>Moves: {this.props.pokemonDetail.moves}</li>
        </ul>
        <div>
          Items:
          <br></br>
          {items}
        </div>
      </div>
    );
  }

}

// {ItemDetailContainer}



export default PokemonDetail;
