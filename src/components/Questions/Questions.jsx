import React from 'react';
import PropTypes from 'prop-types';
import './Questions.css';

export const Questions = preparedQuestion => (
  <div className="questions">
    <p className="questions__item">{preparedQuestion.title}</p>
  </div>
);

Questions.propTypes = {
  preparedQuestion: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    images: PropTypes.string.isRequired,
  }).isRequired,
};
