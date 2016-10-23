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
      flavorText: {
        intro: 'Begin with a thought. What does your mind naturally turn to?',
        preFirst: 'The first card represents the situation at hand. Consider how it could apply to your life...',
        preSecond: 'The second card represents the wrong path. Consider it a warning...',
        preThird: 'The third card represents the way forward. Follow it, to find your way...',
        preFourth: 'The final card represents what will be, though the future is not set in stone...'
      }
    };

    this.getCards = this.getCards.bind(this);
    this.addCard = this.addCard.bind(this);
    this.handleStoryChange = this.handleStoryChange.bind(this);
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
    let onClickEmpty = this.getCards;
    let onClickNotEmpty = this.addCard;
    let buttonTextEmpty = 'Click to start a new reading';
    let buttonTextNotEmpty = 'Click for next card';

    return (
      <div>
        <Button cards={cards} onClickEmpty={onClickEmpty} onClickNotEmpty={onClickNotEmpty} buttonTextEmpty={buttonTextEmpty} buttonTextNotEmpty={buttonTextNotEmpty} />
        <Transition flavorText={flavorText} storyStage={storyStage} onClick={this.handleStoryChange} />
        <Cards cards={currentCard} />
      </div>
    );
  };
};

export default App;
