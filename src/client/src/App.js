import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import CreateUser from './components/CreateUser';
import ViewUsers from './components/ViewUsers';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
        <Route exact path='/' component={ViewUsers} />
          <Route path='/create-user' component={CreateUser} />
    
        </div>
      </Router>
    );
  }
}

export default App;import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import CreateFlight from './components/CreateFlight';
import ViewFlight from './components/ViewFlight';
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