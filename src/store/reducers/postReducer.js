const initState = {};

const projectReducer = (state = initState, action) => {
  switch (action.type) {
    case 'ADD_POST':
      console.log('add post success');
      return state;
    case 'ADD_POST_ERROR':
      console.log('add post error');
      return state;
    default:
      return state;
  }
};

export default projectReducer;
