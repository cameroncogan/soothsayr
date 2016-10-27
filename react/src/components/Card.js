import React from 'react';

function Card(props) {
  let storyStage = props.storyStage;
  let deckStage = props.deckStage;
  let deckChoice = props.deckChoice;
  let id = props.id;
  let onClick = () => props.onClick(id);
  let image_path = "http://s3.amazonaws.com/soothsayr/" + props.image_path;
  let storyArray = [2, 4, 6, 8];
  let deckChoiceClass = 'card-sum col-md-3 col-centered img-rounded';
    if (id === deckChoice) {
      deckChoiceClass = 'card-sum col-md-3 col-centered img-rounded card-glow';
    };

  if (deckStage === 1) {
    return (
      <li className='col-md-4'>
        <img src={image_path} className={deckChoiceClass} id={id} onClick={onClick}></img>
      </li>
    )
  } else if (storyArray.includes(storyStage)) {
    return (
      <li className='col-md-6'>
        <img src={image_path} className='card img-rounded'></img>
      </li>
    );
  } else if (storyStage === 10) {
    return (
      <li>
        <img src={image_path} className='col-sm-2 card-sum img-rounded'></img>
      </li>
    );
  } else {
    return (
      null
    );
  };
};


export default Card;
