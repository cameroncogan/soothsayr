import React from 'react';

function DeckButton(props) {
  let text = 'Choose your Deck'
  let onClick = props.onClick;

  return (
    <div>
      <p id="readingButton" className="text-center glow" onClick={onClick}>{text}</p>
    </div>
  )
};

export default DeckButton;
