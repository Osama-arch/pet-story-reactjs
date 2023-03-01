import React from 'react';
import { Link } from 'react-router-dom';
const ComingSoon = () => {
  return (
    <main className='overlay'>
      <h1 className='comming-soon'>ComingSoon</h1>
      <Link to='/' className='hero__online-button'>
        Back to main page
      </Link>
    </main>
  );
};

export default ComingSoon;
