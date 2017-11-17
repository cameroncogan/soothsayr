import React from 'react';

function Card(props) {
  let storyStage = props.storyStage;
  let deckStage = props.deckStage;
  let deckChoice = props.deckChoice;
  let id = props.id;
  let onClick = () => props.onClick(id);
  let image_path;
  if (deckStage === 1) {
    image_path = "http://res.cloudinary.com/dd3qqoc9s/image/upload/v1510879875/cards/" + props.image_path;
  } else {
    image_path = "http://res.cloudinary.com/dd3qqoc9s/image/upload/v1510879875/cards/" + props.image_path + "_" + deckChoice + ".png"
  };
  let storyArray = [2, 4, 6, 8];
  let deckChoiceClass = 'card-sum col-md-3 col-centered';
    if (id === deckChoice) {
      deckChoiceClass = 'card-sum col-md-3 col-centered card-glow';
    };

  if (deckStage === 1) {
    return (
      <li className='col-sm-6'>
        <img src={image_path} className={deckChoiceClass} id={id} onClick={onClick}></img>
      </li>
    )
  } else if (storyArray.includes(storyStage)) {
    return (
      <li className='col-md-6'>
        <img src={image_path} className='card'></img>
      </li>
    );
  } else if (storyStage === 10) {
    return (
      <li>
        <img src={image_path} className='col-lg-3 card-sum'></img>
      </li>
    );
  } else {
    return (
      null
    );
  };
};


export default Card;
