import { v4 as uuidv4 } from 'uuid';

export const createPost = (post) => {
  return (dispatch, getState, { getFirestore }) => {
    //make async call to database
    const firestore = getFirestore();
    firestore
      .collection('posts')
      .add({
        ...post,
        // userName: 'test userName',
        authorId: 123,
        postId: uuidv4(),
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
