import React from 'react';
import { Link } from 'react-router-dom';
import './_logo.scss';
function Logo({ className, type }) {
  return type === 'header' ? (
    <h1 className={className}>
      <Link to='/'>petStory online</Link>
    </h1>
  ) : (
    <div className={className}>
      <Link to={'/'}>petStory online</Link>
    </div>
  );
}

export default Logo;
