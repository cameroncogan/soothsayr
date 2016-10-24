import React from 'react';
import Prophecy from './Prophecy';

var ReactCSSTransitionGroup = require('react-addons-css-transition-group');

const Prophecies = props => {
  let storyStage = props.storyStage;
  let prophecies = props.prophecies.map(prophecy => {
    return(
      <Prophecy
        key={prophecy.id}
        id={prophecy.id}
        prophecy={prophecy.text}
        storyStage={storyStage}
        onClick={props.onClick}
      />
    );
  })

  if (storyStage === 10) {
    return (
      <div className='container proph-div-sum'>
        <div className='row'>
          <ul className='prophecies'>
          <ReactCSSTransitionGroup
            transitionName="example"
            transitionEnterTimeout={500}
            transitionLeaveTimeout={300}>
              {prophecies}
          </ReactCSSTransitionGroup>
          </ul>
        </div>
      </div>
    )
  } else {
    return (
      <div className='container'>
        <div className='row'>
          <ul className='prophecies'>
          <ReactCSSTransitionGroup
            transitionName="example"
            transitionEnterTimeout={500}
            transitionLeaveTimeout={300}>
              {prophecies}
          </ReactCSSTransitionGroup>
          </ul>
        </div>
      </div>
    )
  };
};

export default Prophecies;
