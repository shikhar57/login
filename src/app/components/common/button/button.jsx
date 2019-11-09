import React from 'react';

const Button = ({ name,onSubmit }) => (
  <button id={name} onClick={onSubmit}>{name}</button>
);

export default Button;