import React from 'react';
import NumberInput from './numberInput';

const Coordinate = ({ xValue, yValue, onXChange, onYChange, onDelete, index }) => {
  return (
    <div>
      X: <NumberInput value={xValue} onChange={onXChange} />
      Y: <NumberInput value={yValue} onChange={onYChange} />
      <button onClick={onDelete}>Удалить</button>
    </div>
  );
};

export default Coordinate;


