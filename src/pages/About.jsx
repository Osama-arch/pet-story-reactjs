import './_about.scss';
import Hero from '../sections/about/Hero';
import Backstage from '../sections/about/Backstage';
import Pets from '../sections/about/Pets';
import PickAndFeed from '../sections/about/PickAndFeed';
import Testimonials from '../sections/about/Testimonials';
function About() {
  return (
    <>
      <Hero />
      <Backstage />
      <Pets />
      <PickAndFeed />
      <Testimonials />
    </>
  );
}

export default About;
