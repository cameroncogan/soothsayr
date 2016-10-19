import React from 'react';

const Card = props => {
  let name = props.name;
  let image_path = props.image_path;

  let prophecy;
    if (props.index === 0) {
      props.situation;
    } else if (props.index === 1) {
      props.danger;
    } else if (props.index === 2) {
      props.safety;
    } else if (props.index === 3) {
      props.outcome;
    };

  return (
    <li>
      <img src={image_path}><br>
      {prophecy}
    </li>
  );
};


export default Card;
