
// import React, { useState } from 'react';

// const Rec = () => {
//   const [data, setData] = useState(null);
//   const [print, setPrint] = useState(false);
//   const [showNextInstruction, setShowNextInstruction] = useState(false);
//   const [traceCount, setTraceCount] = useState(0);

//   const handleClick = (event) => {
//     const inputB = parseInt(event.target.value);
//     const c = inputB + 1;
//     setData(c);
//     setPrint(false);
//     setShowNextInstruction(false);
//   };

//   const handleTraceClick = () => {
//     // Perform trace logic here
//     setShowNextInstruction(true);
//     setTraceCount(traceCount + 1);
//   };

//   const renderInstruction = () => {
//     if (traceCount === 1) {
//       return <p className='labels'>First instruction...</p>;
//     } else if (traceCount === 2) {
//       return <p className='labels'>Second instruction...</p>;
//     }
//     // Add more conditions for additional instructions if needed
//     return null;
//   };

//   return (
//     <>
//       <div className='rec'>

//       <p className='labels'><div>[ Note: To draw the n<sup>th</sup> triangle, b = n ] </div></p>

//         <div className='labels'><div>Considering Side <i>a</i> to be always 1</div></div>
//         <div className='labels'><div>Enter Side <i>√b</i>:</div></div>

//         <input type='number' name='input1' className='btn' onChange={handleClick}></input>

//         <button className='btn' onClick={() => setPrint(true)}>Calculate c</button>

//         <div className='labels'><div>The value of c is: ( √{print ? <>{data}</> : null} )</div></div>

//         <img src='./src/components/diagram1.png' className='diagram'></img><br></br>

//         {/* <div className='bind'>
//           <button className='btn' ><div>Rotate by 10°</div></button>
//           <button className='btn'><div>Rotate by 1°</div></button>
//         </div><br></br> */}

//         <button className='btn' onClick={handleTraceClick}>Trace</button><br></br>
//         {showNextInstruction && renderInstruction()}
        
        
//       </div>
//     </>
//   );
// };

// export default Rec;



// import React from 'react';
// import { useState } from 'react';

// const Rec = () => {
//     const [data,setData] = useState(null);
//     const [print,setPrint] = useState(false);

//     const handleClick = (event) => { 
//         const inputB = parseInt(event.target.value);
//         const c = inputB + 1;
//         setData(c); 
//         setPrint(false);
//     }
      
//     return (
//         <>
//         <div
//         className='rec'>
//             <div className='labels'>Considering Side <i>a</i> to be always 1</div>
//             <div className='labels'>Enter Side <i>√b</i> :</div> 


//             <input type='number' name='input1' className='btn' onChange={handleClick}></input>

//             <button className='btn' onClick={()=>setPrint(true)}>Calculate c</button>

//             <div className='labels'>The value of c is : ( √{print?<>{data}</>:null} )</div>

//             <img src='./src/components/diagram1.png' className='diagram'></img><br></br>

//             <div className='bind'>
//                 <button className='btn'>Rotate by 10°</button>
//                 <button className='btn'>Rotate by 1°</button>
//             </div><br></br>
//             <button className='btn'>Trace</button><br></br>
//             <p className='labels'>Note: To draw the n<sup>th</sup> triangle , b = n</p>
//         </div>
//         </>
//     );
// };

// export default Rec;