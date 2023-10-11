import React, { useState } from 'react';

function BACK() {
  const [bgColor, setBgColor] = useState('white'); 

  const changeColor = () => {
   
    const newColor = bgColor === 'white' ? 'lightblue' : 'white';
    setBgColor(newColor);

    document.body.style.backgroundColor = newColor;
  };

  return (
    <div>
      <div>
        <p>Background Color: {bgColor}</p>
      </div>
      <button onClick={changeColor}>Change Color</button>
    </div>
  );
}

export default BACK;