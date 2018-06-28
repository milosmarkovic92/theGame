import React, { Component } from 'react';
import Card from './Card';
import * as actions from '../store/MemoryGame/actions';
import { connect } from 'react-redux';

class MemoryBoard extends Component {
 
  onCardClickHandler = (index) => {
    let openCards = [...this.props.openCards];
    let completedCards = [...this.props.completedCards];
    const cards = [...this.props.cards];
    
    openCards.push(index);
    
    if (openCards.length === 2) {
      if (cards[openCards[0]] === cards[openCards[1]]) {
        completedCards.includes(openCards[0]) && completedCards.includes(openCards[1])
          ? completedCards = [...completedCards] 
          : completedCards = [...completedCards, ...openCards];
        openCards = [];
        this.props.updateCompletedCards(completedCards);
        this.props.updateOpenCards(openCards);
        console.log('completed cards: ' + completedCards);
        console.log('open cards: ' + openCards);
      }
    }
    else if (openCards.length > 2) {
      openCards= [];
      openCards.push(index);
      this.props.updateOpenCards(openCards);
    }
    
    this.props.updateOpenCards(openCards);
    this.props.updateCompletedCards(completedCards);
  }


  // i b,e
  // 0 0,5
  // 1 5,10
  // 2 10,15
  // b = i * 5
  // e = b + 5

  // numOfColumns = 5
  // numORows = 3
  // 0 1 2 3 4
  // 5 6 7 8 9
  // 10 11 12 13 14
  // realIndex = i * 5 + index
  // realIndex = i * numOfColumns + index

  // openCards=['A']
  // completedCards=['7']

  render() {
    const { cards, numOfRows, numOfColumns, completedCards, openCards } = this.props;
    const rows = [];
    console.log('-----------------------')
    for (let i=0; i<numOfRows; i++) {
      rows.push(
        <div key={i} className="memoryBoardRow">
          {cards.slice(i*numOfColumns, i*numOfColumns+numOfColumns).map(
            (cardString, tempIndex) => {
              const index = i * numOfColumns + tempIndex;
              return (
              <Card 
                clickHandler={() => this.onCardClickHandler(index)}
                key={index}
                cardType={openCards.includes(index) || completedCards.includes(index)
                  ? cardString
                  : ''
                }
              />)
              }
          )}
        </div>);
    }
    return (
      <div className="memoryBoard">
        {rows}
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    cards: state.memoryGame.cards,
    numOfRows: state.memoryGame.numOfRows,
    numOfColumns: state.memoryGame.numOfColumns,
    completedCards: state.memoryGame.completedCards,
    openCards: state.memoryGame.openCards
  }
}

const mapDispatchToProps = dispatch => {
  return {
    updateOpenCards: (payload) => dispatch(actions.updateOpenCards(payload)),
    updateCompletedCards: (payload) => dispatch(actions.updateCompletedCards(payload))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MemoryBoard);