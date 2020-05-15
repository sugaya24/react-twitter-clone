import React, { useState } from 'react';
import { createPost } from '../../store/actions/postAction';
import { connect } from 'react-redux';

const CreatePost = ({ createPost }) => {
  const [state, setState] = useState({
    content: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(state);
    createPost(state);
  };

  const handleChange = (e) => {
    setState({
      ...state,
      [e.target.id]: e.target.value,
    });
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit} className="white">
        <h5 className="grey-text text-darken-3">Create a Post</h5>
        <div className="input-field">
          <label htmlFor="content">Post</label>
          <textarea
            className="materialize-textarea"
            id="content"
            onChange={handleChange}
          ></textarea>
        </div>
        <div className="input-field">
          <button className="btn blue darken-2 z-depth-0">Post</button>
        </div>
      </form>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    createPost: (post) => {
      dispatch(createPost(post));
    },
  };
};

export default connect(null, mapDispatchToProps)(CreatePost);
