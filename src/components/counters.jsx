import React, { Component } from 'react';
import Counter from './counter';

class Counters extends Component {
  render() {
    const { onReset, onDelete, onIncrement, onDecrement, counters } =
      this.props;

    return (
      <div>
        <button onClick={onReset} className="btn btn-primary btn-sm m-2">
          Reset
        </button>
        {counters.map((item) => (
          <Counter
            key={item.id}
            onDelete={onDelete}
            onIncrement={onIncrement}
            onDecrement={onDecrement}
            counter={item}
          />
        ))}
      </div>
    );
  }
}

export default Counters;
