import React from 'react';

function DeckButton(props) {
  let text = 'Choose your Deck'
  let onClick = props.onClick;

  return (
    <div>
      <p className="text-center glow reading-button" onClick={onClick}>{text}</p>
    </div>
  )
};

export default DeckButton;
