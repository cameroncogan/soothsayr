import React from 'react';

function Prophecy(props) {
  let prophecy = props.prophecy;
  let storyStage = props.storyStage;
  let onClick = props.onClick;
  let storyArray = [2, 4, 6, 8, 10];

  if (storyArray.includes(storyStage)) {
    return (
      <li>
        <p className="prophecy" onClick={onClick}>{prophecy}</p>
      </li>
    );
  } else {
    return (
      null
    );
  };
};


export default Prophecy;
