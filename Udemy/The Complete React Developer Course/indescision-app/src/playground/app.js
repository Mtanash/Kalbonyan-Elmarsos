class IndecisionApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      options: [],
    };
    this.removeOptions = this.removeOptions.bind(this);
    this.handlePick = this.handlePick.bind(this);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.handleRemoveOption = this.handleRemoveOption.bind(this);
  }

  componentDidMount() {
    try {
      const options = JSON.parse(localStorage.getItem("options"));
      if (options) this.setState(() => ({ options }));
    } catch (error) {
      console.log(error);
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.options.length != this.state.options.length) {
      localStorage.setItem("options", JSON.stringify(this.state.options));
    }
  }

  removeOptions() {
    this.setState(() => ({ options: [] }));
  }

  handlePick() {
    const randomNumber = Math.floor(Math.random() * this.state.options.length);
    const option = this.state.options[randomNumber];
    alert(option);
  }

  handleAddOption(optionText) {
    if (optionText.length <= 0) {
      return "Enter a valid option title";
    }
    if (this.state.options.includes(optionText)) {
      return "Option alread exist!";
    }

    this.setState((prevState) => ({
      options: [...prevState.options, optionText],
    }));
  }

  handleRemoveOption(optionText) {
    const options = this.state.options.filter(
      (option) => option !== optionText
    );
    this.setState(() => ({ options }));
  }

  render() {
    const subTitle = "put your life in the hand of a computer";
    return (
      <div>
        <Header subTitle={subTitle} />
        <Actions
          hasOptions={this.state.options.length > 0}
          handlePick={this.handlePick}
        />
        <Options
          options={this.state.options}
          removeOptions={this.removeOptions}
          handleRemoveOption={this.handleRemoveOption}
        />
        <AddOption handleAddOption={this.handleAddOption} />
      </div>
    );
  }
}

const Header = ({ title, subTitle }) => {
  return (
    <div>
      <h1>{title}</h1>
      {subTitle && <h2>{subTitle}</h2>}
    </div>
  );
};

Header.defaultProps = {
  title: "Indecision",
};

const Actions = ({ hasOptions, handlePick }) => {
  return (
    <div>
      <button disabled={!hasOptions} onClick={handlePick}>
        What should i do ?
      </button>
    </div>
  );
};

const Options = ({ removeOptions, options, handleRemoveOption }) => {
  return (
    <div>
      <button onClick={removeOptions}>Remove all</button>
      {options.length === 0 && <p>There is no options</p>}
      {options.map((option, index) => {
        return (
          <Option
            key={index}
            option={option}
            handleRemoveOption={handleRemoveOption}
          />
        );
      })}
    </div>
  );
};

const Option = ({ option, handleRemoveOption }) => {
  return (
    <div>
      <p>{option}</p>
      <button
        onClick={() => {
          handleRemoveOption(option);
        }}
      >
        Remove
      </button>
    </div>
  );
};

class AddOption extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      error: undefined,
    };
  }
  handleSubmit(e) {
    e.preventDefault();
    const optionText = e.target.elements.option.value.trim();
    const error = this.props.handleAddOption(optionText);
    this.setState(() => ({ error }));
    if (!error) e.target.elements.option.value = "";
  }
  render() {
    return (
      <div>
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.handleSubmit}>
          <input type="text" name="option" />
          <button type="submit">Add option</button>
        </form>
      </div>
    );
  }
}

ReactDOM.render(<IndecisionApp />, document.getElementById("app"));
