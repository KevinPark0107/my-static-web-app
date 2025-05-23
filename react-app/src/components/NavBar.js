import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = (props) => (
  <nav className="column is-2 menu">
    <p className="menu-label">Menu</p>
    <ul className="menu-list">
      <NavLink to="/products" activeClassName="active-link">
        제품목록
      </NavLink>
      <NavLink to="/about" activeClassName="active-link">
        개요2
      </NavLink>
    </ul>
    {props.children}
  </nav>
);

export default NavBar;
