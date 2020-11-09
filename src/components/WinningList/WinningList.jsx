import React from 'react';
import ClassNames from 'classnames';
import PropTypes from 'prop-types';
import money from '../../api/money.json';

import './WinningList.css';

const preparedMoney = money.sort((a, b) => b.id - a.id);

export const WinningList = ({ id, visibleMenu }) => (
  <div
    className={
      ClassNames(
        'side-bar',
        { 'side-bar--active': visibleMenu },
      )
    }
  >
    <ul className="winning-list">
      {preparedMoney.map(part => (
        <li
          className={ClassNames('winning-list__item', {
            previus: part.id < id,
            selected: part.id === id,
          })}
          key={part.id}
        >
          {part.title}
        </li>
      ))}
    </ul>
  </div>
);

WinningList.propTypes = {
  id: PropTypes.number.isRequired,
  visibleMenu: PropTypes.bool.isRequired,
};
