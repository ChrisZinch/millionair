import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import hand from '../../images/hand.svg';
import money from '../../api/money.json';
import './EndPage.css';

export const EndPage = ({
  setUserAnswer,
  setCurrentQuestionId,
  currentQuestionId,
}) => {
  const score = money.find(item => item.id === (currentQuestionId - 1));

  return (
    <div className="end">
      <div className="end__content">
        <div className="end__left">
          <img src={hand} alt="hand" className="hand" />
        </div>
        <div className="end__right">
          {score && (
            <>
              <h4 className="end__title">
                Total score:
              </h4>
              <h2 className="end__score">
                {score.title}
                earned
              </h2>
            </>
          )}
          {!score && (
            <h2 className="next">Good luck next time!</h2>
          )}
          {(currentQuestionId === 13) && (
            <h1 className="winner">You are millionaire!</h1>
          )}
          <NavLink to="/game" exact>
            <button
              type="button"
              className="end__button"
              onClick={() => {
                setUserAnswer(true);
                setCurrentQuestionId(1);
              }}
            >
              Try again
            </button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

EndPage.propTypes = {
  setUserAnswer: PropTypes.func.isRequired,
  currentQuestionId: PropTypes.number.isRequired,
  setCurrentQuestionId: PropTypes.func.isRequired,
};
