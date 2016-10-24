import React from 'react';

function Button(props) {
  let textGetCards = props.buttonText.get;
  let textAddCard = props.buttonText.add;
  let onClickGetCards = props.onButtonClick.get;
  let onClickAddCard = props.onButtonClick.add;
  let storyStage = props.storyStage;

  const CardArray = props.cards;
  if (storyStage < 1) {
    return (
      <div>
        <p id="readingButton" className="text-center" onClick={onClickGetCards}>{textGetCards}</p>
      </div>
    )
  } else {
    return (
      <div>
        <p id="readingButton" className="text-center" onClick={onClickAddCard}>{textAddCard}</p>
      </div>
    )
  }
};


export default Button;
