import React from 'react';

function Button(props) {
  let text = 'Begin your Reading'
  let onClick = props.onClick;
  let storyStage = props.storyStage;
  console.log(storyStage);

  if (storyStage === -1) {
    return (
      <div>
        <p id="readingButton" className="text-center" onClick={onClick}>{text}</p>
      </div>
    )
  } else {
    return (
      null
    )
  }
};


export default Button;
