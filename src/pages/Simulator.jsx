import React, { useRef, useEffect,useState } from 'react';
import { NavLink } from 'react-router-dom';
import Draggable from 'react-draggable';
import Modal from 'react-modal';



const Simulator = () => {
// Square---------------------------------------------------------------------//
  const [rotation, setRotation] = useState(0);
  const [data, setData] = useState(null);
  const [print, setPrint] = useState(false);
  const [showErrorModal, setShowErrorModal] = useState(false);
  const [dataValue, setDataValue] = useState(0);

  // Add this state variable at the top of the component, along with other state variables
  const [showEnterButton, setShowEnterButton] = useState(true);

  const circleInputRef = useRef(null);

  const [showInputField, setShowInputField] = useState(false);
  const [, setCircleRadius] = useState(0);


  const [count, setCount] = useState(1);
  const [x] = useState(1);
  const [y] = useState(1);
  const [d] = useState(1);
  const [c] = useState(0);
  const [, setDigit] = useState(0);
  
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
    const scaleIntervalX = 60; // Interval between scales
    const startX = scaleIntervalX;
    const endX = width - scaleIntervalX;
    for (let x = startX; x <= endX; x += scaleIntervalX) {
      context.beginPath();
      context.moveTo(x, 0);
      context.lineTo(x, height);
      context.stroke();
    }
  
    // Draw scales along the y-axis
    const scaleIntervalY = 60; // Interval between scales
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
    context.font = '17px Arial';
  
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
    const xAxisNumberOffset = 20; 
    const xAxisNumberStart = scaleIntervalX; 
    const xAxisNumberEnd = (width - scaleIntervalX) / 2;
    const xAxisNumberInterval = 60; 
    for (let x = xAxisNumberStart; x <= xAxisNumberEnd; x += xAxisNumberInterval) {
        context.fillText((x / scaleIntervalX).toString(), centerX + x - xAxisNumberOffset, centerY + xAxisNumberOffset);
    }
    context.lineWidth = 2;

    context.beginPath();
    context.moveTo(centerX + 60, centerY);
    context.lineTo(centerX, centerY);
    context.strokeStyle = "#ff0000";
    context.stroke();

    context.beginPath();
    const radius = 3;
    context.fillStyle = 'black';
    context.arc(centerX, centerY, radius, 0, 2 * Math.PI);
    context.fill();

    context.beginPath();
    const radius1 = 3;
    context.fillStyle = 'black';
    context.arc(centerX+60, centerY, radius1, 0, 2 * Math.PI);
    context.fill();

    // context.beginPath();
    //       // const radius1 = 3;
    //       context.fillStyle = 'black';
    //       context.arc(0.2928932188, 1.707106781, radius1, 0, 2 * Math.PI);
    //       context.fill();


}, []);


