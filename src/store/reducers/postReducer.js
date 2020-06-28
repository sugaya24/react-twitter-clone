const initState = {};

const projectReducer = (state = initState, action) => {
  switch (action.type) {
    case 'ADD_POST':
      console.log('add post success', action.post);
      return state;
    case 'ADD_POST_ERROR':
      console.log('add post error');
      return state;
    case 'DELETE_POST':
      console.log('delete post success');
      return state;
    default:
      return state;
  }
};

export default projectReducer;
