import React from 'react';

function Transition(props) {
  const FlavorText = props.flavorText
  let onClick = props.onClick;
  let storyStage = props.storyStage;
  let text;
    if (storyStage === 0) {
      text = FlavorText.intro;
    } else if (storyStage === 1) {
      text = FlavorText.preFirst;
    } else if (storyStage === 2) {
      text = FlavorText.preSecond;
    } else if (storyStage === 3) {
      text = FlavorText.preThird;
    } else if (storyStage === 4) {
      text = FlavorText.preFourth;
    };

  return (
    <div>
      <p className="flavorText" onClick={onClick}>{text}</p>
    </div>
  );
};

export default Transition;
