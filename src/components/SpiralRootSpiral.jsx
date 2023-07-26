import React, { useEffect, useRef, useState } from 'react';


const SquareRootSpiral = () => {
  const canvasRef = useRef(null);
  const [angle, setAngle] = useState(0);

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
    let count = 1;
    let ert = 0;

    const trace = () => {
        //---------------------------------------------------------------
      ctx.beginPath();
      ctx.moveTo(centerX +50, centerY);
      ctx.lineTo(centerX, centerY );

      ctx.moveTo(centerX + 50 * x, centerY - 50 * y);
      ctx.lineTo(centerX + 50 * d, centerY - 50 * c);
      ctx.moveTo(centerX + 50 * x, centerY - 50 * y);
      ctx.lineTo(centerX, centerY);

      ctx.strokeStyle = "#99ffff"; 
      ctx.stroke();

        // Calculate the angle
    const angleRadians = Math.atan2(y, x);
    const angleDegrees = ((angleRadians * 180) / Math.PI);
    setAngle(angleDegrees);

    
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
    <>
    <div>
    <br></br>
      <div className='theory'>
      <div className='actualtheory' style={{background:'white',padding:'2%',margin:'3%',border:'2px solid darkblue',boxShadow:'0 4px 8px 0 rgba(0, 0, 0, 0.5), 0 6px 20px 0 rgba(0, 0, 0, 0.9)'}}>
      
        <br></br>

        <p style={{ fontSize: '5.5vh', fontWeight: 'bold' ,color:'black',textShadow:' 2px 2px 20px #000000',marginTop:'0px'}}>
                Fun Activity!!!
            </p>
          <div style={{color:'black',textShadow:' 2px 2px 15px #000000'}}>First lets explore "What is Square Root Spiral?"</div>
          <br></br>
          <div style={{color:'black',textShadow:' 2px 2px 15px #000000'}}>Can you try clicking the "Draw" button given below. </div>
          <br></br>
          <button id="drawButton" className='btn' ><div style={{fontSize:'13px',color:'white'}}>Draw</div></button>
          <br></br>
          <br></br>
          <div style={{color:'black',textShadow:' 2px 2px 15px #000000'}}>Click! Click!! Click!!!</div>

          {/* <br></br> */}
          <br></br>
          <div style={{color:'black',textShadow:' 2px 2px 15px #000000'}}>The structure you have drawn is how the Square <br></br>Root Spiral actually look like.</div>
          <br></br>
          <div style={{color:'black',textShadow:' 2px 2px 15px #000000'}}>In the coming lessons we will understand the <br></br>structure and its construction in detail.</div>
          <br></br>
        </div>
        {/* <br></br> */}
        <canvas ref={canvasRef} width={500} height={500} className='canva' style={{boxShadow:'0 4px 8px 0 rgba(0, 0, 0, 0.5), 0 6px 20px 0 rgba(0, 0, 0, 0.9)'}} />
        
      </div>
        <p className='labels'></p>
        {/* <div>Angle: {angle.toFixed(10)}°</div> */}
    </div>
    </>
  );
};

export default SquareRootSpiral;