import React, { useRef, useEffect,useState } from 'react';
import { NavLink } from 'react-router-dom';
import Draggable from 'react-draggable';
import Modal from 'react-modal';



const Simulator = () => {
    const [rotation, setRotation] = useState(0);
    const [data, setData] = useState(null);
    const [print, setPrint] = useState(false);
    const [showNextInstruction, setShowNextInstruction] = useState(false);
    const [showErrorModal, setShowErrorModal] = useState(false);
    const [x, setX] = useState(1);
    const [y, setY] = useState(1);
    const [b, setB] = useState(1);
    const [c, setC] = useState(0);
    const [d, setD] = useState(1);
    const [theta, setTheta] = useState(0);
    const [count, setCount] = useState(1);
    const [ert, setErt] = useState(0);
    const [angleText, setAngleText] = useState(0);
    const [textAngle, setTextAngle] = useState('');
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

    }, []);
    
    const handleCreateClick = () => {
        const canvas = canvasRef1.current;
        const ctx = canvas.getContext('2d');
        const centerX = canvas.width / 2;
        const centerY = canvas.height / 2;
    
        if (angle <= (angleText+5) && angle >= (angleText-5)) {
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
          const newAngleText = angleDegrees.toFixed(0);
          ctx.font = '14px Arial';
          ctx.fillStyle = 'white';
          // setTextAngle(newAngleText);
    
          setB(Math.sqrt(1 + b * b));
          setTheta(theta + Math.atan(1 / b));
          setC(y);
          setD(x);
          setY(Math.sqrt(1 + b * b) * Math.sin(theta));
          setX(Math.sqrt(1 + b * b) * Math.cos(theta));
          setAngleText(newAngleText);
        }
      };
      
        const handleClick = (event) => {
            const inputB = parseInt(event.target.value);
            if (inputB === 1 || inputB > 0) {
              const c = Math.sqrt(inputB);
              setData(c);
              setPrint(false);
              setShowNextInstruction(false);
            } else if (event.target.value.trim() !== "") {
              setShowErrorModal(true);
              event.target.value = ""; // Clear the input field
            }
          };

        // Error Modal Styles
        const modalStyles = {
            overlay: {
            backgroundColor: "rgba(0, 0, 0, 0.5)", // Transparent background
            },
            content: {
            backgroundColor: "transparent", // Transparent background
            border: "none", // No border
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            color: "#000000", // Black text color
            },
        };
  
        const closeErrorModal = () => {
            setShowErrorModal(false);
          };

    
  return (
    <>
        <div className='title'>
            -SIMULATOR-
        </div>
        <div>Objective: Construction of the Square Root Spiral.</div>

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
                    <div className='labels'> Try calculating the hypotenious you found.</div>
                    
                        <div className='labels'><div className='labels'>Considering side <i>a</i> to be always 1.</div></div>

                        {showErrorModal ?null :(<div className='labels'>Root : √ <input type='number' name='input1' className='btn' onChange={handleClick}></input></div>)}

                        <br></br>

                        {showErrorModal ?null :(<button className='btn' onClick={() => setPrint(true)}>Calculate</button>)}

                        <div ><div className='labels'>Hypoteneous length ( c ) : <br></br>( {print ? <>{data}</> : null} )</div></div>

                        <img src='./src/components/diagram1.png' className='diagram'></img><br></br>

                        <div className='bind'>
                            {showErrorModal ?null :(<button className='btn' onClick={rotateByTenDegrees}>Rotate by 10°</button>)}
                            {showErrorModal ?null :(<button className='btn' onClick={rotateByOneDegrees}>Rotate by 1°</button>)}
                            {showErrorModal ?null :(<button className='btn' onClick={handleCreateClick}  >Trace</button>)}
                        </div>
                            
                        

                        <br></br>
                        {showNextInstruction && renderInstruction()}

                        <p className='labels'>Protrator is rotated by angle: {angle}°</p>
                        <p>Angle of Hypotenuse: {angleText}°</p>

                        {/* <p className='labels'><div className='labels'>[ Note: To draw the n<sup>th</sup> triangle, b = n ] </div></p> */}
                    
                    </div>
                </div>
        </div>
    {/* Error Modal */}
    <Modal
        isOpen={showErrorModal}
        onRequestClose={closeErrorModal}
        contentLabel="Error Modal"
        style={modalStyles}
      >
        <h2 className="error-message">Error</h2>
        <p className="error-message">Inapropriate input.</p>
        <p className="error-message">Number less than or equal to zero is not acceptable.</p>
        <button className='btn' onClick={closeErrorModal}>Close</button>
      </Modal>

      <div className='instructions'>
        <p style={{ fontSize: '30px', fontWeight: 'bold' }}>
        Instructions
        </p>
        <p >Step 1: Check the angle of Protractor and the angle of hypotenuse.<br></br>------i. If both the angles are equal proceed with (Step 2)<br></br>------ii. If both he angles are not equal use the (Rotate by 10°) and (Rotate by 1°) buttons to match the angles. </p>

        <p >Step 2: Click on the "Trace" button to draw a triangle.</p>
        <p>Step 3: Calculate the length of hypotenuse you have just constructed.</p>
        <p>Step 4: Check whether the length of hypotenuse you have calculated and the graph value is equal or not.</p>
        <p>Step 5: Repeat Step 1.</p>
      </div>

    </>
  );
};

export default Simulator;