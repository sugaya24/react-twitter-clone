import React from 'react';
import { connect } from 'react-redux';
import { useParams, Link } from 'react-router-dom';
import moment from 'moment';

export const UserProfile = ({ auth, profile }) => {
  const { slug } = useParams();
  const createdAt = auth.createdAt ? +auth.createdAt : 0;
  const lastLoginAt = auth.lastLoginAt ? +auth.lastLoginAt : 0;
  const userName = profile.firstName + profile.lastName;
  console.log('this is ' + userName);

  return (
    <div className="container">
      <h3>{slug}</h3>
      <p>Email: {auth.email}</p>
      <p>Created at: {moment(createdAt).format('llll')}</p>
      <p>Last login: {moment(lastLoginAt).format('llll')}</p>
      <Link to={`/${slug}/likes`}>Posts you liked</Link>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
    profile: state.firebase.profile,
  };
};

export default connect(mapStateToProps, null)(UserProfile);
