import React from 'react';

class PokeListItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    return (
      <li>
        <img src={this.props.image} height="30" width="30" />
        {this.props.name}
      </li>
    );
  }

}

export default PokeListItem;
