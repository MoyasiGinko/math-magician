import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ click, text }) => (
  <button type="button" onClick={click}>
    {text}
  </button>
);

Button.propTypes = {
  click: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
};

export default Button;
