import React from 'react';
import Card from './Card';

const Cards = props => {
  let i = 0;
  let cards = props.cards.map(card => {

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
    console.log(i);
    i++;
  })

  return(
    <div className='container-fluid'>
      <div className='row'>
        <ul>
          {cards}
        </ul>
      </div>
    </div>
  )
}

export default Cards;
