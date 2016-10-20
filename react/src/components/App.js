import React, { Component } from 'react';
import Cards from './Cards';

var ReactCSSTransitionGroup = require('react-addons-css-transition-group');

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: [],
      showCards: []
    };

    this.getCards = this.getCards.bind(this);
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
  }

  render() {
    let cards = this.state.cards

    return (
      <div>
        <h5 id="readingStart" className="text-center" onClick={this.getCards}>Start a new Reading</h5>
        <Cards cards={cards} />
      </div>
    );
  };
};

export default App;
