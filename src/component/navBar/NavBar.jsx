import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './_navbar.scss';
function NavBar({ className, type }) {
  const location = useLocation();
  return (
    <div className={className}>
      <nav className='navbar'>
        <ul>
          <li>
            <Link
              to='/'
              className={location.pathname === '/' ? 'active' : null}>
              About
            </Link>
          </li>
          <li>
            <Link
              to='/map'
              className={location.pathname === '/map' ? 'active' : null}>
              Map
            </Link>
          </li>
          <li>
            <Link
              to='/zoos'
              className={location.pathname === '/zoos' ? 'active' : null}>
              Zoos
            </Link>
          </li>
          {type === 'header' && (
            <li>
              <Link
                to='/donate'
                className={location.pathname === '/donate' ? 'active' : null}>
                Donate
              </Link>
            </li>
          )}
          <li>
            <Link
              to='/contact'
              className={location.pathname === '/contact' ? 'active' : null}>
              Contact Us
            </Link>
          </li>
        </ul>
      </nav>
      {type === 'header' && (
        <a
          href='https://www.figma.com/file/jfEFwkXVj1WRq7sUHDr8os/PetStory-online'
          className='designed-by'>
          designed by ©
        </a>
      )}
    </div>
  );
}

export default NavBar;