const handleCreateClick = () => {
  const canvas = canvasRef1.current;
  const ctx = canvas.getContext('2d');
  const centerX = canvas.width / 2;
  const centerY = canvas.height / 2;

  // Iteration 1----------------------------------------------
    if(count === 1){
      if(angle ===0){
        if(count < data){
          ctx.beginPath();
          ctx.moveTo(centerX + 60, centerY);
          ctx.lineTo(centerX, centerY);
          ctx.moveTo(centerX + 60 * x, centerY - 60 * y);
          ctx.lineTo(centerX + 60 * d, centerY - 60 * c);
          ctx.moveTo(centerX + 60 * x, centerY - 60 * y);
          ctx.lineTo(centerX, centerY);
          ctx.strokeStyle = "#ff0000";
          ctx.stroke();

          ctx.beginPath();
          const radius1 = 3;
          ctx.fillStyle = 'black';
          ctx.arc(centerX+60, centerY-60, radius1, 0, 2 * Math.PI);
          ctx.fill();

          setCount(2);
        }
      }
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
      if(angle === hypo ){
        if(count < data){
          ctx.beginPath();
          ctx.moveTo(centerX + 60, centerY);
          ctx.lineTo(centerX, centerY);
          ctx.moveTo(centerX + 60 * xx, centerY - 60 * yy);
          ctx.lineTo(centerX + 60 * dd, centerY - 60 * cc);
          ctx.moveTo(centerX + 60 * xx, centerY - 60 * yy);
          ctx.lineTo(centerX, centerY);
          ctx.strokeStyle = "#ff0000";
          ctx.stroke();

          ctx.beginPath();
          const radius1 = 3;
          ctx.fillStyle = 'black';
          ctx.arc(centerX + 60 * xx, centerY - 60 * yy, radius1, 0, 2 * Math.PI);
          ctx.fill();

          setCount(3);
        }
      }
    }

    let xx1 = 0;
    let yy1 = 0;
    let dd1 = 0;
    let cc1 = 0;
    let hypo1 = 0;
    let totalAngle1 = 0;
    let autoAngleDeg1 = 0;

    hypo1 = totalAngle; //80.26438968275465
    autoAngleRad = Math.atan(1/Math.sqrt(3));
    autoAngleDeg1 = autoAngleRad * (180 / Math.PI); //30.000000000000004
    totalAngle1 = hypo1 + autoAngleDeg1;//110.26438968275465
    xx1 = -0.6927053408;
    yy1 = 1.87620876;
    dd1 = 0.2928932188;
    cc1 = 1.707106781;
    // console.log(totalAngle1);
    // console.log(autoAngleDeg1);   correct

    // Iteration 3-----------------------------------------------------
    if(count === 3){
      if(angle <= (totalAngle + 2) && angle >=(totalAngle - 2)){
        if(count < data){
          ctx.beginPath();
          ctx.moveTo(centerX + 60, centerY);
          ctx.lineTo(centerX, centerY);
          ctx.moveTo(centerX + 60 * xx1, centerY - 60 * yy1);
          ctx.lineTo(centerX + 60 * dd1, centerY - 60 * cc1);
          ctx.moveTo(centerX + 60 * xx1, centerY - 60 * yy1);
          ctx.lineTo(centerX, centerY);
          ctx.strokeStyle = "#ff0000";
          ctx.stroke();

          ctx.beginPath();
          const radius1 = 3;
          ctx.fillStyle = 'black';
          ctx.arc(centerX + 60 * xx1, centerY - 60 * yy1, radius1, 0, 2 * Math.PI);
          ctx.fill();

          setCount(4);
        }
      }
    }

    let xx2 = 0;
    let yy2 = 0;
    let dd2 = 0;
    let cc2 = 0;
    let hypo2 = 0;
    let totalAngle2 = 0;
    let autoAngleDeg2 = 0;

    hypo2 =110.26438968275465;
    autoAngleRad = Math.atan(1/Math.sqrt(4));
    autoAngleDeg2 = autoAngleRad * (180 / Math.PI); //26.56505117707799
    totalAngle2 = hypo2 + autoAngleDeg2;//136.82944085983263
    xx2 = -1.630809721;
    yy2 = 1.529856089;
    dd2 = -0.6927053408;
    cc2 = 1.87620876;
    // console.log(totalAngle2);
    // console.log(autoAngleDeg2);   correct

    // Iteration 4-----------------------------------------------------
    if(count === 4){
      if(angle <= (hypo2 + 2) && angle >=(hypo2 - 2)){
        if(count < data){
        ctx.beginPath();
        ctx.moveTo(centerX + 60, centerY);
        ctx.lineTo(centerX, centerY);
        ctx.moveTo(centerX + 60 * xx2, centerY - 60 * yy2);
        ctx.lineTo(centerX + 60 * dd2, centerY - 60 * cc2);
        ctx.moveTo(centerX + 60 * xx2, centerY - 60 * yy2);
        ctx.lineTo(centerX, centerY);
        ctx.strokeStyle = "#ff0000";
        ctx.stroke();

        ctx.beginPath();
          const radius1 = 3;
          ctx.fillStyle = 'black';
          ctx.arc(centerX + 60 * xx2, centerY - 60 * yy2, radius1, 0, 2 * Math.PI);
          ctx.fill();

        setCount(5);
        }
      }
    }

    let xx3 = 0;
    let yy3 = 0;
    let dd3 = 0;
    let cc3 = 0;
    let hypo3 = 0;
    let totalAngle3 = 0;
    let autoAngleDeg3 = 0;

    hypo3 =136.82944085983263;
    autoAngleRad = Math.atan(1/Math.sqrt(5));
    autoAngleDeg3 = autoAngleRad * (180 / Math.PI); //24.094842552110702
    totalAngle3 = hypo3 + autoAngleDeg3;//160.92428341194332
    xx3 = -2.306040047;
    yy3 = 0.8259414631;
    dd3 = -1.630809721;
    cc3 = 1.529856089;
    // console.log(totalAngle3);
    // console.log(autoAngleDeg3);   correct

    // Iteration 5-----------------------------------------------------
    if(count === 5){
      if(angle <= (hypo3 + 2) && angle >=(hypo3 - 2)){
        if(count < data){
          ctx.beginPath();
          ctx.moveTo(centerX + 60, centerY);
          ctx.lineTo(centerX, centerY);
          ctx.moveTo(centerX + 60 * xx3, centerY - 60 * yy3);
          ctx.lineTo(centerX + 60 * dd3, centerY - 60 * cc3);
          ctx.moveTo(centerX + 60 * xx3, centerY - 60 * yy3);
          ctx.lineTo(centerX, centerY);
          ctx.strokeStyle = "#ff0000";
          ctx.stroke();

          ctx.beginPath();
          const radius1 = 3;
          ctx.fillStyle = 'black';
          ctx.arc(centerX + 60 * xx3, centerY - 60 * yy3, radius1, 0, 2 * Math.PI);
          ctx.fill();

          setCount(6);
        }
      }
    }

    let xx4 = 0;
    let yy4 = 0;
    let dd4 = 0;
    let cc4 = 0;
    let hypo4 = 0;
    let totalAngle4 = 0;
    let autoAngleDeg4 = 0;

    hypo4 = 160.92428341194332;
    autoAngleRad = Math.atan(1/Math.sqrt(6));
    autoAngleDeg4 = autoAngleRad * (180 / Math.PI); //22.20765429859649
    totalAngle4 = (hypo4 + autoAngleDeg4);//183.1319377105398
    xx4 = -2.641799539;
    yy4 = -0.1445516999;
    dd4 = -2.306040047;
    cc4 = 0.8259414631;
    // console.log(totalAngle4);
    // console.log(autoAngleDeg4);   correct

    // Iteration 6-----------------------------------------------------
    if(count === 6){
      if(angle <= (hypo4 + 2) && angle >=(hypo4 - 2)){
        if(count < data){
          ctx.beginPath();
          ctx.moveTo(centerX + 60, centerY);
          ctx.lineTo(centerX, centerY);
          ctx.moveTo(centerX + 60 * xx4, centerY - 60 * yy4);
          ctx.lineTo(centerX + 60 * dd4, centerY - 60 * cc4);
          ctx.moveTo(centerX + 60 * xx4, centerY - 60 * yy4);
          ctx.lineTo(centerX, centerY);
          ctx.strokeStyle = "#ff0000";
          ctx.stroke();

          ctx.beginPath();
          const radius1 = 3;
          ctx.fillStyle = 'black';
          ctx.arc(centerX + 60 * xx4, centerY - 60 * yy4, radius1, 0, 2 * Math.PI);
          ctx.fill();

          setCount(7);
        }
      }
    }

    
    let xx5 = 0;
    let yy5 = 0;
    let dd5 = 0;
    let cc5 = 0;
    let hypo5 = 0;
    let totalAngle5 = 0;
    let autoAngleDeg5 = 0;

    hypo5 = 183.1319377105398;
    autoAngleRad = Math.atan(1/Math.sqrt(7));
    autoAngleDeg5 = autoAngleRad * (180 / Math.PI); //20.704811054635428
    totalAngle5 = (hypo5 + autoAngleDeg5);//203.83674876517523
    xx5 = -2.587164132;
    yy5 = -1.143058071;
    dd5 = -2.641799539;
    cc5 = -0.1445516999;
    // console.log(totalAngle5);
    // console.log(autoAngleDeg5);

    // Iteration 7-----------------------------------------------------
    if(count === 7){
      if(angle <= (hypo5 + 2) && angle >=(hypo5 - 2)){
        if(count < data){
          ctx.beginPath();
          ctx.moveTo(centerX + 60, centerY);
          ctx.lineTo(centerX, centerY);
          ctx.moveTo(centerX + 60 * xx5, centerY - 60 * yy5);
          ctx.lineTo(centerX + 60 * dd5, centerY - 60 * cc5);
          ctx.moveTo(centerX + 60 * xx5, centerY - 60 * yy5);
          ctx.lineTo(centerX, centerY);
          ctx.strokeStyle = "#ff0000";
          ctx.stroke();

          ctx.beginPath();
          const radius1 = 3;
          ctx.fillStyle = 'black';
          ctx.arc(centerX + 60 * xx5, centerY - 60 * yy5, radius1, 0, 2 * Math.PI);
          ctx.fill();

          setCount(8);
        }
      }
    }

    let xx6 = 0;
    let yy6 = 0;
    let dd6 = 0;
    let cc6 = 0;
    let hypo6 = 0;
    let totalAngle6 = 0;
    let autoAngleDeg6 = 0;

    hypo6 = 203.83674876517523;
    autoAngleRad = Math.atan(1/Math.sqrt(8));
    autoAngleDeg6 = autoAngleRad * (180 / Math.PI); //19.47122063449069
    totalAngle6 = (hypo6 + autoAngleDeg6);//223.30796939966592
    xx6 = -2.183032076;
    yy6 = -2.057758722;
    dd6 = -2.587164132;
    cc6 = -1.143058071;
    // console.log(totalAngle6);
    // console.log(autoAngleDeg6);

    // Iteration 8-----------------------------------------------------
    if(count === 8){
      if(angle <= (hypo6 + 2) && angle >=(hypo6 - 2)){
        if(count < data){
          ctx.beginPath();
          ctx.moveTo(centerX + 60, centerY);
          ctx.lineTo(centerX, centerY);
          ctx.moveTo(centerX + 60 * xx6, centerY - 60 * yy6);
          ctx.lineTo(centerX + 60 * dd6, centerY - 60 * cc6);
          ctx.moveTo(centerX + 60 * xx6, centerY - 60 * yy6);
          ctx.lineTo(centerX, centerY);
          ctx.strokeStyle = "#ff0000";
          ctx.stroke();

          ctx.beginPath();
          const radius1 = 3;
          ctx.fillStyle = 'black';
          ctx.arc(centerX + 60 * xx6, centerY - 60 * yy6, radius1, 0, 2 * Math.PI);
          ctx.fill();

          setCount(9);
        }
      }
    }

    let xx7 = 0;
    let yy7 = 0;
    let dd7 = 0;
    let cc7 = 0;
    let hypo7 = 0;
    let totalAngle7 = 0;
    let autoAngleDeg7 = 0;

    hypo7 = 223.30796939966592;
    autoAngleRad = Math.atan(1/Math.sqrt(9));
    autoAngleDeg7 = autoAngleRad * (180 / Math.PI); //18.43494882292201
    totalAngle7 = (hypo7 + autoAngleDeg7);//241.74291822258795
    xx7 = -1.497112502;
    yy7 = -2.78543608;
    dd7 = -2.183032076;
    cc7 = -2.057758722;
    // console.log(totalAngle7);
    // console.log(autoAngleDeg7);

    // Iteration 9-----------------------------------------------------
    if(count === 9){
      if(angle <= (hypo7 + 2) && angle >=(hypo7 - 2)){
        if(count < data){
          ctx.beginPath();
          ctx.moveTo(centerX + 60, centerY);
          ctx.lineTo(centerX, centerY);
          ctx.moveTo(centerX + 60 * xx7, centerY - 60 * yy7);
          ctx.lineTo(centerX + 60 * dd7, centerY - 60 * cc7);
          ctx.moveTo(centerX + 60 * xx7, centerY - 60 * yy7);
          ctx.lineTo(centerX, centerY);
          ctx.strokeStyle = "#ff0000";
          ctx.stroke();

          ctx.beginPath();
          const radius1 = 3;
          ctx.fillStyle = 'black';
          ctx.arc(centerX + 60 * xx7, centerY - 60 * yy7, radius1, 0, 2 * Math.PI);
          ctx.fill();

          setCount(10);
        }
      }
    }

};


