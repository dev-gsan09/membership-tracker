import React from 'react';
import { useSelector } from 'react-redux';
import { Auth } from '../../layouts';
import PropTypes from 'prop-types';

function AuthGuard({ children }) {
  const isLoggedIn = useSelector(state => state.user.isLoggedIn);
  return isLoggedIn ? children : <Auth />;
}

AuthGuard.propTypes = {
  children: PropTypes.element.isRequired
};

export default AuthGuard;