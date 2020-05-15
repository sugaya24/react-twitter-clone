import React from 'react';
import { PostSummary } from '../pages';

export const PostList = ({ posts }) => {
  return (
    <>
      {posts &&
        posts.map((post) => {
          return <PostSummary key={post.postId} post={post} />;
        })}
    </>
  );
};

export default PostList;
