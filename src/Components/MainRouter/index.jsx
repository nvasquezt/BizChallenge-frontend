import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {
  FAVORITES_ROUTE,
  HOME_ROUTE,
  PROFILE_ROUTE,
  MOVIE_ROUTE,
} from '../../Constants';
import Home from '../../Pages/Home';
import Profile from '../../Pages/Profile';
import Favorites from '../../Pages/Favorites';
import NavBar from '../NavBar';
import MovieDetail from '../../Pages/MovieDetail';

const MainRouter = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path={HOME_ROUTE} element={<Home />} />
        <Route path={PROFILE_ROUTE} element={<Profile />} />
        <Route path={FAVORITES_ROUTE} element={<Favorites />} />
        <Route path={MOVIE_ROUTE} element={<MovieDetail />} />
      </Routes>
    </BrowserRouter>
  );
};

export default MainRouter;