const handleCircle = () => {

  const canvas = canvasRef1.current;
  const ctx = canvas.getContext('2d');
  const width = canvas.width;
  const height = canvas.height;
  const centerX = width / 2;
  const centerY = height / 2;

  if(count === 1){
      if(data === 1){
        const radius = 60;
        ctx.beginPath();
        ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI);
        ctx.strokeStyle = "#0000ff";
        ctx.stroke();
        ctx.closePath();

        ctx.beginPath();
        ctx.moveTo(centerX +60, centerY );
        ctx.lineTo(centerX, centerY);
        ctx.strokeStyle = "ff0000";
        ctx.stroke();
        ctx.closePath();

        // Draw text for line length above the line
        ctx.font = '20px Arial';
        ctx.fillStyle = "ff0000";
        ctx.fillText(`${Math.sqrt(1).toFixed(2)}`, (centerX +330) / 2, (centerY +290)/2);
        setDataValue( Math.sqrt(1).toFixed(2));
        setShowInputField(!showInputField);
      }
  }

  if(count === 2){
      if(data ===2){
        const radius = 60 * Math.sqrt(2);
        ctx.beginPath();
        ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI);
        ctx.strokeStyle = "#0000ff";
        ctx.stroke();
        ctx.closePath();

        ctx.beginPath();
        ctx.moveTo(centerX +(60 * Math.sqrt(2)), centerY );
        ctx.lineTo(centerX, centerY);
        ctx.strokeStyle = "ff0000";
        ctx.stroke();
        ctx.closePath();

        // Draw text for line length above the line
        ctx.font = '20px Arial';
        ctx.fillStyle = "ff0000";
        ctx.fillText(`${Math.sqrt(2).toFixed(2)}`, (centerX +340) / 2, (centerY +290)/2);
        setDataValue( Math.sqrt(2).toFixed(2));
        setShowInputField(!showInputField);
      }
  }

  if(count === 3 ){
      if(data === 3){
        const radius = 60 * Math.sqrt(3);
        ctx.beginPath();
        ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI);
        ctx.strokeStyle = "#0000ff";
        ctx.stroke();
        ctx.closePath();

        ctx.beginPath();
        ctx.moveTo(centerX +(60 * Math.sqrt(3)), centerY );
        ctx.lineTo(centerX, centerY);
        ctx.strokeStyle = "ff0000";
        ctx.stroke();
        ctx.closePath();

        // Draw text for line length above the line
        ctx.font = '20px Arial';
        ctx.fillStyle = "00ff00";
        ctx.fillText(`${Math.sqrt(3).toFixed(2)}`, (centerX +350) / 2, (centerY +290)/2);
        setDataValue( Math.sqrt(3).toFixed(2));
        setShowInputField(!showInputField);
      }
  }

  if(count === 4 ){
    if(data === 4){
      const radius = 60 * Math.sqrt(4);
      ctx.beginPath();
      ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI);
      ctx.strokeStyle = "#0000ff";
      ctx.stroke();
      ctx.closePath();

      ctx.beginPath();
      ctx.moveTo(centerX +(60 * Math.sqrt(4)), centerY );
      ctx.lineTo(centerX, centerY);
      ctx.strokeStyle = "ff0000";
      ctx.stroke();
      ctx.closePath();

      // Draw text for line length above the line
      ctx.font = '20px Arial';
      ctx.fillStyle = "0000ff";
      ctx.fillText(`${Math.sqrt(4).toFixed(2)}`, (centerX +390) / 2, (centerY +290)/2);
      setDataValue( Math.sqrt(4).toFixed(2));
      setShowInputField(!showInputField);
    }
}

