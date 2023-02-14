import React from 'react';
import './App.css'
const CustomButton = ({ color, onClick }) => {
  return (
    <button id='Buttons' style={{ backgroundColor: color }} onClick={() => onClick(color)}>
      {color}
    </button>
  );
};

export default CustomButton;