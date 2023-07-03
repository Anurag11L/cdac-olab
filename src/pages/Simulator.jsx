import React, { useRef, useEffect,useState } from 'react';
import { NavLink } from 'react-router-dom';
import Draggable from 'react-draggable';
import Modal from 'react-modal';


const Simulator = () => {
// Square---------------------------------------------------------------------//
    // Canvas-----------------------------------------------------------------//
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const context = canvas.getContext('2d');
        const width = canvas.width;
        const height = canvas.height;
      
        // Clear the canvas
        context.clearRect(0, 0, width, height);
      
        // Set the scale color to green
        context.strokeStyle = 'green';
      
        // Draw scales along the x-axis
        const scaleIntervalX = 30; // Interval between scales (adjust as needed)
        const startX = scaleIntervalX;
        const endX = width - scaleIntervalX;
        for (let x = startX; x <= endX; x += scaleIntervalX) {
          context.beginPath();
          context.moveTo(x, 0);
          context.lineTo(x, height);
          context.stroke();
        }
      
        // Draw scales along the y-axis
        const scaleIntervalY = 30; // Interval between scales (adjust as needed)
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
        const centerScaleLength = 300; // Length of center scales (adjust as needed)
        context.beginPath();
        context.moveTo(centerX, centerY - centerScaleLength);
        context.lineTo(centerX, centerY + centerScaleLength);
        context.moveTo(centerX - centerScaleLength, centerY);
        context.lineTo(centerX + centerScaleLength, centerY);
        context.stroke();
      
        // Draw the center axis labels
        const labelOffset = -20; // Offset of the labels from the center scales (adjust as needed)
        context.fillText('X', centerX + centerScaleLength + labelOffset, centerY - labelOffset);
        context.fillText('Y', centerX - labelOffset, centerY - centerScaleLength - labelOffset);
      
        // Number the x-axis
        const xAxisNumberOffset = 14; // Offset of the numbers from the x-axis (adjust as needed)
        const xAxisNumberStart = scaleIntervalX; // Start number (adjust as needed)
        const xAxisNumberEnd = (width - scaleIntervalX) / 2; // End number (adjust as needed)
        const xAxisNumberInterval = 30; // Interval between x-axis numbers (adjust as needed)
        for (let x = xAxisNumberStart; x <= xAxisNumberEnd; x += xAxisNumberInterval) {
          context.fillText((x / scaleIntervalX).toString(), centerX + x - xAxisNumberOffset, centerY + xAxisNumberOffset);
        }
      }, []);
      
      
    // Canvas-----------------------------------------------------------------//


        
