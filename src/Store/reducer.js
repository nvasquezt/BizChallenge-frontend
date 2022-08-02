const initialState = {
  allMovies: [],
  oneMovie: {},
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case 'GET_MOVIES':
      return {
        ...state,
        allMovies: action.payload,
      };
    case 'GET_ONE_MOVIE':
      return {
        ...state,
        oneMovie: action.payload,
      };
    default:
      return state;
  }
}
