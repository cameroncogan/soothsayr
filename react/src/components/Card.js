import React from 'react';

function Card(props) {
  let storyStage = props.storyStage;
  let image_path = "http://s3.amazonaws.com/soothsayr/" + props.image_path;
  let storyArray = [2, 4, 6, 8];

  if (storyArray.includes(storyStage)) {
    return (
      <li className='col-lg-6'>
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
