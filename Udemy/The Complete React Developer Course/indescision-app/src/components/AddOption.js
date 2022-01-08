import React from "react";

class AddOption extends React.Component {
  state = {
    error: undefined,
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const optionText = e.target.elements.option.value.trim();
    const error = this.props.handleAddOption(optionText);
    this.setState(() => ({ error }));
    if (!error) e.target.elements.option.value = "";
  };

  render() {
    return (
      <div>
        {this.state.error && (
          <p className="add-option-error">{this.state.error}</p>
        )}
        <form className="add-option" onSubmit={this.handleSubmit}>
          <input className="add-option__input" type="text" name="option" />
          <button type="submit" className="button">
            Add option
          </button>
        </form>
      </div>
    );
  }
}

export default AddOption;
