import React, { useState } from 'react';
import '../styles/App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 1,
      color: "white",
    };
  }

  checkCount() {
    if (this.state.count % 15 === 0) {
      this.setState({ color: "green" });
      return "fizzbuzz";
    } else if (this.state.count % 3 === 0) {
      this.setState({ color: "red" });
      return "fizz";
    } else if (this.state.count % 5 === 0) {
      return "buzz";
    } else {
      this.setState({ color: "white" });
      return "normal";
    }
  }


  render() {
    return (
      <div>
        <div id="counter" className={this.checkCount()} style={{ backgroundColor: this.state.color }}>
          <span>{this.state.count}</span>
        </div>

        <button onClick={() => this.setState({ count: this.state.count + 1 })}>Increment</button>
        <button onClick={() => this.setState({ count: this.state.count - 1 })}>Decrement</button>
      </div>
    );
  }
}
export default App;
