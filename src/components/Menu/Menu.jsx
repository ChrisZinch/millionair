import React from 'react';
import ClassNames from 'classnames';
import PropTypes from 'prop-types';
import money from '../../api/money.json';

import './Menu.css';

const preparedMoney = money.sort((a, b) => b.id - a.id);

export const Menu = ({ id }) => (
  <div className="menu">
    <ul className="menu-list">
      {preparedMoney.map(part => (
        <li
          className={ClassNames('menu-list__item', {
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

Menu.propTypes = {
  id: PropTypes.number.isRequired,
};
