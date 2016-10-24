import React from 'react';
import Prophecy from './Prophecy';

var ReactCSSTransitionGroup = require('react-addons-css-transition-group');

const Prophecies = props => {
  let prophecies = props.prophecies.map(prophecy => {
    return(
      <Prophecy
        key={prophecy.id}
        id={prophecy.id}
        prophecy={prophecy.text}
        storyStage={props.storyStage}
        onClick={props.onClick}
      />
    );
  })

  return (
    <div className='container'>
      <div className='row'>
        <ul>
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
}

export default Prophecies;
