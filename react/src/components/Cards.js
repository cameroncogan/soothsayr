import React from 'react';
import Card from './Card';

const Cards = props => {
  let cards = props.cards.map(card => {
    let name = card.name
    let index = cardsIndex.name

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
        index={index}
      />
    );
  })

  return(
    <div>
      <ul>
        {cards}
      </ul>
    </div>
  )
}

export default Cards;
