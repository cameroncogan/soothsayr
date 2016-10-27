import React from 'react';

function ReturnButton(props) {
  let text = 'Return to Home'
  let onClick = props.onClick;

  return (
    <div>
      <p id="readingButton" className="text-center glow" onClick={onClick}>{text}</p>
    </div>
  )
};

export default ReturnButton;
