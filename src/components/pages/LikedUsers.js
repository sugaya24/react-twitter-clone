import React from 'react';
import UserSummary from './UserSummary';

export const LikedUsers = ({ location }) => {
  const likedUserIDs = location.state.likedUserIDs;

  return (
    <div className="container">
      <h1>Liked Users</h1>
      {likedUserIDs.length ? (
        <UserSummary userIds={likedUserIDs} />
      ) : (
        <p>Not be liked yet...</p>
      )}
    </div>
  );
};

export default LikedUsers;
