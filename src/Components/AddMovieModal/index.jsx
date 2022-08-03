import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { actionDisplayModal } from '../../Store/actions';
import { serviceCreateMovie } from '../../services/moviesService';
import './AddMovieModal.scss'

const AddMovieModal = () => {
  const [image, setImage] = useState(null);
  const [ createMovie, setCreateMovie ] = useState({
    title: '',
    year: '',
    director: '',
    cast: '',
    synopsis: '',
    category: '',
    image: 'https://res.cloudinary.com/dunrpkkpq/image/upload/v1659503550/Movies/movies-photo_pdkjk7.png'
  })
  const dispatch = useDispatch();
  
  const handleImageChange = (e) => {
    e.preventDefault();
    const file = e.target.files[0];
    setImage(file);
  };

  const handleChange = (e) => {
    setCreateMovie({
      ...createMovie,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const createMovieProcess = async () => {
      const formData = new FormData();
      formData.append('file', image);
      formData.append("title", createMovie.title);
      formData.append("year", createMovie.year);
      formData.append("director", createMovie.director);
      formData.append("cast", createMovie.cast);
      formData.append("synopsis", createMovie.synopsis);
      formData.append("category", createMovie.category);
      const response = await serviceCreateMovie(formData);
      if (response !== undefined || response !== null || response.message !== "error") {
        dispatch(actionDisplayModal(false));
      } else {
        console.log('error');
      }
    }
    createMovieProcess();
  }

  const handleCloseButton = () => {
    dispatch(actionDisplayModal(false));
  }
  return (
    <div className="add-movie-modal">
      <div className="movieModalContainer">
          <button className="movieModalContainer_closeButton" onClick={handleCloseButton}>
            X
          </button>
        <div className="movieModalContainer_head">
          <h1>Add Movie</h1>
        </div>
        <form className="movieModalContainer_contentForm" onSubmit={handleSubmit}>
          <div className="movieModalContainer_contentForm--container">
            <label className="movieModalContainer_contentForm--label">
              Title
            </label>
            <input
              className="movieModalContainer_contentForm--input"
              type="text"
              placeholder="Title"
              name='title'
              onChange={handleChange}
            />
          </div>
          <div className="movieModalContainer_contentForm--container">
            <label className="movieModalContainer_contentForm--label">
              Year
            </label>
            <input
              className="movieModalContainer_contentForm--input"
              type="text"
              placeholder="Year"
              name='year'
              onChange={handleChange}
            />
          </div>
          <div className="movieModalContainer_contentForm--container">
            <label className="movieModalContainer_contentForm--label">
              Director
            </label>
            <input
              className="movieModalContainer_contentForm--input"
              type="text"
              placeholder="Director"
              name='director'
              onChange={handleChange}
            />
          </div>
          <div className="movieModalContainer_contentForm--container">
            <label className="movieModalContainer_contentForm--label">
              Cast
            </label>
            <textarea
              className="movieModalContainer_contentForm--input"
              type="text"
              placeholder="Cast"
              name='cast'
              onChange={handleChange}
            />
          </div>
          <div className="movieModalContainer_contentForm--container">
            <label className="movieModalContainer_contentForm--label">
              Synopsis
            </label>
            <textarea
              className="movieModalContainer_contentForm--input"
              type="text"
              placeholder="Synopsis"
              name='synopsis'
              onChange={handleChange}
            />
          </div>
          <div className="movieModalContainer_contentForm--container">
            <label className="movieModalContainer_contentForm--label">
              Category
            </label>
            <select
              className="movieModalContainer_contentForm--select"
              name='category'
              onChange={handleChange}
            >
              <option value="">All</option>
              <option value="action">Action</option>
              <option value="adventure">Adventure</option>
              <option value="comedy">Comedy</option>
              <option value="drama">Drama</option>
              <option value="fantasy">Fantasy</option>
              <option value="historical">Historical</option>
            </select>
          </div>
          <div className="movieModalContainer_contentForm--container">
            <label className="movieModalContainer_contentForm--label">
              Image
            </label>
            <input
              className="movieModalContainer_contentForm--inputImage"
              type="file"
              name='image'
              onChange={handleImageChange}
            />
          </div>
          <button className="movieModalContainer_contentForm--button" type="submit">
            Add movie
          </button>
        </form>
      </div>
    </div>

  )
}

export default AddMovieModal