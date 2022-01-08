class Visible extends React.Component {
  constructor(props) {
    super(props);
    this.toggleVisibility = this.toggleVisibility.bind(this);

    this.state = {
      visible: false,
    };
  }
  toggleVisibility() {
    this.setState((prevState) => {
      return {
        visible: !prevState.visible,
      };
    });
  }
  render() {
    return (
      <div>
        <h1>Visibility Toggle</h1>
        <button onClick={this.toggleVisibility}>
          {this.state.visible ? "Hide" : "Show"} details
        </button>
        {this.state.visible && <p>Some details</p>}
      </div>
    );
  }
}

ReactDOM.render(<Visible />, document.getElementById("app"));
