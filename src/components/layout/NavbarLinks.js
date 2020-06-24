import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

export const NavbarLinks = ({ auth }) => {
  const isLoggedIn = auth.uid;
  const authLink = isLoggedIn ? (
    <li>
      <NavLink to="/signout">Sign Out</NavLink>
    </li>
  ) : (
    <li>
      <NavLink to="/signin">Sign In</NavLink>
    </li>
  );
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
      {authLink}
      <li>
        <NavLink to="/signup">Sign Up</NavLink>
      </li>
    </ul>
  );
};

const mapStateToProps = (state) => {
  return {
    // authError: state.auth.authError,
    auth: state.firebase.auth,
  };
};

export default connect(mapStateToProps, null)(NavbarLinks);
