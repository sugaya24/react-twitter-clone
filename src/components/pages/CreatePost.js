import React, { useState } from 'react';
import { createPost } from '../../store/actions/postAction';
import { connect } from 'react-redux';

const CreatePost = ({ history, createPost }) => {
  const [userName, setUserName] = useState('unknown');
  const [state, setState] = useState({
    userName,
    content: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(state);
    createPost(state);
    history.push('/');
  };

  const handleChange = (e) => {
    setUserName(e.target.value);
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
          <label htmlFor="name">Name</label>
          <input type="text" id="userName" onChange={handleChange} />
        </div>
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
