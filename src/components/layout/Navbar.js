import React from 'react';
import { Link } from 'react-router-dom';
import { NavbarLinks } from '../layout';
import { connect } from 'react-redux';
// import { About, Contact } from '../pages';

export const Navbar = ({ auth, profile }) => {
  return (
    <nav className="blue darken-3">
      <div className="nav-wrapper container">
        <Link to="/" className="brand-logo">
          Post
        </Link>
        <NavbarLinks profile={profile} />
      </div>
    </nav>
  );
};

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
    profile: state.firebase.profile,
  };
};

export default connect(mapStateToProps, null)(Navbar);
