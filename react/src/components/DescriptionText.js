import React from 'react';

function DescriptionText(props) {
  let deckChoice = props.deckChoice;
  let MorganGreerText = "The Morgan-Greer deck looks like a beautiful, 1970's fairy tale."
  let MorganGreerInfo = "Copyright Bill F. Greer and Lloyd Morgan. Published by U.S. Games Systems."
  let SteampunkText = "The Steampunk deck is a gorgeous ode to a more magical Victorian era."
  let SteampunkInfo = "Copyright Barbara Moore and Ally Fell. Published by Llewellyn Publications."
  let text;
  let info;
    if (deckChoice === 1) {
      text = MorganGreerText;
      info = MorganGreerInfo;
    } else if (deckChoice === 2) {
      text = SteampunkText;
      info = SteampunkInfo;
    };

  return (
    <div className="description-text-div">
      <p className="text-center description-text">{text}</p>
      <p className="text-center description-text">{info}</p>
    </div>
  )
};

export default DescriptionText;
