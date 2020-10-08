import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ClassNames from 'classnames';
import answers from '../../api/answers.json';

import './Answers.css';

export const Answers = ({ id, selectedAnswer }) => {
  const preparedAnswers = answers.filter(answer => answer.questionId === id);
  const [submit, setSubmit] = useState(false);

  return (
    <div className="answers__wrapper">
      <ul className="answers-list">
        {preparedAnswers.map(item => (
          <li className="item__wrapper">
            <button
              type="submit"
              key={item.id}
              className={ClassNames('answers-list__item', {
                correct: submit && item.isCorrect,
                inCorrect: submit && !item.isCorrect,
              })}
              onClick={() => {
                setSubmit(true);
                setTimeout(() => {
                  selectedAnswer(item.isCorrect);
                  setSubmit(false);
                }, 1000);
              }}
            >
              <span className="answer-letter">
                {item.letter}
              </span>
              {item.title}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

Answers.propTypes = {
  id: PropTypes.number.isRequired,
  selectedAnswer: PropTypes.func.isRequired,
};
