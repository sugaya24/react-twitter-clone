import React from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import moment from 'moment';

export const UserProfile = ({ auth, profile }) => {
  const { slug } = useParams();
  const createdAt = auth.createdAt ? +auth.createdAt : 0;
  const lastLoginAt = auth.lastLoginAt ? +auth.lastLoginAt : 0;

  return (
    <div className="container">
      <h3>{slug}</h3>
      <p>Email: {auth.email}</p>
      <p>Created at: {moment(createdAt).format('llll')}</p>
      <p>Last login: {moment(lastLoginAt).format('llll')}</p>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
  };
};

export default connect(mapStateToProps, null)(UserProfile);
