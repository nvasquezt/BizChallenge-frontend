const API_URL = 'https://movies-challenge-be.herokuapp.com'

export const serviceAllMovies = async () => {
  try {
    const response = await fetch(`${API_URL}/api/movies`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const serviceMovieById = async (id) => {
  try {
    const response = await fetch(`${API_URL}/api/movies/${id}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const serviceCreateMovie = async (movie) => {
  try {
    const response = await fetch(`${API_URL}/api/movies`, {
      method: 'POST',
      body: movie,
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const serviceUpdateMovie = async (movie) => {
  try {
    const response = await fetch(`${API_URL}/api/movies/${movie.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(movie),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const serviceDeleteMovie = async (id) => {
  try {
    const response = await fetch(`${API_URL}/api/movies/${id}`, {
      method: 'DELETE',
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const serviceMoviesByQuery = async (query) => {
  try {
    const response = await fetch(`${API_URL}/api/movies/query`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      params: {
        query,
      },
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};
