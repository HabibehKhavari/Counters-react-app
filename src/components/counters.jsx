import React, { Component } from 'react';
import Counter from './counter';

class Counters extends Component {
  state = {
    counters: [
      { id: 1, value: 5 },
      { id: 2, value: 0 },
      { id: 3, value: 2 },
      { id: 4, value: 0 },
    ],
  };

  deleteHandler = (countrID) => {
    console.log(countrID);
    const counters = this.state.counters.filter((item) => item.id !== countrID);
    this.setState({ counters });
  };

  render() {
    return (
      <div>
        {this.state.counters.map((item) => (
          <Counter key={item.id} onDelete={this.deleteHandler} counter={item} />
        ))}
      </div>
    );
  }
}

export default Counters;
