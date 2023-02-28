import React from 'react';
import './_hero.scss';
import { Link } from 'react-router-dom';
function Hero() {
  return (
    <section className='hero'>
      <div className='hero__container container'>
        <div className='hero__title-wrapper'>
          <h2 className='hero__title'>
            Watch your <span>favorite</span> animal online
          </h2>
        </div>
        <Link className='hero__online-button'>watch online</Link>
      </div>
    </section>
  );
}

export default Hero;
