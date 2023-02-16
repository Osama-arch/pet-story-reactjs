import './_animalCard.scss';

function AnimalCard({ food, image, title, native, style }) {
  return (
    <div className={`animal-slider__card animal-card ${food}`}>
      <div className='animal-card__image-container'>
        <img src={image} alt={title} />
        <div className='animal-card__image-popup'>
          <h4 className='animal-card__description-title'>{title}</h4>
          <p className='animal-card__description-native'>{native}</p>
        </div>
      </div>
      <div className='animal-card__description'>
        <h4 className='animal-card__description-title'>{title}</h4>
        <p className='animal-card__description-native'>{native}</p>
      </div>
    </div>
  );
}

export default AnimalCard;
