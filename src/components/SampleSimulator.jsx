import React, { useRef, useEffect,useState } from 'react';

const SampleSimulator = () => {
    const canvasRef1 = useRef(null);

    useEffect(() => {
        const canvas = canvasRef1.current;
        const context = canvas.getContext('2d');
        const width = canvas.width;
        const height = canvas.height;
        context.clearRect(0, 0, width, height);
        context.strokeStyle = 'green';
        const scaleIntervalX = 50;
        const startX = scaleIntervalX;
        const endX = width - scaleIntervalX;
        for (let x = startX; x <= endX; x += scaleIntervalX) {
          context.beginPath();
          context.moveTo(x, 0);
          context.lineTo(x, height);
          context.stroke();
        }
        const scaleIntervalY = 50;
        const startY = scaleIntervalY;
        const endY = height - scaleIntervalY;
        for (let y = startY; y <= endY; y += scaleIntervalY) {
            context.beginPath();
            context.moveTo(0, y);
            context.lineTo(width, y);
            context.stroke();
        }
        context.strokeStyle = 'black';
        context.fillStyle = 'black';
        context.font = '15px Arial';
        const centerX = width / 2;
        const centerY = height / 2;
        const centerScaleLength = 300; 
        context.beginPath();
        context.moveTo(centerX, centerY - centerScaleLength);
        context.lineTo(centerX, centerY + centerScaleLength);
        context.moveTo(centerX - centerScaleLength, centerY);
        context.lineTo(centerX + centerScaleLength, centerY);
        context.stroke();
        const labelOffset = -20; 
        context.fillText('X', centerX + centerScaleLength + labelOffset, centerY - labelOffset);
        context.fillText('Y', centerX - labelOffset, centerY - centerScaleLength - labelOffset);
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
        let count = 1;
        let ert = 0;

        const trace1 = () => {
            ctx.beginPath();
            ctx.moveTo(centerX + 50, centerY);
            ctx.lineTo(centerX, centerY );             
            ctx.moveTo(centerX + 50 * x, centerY - 50 * y);
            ctx.lineTo(centerX + 50 * d, centerY - 50 * c);
            ctx.moveTo(centerX + 50 * x, centerY - 50 * y);
            ctx.lineTo(centerX, centerY);
            ctx.strokeStyle = "#ff0000";
            ctx.stroke();
            const angleRadians = Math.atan2(y, x);
            const angleDegrees = (angleRadians * 180) / Math.PI;
            const angleText = `Angle: ${angleDegrees.toFixed(2)}°`;
            ctx.font = '14px Arial';
            ctx.fillStyle = 'white';
            ctx.fillText(angleText, 50, 20);

                   
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
        const traceClick1 = () => {
            trace1();
        };
        
        // Add event listener to the button
        const button = document.getElementById('traceButton');
        button.addEventListener('click', traceClick1);
    
        return () => {
          button.removeEventListener('click', traceClick1);
        }
    }, []);

    
return (
<>
    <div className='workplace'>
        <div>                    
            <div className="canvas-container">
                <canvas ref={canvasRef1} className="square" id='square' width={600} height={600}></canvas>
            </div>
        </div>

        <div>
            <div className='rec'>
                <button className='btn' id='traceButton' >Trace</button>
                <br></br>
            </div>
        </div>

    </div>

</>
  );
};

export default SampleSimulator;