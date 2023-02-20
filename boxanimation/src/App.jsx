import React, { useEffect, useState } from 'react';
import Box from './Box';
import './App.css';

const App = () => {
  const [boxes, setBoxes] = useState([]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setBoxes([...boxes, { id: Date.now(), size: 'small' }]);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (boxes.length < 3) {
      const timer = setTimeout(() => {
        const sizes = ['small', 'medium', 'large'];
        const randomSize = sizes[Math.floor(Math.random() * sizes.length)];
        setBoxes([...boxes, { id: Date.now(), size: randomSize }]);
      }, 4000);

      return () => clearTimeout(timer);
    }
  }, [boxes]);

  useEffect(() => {
    if (boxes.length === 3) {
      const timer = setTimeout(() => {
        setBoxes([]);
      }, 4000);

      return () => clearTimeout(timer);
    }
  }, [boxes]);

  return (
    <div className="app">
      {boxes.map(box => (
        <Box key={box.id} size={box.size} />
      ))}
    </div>
  );
};

export default App;
