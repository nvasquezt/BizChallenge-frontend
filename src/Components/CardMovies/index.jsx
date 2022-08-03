import React from 'react'
import Proptypes from 'prop-types';

const CardMovies = (props) => {
    const { image, title, year, director, cast, synopsis, category } = props;
  return (
    <div className="cardMoviesContainer">
        <div className="cardMoviesContainer_image">
            <img src={image} alt=""/>
        </div>
        <div className="cardMoviesContainer_content">
            <h2 className="cardMoviesContainer_content--title">{title}</h2>
            <p className="cardMoviesContainer_content--year">{year}</p>
            <p className="cardMoviesContainer_content--director">{director}</p>
            <p className="cardMoviesContainer_content--cast">{cast}</p>
            <p className="cardMoviesContainer_content--synopsis">{synopsis}</p>
            <p className="cardMoviesContainer_content--category">{category}</p>
        </div>

    </div>
  )
}

CardMovies.propTypes = {
    image: Proptypes.string.isRequired,
    title: Proptypes.string.isRequired,
    year: Proptypes.string.isRequired,
    director: Proptypes.string.isRequired,
    cast: Proptypes.string.isRequired,
    synopsis: Proptypes.string.isRequired,
    category: Proptypes.string.isRequired
}

export default CardMovies