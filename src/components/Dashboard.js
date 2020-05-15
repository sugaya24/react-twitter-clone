import React from 'react';
import { PostList } from '../components/pages';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { firestoreConnect } from 'react-redux-firebase';

export const Dashboard = ({ posts }) => {
  return (
    <div className="container">
      <PostList posts={posts} />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    posts: state.firestore.ordered.posts,
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([{ collection: 'posts', orderBy: ['createdAt', 'desc'] }])
)(Dashboard);
