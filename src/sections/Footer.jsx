import './_footer.scss';
import Logo from '../component/logo/Logo';
import { Link } from 'react-router-dom';
import NavBar from '../component/navBar/NavBar';
export default function Footer() {
  return (
    <footer className='footer'>
      <div className='footer__container container'>
        <Logo className='footer__logo logo logo_footer' />
        <form className='footer__form'>
          <h5 className='footer__form-title'>Subscribe to our news</h5>
          <input
            type='email'
            placeholder='Enter your email'
            className='footer__form-email'
            required
          />
          <button type='submit' className='footer__form-submit-button'>
            Submit
          </button>
        </form>
        <Link to='/donate' type='button' className='footer__donate-button'>
          donate for volunteers
        </Link>
        <div className='footer__social social'>
          <a
            href='https://www.facebook.com
'
            className='social__link'>
            <span className='social__icon social__icon-facebook'></span>
            <span className='social__name'>Facebook</span>
          </a>
          <a
            href='https://www.facebook.com
'
            className='social__link'>
            <span className='social__icon social__icon-twitter'></span>
            <span className='social__name'>Twitter</span>
          </a>
          <a
            href='https://www.facebook.com
'
            className='social__link'>
            <span className='social__icon social__icon-instagram'></span>
            <span className='social__name'>Instagram</span>
          </a>
          <a
            href='https://www.facebook.com
'
            className='social__link'>
            <span className='social__icon social__icon-youtube'></span>
            <span className='social__name'>Youtube</span>
          </a>
        </div>
        <NavBar className={'nav-container footer__menu'} />
        <a
          href='https://www.figma.com
'
          className='footer__designed'>
          <span>Designed by Alisa Samborskaya</span>
          <span>©RSSchool & ©Yem Digital 2021</span>
        </a>
      </div>
    </footer>
  );
}
