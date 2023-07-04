import React, { useEffect, useRef, useState } from 'react';


const SquareRootSpiral = () => {
  const canvasRef = useRef(null);
  const [angle, setAngle] = useState(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const width = canvas.width;
    const height = canvas.height;
    const centerX = width / 2;
    const centerY = height / 2;
    let x = 1;
    let y = 1;
    let b = x;
    let c = 0;
    let d = 1;
    let theta = 0;
    let count = 1;
    let ert = 0;

    const trace = () => {
        //---------------------------------------------------------------
      ctx.beginPath();
      ctx.moveTo(centerX +50, centerY);
      ctx.lineTo(centerX, centerY );

      ctx.moveTo(centerX + 50 * x, centerY - 50 * y);
      ctx.lineTo(centerX + 50 * d, centerY - 50 * c);
      ctx.moveTo(centerX + 50 * x, centerY - 50 * y);
      ctx.lineTo(centerX, centerY);

      ctx.strokeStyle = "#ffffff";
      ctx.stroke();

        // Calculate the angle
    const angleRadians = Math.atan2(y, x);
    const angleDegrees = (angleRadians * 180) / Math.PI;
    setAngle(angleDegrees);

    
      b = Math.sqrt(1 + (b * b));
      if(count === 1){
        ert = Math.atan(1,(Math.sqrt(2)));
      }
      else{
        ert = 0;
      }
      theta =theta+ert+ Math.atan(1 / b);
      
      c = y;
      d = x;
      y = Math.sqrt(1 + b * b) * Math.sin(theta);
      x = Math.sqrt(1 + b * b) * Math.cos(theta);
      count =count + 1;
    
    };

    // Event handler for the button click
    const handleButtonClick = () => {
      trace();
    };

    // Add event listener to the button
    const button = document.getElementById('drawButton');
    button.addEventListener('click', handleButtonClick);

    return () => {
      // Cleanup: Remove event listener when component unmounts
      button.removeEventListener('click', handleButtonClick);
    };
  }, []);

  return (
    <div>
        <canvas ref={canvasRef} width={500} height={500} className='canva' />
        <button id="drawButton" className='btn'>Draw</button>
        <p className='labels'></p>
        <div>Angle: {angle.toFixed(2)}°</div>
    </div>
  );
};

export default SquareRootSpiral;