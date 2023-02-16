import React from 'react';
import AnimalCard from '../animalCard/AnimalCard';

function AnimalSlider({ shuffledData, position }) {
  return (
    <div className={`animals-slider__cards ${position}`}>
      {shuffledData.map((item) => {
        const { id, name, native, food, img } = item;
        return (
          <AnimalCard
            key={id}
            title={name}
            native={native}
            food={food}
            image={img}
          />
        );
      })}
    </div>
  );
}

export default AnimalSlider;
