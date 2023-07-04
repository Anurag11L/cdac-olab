import React, { useRef, useEffect,useState } from 'react';
import { NavLink } from 'react-router-dom';
import Draggable from 'react-draggable';
import Modal from 'react-modal';



const Simulator = () => {
// Square---------------------------------------------------------------------//

    const [x, setX] = useState(1);
    const [y, setY] = useState(1);
    const [b, setB] = useState(x);
    const [c, setC] = useState(0);
    const [d, setD] = useState(1);
    const [theta, setTheta] = useState(0);
    const [totAngle, setTotAngle] = useState(0);
    const [drawLine, setDrawLine] = useState(false);
    const [clickCount, setClickCount] = useState(0);

    // Canvas-----------------------------------------------------------------//
    

    const canvasRef1 = useRef(null);

    const trace = () => {
        setDrawLine(true);
        setClickCount(prevCount => prevCount + 1);
    };
    

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


        ///////////////////////////////////////////////////////////////
        const ctx = canvas.getContext('2d');
        let x = 1;
        let y = 1;
        let b = x;
        let c = 0;
        let d = 1;
        let theta = 0;
        // let rotateangle;
        let totangle = 0;
        let count = 1;
        let ert = 0;
    
        const trace1 = () => {
            //---------------------------------------------------------------
        //   rotateangle = Math.abs(rotateangle) % 360;
        
          ctx.beginPath();
          ctx.moveTo(centerX + 50, centerY);
          ctx.lineTo(centerX, centerY );
    
          ctx.moveTo(centerX + 50 * x, centerY - 50 * y);
          ctx.lineTo(centerX + 50 * d, centerY - 50 * c);
          ctx.moveTo(centerX + 50 * x, centerY - 50 * y);
          ctx.lineTo(centerX, centerY);
    
          ctx.strokeStyle = "#ff0000";
          ctx.stroke();


    
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

          
        //   totangle += Math.floor(Math.atan(1 / Math.sqrt(count)) * 180 / Math.PI);
        //   console.log(totangle);
        };
    
        // Event handler for the button click
        const traceClick1 = () => {
          trace1();
        };
    
        // Add event listener to the button
        const button = document.getElementById('traceButton');
        button.addEventListener('click', traceClick1);
    
        return () => {
          // Cleanup: Remove event listener when component unmounts
          button.removeEventListener('click', traceClick1);
        };

        
        
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

        //-------------------------//---------------------//--------------------//-------------
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
                    <div className='labels'> Try calculating the hypotenious you found.</div>
                    
                        <div className='labels'><div className='labels'>Considering side <i>a</i> to be always 1.</div></div>
                        {/* <div className='labels'><div>Enter Side <i>√b</i>:</div></div> */}

                        {showErrorModal ?null :(<div className='labels'>Root : √ <input type='number' name='input1' className='btn' onChange={handleClick}></input></div>)}

                        <br></br>

                        {showErrorModal ?null :(<button className='btn' onClick={() => setPrint(true)}>Calculate</button>)}

                        <div ><div className='labels'>Hypoteneous length ( c ) : <br></br>( {print ? <>{data}</> : null} )</div></div>

                        <img src='./src/components/diagram1.png' className='diagram'></img><br></br>

                        <div className='bind'>
                            {showErrorModal ?null :(<button className='btn' onClick={rotateByTenDegrees}>Rotate by 10°</button>)}

                            {showErrorModal ?null :(<button className='btn' onClick={rotateByOneDegrees}> Rotate by 1°</button>)}
                        </div>
                            
                        {/* </div> */}

                        {showErrorModal ?null :(<button className='btn' id='traceButton' >Trace</button>)}

                        <br></br>
                        {showNextInstruction && renderInstruction()}

                        <p className='labels'>Protrator is rotated by angle: {angle}°</p>

                        <p className='labels'><div className='labels'>[ Note: To draw the n<sup>th</sup> triangle, b = n ] </div></p>
                    
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
        <p className="error-message">Root of numbers less than 0 is out of syllabus.</p>
        <button className='btn' onClick={closeErrorModal}>Close</button>
      </Modal>

    </>
  );
};

export default Simulator;