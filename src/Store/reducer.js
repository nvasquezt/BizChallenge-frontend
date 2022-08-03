const initialState = {
  allMovies: [],
  oneMovieById: {},
  getUser: {},
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case 'GET_MOVIES':
      return {
        ...state,
        allMovies: action.payload,
      };
    case 'GET_ONE_MOVIE_BY_ID':
      return {
        ...state,
        oneMovieById: action.payload,
      };
    case 'GET_USER':
      return {
        ...state,
        getUser: action.payload,
      };
    default:
      return state;
  }
}
