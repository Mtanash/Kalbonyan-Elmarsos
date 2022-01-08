import React from "react";
import Option from "./Option";

const Options = ({ removeOptions, options, handleRemoveOption }) => (
  <div>
    <div className="widget-header">
      <h3 className="widget-header__title">Your options</h3>
      <button onClick={removeOptions} className="button button--link">
        Remove all
      </button>
    </div>
    {options.length === 0 && (
      <p className="widget__message">Please add an option to get started</p>
    )}
    {options.map((option, index) => {
      return (
        <Option
          key={index}
          index={index}
          option={option}
          handleRemoveOption={handleRemoveOption}
        />
      );
    })}
  </div>
);

export default Options;
