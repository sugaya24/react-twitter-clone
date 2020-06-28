import { v4 as uuidv4 } from 'uuid';

export const createPost = (post, userName) => {
  return (dispatch, getState, { getFirestore }) => {
    //make async call to database
    const firestore = getFirestore();
    const profile = getState().firebase.profile;
    const authorId = getState().firebase.auth.uid;
    firestore
      .collection('posts')
      .add({
        ...post,
        authorFirstName: profile.firstName,
        authorLastName: profile.lastName,
        authorId,
        postId: uuidv4(),
        likedUserIDs: [],
        createdAt: new Date(),
      })
      .then(() => {
        dispatch({ type: 'ADD_POST', post });
      })
      .catch((err) => {
        dispatch({ type: 'ADD_POST_ERROR', err });
      });
  };
};

export const deletePost = (id) => {
  return (dispatch, getState, { getFirestore }) => {
    console.log(getState);
    const firestore = getFirestore();
    firestore
      .collection('posts')
      .doc(id)
      .delete()
      .then(() => {
        dispatch({ type: 'DELETE_POST' });
      });
  };
};
