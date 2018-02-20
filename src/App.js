import React, { Component } from 'react';

import api from './api/index';
import logic from './logic/index';

class App extends Component {
  constructor() {
    super();
    this.state = {
      year: null,
      month: null,
      day: null,
      data: [],
    }
  }

  componentWillMount() {
    api.getStats(2018, 2, 4)
      .then((response) => {
        console.log(response);
        const data = logic.handleChampionStats(response.data);
        this.setState({
          data
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  handleInputChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  retrieveStats = () => {
    api.getStats(this.state.year, this.state.month, this.state.day)
      .then((response) => {
        console.log(response);
        this.setState({
          data: response.data
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    const data = (
      <table>
        <tr>
          <th>Name</th>
          <th>Duo ranked win rate</th>
          <th>Duo ranked total</th>
          <th>Trio ranked win rate</th>
          <th>Trio ranked total</th>
        </tr>
        {this.state.data.map((record) => {
          return (
            <tr>
              <td>{record.championName}</td>
              <td>{record.duoRankedWinrate}</td>
              <td>{record.duoRankedTotal}</td>
              <td>{record.trioRankedWinrate}</td>
              <td>{record.trioRankedTotal}</td>
            </tr>
          )
        })}
      </table>);

    return (
      <div className="App">
        <div>
          <input name="year" value={this.state.year} onChange={this.handleInputChange} placeholder="Year" />
          <input name="month" value={this.state.month} onChange={this.handleInputChange} placeholder="Month" />
          <input name="day" value={this.state.day} onChange={this.handleInputChange} placeholder="Day" />
          <button onClick={this.retrieveStats}>GO</button>
        </div>
        <div>
          {data}
        </div>
      </div>
    );
  }
}

export default App;
