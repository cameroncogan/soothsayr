import React from 'react';

function Card(props) {
  let storyStage = props.storyStage;
  let image_path = "http://s3.amazonaws.com/soothsayr/" + props.image_path;
  let storyArray = [2, 4, 6, 8, 10];

  if (storyArray.includes(storyStage)) {
    return (
      <li className='cardItem col-sm-3'>
        <img src={image_path} className='card img-rounded img-responsive'></img>
      </li>
    );
  } else {
    return (
      null
    );
  };
};


export default Card;
