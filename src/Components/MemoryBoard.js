import React, { Component } from 'react';
import Card from './Card';

class MemoryBoard extends Component {
  render() {
    return (
      <div>
        <Card  />
        <Card cardType='K' />
      </div>
    );
  }
}

export default MemoryBoard;