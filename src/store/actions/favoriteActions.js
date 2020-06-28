export const addFavorite = (postId, currentUserId) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firebase = getFirebase();
    const firestore = getFirestore();
    if (!currentUserId) {
      alert("You're not signed in");
      return;
    }
    firestore
      .collection('posts')
      .doc(postId)
      .get()
      .then((res) => {
        if (res.data().likedUserIDs.indexOf(currentUserId) < 0) {
          firestore
            .collection('posts')
            .doc(postId)
            .update({
              likedUserIDs: firebase.firestore.FieldValue.arrayUnion(
                currentUserId
              ),
            })
            .then(() => dispatch({ type: 'ADD_FAVORITE' }))
            .catch((err) => dispatch({ type: 'ADD_FAVORITE_ERROR', err }));
        } else {
          firestore
            .collection('posts')
            .doc(postId)
            .update({
              likedUserIDs: firebase.firestore.FieldValue.arrayRemove(
                currentUserId
              ),
            })
            .then(() => dispatch({ type: 'REMOVE_FAVORITE' }))
            .catch((err) => dispatch({ type: 'REMOVE_FAVORITE_ERROR', err }));
        }
      });
  };
};
