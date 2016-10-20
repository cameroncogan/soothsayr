import React from 'react';

const Card = props => {
  let name = props.name;
  let id = props.id;
  let image_path = "http://s3.amazonaws.com/soothsayr/" + props.image_path


  let prophecy;
    if (props.index === 0) {
      prophecy = props.situation;
    } else if (props.index === 1) {
      prophecy = props.danger;
    } else if (props.index === 2) {
      prophecy = props.safety;
    } else if (props.index === 3) {
      prophecy = props.outcome;
    };

  return (
    <li className='cardItem col-sm-3'>
      <img src={image_path} className='card img-rounded img-responsive'></img>
      <p>{prophecy}</p>
    </li>
  );
};


export default Card;
