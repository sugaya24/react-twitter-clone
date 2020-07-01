import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { signUp } from '../../store/actions/authActions';

export const SignUp = ({ auth, authError, signUp }) => {
  const [state, setState] = useState({
    email: '',
    password: '',
    userName: '',
    screenName: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    signUp(state);
  };

  if (auth.uid) return <Redirect to="/" />;
  return (
    <div className="container">
      <form className="white" onSubmit={handleSubmit}>
        <h5 className="grey-text text-darken-3">Sign Up</h5>
        <div className="input-field">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            onChange={(e) => setState({ ...state, email: e.target.value })}
          />
        </div>
        <div className="input-field">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            onChange={(e) => setState({ ...state, password: e.target.value })}
          />
        </div>
        <div className="input-field">
          <label htmlFor="userName">Username</label>
          <input
            type="text"
            id="userName"
            onChange={(e) => setState({ ...state, userName: e.target.value })}
          />
        </div>
        <div className="input-field">
          <label htmlFor="screenName">@Screenname</label>
          <input
            type="text"
            id="screenName"
            onChange={(e) => setState({ ...state, screenName: e.target.value })}
          />
        </div>
        <div className="input-field">
          <div className="center red-text">
            {authError ? <p>{authError}</p> : null}
          </div>
          <button className="btn pink lighten-1 z-depth-0">Sign Up</button>
        </div>
      </form>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
    authError: state.auth.authError,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    signUp: (creds) => dispatch(signUp(creds)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
