import React from 'react';

function Prophecy(props) {
  let prophecy = props.prophecy;
  let storyStage = props.storyStage;
  let onClick = props.onClick;
  let storyArray = [2, 4, 6, 8];

  if (storyArray.includes(storyStage)) {
    return (
      <li className='col-md-6'>
        <p className="prophecy text-center" onClick={onClick}>{prophecy}</p>
      </li>
    );
  } else if (storyStage === 10) {
    return (
      <li>
        <p className="prophecy-sum text-center glow-red" onClick={onClick}>{prophecy}</p>
      </li>
    );
  } else {
    return (
      null
    );
  };
};


export default Prophecy;
