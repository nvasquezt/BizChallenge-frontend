import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { actionSignupModal } from '../../Store/actions'
import ('./SignUp.scss');

const SignUp = () => {
  const dispatch = useDispatch();
  const [signUp, setSignUp] = useState({
    email: '',
    name: '',
    lastName: '',
    password: ''
  });

  const handleChange = (e) => {
    setSignUp({
      ...signUp,
      [e.target.name]: e.target.value
    });
  }

  const handleClick = () => {
    dispatch(actionSignupModal(false));
  }
  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(signUp);
  }

  return (
    <div className="signup">
      <div className="signUpContainer">
        <div className="signUpContainer_buttonClose" onClick={handleClick}>
          <h1>X</h1>
        </div>
        <h1 className="signUpContainer_title">Sign Up</h1>
        <form className="signUpContainer_form" onSubmit={handleSubmit}>
          <div className="signUpContainer_contentForm--container">
            <label className="signUpContainer_contentForm--label">
                Email
              </label>
              <input
                className="signUpContainer_contentForm--input"
                type="text"
                placeholder="Email"
                name="email"
                onChange={handleChange}
              />
          </div>
          <div className="signUpContainer_contentForm--container">
            <label className="signUpContainer_contentForm--label">
              Name
            </label>
            <input
              className="signUpContainer_contentForm--input"
              type="text"
              placeholder="Name"
              name="name"
              onChange={handleChange}
            />
          </div>
          <div className="signUpContainer_contentForm--container">
            <label className="signUpContainer_contentForm--label">
              Last Name
            </label>
            <input
              className="signUpContainer_contentForm--input"
              type="text"
              placeholder="Last Name"
              name="lastName"
              onChange={handleChange}
            />
          </div>
          <div className="signUpContainer_contentForm--container">
            <label className="signUpContainer_contentForm--label">
              Password
            </label>
            <input
              className="signUpContainer_contentForm--input"
              type="password"
              placeholder="Password"
              name="password"
              onChange={handleChange}
            />
          </div>
          <div className="signUpContainer_contentForm--container">
            <button className="signUpContainer_contentForm--button"
              type="submit">
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
