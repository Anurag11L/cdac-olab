import React, { useRef, useEffect, useState } from 'react';

const LineCanvas = () => {
  const canvasRef = useRef(null);
  const [x, setX] = useState(1);
  const [y, setY] = useState(1);
  const [b, setB] = useState(x);
  const [c, setC] = useState(0);
  const [d, setD] = useState(1);
  const [theta, setTheta] = useState(0);
  const [count, setCount] = useState(1);
  const [ert, setErt] = useState(0);
  const [angleText, setAngleText] = useState('');

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
  }, []);

  const handleCreateClick = () => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;

    ctx.beginPath();
    ctx.moveTo(centerX + 50, centerY);
    ctx.lineTo(centerX, centerY);
    ctx.moveTo(centerX + 50 * x, centerY - 50 * y);
    ctx.lineTo(centerX + 50 * d, centerY - 50 * c);
    ctx.moveTo(centerX + 50 * x, centerY - 50 * y);
    ctx.lineTo(centerX, centerY);
    ctx.strokeStyle = "#ff0000";
    ctx.stroke();

    const angleRadians = Math.atan2(y, x);
    const angleDegrees = (angleRadians * 180) / Math.PI;
    const newAngleText = `Angle: ${angleDegrees.toFixed(2)}°`;
    ctx.font = '14px Arial';
    ctx.fillStyle = 'white';
    // ctx.fillText(newAngleText, 50, 20);

    
    // if (count === 1) {
    //   setErt(Math.atan(1, Math.sqrt(2)));
    // } else {
    //   setErt(0);
    // }
    setB(Math.sqrt(1 + (b * b)));
    setTheta(theta  + Math.atan(1/ b));
    
    setC(y);
    setD(x);
    setY(Math.sqrt(1 + b * b) * Math.sin(theta));
    setX(Math.sqrt(1 + b * b) * Math.cos(theta));
    // setCount(0);
    setAngleText(newAngleText);
  };

  return (
    <div className='whole'>
      <canvas className="can" ref={canvasRef} width={300} height={300} />
      <button className='btn' onClick={handleCreateClick}>Create</button>

      <div className='right'>
        <p>(x, y) = ({x}, {y})</p>
        <p>b: {b}</p>
        <p>(d, c) = ({d}, {c})</p>
        <p>count: {count}</p>
        <p>ert: {ert}</p>
        <p>{angleText}</p>
        <p>{theta}</p>
      </div>

    </div>
  );
};

export default LineCanvas;
