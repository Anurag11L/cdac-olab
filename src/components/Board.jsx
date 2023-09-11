
import React, { useState } from 'react';
import Square from './Square';
import Rec from './Rectangle';

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
      <br></br>
      <Square />
      <Rec />


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
