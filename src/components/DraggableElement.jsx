import React from 'react';
import Draggable from 'react-draggable';

class DraggableDiv extends React.Component {
  render() {
    return (
      <>
        <canvas className='blo'>
          <Draggable bounds=".blo">
            <div style={{ width: '200px', height: '200px', backgroundColor: 'lightblue' }}>
              Drag me!
            </div>
          </Draggable>
        </canvas>
      </>
    );
  }
}

export default DraggableDiv;
