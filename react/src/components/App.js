import React, { Component } from 'react';
import Cards from './Cards';
import Transition from './Transition';
import Button from './Button';
import Prophecies from './Prophecies';

var ReactCSSTransitionGroup = require('react-addons-css-transition-group');

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: [],
      shownCards: [],
      currentCard: [],
      prophecies: [],
      shownProphecies: [],
      currentProphecy: [],
      storyStage: -1
    };

    this.getCards = this.getCards.bind(this);
    this.addCard = this.addCard.bind(this);
    this.handleStoryChange = this.handleStoryChange.bind(this);
    this.getProphecies = this.getProphecies.bind(this);
  };

  getCards() {
    let app = this;
    $.ajax({
      method: 'post',
      url: '/readings.json',
      contentType: 'application/json'
    })
    .done(function(data) {
      app.setState({ cards: data });
      app.getProphecies();
      app.handleStoryChange();
    });
  };

  addCard() {
    let nextShownCards = this.state.shownCards;
    let nextCurrentCard = [];
    let nextShownProphecies = this.state.shownProphecies;
    let nextCurrentProphecy = [];
    nextShownCards.push(this.state.cards.shift());
    nextCurrentCard.push(nextShownCards[nextShownCards.length - 1]);
    nextShownProphecies.push(this.state.prophecies.shift());
    nextCurrentProphecy.push(nextShownProphecies[nextShownProphecies.length - 1]);
    this.setState({ shownCards: nextShownCards });
    this.setState({ currentCard: nextCurrentCard });
    this.setState({ shownProphecies: nextShownProphecies });
    this.setState({ currentProphecy: nextCurrentProphecy });
    this.handleStoryChange();
  };

  handleStoryChange() {
    let newStoryStage = this.state.storyStage;
    newStoryStage += 1;
    this.setState({ storyStage: newStoryStage });
  };

  getProphecies() {
    let cards = this.state.cards;
    let nextProphecies = [];
    nextProphecies.push({id: 1, text: cards[0].situation});
    nextProphecies.push({id: 2, text: cards[1].danger});
    nextProphecies.push({id: 3, text: cards[2].safety});
    nextProphecies.push({id: 4, text: cards[3].outcome});
    this.setState({ prophecies: nextProphecies });
  };

  render() {
    let shownCards = this.state.shownCards;
    let currentCard = this.state.currentCard;
    let shownProphecies = this.state.shownProphecies;
    let currentProphecy = this.state.currentProphecy;
    let storyStage = this.state.storyStage;
    let passedCards;
    let passedProphecies;
      if (storyStage === 10) {
        passedCards = shownCards;
        passedProphecies = shownProphecies;
      } else {
        passedCards = currentCard;
        passedProphecies = currentProphecy;
      };
    let flavorText = this.state.flavorText;
    let getCards = this.getCards;
    let addCard = this.addCard;
    let handleStoryChange = this.handleStoryChange;
    let cardProphecyContainerClass;
    let cardProphecyRowClass;
      if (storyStage === 10) {
        cardProphecyContainerClass = '';
        cardProphecyRowClass = '';
      } else {
        cardProphecyContainerClass = 'Container';
        cardProphecyRowClass = 'Row';
      };

    return (
      <div>
        <Button
          storyStage={storyStage}
          onClick={getCards}
        />
        <ReactCSSTransitionGroup
          transitionName="example"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={300}>
          <div>
            <Transition
              storyStage={storyStage}
              onTransitionClick={handleStoryChange}
              onCardClick={addCard}
            />
          </div>
        </ReactCSSTransitionGroup>
        <div className={cardProphecyContainerClass}>
          <div className={cardProphecyRowClass}>
            <Cards
              cards={passedCards}
              storyStage={storyStage}
              onClick={handleStoryChange}
            />
            <Prophecies
              prophecies={passedProphecies}
              storyStage={storyStage}
              onClick={handleStoryChange}
            />
          </div>
        </div>
      </div>
    );
  };
};

export default App;
