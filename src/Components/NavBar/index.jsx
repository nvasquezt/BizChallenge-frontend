import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import {
  HOME_ROUTE,
  LOGIN_ROUTE,
  SIGNUP_ROUTE,
  PROFILE_ROUTE,
  FAVORITES_ROUTE,
} from '../../Constants';
import './NavBar.scss';

const NavBar = () => {
  if (localStorage.getItem('token')) {
    return (
      <nav className="navigationBar">
        <Link
          className="navigationBar_link"
          to="/"
          onClick={() => {
            localStorage.removeItem('token');
            window.location.href = '/';
          }}
        >
          Logout
        </Link>
        <NavLink className="navigationBar_link" to={PROFILE_ROUTE}>
          Profile
        </NavLink>
        <NavLink className="navigationBar_link" to={FAVORITES_ROUTE}>
          Favorites
        </NavLink>
        <NavLink className="navigationBar_link" to={HOME_ROUTE}>
          Home
        </NavLink>
      </nav>
    );
  } else {
    return (
      <nav className="navigationBar">
        <NavLink className="navigationBar_link" to={LOGIN_ROUTE}>
          Login
        </NavLink>
        <NavLink className="navigationBar_link" to={SIGNUP_ROUTE}>
          Signup
        </NavLink>
        <NavLink className="navigationBar_link" to={HOME_ROUTE}>
          Home
        </NavLink>
      </nav>
    );
  }
};

export default NavBar;