if(count === 5){
  if(data === 5){
    const radius = 60 * Math.sqrt(5);
    ctx.beginPath();
    ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI);
    ctx.strokeStyle = "#0000ff";
    ctx.stroke();
    ctx.closePath();

    ctx.beginPath();
    ctx.moveTo(centerX +(60 * Math.sqrt(5)), centerY );
    ctx.lineTo(centerX, centerY);
    ctx.strokeStyle = "ff0000";
    ctx.stroke();
    ctx.closePath();

    // Draw text for line length above the line
    ctx.font = '20px Arial';
    ctx.fillStyle = "0000ff";
    ctx.fillText(`${Math.sqrt(5).toFixed(2)}`, (centerX +400) / 2, (centerY +290)/2);
    setDataValue( Math.sqrt(5).toFixed(2));
    setShowInputField(!showInputField);
  }
}

if(count === 6){
  if(data === 6){
    const radius = 60 * Math.sqrt(6);
    ctx.beginPath();
    ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI);
    ctx.strokeStyle = "#0000ff";
    ctx.stroke();
    ctx.closePath();

    ctx.beginPath();
    ctx.moveTo(centerX +(60 * Math.sqrt(6)), centerY );
    ctx.lineTo(centerX, centerY);
    ctx.strokeStyle = "ff0000";
    ctx.stroke();
    ctx.closePath();

    // Draw text for line length above the line
    ctx.font = '20px Arial';
    ctx.fillStyle = "0000ff";
    ctx.fillText(`${Math.sqrt(6).toFixed(2)}`, (centerX +420) / 2, (centerY +290)/2);
    setDataValue( Math.sqrt(6).toFixed(2));
    setShowInputField(!showInputField);
  }
}

