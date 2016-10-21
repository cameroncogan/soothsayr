import React from 'react';
import Card from './Card';

var ReactCSSTransitionGroup = require('react-addons-css-transition-group');

const Cards = props => {
  let i = -1;
  let cards = props.cards.map(card => {
    i++;
    return(
      <Card
        key={card.id}
        id={card.id}
        name={name}
        image_path={card.image_path}
        situation={card.situation}
        danger={card.danger}
        safety={card.safety}
        outcome={card.outcome}
        index={i}
      />
    );
  })

  return(
    <div className='container-fluid'>
      <div className='row'>
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
}

export default Cards;
