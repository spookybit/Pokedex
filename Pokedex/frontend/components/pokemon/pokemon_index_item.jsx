import React from 'react';
import { Link } from 'react-router-dom';

class PokemonIndexItem extends React.Component {

  render () {
    return (
      <li>
        <Link to={`/pokemon/${this.props.pokemon.id}`}>
          <img src={this.props.pokemon.image_url} height="30" width="30" />
          {this.props.pokemon.name}
        </Link>
      </li>
    );
  }

}

export default PokemonIndexItem;
