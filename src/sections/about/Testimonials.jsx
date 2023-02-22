import { useState, useMemo } from 'react';
import TestimonialCard from '../../component/testimonialcard/TestimonialCard';
import './_testimonials.scss';
import data from '../../component/testimonialcard/data';
import { useGlobalContext } from '../../contex/ModalContext';
function Testimonials() {
  const [value, setValue] = useState(0);
  const { openModal, setModalContent } = useGlobalContext();
  const memoizeData = useMemo(() => data, []);
  return (
    <section className='testimonials'>
      <div className='testimonials__container container'>
        <h2 className='testimonials__title'>Testimonials</h2>
        <div className='testimonials__slider testimonials-slider'>
          <div className='testimonials-slider__frame'>
            <div
              className='testimonials-slider__slides move'
              style={{ '--position': `${-value}` }}>
              {memoizeData.map((item) => {
                const { id } = item;
                return (
                  <div
                    key={id}
                    className='testimonials-card testimonials-slider-card testimonials-slider__card'
                    onClick={() => {
                      setModalContent(item);
                      openModal();
                    }}>
                    <TestimonialCard item={item} />
                  </div>
                );
              })}
            </div>
          </div>
          <input
            type='range'
            value={value}
            min={0}
            max='4'
            step='1'
            className='testimonials-slider__progress'
            onChange={(e) => setValue(e.target.value)}
          />
        </div>
        <button className='testimonials__feedback-button'>
          leave feedback
        </button>
      </div>
    </section>
  );
}

export default Testimonials;
