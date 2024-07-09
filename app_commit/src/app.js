import React, { useState } from 'react';
import Coordinate from './Coordinate';
import AddPointButton from './addPointButton';
import './app.css';

const App = () => {
  const [points, setPoints] = useState([{ x: '', y: '' }]);

  const addPoint = () => {
    setPoints([...points, { x: '', y: '' }]);
  };
  const deletePoint = (indexToDelete) => {
    const newPoints = [...points];
    newPoints.splice(indexToDelete, 1);
    setPoints(newPoints);
  };

  return (
    <div className="App">
      {points.map((point, index) => (
        <Coordinate
          key={index}
          xValue={point.x}
          yValue={point.y}
          onXChange={(e) => {
            const newPoints = [...points];
            newPoints[index].x = e.target.value;
            setPoints(newPoints);
          }}
          onYChange={(e) => {
            const newPoints = [...points];
            newPoints[index].y = e.target.value;
            setPoints(newPoints);
          }}
          onDelete={() => deletePoint(index)}
          index={index}
        />
      ))}
      <AddPointButton addPoint={addPoint} />
    </div>
  );
};

export default App;

