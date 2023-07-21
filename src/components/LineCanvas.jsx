import React, { useRef, useEffect, useState } from 'react';

const LineCanvas = () => {
  const circleInputRef = useRef(null);

  const [showInputField, setShowInputField] = useState(false);
  const [circleRadius, setCircleRadius] = useState(0);

  const handleCircle = () => {
    setShowInputField(!showInputField);
  };

  const submit = () => {
    const enteredValue = Number(circleInputRef.current.value);
    setCircleRadius(enteredValue);
    // setShowInputField(false); // Hide the input field after submission

    if (enteredValue === 2.5) {
      alert("Thank You"); // Show "Thank You" message in a pop-up
    }
    else{
      alert("check the entered value.")
    }
  };

  return (
    <div className='whole'>
      <button className='btn' onClick={handleCircle}>Circle</button>

      {showInputField && (
        <div>
          <input
            type="number"
            placeholder="Enter the calculated value. "
            ref={circleInputRef}
          />
          <button className='btn' onClick={submit}>Submit</button>
        </div>
      )}
    </div>
  );
};

export default LineCanvas;
