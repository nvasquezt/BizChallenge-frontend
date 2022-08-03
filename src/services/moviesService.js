const API_URL = process.env.REACT_APP_API_URL;

export const serviceAllMovies = async () => {
  try {
    const response = await fetch(`${API_URL}/movies`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const serviceMovieById = async (id) => {
  try {
    const response = await fetch(`${API_URL}/movies/${id}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const serviceCreateMovie = async (movie) => {
  try {
    const response = await fetch(`${API_URL}/movies`, {
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
    const response = await fetch(`${API_URL}/movies/${movie.id}`, {
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
    const response = await fetch(`${API_URL}/movies/${id}`, {
      method: 'DELETE',
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};
