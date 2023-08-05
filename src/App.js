import React, { useState } from 'react';
import './App.css';

function App() {
  const [backgroundColor, setBackgroundColor] = useState('');

  const handleButtonClick = (color) => {
    setBackgroundColor(color);
  };

  return (
    <div>
      <div className="canvas">
      <span>
      <button className="button" id="grey" onClick={() => handleButtonClick('grey')}>
        Grey
      </button>
      <button className="button" id="white" onClick={() => handleButtonClick('white')}>
        White
      </button>
      <button className="button" id="yellow" onClick={() => handleButtonClick('yellow')}>
        Yellow
      </button>
      <button className="button" id="blue" onClick={() => handleButtonClick('blue')}>
        Blue
      </button>
      <div style={{ backgroundColor: backgroundColor, minHeight: '100vh' }}>
        {/* Content of your app */}
      </div>
      </span>
    </div>
    </div>
  );
}

export default App;
