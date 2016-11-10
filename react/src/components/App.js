import React, { Component } from 'react';
import Cards from './Cards';
import Transition from './Transition';
import StartButton from './StartButton';
import DeckButton from './DeckButton';
import ReturnButton from './ReturnButton';
import Prophecies from './Prophecies';
import HelperText from './HelperText';
import DescriptionText from './DescriptionText';

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
          image_path: '08_strength_1.png',
          name: 'Morgan-Greer'
        },
        {
          id: 2,
          image_path: '08_strength_2.png',
          name: 'Steampunk'
        },
        {
          id: 3,
          image_path: '08_strength_3.jpg',
          name: 'Rider-Waite'
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
    this.getUserIdandDeck = this.getUserIdandDeck.bind(this);
    this.preloadImages = this.preloadImages.bind(this);
  };

  getCards() {
    let app = this;
    app.getUserIdandDeck();
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
    if (newStoryStage === 0) {
      this.preloadImages();
    };
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
    this.getUserIdandDeck();
    let nextDeckStage = 1;
    this.setState({ deckStage: nextDeckStage})
  }

  returnToStart() {
    if (this.state.deckStage === 1) {
      let nextDeckStage = -1;
      this.setState({ deckStage: nextDeckStage})
    } else {
      let nextStoryStage = -1;
      let nextCards = [];
      let nextShownCards = [];
      let nextCurrentCard = [];
      let nextProphecies = [];
      let nextShownProphecies = [];
      let nextCurrentProphecy = [];
      this.setState({ storyStage: nextStoryStage });
      this.setState({ cards: nextCards });
      this.setState({ shownCards: nextShownCards });
      this.setState({ currentCard: nextCurrentCard });
      this.setState({ prophecies: nextProphecies });
      this.setState({ shownProphecies: nextShownProphecies });
      this.setState({ currentProphecy: nextCurrentProphecy });
    }
  }

  handleDeckChoice(id) {
    this.sendDeckData(id);
    let nextDeckChoice = id;
    this.setState({ deckChoice: nextDeckChoice});
  }

  sendDeckData(id) {
    let app = this;
    let userId = app.state.userId;
    $.ajax({
      method: 'patch',
      url: '/users/' + userId,
      dataType: 'json',
      data: { deck_choice: id }
    })
  };

  componentDidMount() {
    this.getUserIdandDeck();
    this.preloadImages();
  };

  getUserIdandDeck() {
    let app = this;
    $.ajax({
      method: 'get',
      url: '/users.json',
      contentType: 'application/json',
    })
    .done(function(data) {
      app.setState({ userId: data.user_id });
      app.setState({ deckChoice: data.deck_choice });
    });
  };

  preloadImages() {
    let deckChoiceCards = this.state.deckChoiceCards;
    let cards = this.state.cards;
    let deckChoice = this.state.deckChoice;
    if (deckChoice === 3) {
      deckChoice += ".jpg"
    } else {
      deckChoice += ".png"
    };
    let imagesToPreload = [];
    for (let card of deckChoiceCards) {
      imagesToPreload.push("http://s3.amazonaws.com/soothsayr/" + card.image_path)
    };
    for (let card of cards) {
      imagesToPreload.push("http://s3.amazonaws.com/soothsayr/" + card.image_path + "_" + deckChoice)
    };
   imagesToPreload.map(src => {
     let image = new Image()
     image.src = src
     return image
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
    let getUserIdandDeck = this.getUserIdandDeck;
    let handlePageClick;
    let cardStages = [1, 3, 5, 7];
      if (cardStages.includes(storyStage)) {
        handlePageClick = addCard
      } else {
        handlePageClick = handleStoryChange
      };

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
          <DescriptionText
            deckChoice={deckChoice}
          />
          <ReturnButton
            onClick={returnToStart}
          />
        </div>
      )
    } else if (storyStage === -1) {
      return (
        <div className="start-options">
          <DeckButton
            onClick={renderDeckChoices}
          />
          <StartButton
            onClick={getCards}
          />
        </div>
      )
    } else if (storyStage === 10) {
      return (
        <div>
          <ReturnButton
            onClick={returnToStart}
          />
          <Transition
            storyStage={storyStage}
            onTransitionClick={handleStoryChange}
            onCardClick={addCard}
          />
          <Cards
            cards={passedCards}
            storyStage={storyStage}
            deckChoice={deckChoice}
          />
          <Prophecies
            prophecies={passedProphecies}
            storyStage={storyStage}
          />
        </div>
      );
    } else {
      return (
        <div onClick={handlePageClick}>
          <div>
            <Transition
              storyStage={storyStage}
            />
          </div>
          <div className='container'>
            <div className='row row-centered proph-card'>
              <Cards
                cards={passedCards}
                storyStage={storyStage}
                deckChoice={deckChoice}
              />
              <Prophecies
                prophecies={passedProphecies}
                storyStage={storyStage}
              />
            </div>
          </div>
        </div>
      );
    };
  };
};

export default App;