if(count === 7){
  if(data === 7){
    const radius = 60 * Math.sqrt(7);
    ctx.beginPath();
    ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI);
    ctx.strokeStyle = "#0000ff";
    ctx.stroke();
    ctx.closePath();

    ctx.beginPath();
    ctx.moveTo(centerX +(60 * Math.sqrt(7)), centerY );
    ctx.lineTo(centerX, centerY);
    ctx.strokeStyle = "ff0000";
    ctx.stroke();
    ctx.closePath();

    // Draw text for line length above the line
    ctx.font = '20px Arial';
    ctx.fillStyle = "0000ff";
    ctx.fillText(`${Math.sqrt(7).toFixed(2)}`, (centerX +450) / 2, (centerY +290)/2);
    setDataValue( Math.sqrt(7).toFixed(2));
    setShowInputField(!showInputField);
  }
}

if(count === 8){
  if(data === 8){
    const radius = 60 * Math.sqrt(8);
    ctx.beginPath();
    ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI);
    ctx.strokeStyle = "#0000ff";
    ctx.stroke();
    ctx.closePath();

    ctx.beginPath();
    ctx.moveTo(centerX +(60 * Math.sqrt(8)), centerY );
    ctx.lineTo(centerX, centerY);
    ctx.strokeStyle = "ff0000";
    ctx.stroke();
    ctx.closePath();

    // Draw text for line length above the line
    ctx.font = '20px Arial';
    ctx.fillStyle = "0000ff";
    ctx.fillText(`${Math.sqrt(8).toFixed(2)}`, (centerX +470) / 2, (centerY +290)/2);
    setDataValue( Math.sqrt(8).toFixed(2));
    setShowInputField(!showInputField);
  }
}

