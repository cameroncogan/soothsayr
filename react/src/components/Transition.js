import React from 'react';

function Transition(props) {
  const FlavorText = {
    intro: { id: 1, text: 'Begin with a thought. What does your mind naturally turn to? Think on this, then click to continue.' },
    preFirst: { id: 2, text: 'The first turn represents the situation at hand. Consider how it could apply to your life...' },
    preSecond: { id: 3, text: 'The second turn represents the wrong path. Consider it a warning...' },
    preThird: { id: 4, text: 'The third turn represents the way forward. Follow it, to find your way...' },
    preFourth: { id: 5, text: 'The final turn represents what will be, though the future is not set in stone...' },
    outro: { id: 6, text: 'Remember that the cards do not tell all. Your fate can be mended, if you have the will. Here is your summary...' }
  };
  let onClick = props.onCardClick;
  let storyStage = props.storyStage;
  let text;
  let key;
    if (storyStage === 0) {
      text = FlavorText.intro.text;
      key = FlavorText.intro.id;
      onClick = props.onTransitionClick;
    } else if (storyStage === 1) {
      text = FlavorText.preFirst.text;
      key = FlavorText.preFirst.id;
    } else if (storyStage === 3) {
      text = FlavorText.preSecond.text;
      key = FlavorText.preSecond.id;
    } else if (storyStage === 5) {
      text = FlavorText.preThird.text;
      key = FlavorText.preThird.id;
    } else if (storyStage === 7) {
      text = FlavorText.preFourth.text;
      key = FlavorText.preFourth.id;
    } else if (storyStage === 9) {
      text = FlavorText.outro.text;
      key = FlavorText.outro.id;
      onClick = props.onTransitionClick;
    } else {
      text = '';
    };

  if (text != '') {
    return (
      <div className='container'>
        <div className='row'>
          <p className="transition col-lg-12 glow" key={key} onClick={onClick}>{text}</p>
        </div>
      </div>
    );
  } else {
    return (
      null
    );
  };
};

export default Transition;
