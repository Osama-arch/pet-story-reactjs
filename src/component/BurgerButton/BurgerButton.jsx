import { ReactComponent as BurgerMenu } from '../../assests/svg/burger_menu.svg';
import { ReactComponent as CloseMenu } from '../../assests/svg/x_icon.svg';
import NavBar from '../navBar/NavBar';
import './_burgerButton.scss';
const BurgerButton = ({ menuOpen, handleClick }) => {
  return (
    <>
      <button onClick={handleClick} className={`burger-button`}>
        {menuOpen ? (
          <CloseMenu className='close-icon' />
        ) : (
          <BurgerMenu className='burger-icon' />
        )}
      </button>
      {menuOpen && (
        <div className='overlay' onClick={handleClick}>
          <NavBar className={'burger-menu'} />
        </div>
      )}
    </>
  );
};

export default BurgerButton;
