import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class ViewFlightList extends Component {


  render() {
    

    return (
      <div className="ViewFlightList">
       

            <div className="col-md-11">
            <Link to="/create-flight" className="btn btn-outline-warning float-right">
                <button>
                ~ Add New Flight
                </button>
              </Link>
              <p>
                <br>
                </br>
                </p>
              <Link to="/update-flight" className="btn btn-outline-warning float-right">
              <button>
                ~ Update Flight
                </button>
              </Link>
              <p>
                <br>
                </br>
                </p>
              
             
            </div>
      </div>
    );
  }
}

export default ViewFlightList;