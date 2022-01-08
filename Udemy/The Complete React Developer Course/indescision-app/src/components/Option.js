import React from "react";

const Option = ({ option, handleRemoveOption, index }) => (
  <div className="option">
    <p className="option__text">
      {index + 1}. {option}
    </p>
    <button
      onClick={() => {
        handleRemoveOption(option);
      }}
      className="button button--link"
    >
      Remove
    </button>
  </div>
);

export { Option as default };
