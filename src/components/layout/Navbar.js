import React from 'react';
import { Link } from 'react-router-dom';
import { NavbarLinks } from '../layout';
// import { About, Contact } from '../pages';

export const Navbar = () => {
  return (
    <nav className="blue darken-3">
      <div className="nav-wrapper container">
        <Link to="/" className="brand-logo">
          Post
        </Link>
        <NavbarLinks />
      </div>
    </nav>
  );
};

export default Navbar;
