import './_pickandfeed.scss';
import { Link } from 'react-router-dom';
function PickAndFeed() {
  return (
    <section className='pickandfeed'>
      <div className='pickandfeed__container container'>
        <h2 className='pickandfeed__title'>Pick and feed a friend</h2>
        <p className='pickandfeed__subtitle'>
          We know the animals bring you joy, and in these extraordinary times,
          we’re glad.
        </p>
        <p className='pickandfeed__p1'>
          During a time when the COVID-19 epidemic is touching all of our lives,
          we’re proud and glad that people around the world find joy in
          PatStory.
        </p>
        <p className='pickandfeed__p2'>
          Even though the zoo has reopened, we need you now more than ever to
          help us deal with these problems. Please consider <br />a gift to our{' '}
          <Link to='./donate'>Emergency Support Fund</Link> .
        </p>
        <h3 className='pickandfeed__how-works'>How it works</h3>

        <figure className='pickandfeed__how-works-scheme'>
          <div className='pickandfeed__how-works-scheme-card how-works-card'>
            <div className='how-works-card__picture picture-1'></div>
            <div className='how-works-card__description-1'>Pay with card</div>
          </div>
          <div className='pickandfeed__how-works-scheme-card how-works-card'>
            <div className='how-works-card__picture picture-2'></div>
            <div className='how-works-card__description-2'>
              Payment goes to the zoo
            </div>
          </div>
          <div className='pickandfeed__how-works-scheme-card how-works-card'>
            <div className='how-works-card__picture picture-3'></div>
            <div className='how-works-card__description-3'>
              Your favourite animal gets delicious dish
            </div>
          </div>
        </figure>
        <button className='pickandfeed__feed-button'>Feed a friend now</button>
      </div>
    </section>
  );
}

export default PickAndFeed;
