import React from 'react';

function StartButton(props) {
  let text = 'Begin your Reading'
  let onClick = props.onClick;

  return (
    <div>
      <p id="start-button" className="text-center glow reading-button" onClick={onClick}>{text}</p>
    </div>
  )
};


export default StartButton;
