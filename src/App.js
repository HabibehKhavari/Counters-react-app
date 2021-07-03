import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Counters from './components/counters';
import NavBar from './components/NavBar';

class App extends Component {
  state = {
    counters: [
      { id: 1, value: 5 },
      { id: 2, value: 0 },
      { id: 3, value: 2 },
      { id: 4, value: 0 },
    ],
  };

  resetHandler = () => {
    const counters = this.state.counters.map(item => {
      item.value = 0;
      return item
    })
    this.setState({ counters })
  }

  incrementHandler = (counter) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index].value++;
    this.setState({ counters });
  };

  deleteHandler = (countrID) => {
    console.log(countrID);
    const counters = this.state.counters.filter((item) => item.id !== countrID);
    this.setState({ counters });
  };

  render() {
    return (<React.Fragment>
      <NavBar totalCounters={this.state.counters.filter(c => c.value > 0).length} />
      <main className="container">
        <Counters
          counters={this.state.counters}
          onDelete={this.deleteHandler}
          onIncrement={this.incrementHandler}
          onReset={this.resetHandler} />
      </main>
    </React.Fragment>);
  }
}

export default App;

