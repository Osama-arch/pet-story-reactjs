import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import AnimalSlider from '../../component/animalSlider/AnimalSlider';
import './_pets.scss';
import useShuffledData from '../../hook/useShuffledData';
import data from '../../hook/data';
function Pets() {
  const [shuffledData, shuffle] = useShuffledData(data, 'id');
  const [slides] = useState([0, 1, 2]);
  const [index, setIndex] = useState(0);
  const [isClicked, setIsClicked] = useState(false);
  useEffect(() => {
    setIsClicked(true);
    const lastIndex = slides.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }
    setTimeout(() => {
      setIsClicked(false);
    }, 600);
  }, [index, slides]);

  return (
    <section className='pets'>
      <div className='pets__containe container'>
        <div className='pets__animals-slider animals-slider'>
          <div className='animals-slider__frame'>
            {slides.map((slide, slideIndex) => {
              let position = 'nextSlide';
              if (slideIndex === index) {
                position = 'activeSlide';
              }
              if (
                slideIndex === index - 1 ||
                (index === 0 && slideIndex === slides.length - 1)
              ) {
                position = 'lastSlide';
              }
              return (
                <AnimalSlider
                  key={slide}
                  position={position}
                  shuffledData={shuffledData}
                />
              );
            })}
          </div>
          <div className='animals-slider__controls'>
            <div
              className='animals-slider__prev-button'
              onClick={() => {
                if (!isClicked) {
                  shuffle();
                  setIndex(index - 1);
                }
              }}></div>
            <div
              className='animals-slider__next-button'
              onClick={() => {
                if (!isClicked) {
                  shuffle();
                  setIndex(index + 1);
                }
              }}></div>
          </div>
        </div>
        <Link to='/map' className='pets__favorite-button'>
          choose your favorite
        </Link>
      </div>
    </section>
  );
}

export default Pets;
