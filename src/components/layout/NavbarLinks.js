import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

export const NavbarLinks = ({ auth, profile }) => {
  const isLoggedIn = auth.uid;
  const postLink = isLoggedIn ? (
    <li>
      <NavLink to="/create">Post</NavLink>
    </li>
  ) : null;
  const authLink = isLoggedIn ? (
    <li>
      <NavLink to="/signout">Sign Out</NavLink>
    </li>
  ) : (
    <li>
      <NavLink to="/signin">Sign In</NavLink>
    </li>
  );
  const initialName = isLoggedIn ? (
    <li>
      <NavLink
        to={`/${profile.firstName + profile.lastName}`}
        className="btn btn-floating pink lighten-1"
      >
        {profile.initials}
      </NavLink>
    </li>
  ) : null;

  return (
    <ul id="nav-mobile" className="right hide-on-med-and-down">
      {postLink}
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
      {initialName}
    </ul>
  );
};

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
    profile: state.firebase.profile,
  };
};

export default connect(mapStateToProps, null)(NavbarLinks);
