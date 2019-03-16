import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>CarCounter</h1>
          1 Person
          <p><Counter /></p>
          2 Personen
          <p><Counter /></p>
          3 Personen
          <p><Counter /></p>
          4+ Personen
          <p><Counter /></p>
        </header>
      </div>
    );
  }
}

class Counter extends Component {
  state = {
    count: 0
  }
  handleClick() {
    this.setState(({count}) => ({
      count: count + 1
    }));
  }
  render() {
    return <button onClick={this.handleClick}>{this.state.count}</button>
  }
}

export default App;
