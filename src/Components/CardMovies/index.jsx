import React from 'react';
import Proptypes from 'prop-types';
import('./CardMovies.scss');

const CardMovies = (props) => {
  const { image, title, year, director, category } = props;
  return (
    <div className="cardMoviesContainer">
      <div className="cardMoviesContainer_image">
        <img
          className="cardMoviesContainer_image--img"
          src={image}
          alt={title}
        />
      </div>
      <div className="cardMoviesContainer_content">
        <h2 className="cardMoviesContainer_content--title">{title}</h2>
        <p className="cardMoviesContainer_content--year">
          <strong>Year:</strong> {year}
        </p>
        <p className="cardMoviesContainer_content--director">
          <strong>Director:</strong> {director}
        </p>
        <p className="cardMoviesContainer_content--category">
          <strong>Category:</strong> {category}
        </p>
      </div>
    </div>
  );
};

CardMovies.propTypes = {
  image: Proptypes.string.isRequired,
  title: Proptypes.string.isRequired,
  year: Proptypes.string.isRequired,
  director: Proptypes.string.isRequired,
  category: Proptypes.string.isRequired,
};

export default CardMovies;
