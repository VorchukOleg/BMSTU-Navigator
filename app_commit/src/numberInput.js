import React, { useState } from 'react';
import './numberInput.css';
const NumberInput = ({ value, onChange }) => {
  return (
    <input
      type="number"
      value={value}
      onChange={onChange}
      min="0"
    />
  );
};

export default NumberInput;


