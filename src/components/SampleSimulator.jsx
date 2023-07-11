import React, { useRef, useEffect,useState } from 'react';
// import { NavLink } from 'react-router-dom';
import Draggable from 'react-draggable';
// import Modal from 'react-modal';



const Simulator = () => {
    const [rotation, setRotation] = useState(0);
    const canvasRef1 = useRef(null);
    const protractorRef = useRef(null);
    const [centerBottomCoordinates, setCenterBottomCoordinates] = useState({ x: 0, y: 0 });

   

    useEffect(() => {
        const canvas = canvasRef1.current;
        const context = canvas.getContext('2d');
        const width = canvas.width;
        const height = canvas.height;

        // console.log(square.getBoundingClientRect().left, square.getBoundingClientRect().top);
        
      
        // Clear the canvas
        context.clearRect(0, 0, width, height);
      
        // Set the scale color to green
        context.strokeStyle = 'green';
      
        // Draw scales along the x-axis
        const scaleIntervalX = 75; // Interval between scales
        const startX = scaleIntervalX;
        const endX = width - scaleIntervalX;
        for (let x = startX; x <= endX; x += scaleIntervalX) {
          context.beginPath();
          context.moveTo(x, 0);
          context.lineTo(x, height);
          context.stroke();
        }
      
        // Draw scales along the y-axis
        const scaleIntervalY = 75; // Interval between scales
        const startY = scaleIntervalY;
        const endY = height - scaleIntervalY;
        for (let y = startY; y <= endY; y += scaleIntervalY) {
            context.beginPath();
            context.moveTo(0, y);
            context.lineTo(width, y);
            context.stroke();
        }
      
        // Set the color of the center scales to black
        context.strokeStyle = 'black';
        context.fillStyle = 'black';
        context.font = '15px Arial';
      
        // Draw the center scales
        const centerX = width / 2;
        const centerY = height / 2;
        const centerScaleLength = 300; // Length of center scales
        context.beginPath();
        context.moveTo(centerX, centerY - centerScaleLength);
        context.lineTo(centerX, centerY + centerScaleLength);
        context.moveTo(centerX - centerScaleLength, centerY);
        context.lineTo(centerX + centerScaleLength, centerY);
        context.stroke();
      
        // Draw the center axis labels
        const labelOffset = -20; // Offset of the labels from the center scales
        context.fillText('X', centerX + centerScaleLength + labelOffset, centerY - labelOffset);
        context.fillText('Y', centerX - labelOffset, centerY - centerScaleLength - labelOffset);
      
        // Number the x-axis
        const xAxisNumberOffset = 14; 
        const xAxisNumberStart = scaleIntervalX; 
        const xAxisNumberEnd = (width - scaleIntervalX) / 2;
        const xAxisNumberInterval = 75; 
        for (let x = xAxisNumberStart; x <= xAxisNumberEnd; x += xAxisNumberInterval) {
            context.fillText((x / scaleIntervalX).toString(), centerX + x - xAxisNumberOffset, centerY + xAxisNumberOffset);
        }
        context.lineWidth = 2;

    }, []);
    
    const handleDrag = (event) => {

      const canvas = canvasRef1.current;
      const context = canvas.getContext('2d');
      const width = canvas.width;
      const height = canvas.height;
      const centerX = width /2;
      const centerY = height /2;

      const mouseX = event.clientX;
      const mouseY = event.clientY;
      setCenterBottomCoordinates({ x: mouseX, y: mouseY });
      const canvasLeftX = square.getBoundingClientRect().left;
      const canvasLeftY = square.getBoundingClientRect().top;
      const centerOfCanvasX = square.getBoundingClientRect().left + centerX;
      const centerOfCanvasY = square.getBoundingClientRect().top + centerY;

      context.beginPath();
      context.moveTo(centerOfCanvasX,centerOfCanvasY);
      context.lineTo(centerX,centerY);
      context.stroke();

      // context.closePath();

      
      // Use the mouseX and mouseY values as needed
    };
    

    return (
      <>
        <div className="workplace">
          <div className="canvas-container">
            <canvas ref={canvasRef1} className="square" id="square" width={600} height={600}></canvas>
            <div className="draggable-container">
              <Draggable bounds=".square" axis="both" handle=".drag-handle" onDrag={handleDrag}>
                <div className="drag-element">
                  <img
                    src="./src/components/protractor1.png"
                    alt="protractor"
                    height={"150px"}
                    className="protract"
                    style={{
                      transform: `rotate(${rotation}deg)`,
                      transformOrigin: 'center bottom',
                      left: `${centerBottomCoordinates.x}px`,
                      top: `${centerBottomCoordinates.y}px`,
                    }}
                    ref={protractorRef}
                  />
                  <div className="drag-handle"></div>
                </div>
              </Draggable>
            </div>
          </div>
          <div className="coordinates-container">
            <p>Center Bottom Coordinates:</p>
            <p>X: {centerBottomCoordinates.x.toFixed(2)}</p>
            <p>Y: {centerBottomCoordinates.y.toFixed(2)}</p>
          </div>
        </div>
      </>
    );
  };
  
  export default Simulator;