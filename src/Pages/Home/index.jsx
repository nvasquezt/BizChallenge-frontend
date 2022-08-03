import React from 'react';
import('./Home.scss');

const Home = () => {
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
          <h1>holaaaa</h1>
        </div>
      </section>
      <footer className="homeContainer_footer">
        <h2 className="homeContainer_footer--title">Footer</h2>
        <p className="homeContainer_footer--text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Pellentesque euismod, nisi eu consectetur consectetur, nisl
        </p>
      </footer>
      <div>
        <button className="homeContainer_button">
          Add movie
        </button>
      </div>
    </div>
  );
};

export default Home;
