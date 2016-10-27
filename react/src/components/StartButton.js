import React from 'react';

function StartButton(props) {
  let text = 'Begin your Reading'
  let onClick = props.onClick;

  return (
    <div>
      <p id="readingButton" className="text-center glow" onClick={onClick}>{text}</p>
    </div>
  )
};


export default StartButton;
