class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.increaseCount = this.increaseCount.bind(this);
    this.decreaseCount = this.decreaseCount.bind(this);
    this.resetCount = this.resetCount.bind(this);

    this.state = {
      count: 0,
    };
  }

  componentDidMount() {
    const count = parseInt(localStorage.getItem("count"));
    this.setState(() => ({ count }));
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.count !== this.state.count)
      localStorage.setItem("count", this.state.count.toString());
  }

  increaseCount() {
    this.setState((prevState) => {
      return {
        count: prevState.count + 1,
      };
    });
  }
  decreaseCount() {
    this.setState((prevState) => {
      return {
        count: prevState.count - 1,
      };
    });
  }
  resetCount() {
    this.setState(() => {
      return {
        count: 0,
      };
    });
  }

  render() {
    return (
      <div>
        <h1>Count: {this.state.count}</h1>
        <button onClick={this.decreaseCount}>-1</button>
        <button onClick={this.resetCount}>Reset</button>
        <button onClick={this.increaseCount}>+1</button>
      </div>
    );
  }
}

ReactDOM.render(<Counter />, document.getElementById("app"));
