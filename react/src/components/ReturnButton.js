import React from 'react';

function ReturnButton(props) {
  let text = 'Return to Home'
  let onClick = props.onClick;

  return (
    <div>
      <p className="text-center glow reading-button" onClick={onClick}>{text}</p>
    </div>
  )
};

export default ReturnButton;
