import React from 'react';
import { useGlobalContext } from '../../contex/ModalContext';
import TestimonialCard from '../testimonialcard/TestimonialCard';
import { ReactComponent as CloseMenu } from '../../assests/svg/x_icon.svg';
function Modal({ item }) {
  const { closeModal } = useGlobalContext();

  return (
    <div className='overlay'>
      <div className={' testimonials-popup'}>
        <div className='testimonials-popup__window'>
          <div className='testimonials-card testimonials-popup-card testimonials-popup__card'>
            <TestimonialCard item={item} />
          </div>
          <CloseMenu
            className='testimonials-popup__close-button'
            onClick={closeModal}
          />
        </div>
      </div>
    </div>
  );
}

export default Modal;
