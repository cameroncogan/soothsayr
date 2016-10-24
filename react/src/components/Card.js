import React from 'react';

function Card(props) {
  let name = props.name;
  let id = props.id;
  let index = props.index;
  let storyStage = props.storyStage;
  let image_path = "http://s3.amazonaws.com/soothsayr/" + props.image_path;
  let storyArray = [2, 4, 6, 8];
  let onClick = props.onClick;
  let prophecy;
    if (index === 0) {
      prophecy = props.situation;
    } else if (index === 1) {
      prophecy = props.danger;
    } else if (index === 2) {
      prophecy = props.safety;
    } else if (index === 3) {
      prophecy = props.outcome;
    };

  if (storyArray.includes(storyStage)) {
    return (
      <li className='cardItem col-sm-3'>
        <img src={image_path} className='card img-rounded img-responsive'></img>
        <p onClick={onClick}>{prophecy}</p>
      </li>
    )
  } else {
    return (
      null
    )
  }
};


export default Card;