if(count === 9){
  if(data === 9){
    const radius = 60 * Math.sqrt(9);
    ctx.beginPath();
    ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI);
    ctx.strokeStyle = "#0000ff";
    ctx.stroke();
    ctx.closePath();

    ctx.beginPath();
    ctx.moveTo(centerX +(60 * Math.sqrt(9)), centerY );
    ctx.lineTo(centerX, centerY);
    ctx.strokeStyle = "ff0000";
    ctx.stroke();
    ctx.closePath();

    // Draw text for line length above the line
    ctx.font = '20px Arial';
    ctx.fillStyle = "0000ff";
    ctx.fillText(`${Math.sqrt(9).toFixed(2)}`, (centerX +510) / 2, (centerY +290)/2);
    setDataValue( Math.sqrt(9).toFixed(2));
    setShowInputField(!showInputField);
  }
}

if(count === 10){
  if(data === 10){
    const radius = 60 * Math.sqrt(10);
    ctx.beginPath();
    ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI);
    ctx.strokeStyle = "#0000ff";
    ctx.stroke();
    ctx.closePath();

    ctx.beginPath();
    ctx.moveTo(centerX +(60 * Math.sqrt(10)), centerY );
    ctx.lineTo(centerX, centerY);
    ctx.strokeStyle = "ff0000";
    ctx.stroke();
    ctx.closePath();

    // Draw text for line length above the line
    ctx.font = '20px Arial';
    ctx.fillStyle = "0000ff";
    ctx.fillText(`${Math.sqrt(10).toFixed(2)}`, (centerX +540) / 2, (centerY +290)/2);
    setDataValue( Math.sqrt(10).toFixed(2));
    setShowInputField(!showInputField);
  }
}


}

