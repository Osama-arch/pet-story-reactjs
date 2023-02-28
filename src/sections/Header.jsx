import './_header.scss';
import { useEffect, useState } from 'react';
import BurgerButton from '../component/BurgerButton/BurgerButton';
import NavBar from '../component/navBar/NavBar';
import Logo from '../component/logo/Logo';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const handleClick = () => {
    setMenuOpen(!menuOpen);
  };
  useEffect(() => {
    const handleWindowResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleWindowResize);
    if (windowWidth >= 860) setMenuOpen(false);
    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, [windowWidth]);
  return (
    <header>
      <div className='header__container container'>
        <Logo
          className={menuOpen ? 'logo logo-burger' : 'logo logo-mobile'}
          type={'header'}
        />
        <NavBar className={'nav-container'} type={'header'} />
        <BurgerButton menuOpen={menuOpen} handleClick={handleClick} />
      </div>
    </header>
  );
}
