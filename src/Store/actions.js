import {
  serviceAllMovies,
  serviceMovieById,
  serviceMoviesByQuery,
} from '../services/moviesService';
import { serviceUserById } from '../services/userService';

export const actionAllMovies = (movies) => {
  return {
    type: 'GET_MOVIES',
    payload: movies,
  };
};

export const actionOneMovieById = (movie) => {
  return {
    type: 'GET_ONE_MOVIE_BY_ID',
    payload: movie,
  };
};

export const actionUserById = (user) => {
  return {
    type: 'GET_USER_BY_ID',
    payload: user,
  };
};

export const actionDisplayModal = (display) => {
  return {
    type: 'DISPLAY_MODAL',
    payload: display,
  };
};

export const actionMoviesByQuery = (movies) => {
  return {
    type: 'GET_MOVIES',
    payload: movies,
  };
};

export const thunkAllMovies = () => async (dispatch) => {
  try {
    const movies = await serviceAllMovies();
    dispatch(actionAllMovies(movies));
  } catch (error) {
    console.log(error);
  }
};

export const thunkOneMovieById = (id) => async (dispatch) => {
  try {
    const movie = await serviceMovieById(id);
    dispatch(actionOneMovieById(movie));
  } catch (error) {
    console.log(error);
  }
};

export const thunkUserById = (id) => async (dispatch) => {
  try {
    const user = await serviceUserById(id);
    dispatch(actionUserById(user));
  } catch (error) {
    console.log(error);
  }
};

export const thunkMoviesByQuery = (query) => async (dispatch) => {
  try {
    const movies = await serviceMoviesByQuery(query);
    dispatch(actionMoviesByQuery(movies));
  } catch (error) {
    console.log(error);
  }
};
