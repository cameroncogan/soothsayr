import React from 'react';
import Card from './Card';

var ReactCSSTransitionGroup = require('react-addons-css-transition-group');

const Cards = props => {
  let storyStage = props.storyStage;
  let deckStage = props.deckStage;
  let onClick = props.onClick;
  let deckChoice = props.deckChoice;

  let cards = props.cards.map(card => {
    return(
      <Card
        key={card.id}
        id={card.id}
        image_path={card.image_path}
        storyStage={storyStage}
        deckStage={deckStage}
        deckChoice={deckChoice}
        onClick={onClick}
      />
    );
  })

  if (deckStage === 1) {
    return (
      <div className='container'>
        <div className='row row-centered'>
          <ul>
            <ReactCSSTransitionGroup
              transitionName="example"
              transitionEnterTimeout={500}
              transitionLeaveTimeout={300}>
                {cards}
            </ReactCSSTransitionGroup>
          </ul>
        </div>
      </div>
    )
  } else if (storyStage === 10) {
    return (
      <div className='container'>
        <div className='row row-centered'>
          <ul>
            <ReactCSSTransitionGroup
              transitionName="example"
              transitionEnterTimeout={500}
              transitionLeaveTimeout={300}>
                {cards}
            </ReactCSSTransitionGroup>
          </ul>
        </div>
      </div>
    )
  } else {
    return (
      <ul>
        <ReactCSSTransitionGroup
          transitionName="example"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={300}>
            {cards}
        </ReactCSSTransitionGroup>
      </ul>
    )
  };
};

export default Cards;
