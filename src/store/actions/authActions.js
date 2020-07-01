export const signIn = (credentials) => {
  return (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();

    firebase
      .auth()
      .signInWithEmailAndPassword(credentials.email, credentials.password)
      .then(() => {
        dispatch({ type: 'LOGIN_SUCCESS' });
      })
      .catch((err) => {
        dispatch({ type: 'LOGIN_ERROR', err });
      });
  };
};

export const signOut = () => {
  return (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();

    firebase
      .auth()
      .signOut()
      .then(() => {
        dispatch({ type: 'SIGNOUT_SUCCESS' });
      });
  };
};

export const signUp = (newUser) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firebase = getFirebase();
    const firestore = getFirestore();

    validateScreenName(newUser.screenName, firestore).then((res) => {
      if (res) {
        dispatch({
          type: 'SCREENNAME_IS_ALREADY_USED',
          err: { message: 'This @screenname is already used.' },
        });
      } else {
        firebase
          .auth()
          .createUserWithEmailAndPassword(newUser.email, newUser.password)
          .then((resp) => {
            return firestore.collection('users').doc(resp.user.uid).set({
              userName: newUser.userName,
              screenName: newUser.screenName,
            });
          })
          .then(() => {
            dispatch({ type: 'SIGNUP_SUCCESS' });
          })
          .catch((err) => {
            dispatch({ type: 'SIGNUP_ERROR', err });
          });
      }
    });
  };
};

const validateScreenName = (screenName, firestore) => {
  return firestore
    .collection('users')
    .where('screenName', '==', screenName)
    .get()
    .then((querySnapshot) => {
      return querySnapshot.docs;
    })
    .catch((err) => console.log(err));
};
