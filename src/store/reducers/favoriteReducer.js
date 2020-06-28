const initState = {};

const favoriteReducer = (state = initState, action) => {
  switch (action.type) {
    case 'ADD_FAVORITE':
      console.log('success add favorite');
      return state;

    case 'ADD_FAVORITE_ERROR':
      console.log('error add favorite', action.err);
      return state;

    case 'REMOVE_FAVORITE':
      console.log('success remove favorite');
      return state;

    case 'REMOVE_FAVORITE_ERROR':
      console.log('error remove favorite', action.err);
      return state;

    default:
      return state;
  }
};

export default favoriteReducer;
