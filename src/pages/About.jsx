import './_about.scss';
import Hero from '../sections/about/Hero';
import Backstage from '../sections/about/Backstage';
import Pets from '../sections/about/Pets';
import PickAndFeed from '../sections/about/PickAndFeed';
import Testimonials from '../sections/about/Testimonials';
import { AppProvider } from '../contex/ModalContext';
function About() {
  return (
    <>
      <Hero />
      <Backstage />
      <Pets />
      <PickAndFeed />
      <AppProvider>
        <Testimonials />
      </AppProvider>
    </>
  );
}

export default About;
