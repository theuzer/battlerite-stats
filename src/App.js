import React, { Component } from 'react';

import api from './api/index';

class App extends Component {
  constructor() {
    super();
    this.state = {
      year: null,
      month: null,
      day: null
    }
  }

  handleInputChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  retrieveStats = () => {
    api.getStats(this.state.year, this.state.month, this.state.day)
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    return (
      <div className="App">
        <input name="year" value={this.state.year} onChange={this.handleInputChange} placeholder="Year" />
        <input name="month" value={this.state.month} onChange={this.handleInputChange} placeholder="Month" />
        <input name="day" value={this.state.day} onChange={this.handleInputChange} placeholder="Day" />
        <button onClick={this.retrieveStats} />
      </div>
    );
  }
}

export default App;
