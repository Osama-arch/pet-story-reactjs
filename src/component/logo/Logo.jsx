import React from 'react';
import { Link } from 'react-router-dom';
import './_logo.scss';
function Logo({ className }) {
  return (
    <h1 className={className}>
      <Link to='/'>petStory online</Link>
    </h1>
  );
}

export default Logo;
