

import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import CreateFlight from './components/CreateFlight';
import ViewUFlight from './components/ViewFlight';
import CreateFlight from './CreateFlight';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
        <Route exact path='/' component={ViewFlight} />
          <Route path='/create-flight' component={CreateFlight} />
    
        </div>
      </Router>
    );
  }
}

export default App;