import './_backstage.scss';
import bamboo from '../../assests/images/bamboo-cap.jpg';
function Backstage() {
  return (
    <section className='backstage'>
      <div className='backstage__container container'>
        <div className='backstage__picture'>
          <img src={bamboo} alt='bamboo-cap' />
        </div>
        <article className='backstage__text'>
          <h2 className='backstage__title'>
            The Backstage of the Wilderness World.
          </h2>
          <p className='backstage__description'>
            The site was founded on the basis of a volunteer movement to protect
            and care for animals.
          </p>
          <h4 className='backstage__details-titles'>How it works</h4>
          <p className='backstage__details-description'>
            The main goal is to help the animals, as well as the nature reserves
            and zoos where they are kept. We are currently working on video
            projects targeting pandas in China, eagles on an island near Los
            Angeles, alligators in Florida and gorillas in the Congo. These have
            a total of more than 1,500 mammals and reptiles.
          </p>
        </article>
      </div>
    </section>
  );
}

export default Backstage;
