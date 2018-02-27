import React, { Component } from 'react';

class SearchPlayer extends Component {
  constructor() {
    super();
    this.state = {
      playerName: '',
    };
    this.handleOnPlayerNameChange = this.handleOnPlayerNameChange.bind(this);
    this.handleOnEnterKeyPress = this.handleOnEnterKeyPress.bind(this);
  }

  handleOnPlayerNameChange(e) {
    this.setState({
      playerName: e.target.value,
    });
  }

  handleOnEnterKeyPress() {
    if (this.state.playerName !== '') {
      this.props.history.push(`/${this.state.playerName}`);
    }
  }

  render() {
    return (
      <div>
        <input
          placeholder="Search player"
          value={this.state.playerName}
          onChange={this.handleOnPlayerNameChange}
          onKeyPress={this.handleOnEnterKeyPress}
        />
      </div>
    );
  }
}

export default SearchPlayer;
