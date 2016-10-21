import React, { Component } from 'react';
import Cards from './Cards';
import Transition from './Transition';

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
    let flavorText;
      if (storyStage === 0) {
        flavorText = this.state.flavorText.intro;
      } else if (storyStage === 1) {
        flavorText = this.state.flavorText.preFirst;
      } else if (storyStage === 2) {
        flavorText = this.state.flavorText.preSecond;
      } else if (storyStage === 3) {
        flavorText = this.state.flavorText.preThird;
      } else if (storyStage === 4) {
        flavorText = this.state.flavorText.preFourth;
      };
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
        <Transition flavorText={flavorText} onClick={this.handleStoryChange} />
        <Cards cards={currentCard} />
      </div>
    );
  };
};

export default App;
