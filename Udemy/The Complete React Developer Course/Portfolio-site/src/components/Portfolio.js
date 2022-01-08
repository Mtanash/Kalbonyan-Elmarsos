import React from "react";
import { Link } from "react-router-dom";

const Portfolio = () => (
  <div>
    <h2>My Work</h2>
    <p>Check out the things i have done:</p>
    <Link to="/portfolio/1">Item One</Link>
    <Link to="/portfolio/2">Item Two</Link>
  </div>
);

export default Portfolio;
