import React from 'react';
import { deletePost } from '../../store/actions/postAction';
import { connect } from 'react-redux';

export const PostSummary = ({ post, deletePost }) => {
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
              <i
                className="material-icons"
                style={{ cursor: 'pointer' }}
                onClick={(e) => deletePost(e, post.id)}
              >
                delete
              </i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    deletePost: (e, id) => {
      e.preventDefault();
      dispatch(deletePost(id));
    },
  };
};

export default connect(null, mapDispatchToProps)(PostSummary);
