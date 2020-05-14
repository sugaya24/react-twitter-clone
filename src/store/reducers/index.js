import postReducer from './postReducer';
import { combineReducers } from 'redux';
import { firestoreReducer } from 'redux-firestore';
import { firebaseReducer } from 'react-redux-firebase';

export default combineReducers({
  post: postReducer,
  firestore: firestoreReducer,
  firebase: firebaseReducer,
});
