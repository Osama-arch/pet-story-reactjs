import React, { useState } from 'react';
import './_donatePickFeed.scss';
import { ReactComponent as Multiply } from '../../assests/svg/x_icon.svg';
import { ReactComponent as PandaImg } from '../../assests/svg/animals-widget.svg';
import { ReactComponent as Amount } from '../../assests/svg/amount_of_days_donate.svg';
import data from './donateData';
function DonatePickFeed() {
  const [value, setValue] = useState(100);
  return (
    <section className='pickandfeed-donate'>
      <div className='pickandfeed-donate__container container'>
        <h3 className='pickandfeed-donate__details-title'>
          THE ZOO HAS OFFICIALLY REOPENED BUT WE STILL NEED YOUR HELP!
        </h3>
        <p className='pickandfeed-donate__details'>
          Even though the Zoo has been able to reopen, we are at a greatly
          reduced capacity with educational programs and public and private
          events cancelled or postponed for additional months. We need you now
          more than ever to help ensure that we overcome these challenges. We
          have been actively raising funds in the community, and we are grateful
          for the generosity. But much more support is still needed, and we need
          your help! Please consider a gift today – no matter what size – to
          help us sustain our mission.
        </p>
        <h3 className='pickandfeed-donate__information-title'>
          Donation Information
        </h3>
        <form action='#' className='pickandfeed-donate__calculate-and-donate'>
          <h2 className='pickandfeed-donate__title'>Pick and feed a friend</h2>
          <p className='pickandfeed-donate__subtitle'>
            We know the animals bring you joy, and in these extraordinary times,
            we’re glad.
          </p>
          <div className='pickandfeed-donate__animal-promotion'>
            <div>
              <Amount />
              <p>Panda diet for the day.</p>
            </div>
            <div>
              <Multiply />
            </div>
            <div className='pickandfeed-donate__animal-promotion__panda'>
              <PandaImg />
            </div>
          </div>
          <div className='pickandfeed-donate__progress donate-progress'>
            <div class='progress-bar'>
              <p>Amount</p>
              <div class='progress-bar__bar-outer'>
                <div class='progress-bar__bar-inner'></div>
                <div class='progress-bar__circles circles '>
                  {data.map((item, index) => {
                    const { id, value: inputValue, inputId } = item;
                    return (
                      <div
                        key={id}
                        className={`circles__radio-sum radio-sum__${id}`}>
                        <input
                          type='radio'
                          name='radio'
                          id={inputId}
                          value={inputValue}
                          onClick={() => setValue(inputValue)}
                        />
                        <label htmlFor={inputId}>
                          <span>$</span>
                          {inputValue}
                        </label>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
          <div className='pickandfeed-donate__another-amount'>
            <input
              type='number'
              name='amount'
              min='1'
              max='99999'
              maxLength='4'
              pattern='[0-9]'
              className='pickandfeed-donate__another-amount__input'
              required
              value={value}
              onChange={(e) => setValue(e.target.value)}
            />
            <span>$</span>
          </div>
          <div className='pickandfeed-donate__periodicity-container'>
            <label
              htmlFor='monthly'
              className='pickandfeed-donate__monthly-label'>
              <input
                type='radio'
                name='periodicity'
                className='pickandfeed-donate__once-label__input'
                id='monthly'
                required
              />
              <span>Monthly</span>
            </label>
            <label htmlFor='once' className='pickandfeed-donate__once-label'>
              <input
                type='radio'
                name='periodicity'
                className='pickandfeed-donate__once-label__input'
                checked={true}
                id='once'
                required
              />
              <span>Once</span>
            </label>
          </div>
          <button type='submit' className='pickandfeed-donate__feed-button'>
            Feed a friend now
          </button>
          <p className='pickandfeed-donate__share-social'>
            Share with your friends on social networks
          </p>
        </form>
      </div>
    </section>
  );
}

export default DonatePickFeed;