// Square---------------------------------------------------------------------//

    //Rectangle-------------------------------------------------------------//
        const [data, setData] = useState(null);
        const [print, setPrint] = useState(false);
        const [showNextInstruction, setShowNextInstruction] = useState(false);
        const [traceCount, setTraceCount] = useState(0);
        const [showErrorModal, setShowErrorModal] = useState(false);
        const [rotationAngle, setRotationAngle] = useState(0);

    
        const handleClick = (event) => {
            const inputB = parseInt(event.target.value);
            if (inputB === 1 || inputB > 0) {
              const c = inputB + 1;
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
  
    

    
        const renderInstruction = () => {
            if (traceCount === 1) {
                return <p className='labels'>First instruction...</p>;
            } else if (traceCount === 2) {
                return <p className='labels'>Second instruction...</p>;
            }
            // Add more conditions for additional instructions if needed
            return null;
        };

        const closeErrorModal = () => {
            setShowErrorModal(false);
          };

        //Button onClick operations----------------------------------------------//
            const rotateByTenDegrees = () => {
                const newRotationAngle = rotationAngle - 10;
                setRotationAngle(newRotationAngle >= -360 ? newRotationAngle : 0);
            };
        
            const rotateByOneDegrees = () => {
            const newRotationAngle = rotationAngle - 1;
            setRotationAngle(newRotationAngle >= -360 ? newRotationAngle : 0);
            };
        
            const angle = -1 * rotationAngle;
        //Button onClick operations----------------------------------------------//
    //Rectangle-------------------------------------------------------------//
  
    
  return (
    <>
{/* Header--------------------------------------------------------------------------------------------------------------------------*/}
{/* Header--------------------------------------------------------------------------------------------------------------------------*/}
        <header>
                <div>
                    <a href='/theory' className='logo'>Square Root Spiral</a>
                    <nav className='navbar'>
                        <a href='#' className='toggle-button'>
                            <span className='bar'></span>
                            <span className='bar'></span>
                            <span className='bar'></span>
                        </a>
                        <ul className='menu'>
                            <NavLink to="/theory" className="nava"><div className='linktitle'>Theory</div></NavLink>
                            <NavLink to="/animation" className="nava"><div className='linktitle'>Animation</div></NavLink>
                            <NavLink to="/simulator" className="nava"><div className='linktitle'>Simulator</div></NavLink>
                            <NavLink to="/selfevaluation" className="nava"><div className='linktitle'>Self-Evaluation</div></NavLink>
                            <NavLink to="/reference" className="nava"><div className='linktitle'>Reference</div></NavLink>
                            <NavLink to="/feedback" className="nava"><div className='linktitle'>FeedBack</div></NavLink>
                        </ul>
                    </nav>
                </div>
        </header>
{/* Header--------------------------------------------------------------------------------------------------------------------------*/}
{/* Header--------------------------------------------------------------------------------------------------------------------------*/}

{/* Title---------------------------------------------------------------------------------------------------------------------------*/}
{/* Title---------------------------------------------------------------------------------------------------------------------------*/}
        <div className='title'>
            -SIMULATOR-
        </div>
        <div>Objective: Construction of the Square Root Spiral.</div>
{/* Title---------------------------------------------------------------------------------------------------------------------------*/}
{/* Title---------------------------------------------------------------------------------------------------------------------------*/}

{/* WorkPlace-----------------------------------------------------------------------------------------------------------------------*/}
{/* WorkPlace-----------------------------------------------------------------------------------------------------------------------*/}
        <div className='workplace'>

            {/* Square--------------------------------------------------------------------------------------------------------------*/}
            {/* Square--------------------------------------------------------------------------------------------------------------*/}
                <div>                    
                        <div className="canvas-container">
                            <canvas ref={canvasRef} className="square" id='square' width={600} height={600}></canvas>
                            <div className="draggable-container">
                                <Draggable bounds=".square" axis="both" handle=".drag-handle">
                                    <div className="drag-element">
                                        <img
                                        src="./src/components/protractor1.png"
                                        alt="protractor"
                                        height={"150px"}
                                        className="protract"
                                        style={{
                                            transform: `rotate(${rotationAngle}deg)`,
                                            transformOrigin: 'center bottom',
                                        }}
                                        />
                                        <div className="drag-handle"></div>
                                    </div>
                                </Draggable>

                            </div>                    
                        </div>
                </div>
            {/* Square--------------------------------------------------------------------------------------------------------------*/}
            {/* Square--------------------------------------------------------------------------------------------------------------*/}
            
            {/* Rectangle-----------------------------------------------------------------------------------------------------------*/}
            {/* Rectangle-----------------------------------------------------------------------------------------------------------*/}
                <div>
                    <div className='rec'>

                        <p className='labels'><div>[ Note: To draw the n<sup>th</sup> triangle, b = n ] </div></p>

                        <div className='labels'><div>Considering Side <i>a</i> to be always 1</div></div>
                        <div className='labels'><div>Enter Side <i>√b</i>:</div></div>

                        {showErrorModal ?null :(
                        <input type='number' name='input1' className='btn' onChange={handleClick}></input>)}

                        {showErrorModal ?null :(
                            <button className='btn' onClick={() => setPrint(true)}>Calculate c</button>
                        )}

                        <div className='labels'><div>The value of c is: ( √{print ? <>{data}</> : null} )</div></div>

                        <img src='./src/components/diagram1.png' className='diagram'></img><br></br>

                        <div className='bind'>
                            {showErrorModal ?null :(
                                <button className='btn' onClick={rotateByTenDegrees}>
                                    Rotate by 10°
                                </button>
                            )}

                            {showErrorModal ?null :(
                                <button className='btn' onClick={rotateByOneDegrees}>
                                    Rotate by 1°
                                </button>
                            )}
                        </div>
                            
                        {/* </div> */}

                        {showErrorModal ?null :(
                            <button className='btn' >
                                Trace
                            </button>
                        )}
                        <br></br>
                        {showNextInstruction && renderInstruction()}

                        <p>Protrator is rotated by angle: {angle}°</p>
                    
                    
                    </div>
                </div>
            {/* Rectangle-----------------------------------------------------------------------------------------------------------*/}
            {/* Rectangle-----------------------------------------------------------------------------------------------------------*/}
        </div>
{/* WorkPlace-----------------------------------------------------------------------------------------------------------------------*/}
{/* WorkPlace-----------------------------------------------------------------------------------------------------------------------*/}
    {/* Error Modal */}
    <Modal
        isOpen={showErrorModal}
        onRequestClose={closeErrorModal}
        contentLabel="Error Modal"
        style={modalStyles}
      >
        <h2 className="error-message">Error</h2>
        <p className="error-message">Inapropriate input.</p>
        <button className='btn' onClick={closeErrorModal}>Close</button>
      </Modal>

    </>
  );
};

export default Simulator;



// const handleTraceClick = () => {
//     setShowNextInstruction(true);
//     setTraceCount(traceCount + 1);
// };