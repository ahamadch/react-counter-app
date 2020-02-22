import React, { Component } from 'react';
import NavBar from './components/navbar';
import './App.css';
import Counters from './components/counters';

class App extends Component {
  state = {
    counters: []
  };

  handleDelete = (counterId) => {
    const counters = this.state.counters.filter(c => c.id !== counterId);
    this.setState({counters});
  };

  handleReset = () => {
    const counters = this.state.counters.map(c => {
      c.value = 0;
      return c;
    });

    this.setState({counters});
  };

  handleAdd = addCount => {
    const itemLength     = this.state.counters.length;
    const counters       = [...this.state.counters];
    for (let i = 0; i < addCount; i++) {
      let itemIndex       = itemLength + i;
      let newItem         = {id: (itemIndex + 1), value: 0};
      counters[itemIndex] = newItem;
    }

    this.setState({counters});
  };

  handleResetAll = () => {
    const counters = [];

    this.setState({counters});
  };

  handleIncrement = counter => {
    const counters  = [...this.state.counters];
    const index     = counters.indexOf(counter);
    counters[index] = {...counter};
    counters[index].value++;

    this.setState({counters});
  };

  handleDecrement = counter => {
    const counters  = [...this.state.counters];
    const index     = counters.indexOf(counter);
    counters[index] = {...counter};

    if(counters[index].value > 0) {
      counters[index].value--;
    }

    this.setState({counters});
  };

  render() {
    return (
      <React.Fragment>
        <NavBar
          totalCounters={this.state.counters.filter(c => c.value > 0).length}
          onResetAll={this.handleResetAll}
        />
        <main className="container">
          <Counters
            counters={this.state.counters}
            onReset={this.handleReset}
            onAdd={this.handleAdd}
            onIncrement={this.handleIncrement}
            onDecrement={this.handleDecrement}
            onDelete={this.handleDelete}
          />
        </main>
      </React.Fragment>
     );
  }
}

export default App;
