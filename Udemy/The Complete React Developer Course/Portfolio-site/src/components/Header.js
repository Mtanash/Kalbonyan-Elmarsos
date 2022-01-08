import React from "react";
import { Link, NavLink } from "react-router-dom";

const Header = () => (
  <div>
    <h1>Portfolio</h1>
    <NavLink exact to="/" activeClassName="is-active">
      Home
    </NavLink>
    <NavLink to="/portfolio" activeClassName="is-active">
      Portfolio
    </NavLink>
    <NavLink to="/contact" activeClassName="is-active">
      Contact
    </NavLink>
  </div>
);

export default Header;
