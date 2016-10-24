import React, { Component } from 'react';
import Cards from './Cards';
import Transition from './Transition';
import Button from './Button';

var ReactCSSTransitionGroup = require('react-addons-css-transition-group');

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: [],
      shownCards: [],
      currentCard: [],
      storyStage: -1,
    };

    this.getCards = this.getCards.bind(this);
    this.addCard = this.addCard.bind(this);
    this.handleStoryChange = this.handleStoryChange.bind(this);
  }

  getCards() {
    let app = this;
    $.ajax({
      method: 'post',
      url: '/readings.json',
      contentType: 'application/json'
    })
    .done(function(data) {
      app.setState({ cards: data });
      app.handleStoryChange();
    });
  };

  addCard() {
    let nextShownCards = this.state.shownCards;
    let nextCurrentCard = [];
    nextShownCards.push(this.state.cards.shift());
    nextCurrentCard.push(nextShownCards[nextShownCards.length - 1]);
    this.setState({ shownCards: nextShownCards });
    this.setState({ currentCard: nextCurrentCard });
    this.handleStoryChange();
  };

  handleStoryChange() {
    let newStoryStage = this.state.storyStage;
    newStoryStage += 1;
    this.setState({ storyStage: newStoryStage });
  }

  render() {
    let cards = this.state.cards;
    let shownCards = this.state.shownCards;
    let currentCard = this.state.currentCard;
    let storyStage = this.state.storyStage;
    let flavorText = this.state.flavorText;
    let getCards = this.getCards;
    let addCard = this.addCard;
    let handleStoryChange = this.handleStoryChange;

    return (
      <div>
        <Button
          cards={cards}
          storyStage={storyStage}
          onClick={getCards}
        />
        <Transition
          storyStage={storyStage}
          onTransitionClick={handleStoryChange}
          onCardClick={addCard}
        />
        <Cards
          cards={currentCard}
          storyStage={storyStage}
          onClick={handleStoryChange}
        />
      </div>
    );
  };
};

export default App;
