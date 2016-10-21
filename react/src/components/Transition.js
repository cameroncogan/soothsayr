import React from 'react';

const Transition = props => {
  let text = props.flavorText;
  console.log(text);
  let onClick = props.onClick;
  console.log(onClick);

  return (
    <div>
      <p className="flavorText" onClick={onClick}>{text}</p>
    </div>
  );
};


export default Transition;
