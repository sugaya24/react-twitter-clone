import React from 'react';

export const PostSummary = ({ post }) => {
  return (
    <div className="container">
      <div className="row">
        <div className="col s12">
          <div className="card">
            <div className="card-content">
              <span className="card-title">
                <i className="material-icons">assignment_ind</i>
                {post.userName}
              </span>
              <p>{post.content}</p>
              <i className="material-icons">star_border</i>
              <i className="material-icons">add</i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostSummary;
