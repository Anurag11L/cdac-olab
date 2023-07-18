import React, { useRef, useEffect,useState } from 'react';
import Draggable from 'react-draggable';

const Simulator = () => {
    const [rotation] = useState(0);
    const canvasRef1 = useRef(null);
    const protractorRef = useRef(null);
    const draggableRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef1.current;
        const context = canvas.getContext('2d');
        const width = canvas.width;
        const height = canvas.height;

        // console.log(square.getBoundingClientRect().left, square.getBoundingClientRect().top);
        const xCanvas = square.getBoundingClientRect().left;
        const yCanvas = square.getBoundingClientRect().top;
        console.log(xCanvas, yCanvas);
      
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


        if (protractorRef.current) {
          const dimensions = protractorRef.current.getBoundingClientRect();
          console.log('Protractor dimensions:', dimensions);

          
        }

        // Calculate the initial position of the draggable element
    const draggableWidth = 250; // Width of the draggable element
    const draggableHeight = 200; // Height of the draggable element
    // const draggableX = width / 2 - draggableWidth / 2; // X position to center the draggable element
    // const draggableY = height / 2 - draggableHeight / 2; // Y position to center the draggable element
    const draggableX = width / 2 - centerX;
    const draggableY = height / 2 - centerY;

    // Set the initial position of the draggable element
    draggableRef.current.style.left = `${draggableX}px`;
    draggableRef.current.style.top = `${draggableY}px`;

    }, []);
    

    return (
      <>
        <div className="workplace">
          <div className="canvas-container">
            <canvas ref={canvasRef1} className="square" id="square" width={600} height={600}></canvas>
            <div className="draggable-container">
              <Draggable bounds=".square" axis="both" handle=".drag-handle" >
                <div className="drag-element" ref={draggableRef}>
                  <img
                    src="./src/components/protractor1.png"
                    alt="protractor"
                    height={"150px"}
                    className="protract"
                    style={{
                      transform: `rotate(${rotation}deg)`,
                      transformOrigin: 'center bottom',
                    }}
                    ref={protractorRef}
                  />
                  <div className="drag-handle"></div>
                </div>
              </Draggable>
            </div>
          </div>
        </div>
      </>
    );
  };
  
  export default Simulator;