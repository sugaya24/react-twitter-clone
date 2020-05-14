export const createPost = (post) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    //make async call to database
    const firestore = getFirestore();
    firestore
      .collection('posts')
      .add({
        ...post,
        userName: 'test userName',
        authorId: 123,
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
