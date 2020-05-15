import React from 'react';
import { NavLink } from 'react-router-dom';

export const NavbarLinks = () => {
  return (
    <ul id="nav-mobile" className="right hide-on-med-and-down">
      <li>
        <NavLink to="/create">Post</NavLink>
      </li>
      <li>
        <NavLink to="/about">About</NavLink>
      </li>
      <li>
        <NavLink to="/contact">Contact</NavLink>
      </li>
    </ul>
  );
};

export default NavbarLinks;
