import React from 'react';

function Button(props) {
  let textEmpty = props.buttonTextEmpty;
  let textNotEmpty = props.buttonTextNotEmpty;
  let onClickEmpty = props.onClickEmpty;
  let onClickNotEmpty = props.onClickNotEmpty;

  const CardArray = props.cards;
  if (props.cards.length < 1) {
    return (
      <div>
        <p id="readingButton" className="text-center" onClick={onClickEmpty}>{textEmpty}</p>
      </div>
    )
  } else {
    return (
      <div>
        <p id="readingButton" className="text-center" onClick={onClickNotEmpty}>{textNotEmpty}</p>
      </div>
    )
  }
};


export default Button;
