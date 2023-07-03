
import React, { useState } from 'react';
import Square from './Square';
import Rec from './Rectangle';
// import Draggable from "react-draggable";
// import Header from './Header';

const Board = () => {
  const [dragging, setDragging] = useState(false);

  const handleDragStart = () => {
    setDragging(true);
  };

  const handleDragStop = () => {
    setDragging(false);
  };

  return (
    <div className="board">
      {/* <Header/> */}
      <br></br>
      <Square />
      <Rec />

      {/* <Draggable bounds=".square" onStart={handleDragStart} onStop={handleDragStop} >
        <div className={`draggable-element ${dragging ? "dragging" : ""}`}>
          <img src='./src/components/protractor11-removebg-preview.png'></img>
        </div>
      </Draggable> */}

      <style>
        {`
          .board {
            position: relative;
          }

          .draggable-element {
            position: absolute;
            top: 0;
            left: 0;
          }

          .dragging {
            z-index: 9999;
          }
        `}
      </style>
    </div>
  );
};

export default Board;
