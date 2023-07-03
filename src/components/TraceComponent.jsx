

import React, { useState } from "react";

const TraceComponent = () => {
  const [x, setX] = useState(1);
  const [y, setY] = useState(1);
  const [b, setB] = useState(x);
  const [c, setC] = useState(0);
  const [d, setD] = useState(1);
  const [theta, setTheta] = useState(0);
  const [totAngle, setTotAngle] = useState(0);

  const trace = () => {
    const rotateAngle = Math.abs(rotatel) % 360;

    if (rotateAngle === totAngle || rotateAngle === totAngle + 1) {
      // Perform canvas drawing operations here
      // ...

      // Update variables
      const newB = Math.sqrt(1 + b * b);
      const newTheta = theta + Math.atan(1 / newB);
      const newC = y;
      const newD = x;
      const newY = Math.sqrt(1 + b * b) * Math.sin(newTheta);
      const newX = Math.sqrt(1 + b * b) * Math.cos(newTheta);
      const newCount = count + 1;
      const newTotAngle = totAngle + Math.floor(Math.atan(1 / Math.sqrt(newCount)) * (180 / Math.PI));

      // Update state variables
      setB(newB);
      setTheta(newTheta);
      setC(newC);
      setD(newD);
      setY(newY);
      setX(newX);
      setCount(newCount);
      setTotAngle(newTotAngle);

      console.log(newTotAngle);
    }
  };

  // Return your JSX component rendering here
  return (
    <div>
      {/* JSX for rendering your React component */}
    </div>
  );
};

export default TraceComponent;



// import React, { useState, useEffect } from "react";

// const TraceComponent = ({ width, height }) => {
//   const [x, setX] = useState(1);
//   const [y, setY] = useState(1);
//   const [b, setB] = useState(x);
//   const [c, setC] = useState(0);
//   const [d, setD] = useState(1);
//   const [theta, setTheta] = useState(0);
//   const [totAngle, setTotAngle] = useState(0);

//   useEffect(() => {
//     const rotateAngle = Math.abs(rotatel) % 360;

//     if (rotateAngle === totAngle || rotateAngle === totAngle + 1) {
//       // Perform canvas drawing operations here
//       // ...

//       // Update variables
//       const newB = Math.sqrt(1 + b * b);
//       const newTheta = theta + Math.atan(1 / newB);
//       const newC = y;
//       const newD = x;
//       const newY = Math.sqrt(1 + b * b) * Math.sin(newTheta);
//       const newX = Math.sqrt(1 + b * b) * Math.cos(newTheta);
//       const newCount = count + 1;
//       const newTotAngle = totAngle + Math.floor(Math.atan(1 / Math.sqrt(newCount)) * (180 / Math.PI));

//       // Update state variables
//       setB(newB);
//       setTheta(newTheta);
//       setC(newC);
//       setD(newD);
//       setY(newY);
//       setX(newX);
//       setCount(newCount);
//       setTotAngle(newTotAngle);

//       console.log(newTotAngle);
//     }
//   }, [rotatel, totAngle, b, theta, y, x, count]);

//   // Return your JSX component rendering here
//   return (
//     <canvas ref={canvasRef} className="square" width={width} height={height}></canvas>
//   );
// };

// export default TraceComponent;
