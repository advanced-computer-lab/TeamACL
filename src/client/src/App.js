

import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import CreateFlight from './components/CreateFlight';
import ViewFlight from './components/ViewFlight';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
        <Route exact path='/' component={ViewFlight} />
          <Route path='/add-flight' component={CreateFlight} />
    
        </div>
      </Router>
    );
  }
}

export default App;