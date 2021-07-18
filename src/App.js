import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);
    console.log("hello");
  }
  componentDidMount() {
    console.log("component has rendered");
  }

  componentDidUpdate() {
    console.log("i did updated");
  }
  componentWillMount() {
    console.log("good bye");
  }
  state = {
    count: 0,
  };

  add = () => {
    this.setState((current) => ({ count: this.state.count + 1 }));
  };
  minus = () => {
    this.setState((current) => ({ count: this.state.count - 1 }));
  };

  render() {
    console.log("rendering...");
    return (
      <div>
        <h1>The Number is {this.state.count}</h1>
        <button onClick={this.add}>ADD</button>
        <button onClick={this.minus}>MINUS</button>
      </div>
    );
  }
}

export default App;
