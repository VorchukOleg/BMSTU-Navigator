import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import './addPointButton.css';

const AddPointButton = ({ addPoint }) => {
  return (
    <div className="button-container">
      <button className="button" onClick={addPoint}></button>
    </div>
  );
};

export default AddPointButton;

