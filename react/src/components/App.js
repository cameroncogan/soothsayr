import React, { Component } from 'react';
import Cards from './Cards';

var ReactCSSTransitionGroup = require('react-addons-css-transition-group');

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: []
    };

    this.getCards = this.getCards.bind(this);
  }

  getCards() {
    let app = this;
    $.ajax({
      method: 'post',
      url: '/figures.json',
      contentType: 'application/json'
    })
    .done(function(data) {
      app.setState({ cards: data });
    });
  }

  render() {
    let cards = this.state.cards
    let cardsIndex = {}
    for (var i = 0; i < cards.length; i++) {
      let name = card.name;
      cardsIndex.name = i;
    };

    return (
      <div>
        <Cards cards={cards} cardsIndex={cardsIndex}/>
        <button onClick={this.getCards}>'Start a new Reading'</button>
      </div>
    );
  };
};

export default App;
