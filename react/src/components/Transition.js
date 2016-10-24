import React from 'react';

function Transition(props) {
  const FlavorText = {
    intro: 'Begin with a thought. What does your mind naturally turn to? Think on this, then click to continue.',
    preFirst: 'The first turn represents the situation at hand. Consider how it could apply to your life...',
    preSecond: 'The second turn represents the wrong path. Consider it a warning...',
    preThird: 'The third turn represents the way forward. Follow it, to find your way...',
    preFourth: 'The final turn represents what will be, though the future is not set in stone...',
    outro: 'Remember that the cards do not tell all. Your fate can be mended, if you have the will. Here is your summary...'
  };
  let onClick = props.onCardClick;
  let storyStage = props.storyStage;
  let text;
    if (storyStage === 0) {
      text = FlavorText.intro;
      onClick = props.onTransitionClick;
    } else if (storyStage === 1) {
      text = FlavorText.preFirst;
    } else if (storyStage === 3) {
      text = FlavorText.preSecond;
    } else if (storyStage === 5) {
      text = FlavorText.preThird;
    } else if (storyStage === 7) {
      text = FlavorText.preFourth;
    } else if (storyStage === 9) {
      text = FlavorText.outro;
    } else {
      text = '';
    };

  if (text != '') {
    return (
      <div>
        <p className="flavorText" onClick={onClick}>{text}</p>
      </div>
    );
  } else {
    return (
      null
    );
  };
};

export default Transition;
