



// import React, { useRef, useEffect,useState } from 'react';
// // import {
// //   Chart as ChartJS,
// //   CategoryScale,
// //   LinearScale,
// //   PointElement,
// //   LineElement,
// // } from 'chart.js';
// // import { Line } from 'react-chartjs-2';
// // import faker from 'faker';
// import Draggable from 'react-draggable';

// // ChartJS.register(
// //   CategoryScale,
// //   LinearScale,
// //   PointElement,
// //   LineElement,
// // );



// const Square = () => {

//   // const data ={
//   //   labels:[1,2,3],
//   //   datasets: [{
//   //       labels: 'Sales of the week',
//   //       data:[3,6,9],
//   //       backgroundColor:'aqua',
//   //       borderColor:'white',
//   //       pointBorderColor:'aqua',
//   //       fill:true,
//   //       tension:0.4
//   //     }
//   //   ]
//   // }

//   // const options ={
//   //   plugins:{
//   //     legend:true
//   //   },
//   //   scales:{
//   //     y:{
//   //       min:3,
//   //       max:6
//   //     }
//   //   }
//   // }



//   const canvasRef = useRef(null);
//   const [rotationAngle, setRotationAngle] = useState(0);

//   const rotateByTenDegrees = () => {
//     const newRotationAngle = rotationAngle - 10;
//     setRotationAngle(newRotationAngle >= -360 ? newRotationAngle : 0);
//   };

//   const rotateByOneDegrees = () => {
//     const newRotationAngle = rotationAngle - 1;
//     setRotationAngle(newRotationAngle >= -360 ? newRotationAngle : 0);
//   };

//   const angle = -1 * rotationAngle;

//   return (
//     // <><div>hi</div></>
//     <div className="canvas-container">

//           <canvas ref={canvasRef} className="square" id='square'></canvas>

//           <div className="draggable-container">
//             <Draggable bounds=".square">
//               <div className="drag-element">
//                 <img src='./src/components/protractor.png' alt='protractor' height={"150px"} className='protract'
//                   style={{ transform: `rotate(${rotationAngle}deg)`,transformOrigin: 'center bottom',/*marginTop: '-10px'  */}}
//                 />
//               </div>
//             </Draggable>
//           </div>

//           <button className='btn' onClick={rotateByTenDegrees}>
//             Rotate by 10°
//           </button>

//           <button className='btn' onClick={rotateByOneDegrees}>
//             Rotate by 1°
//           </button>

//           <button className='btn'>Trace</button>
//           <p>Protrator is rotated by angle: {angle}°</p>
//           {/* <div className='graph'><Line options={options} data={data} /></div> */}
      
//     </div>
//   );
// };

// export default Square;







// import React, { useRef, useEffect, useState } from 'react';
// import Chart from 'chart.js';
// import Draggable from 'react-draggable';

// const Square = () => {
//   const canvasRef = useRef(null);
//   const [rotationAngle, setRotationAngle] = useState(0);
//   let chartRef;

//   useEffect(() => {
//     const ctx = canvasRef.current.getContext('2d');

//     chartRef = new Chart(ctx, {
//       type: 'line',
//       data: {
//         labels: ['X', 'Y'],
//         datasets: [
//           {
//             data: [
//               { x: 0, y: 0 },
//               { x: 1, y: 0 },
//             ],
//             borderColor: 'red',
//             borderWidth: 2,
//             fill: false,
//             pointRadius: 0,
//           },
//           {
//             data: [
//               { x: 0, y: -1 },
//               { x: 0, y: 1 },
//             ],
//             borderColor: 'blue',
//             borderWidth: 2,
//             fill: false,
//             pointRadius: 0,
//           },
//         ],
//       },
//       options: {
//         scales: {
//           x: {
//             type: 'linear',
//             position: 'center',
//             ticks: {
//               display: false,
//             },
//             grid: {
//               display: false,
//             },
//           },
//           y: {
//             type: 'linear',
//             position: 'center',
//             ticks: {
//               display: false,
//             },
//             grid: {
//               display: false,
//             },
//           },
//         },
//         plugins: {
//           legend: {
//             display: false,
//           },
//           tooltip: {
//             enabled: false,
//           },
//         },
//       },
//     });
//   }, []);

//   const rotateByTenDegrees = () => {
//     const newRotationAngle = rotationAngle - 10;
//     setRotationAngle(newRotationAngle >= -360 ? newRotationAngle : 0);
//     if (chartRef) {
//       chartRef.data.datasets.forEach(dataset => {
//         dataset.data.forEach(point => {
//           const x = point.x;
//           const y = point.y;
//           point.x = x * Math.cos(-Math.PI / 180 * 10) - y * Math.sin(-Math.PI / 180 * 10);
//           point.y = x * Math.sin(-Math.PI / 180 * 10) + y * Math.cos(-Math.PI / 180 * 10);
//         });
//       });
//       chartRef.update();
//     }
//   };

//   const rotateByOneDegrees = () => {
//     const newRotationAngle = rotationAngle - 1;
//     setRotationAngle(newRotationAngle >= -360 ? newRotationAngle : 0);
//     if (chartRef) {
//       chartRef.data.datasets.forEach(dataset => {
//         dataset.data.forEach(point => {
//           const x = point.x;
//           const y = point.y;
//           point.x = x * Math.cos(-Math.PI / 180) - y * Math.sin(-Math.PI / 180);
//           point.y = x * Math.sin(-Math.PI / 180) + y * Math.cos(-Math.PI / 180);
//         });
//       });
//       chartRef.update();
//     }
//   };

//   const angle = -1 * rotationAngle;

//   return (
//     <div className="canvas-container">
//       <canvas ref={canvasRef} className="square" id="square" width={400} height={400} />

//       <div className="draggable-container">
//         <Draggable bounds=".square">
//           <div className="drag-element">
//             <img
//               src="./src/components/protractor.png"
//               alt="protractor"
//               height="150px"
//               className="protract"
//               style={{
//                 transform: `rotate(${rotationAngle}deg)`,
//                 transformOrigin: 'center bottom',
//               }}
//             />
//           </div>
//         </Draggable>
//       </div>

//       <button className="btn" onClick={rotateByTenDegrees}>
//         Rotate by 10°
//       </button>

//       <button className="btn" onClick={rotateByOneDegrees}>
//         Rotate by 1°
//       </button>
//       <p>Protractor is rotated by angle: {angle}°</p>
//     </div>
//   );
// };

// export default Square;