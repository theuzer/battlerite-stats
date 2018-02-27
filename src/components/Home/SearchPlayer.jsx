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
    this.setState({
      playerName: e.target.value,
    });
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
