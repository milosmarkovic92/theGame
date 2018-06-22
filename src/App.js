import React, { Component } from 'react';
import {HashRouter, Switch, Route} from 'react-router-dom';
import './App.css';
import MemoryBoard from './Components/MemoryBoard';

class App extends Component {
  render() {
    return (
      <HashRouter>
        <Switch>
          <Route path='*' component={MemoryBoard}/>
        </Switch>
      </HashRouter>
    );
  }
}

export default App;
