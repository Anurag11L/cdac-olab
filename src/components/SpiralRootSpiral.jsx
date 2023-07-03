import React, { useEffect, useRef } from 'react';

const SquareRootSpiral = () => {
  const canvasRef = useRef(null);

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
    // let rotateangle;
    let totangle = 0;
    let count = 1;

    const trace = () => {
        //---------------------------------------------------------------
    //   rotateangle = Math.abs(rotateangle) % 360;
      ctx.beginPath();
      ctx.moveTo(centerX +50, centerY);
      ctx.lineTo(centerX, centerY );

      ctx.moveTo(centerX + 50 * x, centerY - 50 * y);
      ctx.lineTo(centerX + 50 * d, centerY - 50 * c);
      ctx.moveTo(centerX + 50 * x, centerY - 50 * y);
      ctx.lineTo(centerX, centerY);

      ctx.strokeStyle = "#ffffff";
      ctx.stroke();

      b = Math.sqrt(1 + b * b);
      theta += Math.atan(1 / b);
      c = y;
      d = x;
      y = Math.sqrt(1 + b * b) * Math.sin(theta);
      x = Math.sqrt(1 + b * b) * Math.cos(theta);
      count += 1;
    //   totangle += Math.floor(Math.atan(1 / Math.sqrt(count)) * 180 / Math.PI);
    //   console.log(totangle);
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

    </div>
  );
};

export default SquareRootSpiral;