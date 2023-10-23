// import React, { useState } from "react";
// import './Counter.css'
 

// function Counter() {

//   const [counter, setCounter] = useState(0);

//   const [textColor, setTextColor] = useState("black");

//   const inc = () => {

//     setCounter(counter + 1);

//     if (counter < 0) {

//       setTextColor("red");

//     }
 
//    else {

//       setTextColor("black");

//     }

//   };



//   const dec = () => {

//     setCounter(counter - 1);

//     if (counter < 0) {

//       setTextColor("red");
//     }
//     else{
//       setTextColor("black")
//     }

//   };

//   return (

//     <div className="conatiner">

//       <h1 style={{ color: textColor }}>HERE IS MY COUNTER: {counter}</h1>

//       <button className="b1" onClick={() => inc()}>Increment</button>
//       <button className="b1" onClick={() => dec()}>Decrement</button>

//     </div>

//   );

// }

 

// export default Counter;

import React, { useState } from 'react';
import './Counter.css';

function Counter() {
  const [counter, setCounter] = useState(0);

  const handleIncreasingCounter = () => {
    setCounter(counter + 1);
  };

  const handleDecreasingCounter = () => {
    setCounter(counter - 1);
  };


  const textClass = counter < 0 ? 'red-text' : '';

  return (
    <>
      <div className='container'>
        <h1 className={textClass}>HERE IS MY COUNTER: {counter}</h1>
        <button className='b1' onClick={handleIncreasingCounter}>+</button>
        <button className='b1' onClick={handleDecreasingCounter}>-</button>
      </div>
    </>
  );
}

export default Counter;

