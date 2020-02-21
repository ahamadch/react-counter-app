import React, { Component } from 'react';
import Counter from './counter';

class Counters extends Component {
  render() {
    const {onReset, onAdd, onDelete, onIncrement, onDecrement, counters } = this.props;
    return (
      <div>
        <button
          onClick={onReset}
          className="btn btn-primary m-2">
          Reset
        </button>
        <button
          onClick={onAdd}
          className="btn btn-primary m-2">
          Add
        </button>
        <div id="counterItemsDiv">
          {counters.map(counter => (
            <Counter
              onDelete={onDelete}
              onIncrement={onIncrement}
              onDecrement={onDecrement}
              key={counter.id}
              counter={counter}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Counters;
