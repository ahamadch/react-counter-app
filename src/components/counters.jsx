import React, { Component } from 'react';
import Counter from './counter';

class Counters extends Component {
  state = {
    counterAddValue: 0
  }

  constructor(props) {
    super(props);
    // create a ref to store the textInput DOM element
    this.textInput = React.createRef();
  }

  render() {
    const {onReset, onAdd, onDelete, onIncrement, onDecrement, counters } = this.props;
    return (
      <div>
        <input type="text" id="counterAddCount" ref={this.textInput} />
        <button
          onClick={() => onAdd(this.textInput.current.value)}
          className="btn btn-primary m-2">
          Add
        </button>
        <button
          onClick={onReset}
          className="btn btn-primary m-2">
          Reset
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
