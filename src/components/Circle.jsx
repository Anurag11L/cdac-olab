import React, { useRef, useState } from 'react';

function Circle() {
  const canvasRef = useRef(null);
  const [coordinates, setCoordinates] = useState({ x: null, y: null });
  const [distance, setDistance] = useState(null);

  const handleClick = (event) => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    const width = canvas.width;
    const height = canvas.height;
    const centerX = width / 2;
    const centerY = height / 2;

    const rect = canvas.getBoundingClientRect();
    const mouseX = event.clientX - rect.left - 16;
    const mouseY = event.clientY - rect.top - 16;
    const color = "#ff0000";

    // Calculate distance
    const distanceX = Math.abs(centerX - mouseX);
    const distanceY = Math.abs(centerY - mouseY);
    const distance = Math.sqrt(distanceX ** 2 + distanceY ** 2);

    // Draw circle
    ctx.beginPath();
    ctx.arc(centerX, centerY, distance, 0, 2 * Math.PI);
    ctx.strokeStyle = color;
    ctx.stroke();
    ctx.closePath();

    // Draw line from center to clicked point
    ctx.beginPath();
    ctx.moveTo(centerX, centerY);
    ctx.lineTo(mouseX, mouseY);
    ctx.strokeStyle = color;
    ctx.stroke();
    ctx.closePath();

    // Draw text for line length above the line
    ctx.font = '16px Arial';
    ctx.fillStyle = color;
    ctx.fillText(`${distance.toFixed(2)}`, (centerX + mouseX) / 2, (centerY + mouseY) / 2 );

    // Store the coordinates and distance in state
    setCoordinates({ x: mouseX, y: mouseY });
    setDistance(distance);
  };

  return (
    <div>
      <canvas
        ref={canvasRef}
        className="square"
        width={600}
        height={600}
        onClick={handleClick}
      />
      {coordinates.x !== null && coordinates.y !== null && (
        <div>
          <p>Clicked coordinates: {coordinates.x}, {coordinates.y}</p>
          <p>Distance from center: {distance}</p>
        </div>
      )}
    </div>
  );
}

export default Circle;
