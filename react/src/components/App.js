import React, { Component } from 'react';
import Cards from './Cards';

var ReactCSSTransitionGroup = require('react-addons-css-transition-group');

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: [],
      showCards: [],
      cardHelper: 'text',
      storyStage: 0
    };

    this.getCards = this.getCards.bind(this);
    this.addCard = this.addCard.bind(this);
  }

  getCards() {
    let app = this;
    app.setState({ cards: [] });
    $.ajax({
      method: 'post',
      url: '/readings.json',
      contentType: 'application/json'
    })
    .done(function(data) {
      app.setState({ cards: data });
    });
  };

  addCard() {
    let nextShowCards = this.state.showCards;
    nextShowCards.push(this.state.cards.shift());
    console.log(nextShowCards);
    this.setState({ showCards: nextShowCards });
  };

  render() {
    let cards = this.state.cards;
    let showCards = this.state.showCards;
    let cardOnClick;
    let buttonText;
      if (this.state.cards.length < 1) {
        cardOnClick = this.getCards;
        buttonText = 'Click to start a new reading'
      } else {
        cardOnClick = this.addCard;
        buttonText = 'Click for next card'
      }


    return (
      <div>
        <p id="readingButton" className="text-center" onClick={cardOnClick}>{buttonText}</p>
        <Cards cards={showCards} />
      </div>
    );
  };
};

export default App;
