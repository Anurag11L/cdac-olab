import React, { useRef, useEffect,useState } from 'react';
import Draggable from 'react-draggable';

const Simulator = () => {
  const [rotation, setRotation] = useState(0);

  const [coordinates, setCoordinates] = useState({ x: null, y: null });
  const [distance, setDistance] = useState(null);

  const [count, setCount] = useState(1);
  const [x] = useState(1);
  const [y] = useState(1);
  const [d, setD] = useState(1);
  const [c] = useState(0);

  const [angleText, setAngleText] = useState(0);
// Canvas-----------------------------------------------------------------//
  const canvasRef1 = useRef(null);
    
//Button onClick operations----------------------------------------------//
  const rotateByTenDegrees = () => {
    const newRotation = (rotation - 10)%360;
    setRotation(newRotation >= -360 ? newRotation : 0);
  };
            
  const rotateByOneDegrees = () => {
    const newRotation = rotation - 1;
    setRotation(newRotation >= -360 ? newRotation : 0);
  };
            
  let angle = -1 * rotation;


  useEffect(() => {
      
    const canvas = canvasRef1.current;
    const context = canvas.getContext('2d');
    const width = canvas.width;
    const height = canvas.height;
  
    // Clear the canvas
    context.clearRect(0, 0, width, height);
  
    // Set the scale color to green
    context.strokeStyle = 'green';
  
    // Draw scales along the x-axis
    const scaleIntervalX = 50; // Interval between scales
    const startX = scaleIntervalX;
    const endX = width - scaleIntervalX;
    for (let x = startX; x <= endX; x += scaleIntervalX) {
      context.beginPath();
      context.moveTo(x, 0);
      context.lineTo(x, height);
      context.stroke();
    }
  
    // Draw scales along the y-axis
    const scaleIntervalY = 50; // Interval between scales
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
    const xAxisNumberInterval = 50; 
    for (let x = xAxisNumberStart; x <= xAxisNumberEnd; x += xAxisNumberInterval) {
        context.fillText((x / scaleIntervalX).toString(), centerX + x - xAxisNumberOffset, centerY + xAxisNumberOffset);
    }
    context.lineWidth = 2;

    context.beginPath();
    context.moveTo(centerX + 50, centerY);
    context.lineTo(centerX, centerY);
    context.strokeStyle = "#ff0000";
    context.stroke();

}, []);


const handleCreateClick = () => {
  const canvas = canvasRef1.current;
  const ctx = canvas.getContext('2d');
  const centerX = canvas.width / 2;
  const centerY = canvas.height / 2;

  // Iteration 1----------------------------------------------
    if(count === 1){
    //   if(angle === 0){
          ctx.beginPath();
          ctx.moveTo(centerX + 50, centerY);
          ctx.lineTo(centerX, centerY);
          ctx.moveTo(centerX + 50 * x, centerY - 50 * y);
          ctx.lineTo(centerX + 50 * d, centerY - 50 * c);
          ctx.moveTo(centerX + 50 * x, centerY - 50 * y);
          ctx.lineTo(centerX, centerY);
          ctx.strokeStyle = "#ff0000";
          ctx.stroke();
          setCount(2);
    //   }
    }

    let autoAngleRad = 0;
    let autoAngleDeg = 0;
    let xx = 0;
    let yy = 0;
    let dd = 0;
    let cc = 0;
    let totalAngle = 0;
    let hypo = 0;

    hypo = 45;
    autoAngleRad = Math.atan(1/Math.sqrt(2));
    autoAngleDeg = autoAngleRad * (180 / Math.PI); //35.264389682754654
    totalAngle = 45 + autoAngleDeg;//80.26438968275465
    xx = 0.2928932188;
    yy = 1.707106781;
    dd = 1;
    cc = 1;
    // console.log(totalAngle);
    // console.log(autoAngleDeg);   correct
    
    // Iteration 2-----------------------------------------------------
    if(count === 2){
    //   if(angle === hypo ){
        ctx.beginPath();
        ctx.moveTo(centerX + 50, centerY);
        ctx.lineTo(centerX, centerY);
        ctx.moveTo(centerX + 50 * xx, centerY - 50 * yy);
        ctx.lineTo(centerX + 50 * dd, centerY - 50 * cc);
        ctx.moveTo(centerX + 50 * xx, centerY - 50 * yy);
        ctx.lineTo(centerX, centerY);
        ctx.strokeStyle = "#ff0000";
        ctx.stroke();
        setCount(3);
    //   }
    }
};

const handleCircle = () => {

    const canvas = canvasRef1.current;
    const ctx = canvas.getContext('2d');
    const width = canvas.width;
    const height = canvas.height;
    const centerX = width / 2;
    const centerY = height / 2;

    if(count ===1){
        
        const radius = 50;
        ctx.beginPath();
        ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI);
        // ctx.arc(centerX, centerY, radius, 0, 3/2 * Math.PI);
        ctx.strokeStyle = "#0000ff";
        ctx.stroke();
        ctx.closePath();

        ctx.beginPath();
        ctx.moveTo(centerX +50, centerY );
        ctx.lineTo(centerX, centerY);
        ctx.strokeStyle = "ff0000";
        ctx.stroke();
        ctx.closePath();

        // Draw text for line length above the line
        ctx.font = '16px Arial';
        ctx.fillStyle = "ff0000";
        ctx.fillText(`${Math.sqrt(1).toFixed(1)}`, (centerX +310) / 2, (centerY +290)/2);

    }

    if(count ===2){
        
        const radius = 50 * Math.sqrt(2);
        ctx.beginPath();
        ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI);
        ctx.strokeStyle = "#0000ff";
        ctx.stroke();
        ctx.closePath();

        ctx.beginPath();
        ctx.moveTo(centerX +(50 * Math.sqrt(2)), centerY );
        ctx.lineTo(centerX, centerY);
        ctx.strokeStyle = "ff0000";
        ctx.stroke();
        ctx.closePath();

        // Draw text for line length above the line
        ctx.font = '16px Arial';
        ctx.fillStyle = "ff0000";
        ctx.fillText(`${Math.sqrt(2).toFixed(1)}`, (centerX +340) / 2, (centerY +290)/2);
    }

    if(count ===3){
        
        const radius = 50 * Math.sqrt(3);
        ctx.beginPath();
        ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI);
        ctx.strokeStyle = "#0000ff";
        ctx.stroke();
        ctx.closePath();
    }

}

  return (
    <>
        <div className='workplace'>
                <div>                    
                        <div className="canvas-container">
                            <canvas ref={canvasRef1} className="square" id='square' width={600} height={600}></canvas>
                            <div className="draggable-container">
                                <Draggable bounds=".square" axis="both" handle=".drag-handle">
                                    <div className="drag-element">
                                        <img
                                        src="./src/components/protractor1.png"
                                        alt="protractor"
                                        height={"150px"}
                                        className="protract"
                                        style={{
                                            transform: `rotate(${rotation}deg)`,
                                            transformOrigin: 'center bottom',
                                        }}
                                        />
                                        <div className="drag-handle"></div>
                                    </div>
                                </Draggable>
                            </div>                    
                        </div>
                </div>
            <div>
                    <div className='rec'>

                        <div className='bind'>
                            <button className='btn' onClick={rotateByTenDegrees}>Rotate by 10°</button>
                            <button className='btn' onClick={rotateByOneDegrees}>Rotate by 1°</button>
                            <button className='btn' onClick={handleCreateClick}>Trace</button>
                            <button className='btn' onClick={handleCircle}>Circle</button>
                            <button className='btn' >Clear</button>
                        </div>

                        <br></br>
                        <p className='labels'>Protrator is rotated by angle: {angle}°</p>
                    </div>
                </div>
        </div>
    </>
  );
};

export default Simulator;