import React, { useState } from 'react';
import { signIn } from '../../store/actions/authActions';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

export const SignIn = ({ auth, authError, signIn }) => {
  const [state, setState] = useState({ email: '', password: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    signIn(state);
  };

  if (auth.uid) return <Redirect to="/" />;
  return (
    <div>
      <div className="container">
        <form className="white" onSubmit={handleSubmit}>
          <h5 className="grey-text text-darken-3">Sign In</h5>
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
            <button className="btn pink lighten-1 z-depth-0">Login</button>
            <div className="center red-text">
              {authError ? <p>{authError}</p> : null}
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    authError: state.auth.authError,
    auth: state.firebase.auth,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    signIn: (creds) => {
      dispatch(signIn(creds));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
