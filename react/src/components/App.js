import React, { Component } from 'react';
import Cards from './Cards';
import Transition from './Transition';
import StartButton from './StartButton';
import DeckButton from './DeckButton';
import ReturnButton from './ReturnButton';
import Prophecies from './Prophecies';
import HelperText from './HelperText';

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
      storyStage: -1,
      deckStage: -1,
      deckChoice: 1,
      deckChoiceCards: [
        {
          id: 1,
          image_path: '00_fool.jpg',
          name: 'Morgan Greer'
        },
        {
          id: 2,
          image_path: '00_fool.jpg',
          name: 'Rider Waite'
        },
        {
          id: 3,
          image_path: '00_fool.jpg',
          name: 'Steampunk'
        }
      ],
      userId: null
    };

    this.getCards = this.getCards.bind(this);
    this.addCard = this.addCard.bind(this);
    this.handleStoryChange = this.handleStoryChange.bind(this);
    this.getProphecies = this.getProphecies.bind(this);
    this.renderDeckChoices = this.renderDeckChoices.bind(this);
    this.returnToStart = this.returnToStart.bind(this);
    this.handleDeckChoice = this.handleDeckChoice.bind(this);
    this.sendDeckData = this.sendDeckData.bind(this);
    this.getUserId = this.getUserId.bind(this);
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

  renderDeckChoices() {
    let nextDeckStage = 1;
    this.setState({ deckStage: nextDeckStage})
  }

  returnToStart() {
    let nextDeckStage = -1;
    this.setState({ deckStage: nextDeckStage})
  }

  handleDeckChoice(id) {
    let nextDeckChoice = id;
    this.setState({ deckChoice: nextDeckChoice});
    this.sendDeckData();
  }

  sendDeckData() {
    let app = this;
    this.getUserId();
    let userId = app.state.user_id;
    $.ajax({
      method: 'post',
      url: '/users/' + userId + '.json',
      contentType: 'application/json',
      data: "deck_choice=" + app.state.deckChoice
    })
  };

  getUserId() {
    let app = this;
    $.ajax({
      method: 'get',
      url: '/users.json',
      contentType: 'application/json',
    })
    .done(function(data) {
      console.log(data);
      app.setState({ userId: data });
    });
  };

  render() {
    let shownCards = this.state.shownCards;
    let currentCard = this.state.currentCard;
    let deckChoiceCards = this.state.deckChoiceCards;
    let shownProphecies = this.state.shownProphecies;
    let currentProphecy = this.state.currentProphecy;
    let storyStage = this.state.storyStage;
    let deckStage = this.state.deckStage;
    let deckChoice = this.state.deckChoice;
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
    let renderDeckChoices = this.renderDeckChoices;
    let addCard = this.addCard;
    let handleStoryChange = this.handleStoryChange;
    let handleDeckChoice = this.handleDeckChoice;
    let returnToStart = this.returnToStart;

    if (deckStage === 1) {
      return (
        <div>
          <HelperText />
          <Cards
            cards={deckChoiceCards}
            deckStage={deckStage}
            deckChoice={deckChoice}
            storyStage={storyStage}
            onClick={handleDeckChoice}
          />
          <ReturnButton
            onClick={returnToStart}
          />
        </div>
      )
    } else if (storyStage === -1) {
      return (
        <div>
          <StartButton
            onClick={getCards}
          />
          <DeckButton
            onClick={renderDeckChoices}
          />
        </div>
      )
    } else if (storyStage === 10) {
      return (
        <div>
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
      );
    } else {
      return (
        <div>
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
          <div className='container'>
            <div className='row'>
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
};

export default App;
