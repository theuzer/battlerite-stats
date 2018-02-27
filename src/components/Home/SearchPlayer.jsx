import React, { Component } from 'react';

class SearchPlayer extends Component {
  constructor() {
    super();
    this.state = {
      playerName: '',
    };
    this.handleOnPlayerNameChange = this.handleOnPlayerNameChange.bind(this);
  }

  handleOnPlayerNameChange(e) {

  }

  render() {
    return (
      <div>
        <input placeholder="Search player" value={this.state.playerName} />
      </div>
    );
  }
}

export default SearchPlayer;
