import authReducer from './authReducer';
import postReducer from './postReducer';
import favoriteReducer from './favoriteReducer';
import { combineReducers } from 'redux';
import { firestoreReducer } from 'redux-firestore';
import { firebaseReducer } from 'react-redux-firebase';

const rootReducer = combineReducers({
  auth: authReducer,
  post: postReducer,
  favorite: favoriteReducer,
  firestore: firestoreReducer,
  firebase: firebaseReducer,
});

export default rootReducer;
