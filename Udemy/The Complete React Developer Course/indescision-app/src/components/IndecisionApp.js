import React from "react";

import AddOption from "./AddOption";
import Header from "./Header";
import Actions from "./Action";
import Options from "./Options";
import OptionModal from "./OptionModal";

class IndecisionApp extends React.Component {
  state = {
    options: [],
    selectedOption: undefined,
  };

  clearselectedOption = () => {
    this.setState(() => ({ selectedOption: undefined }));
  };

  removeOptions = () => {
    this.setState(() => ({ options: [] }));
  };

  handlePick = () => {
    const randomNumber = Math.floor(Math.random() * this.state.options.length);
    const option = this.state.options[randomNumber];
    this.setState(() => {
      return {
        ...this.state,
        selectedOption: option,
      };
    });
  };

  handleAddOption = (optionText) => {
    if (optionText.length <= 0) {
      return "Enter a valid option title";
    }
    if (this.state.options.includes(optionText)) {
      return "Option alread exist!";
    }

    this.setState((prevState) => ({
      options: [...prevState.options, optionText],
    }));
  };

  handleRemoveOption = (optionText) => {
    const options = this.state.options.filter(
      (option) => option !== optionText
    );
    this.setState(() => ({ options }));
  };

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

  render() {
    const subTitle = "put your life in the hand of a computer";
    return (
      <div>
        <Header subTitle={subTitle} />
        <div className="container">
          <Actions
            hasOptions={this.state.options.length > 0}
            handlePick={this.handlePick}
          />
          <div className="widget">
            <Options
              options={this.state.options}
              removeOptions={this.removeOptions}
              handleRemoveOption={this.handleRemoveOption}
            />
            <AddOption handleAddOption={this.handleAddOption} />
          </div>
        </div>
        <OptionModal
          selectedOption={this.state.selectedOption}
          clearselectedOption={this.clearselectedOption}
        />
      </div>
    );
  }
}

export default IndecisionApp;
