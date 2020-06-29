import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { firestoreConnect } from 'react-redux-firebase';
import { PostSummary } from '../pages';

export const UserLikes = ({ auth, posts }) => {
  return (
    <div className="container">
      <h2>Posts you liked</h2>
      {posts &&
        posts.map((post) => {
          return <PostSummary key={post.postId} post={post} />;
        })}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
    posts: state.firestore.ordered.posts,
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect(({ auth }) => {
    if (!auth.uid) return [];
    return [
      {
        collection: 'posts',
        orderBy: ['createdAt', 'desc'],
        where: ['likedUserIDs', 'array-contains', auth.uid],
      },
    ];
  })
)(UserLikes);
