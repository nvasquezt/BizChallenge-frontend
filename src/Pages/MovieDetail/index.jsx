import React, { useEffect } from 'react';
import { thunkOneMovieById } from '../../Store/actions';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import('./MovieDetail.scss');

const MovieDetail = () => {
  const movieId = useParams().id;
  const dispatch = useDispatch();
  const oneMovieById = useSelector((state) => state.oneMovieById);

  useEffect(() => {
    dispatch(thunkOneMovieById(movieId));
  }, [dispatch, movieId]);

  const { title, image, director, synopsis, year, cast, category } =
    oneMovieById;

  return (
    <div className="movieDetailContainer">
      <div className="movieDetailContainer_image">
        <img
          className="movieDetailContainer_image--img"
          src={image}
          alt={title}
        />
      </div>
      <div className="movieDetailContainer_info">
        <h1 className="movieDetailContainer_info--title">{title}</h1>
        <p className="movieDetailContainer_info--director">
          <strong>Director:</strong> {director}
        </p>
        <p className="movieDetailContainer_info--year">
          <strong>Year:</strong> {year}
        </p>
        <p className="movieDetailContainer_info--category">
          <strong>Category:</strong> {category}
        </p>
        <p className="movieDetailContainer_info--cast">
          <strong>Cast:</strong> {cast}
        </p>
        <p className="movieDetailContainer_info--synopsis">
          <strong>Synopsis:</strong> {synopsis}
        </p>
      </div>
    </div>
  );
};

export default MovieDetail;
