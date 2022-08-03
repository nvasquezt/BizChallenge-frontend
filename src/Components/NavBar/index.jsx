import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import {
  HOME_ROUTE,
  LOGIN_ROUTE,
  SIGNUP_ROUTE,
  PROFILE_ROUTE,
  FAVORITES_ROUTE,
} from '../../Constants';
import './NavBar.css';

const NavBar = () => {
  return (
    <nav className="navigationBar">
      <NavLink to={HOME_ROUTE}>Home</NavLink>
      <NavLink to={LOGIN_ROUTE}>Login</NavLink>
      <NavLink to={SIGNUP_ROUTE}>Signup</NavLink>
      <NavLink to={PROFILE_ROUTE}>Profile</NavLink>
      <NavLink to={FAVORITES_ROUTE}>Favorites</NavLink>
      <Link
        to="/"
        onClick={() => {
          localStorage.removeItem('token');
          window.location.href = '/';
        }}
      >
        Logout
      </Link>
    </nav>
  );
};

export default NavBar;
