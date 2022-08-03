import React, { useEffect } from 'react';
import AddMovieModal from '../../Components/AddMovieModal';
import CardMovies from '../../Components/CardMovies';
import { useDispatch, useSelector } from 'react-redux';
import { actionDisplayModal, thunkAllMovies} from '../../Store/actions';
import('./Home.scss');

const Home = () => {
  const dispatch = useDispatch();

  const displayModal = useSelector(state => state.displayModal);
  const allMovies = useSelector(state => state.allMovies);

  const handleClick = () => {
    dispatch(actionDisplayModal(true));
  }

  useEffect(() => {
    dispatch(thunkAllMovies());
  }, [displayModal]);

  return (
    <div className="homeContainer">
      <h1 className="homeContainer_title">Movie&apos;s Challenge</h1>
      <section className="homeContainer_filter">
        <h2 className="homeContainer_filter--title">Filter By: </h2>
        <div className="homeContainer_filterSelect">
          <h3 className="homeContainer_filterSelect--label">Category</h3>
          <select className="homeContainer_filterSelect--select">
            <option value="">All</option>
            <option value="">Action</option>
            <option value="">Adventure</option>
          </select>
        </div>
      </section>
      <section className="homeContainer_movies">
        <h2 className="homeContainer_movies--title">Movies</h2>
        <div className="homeContainer_movies--container">
          {allMovies.map((movie) => (
            <CardMovies
              key={movie.id}
              image={movie.image}
              title={movie.title}
              year={movie.year}
              director={movie.director}
              cast={movie.cast}
              synopsis={movie.synopsis}
              category={movie.category}
            /> 
          ))}
        </div>
      </section>
      <footer className="homeContainer_footer">
        <p className="homeContainer_footer--text">
          Norbey Vasquez Torres © 2022 - version 1.0.0
        </p>
      </footer>
      <div>
        <button className="homeContainer_button" onClick={handleClick}>
          Add movie
        </button>
      </div>
      {displayModal && ( <AddMovieModal /> )}
    </div>
  );
};

export default Home;
