import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

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

  handleOnEnterKeyPress(e) {
    if (e.key === 'Enter' && this.state.playerName !== '') {
      this.props.history.push(`/${this.state.playerName}`);
    }
  }

  render() {
    return (
      <div>
        <input
          className="search-player-input"
          placeholder="Search player"
          value={this.state.playerName}
          onChange={this.handleOnPlayerNameChange}
          onKeyPress={this.handleOnEnterKeyPress}
        />
      </div>
    );
  }
}

export default withRouter(SearchPlayer);
