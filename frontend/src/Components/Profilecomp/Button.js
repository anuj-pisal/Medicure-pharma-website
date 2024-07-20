import React from 'react';
import './Button.css';

function Button({ text, onClick }) {
  return (
    <button onClick={onClick} id="Btn">
      <p>{text}</p>
    </button>
  );
}

export default Button;
