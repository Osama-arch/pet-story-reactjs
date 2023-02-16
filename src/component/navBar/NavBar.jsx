import React from 'react';
import { Link } from 'react-router-dom';
import './_navbar.scss';
function NavBar({ className }) {
  return (
    <div className={className}>
      <nav className='navbar'>
        <ul>
          <li>
            <Link to='/' className='active'>
              About
            </Link>
          </li>
          <li>
            <Link to='/map'>Map</Link>
          </li>
          <li>
            <Link to='/zoos'>Zoos</Link>
          </li>
          <li>
            <Link to='/donate'>Donate</Link>
          </li>
          <li>
            <Link to='/contact'>Contact Us</Link>
          </li>
        </ul>
      </nav>
      <a
        href='https://www.figma.com/file/jfEFwkXVj1WRq7sUHDr8os/PetStory-online'
        className='designed-by'>
        designed by ©
      </a>
    </div>
  );
}

export default NavBar;
