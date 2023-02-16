import React from 'react';
import './_hero.scss';
function Hero() {
  return (
    <section className='hero'>
      <div className='hero__container container'>
        <div className='hero__title-wrapper'>
          <h2 className='hero__title'>
            Watch your <span>favorite</span> animal online
          </h2>
        </div>
        <button className='hero__online-button'>watch online</button>
      </div>
    </section>
  );
}

export default Hero;
