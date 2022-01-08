import React from "react";

const Actions = ({ hasOptions, handlePick }) => (
  <div>
    <button disabled={!hasOptions} onClick={handlePick} className="big-button">
      What should i do ?
    </button>
  </div>
);

export default Actions;
