import React from "react";

const Item = (props) => (
  <div>
    <h3>A thing i have done</h3>
    <p>this page is for item with id {props.match.params.id}</p>
  </div>
);

export default Item;
