import React from 'react';
import { NavLink } from 'react-router-dom';
import hand from '../../images/hand.svg';

import './StartPage.css';

export const StartPage = () => (
  <div className="start">
    <div className="start__content">
      <div className="start__left">
        <img src={hand} alt="hand" className="hand" />
      </div>
      <div className="start__right">
        <h2 className="start__title">
          Who wants to be
          <br />
          a millionaire?
        </h2>
        <NavLink to="/game" exact>
          <button
            type="button"
            className="start__button"
          >
            Start
          </button>
        </NavLink>
      </div>
    </div>
  </div>
);
