import React from 'react';
import { connect } from 'react-redux';
import { deletePost } from '../../store/actions/postAction';
import { addFavorite } from '../../store/actions/favoriteActions';
import moment from 'moment';

export const PostDetail = ({ auth, deletePost, addFavorite, location }) => {
  const post = location.state.post;

  return (
    <div className="container">
      <h2>Post Detail</h2>
      <div className="row">
        <div className="col s12">
          <div className="card">
            <div className="card-content">
              <span className="card-title">
                <i className="material-icons">assignment_ind</i>
                {`${post.authorFirstName} ${post.authorLastName}`}
              </span>
              <p>{post.content}</p>
              <small>
                {moment.unix(post.createdAt.seconds).utc().format('llll')}
              </small>
              <div>
                <i
                  className="material-icons"
                  style={{ cursor: 'pointer' }}
                  onClick={(e) => addFavorite(e, post.id, auth.uid)}
                >
                  star_border
                </i>
                {post.likedUserIDs.length}
                {auth.uid === post.authorId ? (
                  <i
                    className="material-icons right"
                    style={{ cursor: 'pointer' }}
                    onClick={(e) => deletePost(e, post.id)}
                  >
                    delete
                  </i>
                ) : null}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
    profile: state.firebase.profile,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    deletePost: (e, id) => {
      e.preventDefault();
      if (window.confirm('Are you sure to delete this post?')) {
        dispatch(deletePost(id));
      }
    },
    addFavorite: (e, postId, currentUserId) => {
      e.preventDefault();
      dispatch(addFavorite(postId, currentUserId));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PostDetail);
