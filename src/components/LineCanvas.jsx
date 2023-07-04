import React, { useRef, useEffect, useState } from 'react';

const LineCanvas = () => {
  const canvasRef = useRef(null);
  const imageRef = useRef(null);
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    const length = 50;
    let x = 1;
    let y = 1;

    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Set line properties
    ctx.lineWidth = 2;
    ctx.strokeStyle = 'white';

    // Draw line
    ctx.beginPath();
    ctx.moveTo(centerX + length * x, centerY - length * y);
    ctx.lineTo(centerX, centerY);
    ctx.stroke();

    x = 0;
    y = 1;
    ctx.beginPath();
    ctx.moveTo(centerX + length * x, centerY - length * y);
    ctx.lineTo(centerX, centerY);
    ctx.stroke();

  }, []);

  const handleRotateClick = () => {
    setRotation(prevRotation => (prevRotation + 10) % 360);
  };

  const handleCreateClick = () => {
    if (rotation >= 30 && rotation <=50) {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext('2d');
      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;
      const radius = 50;
  
      ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear canvas
  
      ctx.lineWidth = 2;
      ctx.strokeStyle = 'red';
      ctx.fillStyle = 'transparent';
  
      ctx.beginPath();
      ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI);
      ctx.stroke();
    }
  };
  
  useEffect(() => {
    const image = imageRef.current;
    image.style.transform = `rotate(${rotation}deg)`;
  }, [rotation]);

  return (
    <div>
      <canvas className="can" ref={canvasRef} width={300} height={300} />
      <button onClick={handleRotateClick}>Rotate Image</button>
      <button onClick={handleCreateClick}>Create</button>
      <img src='./src/components/diagram1.png' ref={imageRef} alt="Diagram" />
      <p>Rotation Angle: {rotation} degrees</p>
    </div>
  );
};

export default LineCanvas;
