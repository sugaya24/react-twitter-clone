import React from 'react';
import { connect } from 'react-redux';
import { signOut } from '../../store/actions/authActions';

export const SignOut = ({ history, auth, signOut }) => {
  const HandleSignOut = (e) => {
    e.preventDefault();
    signOut();
    history.push('/');
  };

  return (
    <div className="container">
      <h5>Sign Out</h5>
      <a onClick={HandleSignOut}>Sign Out</a>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    // authError: state.auth.authError,
    auth: state.firebase.auth,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    signOut: () => dispatch(signOut()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignOut);
