/* eslint-disable jsx-a11y/anchor-has-content */
import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import ClassNames from 'classnames';
import PropTypes from 'prop-types';
import { WinningList } from '../WinningList/WinningList';
import { Questions } from '../Questions/Questions';
import { Answers } from '../Answers/Answers';
import questions from '../../api/questions.json';

import './GamePage.css';

export const GamePage = ({ currentQuestionId, userAnswer, selectedAnswer }) => {
  const preparedQuestion = questions
    .find(question => question.id === currentQuestionId);
  const [visibleMenu, setVisibleMenu] = useState(false);
  const handleChangeVisible = () => {
    setVisibleMenu(!visibleMenu);
  };

  return (
    <>
      {userAnswer && (
        <div className="main-content">
          <div className="right__part">
            <div className="connection">
              <a
                href="tel:+380 986 384 563"
                className="call"
                title="Call a friend"
              />
              <a
                href="mailto: chrispakulyak@gmail.com"
                className="email"
                title="Help hall"
              />
              <button
                type="button"
                className={ClassNames(
                  'menu-button',
                  { 'menu-button--active': visibleMenu },
                )}
                onClick={handleChangeVisible}
              >
                <span />
              </button>
            </div>
            <Questions {...preparedQuestion} />
            <Answers id={currentQuestionId} selectedAnswer={selectedAnswer} />
          </div>
          <WinningList id={currentQuestionId} visibleMenu={visibleMenu} />
        </div>
      )}
      {!userAnswer && (
        <Redirect from="/game" to="/end" exact />
      )}
      {(currentQuestionId > questions.length) && (
        <Redirect from="/game" to="/end" exact />
      )}
    </>
  );
};

GamePage.propTypes = {
  currentQuestionId: PropTypes.number.isRequired,
  userAnswer: PropTypes.bool.isRequired,
  selectedAnswer: PropTypes.func.isRequired,
};
