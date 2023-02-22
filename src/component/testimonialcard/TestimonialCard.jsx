import React from 'react';

function TestimonialCard({ item }) {
  const { name, location, date, image, text } = item;
  return (
    <div className='testimonials-card__container'>
      <div className='testimonials-card__header'>
        <img
          src={image}
          alt={name}
          className='testimonials-card__header-photo'
        />
        <div className='testimonials-card__header-name-container'>
          <h5 className='testimonials-card__header-name'>{name}</h5>
          <p className='testimonials-card__header-details'>
            <span className='testimonials-card__header-local'>{location}</span>.
            <span className='testimonials-card__header-dayoftheweek'>
              {date}
            </span>
          </p>
        </div>
      </div>
      <p className='testimonials-card__text'>{text}</p>
    </div>
  );
}

export default TestimonialCard;
