import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
//import '../App.css';
import axios from 'axios';
import CreateFlight from './components/CreateFlight';
import ViewFlight from './components/ViewFlight';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      Flight: []
    };
  }


  componentDidMount() {
    axios
      .get('http://localhost:8082/api/Flight')
      .then(res => {
        this.setState({
          flight: res.data
        })
      })
      .catch(err =>{
        console.log('Error from ShowBookList');
      })
  };




  render() {
    const Flight = this.state.Flight;
    console.log("PrintFlight: " + Flight);
    return (
      <Router>
        <div>
        <Route exact path='/' component={ViewFlight} />
          <Route path='/add-flight' component={CreateFlight} />

        </div>
        <div>
     

        </div>
      </Router>
    );
  }
}

export default App;