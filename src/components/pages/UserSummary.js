import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { firestoreConnect } from 'react-redux-firebase';
import { firestore } from 'firebase';

export const UserSummary = ({ users }) => {
  return (
    <div>
      {users &&
        users.map((user) => {
          return <p key={user.id}>{`${user.firstName} ${user.lastName}`}</p>;
        })}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    users: state.firestore.ordered.users,
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect(({ userIds }) => {
    return [
      {
        collection: 'users',
        where: [firestore.FieldPath.documentId(), 'in', userIds],
      },
    ];
  })
)(UserSummary);
