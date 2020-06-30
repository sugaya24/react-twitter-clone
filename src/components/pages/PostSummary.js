import React from 'react';
import { deletePost } from '../../store/actions/postAction';
import { addFavorite } from '../../store/actions/favoriteActions';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import moment from 'moment';

export const PostSummary = ({
  auth,
  profile,
  post,
  deletePost,
  addFavorite,
}) => {
  const userName = profile.firstName + profile.lastName;
  const postId = post.id;

  return (
    <div className="container">
      <div className="row">
        <div className="col s12">
          <div className="card">
            <PostSummaryLink>
              <Link
                to={{
                  pathname: `/${userName}/status/${postId}`,
                  state: { post: post },
                }}
              >
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
              </Link>
            </PostSummaryLink>
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

export default connect(mapStateToProps, mapDispatchToProps)(PostSummary);

export const PostSummaryLink = styled.div`
  a {
    color: #000000;
  }
  a:hover {
    color: #567876;
  }
  :hover {
    background-color: #fcfcfc;
  }
`;