// Canvas-----------------------------------------------------------------//

// Square---------------------------------------------------------------------//

    //Rectangle-------------------------------------------------------------//


        //-------------------------//---------------------//--------------------//-------------
        const handleClick = (event) => {
          // Check if the input value contains a decimal point
          if (event.target.value.includes('.')) {
            setShowErrorModal(true);
            event.target.value = "";
            return; 
          }

          const inputB = parseInt(event.target.value);

          if(inputB >= 3 && inputB <= 9) {
            const m = inputB;
            setData(m);
            setDigit(m);
            setPrint(false);
            setShowEnterButton(false); // Hide the "Enter" button
          }else if (event.target.value.trim() !== "") {
            setShowErrorModal(true);
            event.target.value = ""; // Clear the input field
          }
          };

          // const m1 = m;

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

        const submit = () => {
          const enteredValue = parseFloat(circleInputRef.current.value);
          setCircleRadius(enteredValue);
          console.log(enteredValue);
          // setShowInputField(false); // Hide the input field after submission
      
          
          console.log(dataValue);

          if (count === 3 && enteredValue === 1.73) {
            alert("You have successfully found the value."); // Show "Thank You" message in a pop-up
          }
          else if(count === 4 && enteredValue === 2){
            alert("You have successfully found the value.");
          }
          else if(count === 5 && enteredValue === 2.24){
            alert("You have successfully found the value.");
          }
          else if(count === 6 && enteredValue === 2.45){
            alert("You have successfully found the value.");
          }
          else if(count === 7 && enteredValue === 2.65){
            alert("You have successfully found the value.");
          }
          else if(count === 8 && enteredValue === 2.83){
            alert("You have successfully found the value.");
          }
          else if(count === 9 && enteredValue === 3){
            alert("You have successfully found the value.");
          }
          else if(count === 10 && enteredValue === 3.16){
            alert("You have successfully found the value.");
          }
          else{
            alert("Check the entered value.")
          }
        };

