import React, { Component } from 'react';
import Card from './Card';
const karte = ['A', 'A', '2', '2', '3', '3', '4', '4', '5', '5', '6', '6', '7', '7', '8', '8'];
class MemoryBoard extends Component {
  
  componentDidMount () {
    const vezba = new Set([1,2]);
    vezba.add(7);
    console.log([...vezba, 6]);
  }

  // i b,e
  // 0 0,5
  // 1 5,10
  // 2 10,15
  // b = i * 5
  // e = b + 5

  render() {
    const numOfRows = 4;
    const numOfColumns = 4;
    const rows = [];
    for (let i=0; i<numOfRows; i++) {
      rows.push(
        <div className="memoryBoardRow">
          {karte.slice(i*numOfColumns,i*numOfColumns+numOfColumns).map(karta => <Card cardType={karta} />)}
        </div>);
    }
    return (
      <div className="memoryBoard">
        {rows}
      </div>
    );
  }
}

export default MemoryBoard;