//Rectangle-------------------------------------------------------------//
  
    
  return (
    <>
    <br></br>
{/* Header--------------------------------------------------------------------------------------------------------------------------*/}
{/* Header--------------------------------------------------------------------------------------------------------------------------*/}
        <header>
                <div>
                    <a href='/theory' className='logo' >Square Root Spiral</a>
                    <nav className='navbar'>
                        {/* <a href='#' className='toggle-button'>
                            <span className='bar'></span>
                            <span className='bar'></span>
                            <span className='bar'></span>
                        </a> */}
                        <ul className='menu' >
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
        {/* <div className='title'>
            -SIMULATOR-
        </div> */}
        <div style={{ color:'black',fontWeight: 'bold',}}>Objective: Construction of the Square Root Spiral.</div>
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
            {/* Square--------------------------------------------------------------------------------------------------------------*/}
            {/* Square--------------------------------------------------------------------------------------------------------------*/}
            
            {/* Rectangle-----------------------------------------------------------------------------------------------------------*/}
            {/* Rectangle-----------------------------------------------------------------------------------------------------------*/}
            <div>
                    <div className='rec'>
                    <br></br>
                    {/* <div className='labels'> Try calculating the hypotenious you found.</div> */}
                    
                        {/* <div className='labels'><div className='labels'>Considering side <i>a</i> to be always 1.</div></div> */}
                        <div className='labels'><div className='labels'>Till which Square Root value do you want to draw?</div></div>

                        {/* {showErrorModal ?null :(<div className='labels'>Root : √ <input type='number' name='input1' className='btn' onChange={handleClick}></input></div>)} */}
                        <br></br>

                        {showErrorModal ? null : (
                          <div className='bindnew'>
                            {showEnterButton ? (
                              <div className='labels'>
                                <input type='number' name='input1' className='btn' onChange={handleClick} />
                              </div>
                            ) : (<>
                            <div>
                                <div className='labels' >Calculate value of √{data}.</div>
                                {/* <br></br> */}
                                <div className='labels' style={{margin:'5px',color:'red',fontWeight:'bold'}}> √{count} Square Root Spiral drawn.</div>
                                </div>
                              </>
                            )}
                          </div>
                        )}

                        {/* <div ><div className='labels'><br></br>( {print ? <>{data}</> : null} )</div></div> */}
                        {/* <div ><div className='labels'><br></br>( {print ? <>{m1}</> : null} )</div></div> */}


                        <br></br>
                        {/* <br></br> */}

                        <div ><div className='labels'> Controls :</div></div>

                        {/* <img src='./src/components/diagram1.png' className='diagram'></img><br></br> */}

                        <div className='bindnew'>
                            {showErrorModal ?null :(<button className='btn' onClick={rotateByTenDegrees}>Rotate by 10°</button>)}
                            {showErrorModal ?null :(<button className='btn' onClick={rotateByOneDegrees}>Rotate by 1°</button>)}
                            <div className='bindnew'>
                            {showErrorModal ?null :(<button className='btn' onClick={handleCreateClick}>Trace</button>)}
                            {showErrorModal ?null :(<button className='btn' onClick={handleCircle}>Circle</button>)}
                            </div>
                        </div>

                        <br></br>

                        <div className='rec-instructions'>
                        <div>Instructions :</div>
                        <div>Step 1: Enter an integer between 3 and 9 of your choice in the input bar given above.</div>
                        <br></br>
                        <div>Step 2: Place the protractor on the vertex and adjust the angle of the protractor with respect to the hypotenuse, then PRESS 'Trace'. </div>
                        <br></br>
                        <div>Step 3: Repeat Step 2 until you have reached the desired square root.</div>
                        <br></br>
                        <div>Step 4: Construct a circle and record the length of the square root. </div>
                        {/* <div>---------------</div> */}
                        <br></br>

                        </div>

                        {showInputField && (
                        <div>
                        {/* <br></br> */}
                        <div ><b>Enter your calculated value as shown on the graph.</b></div>
                          <input
                            type="number"
                            placeholder="Enter the value."
                            ref={circleInputRef}
                          />
                          <button className='btn' onClick={submit}>Submit</button>
                        </div>
                      )}
                        {/* <p className='labels'>Protrator is rotated by angle: {angle}°</p> */}
                    
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
        
        <p className="error-message">Enter an integer between 3 and 9.</p>
        {/* <p className="error-message">Decimal value is no</p> */}
        <button className='btn' onClick={closeErrorModal}>Close</button>
      </Modal>

      <br></br>
    </>
  );
};

export default Simulator;