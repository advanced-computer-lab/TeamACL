
import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class ViewFlightList extends Component {


  render() {
    

    return (
      <div className="ViewFlightList">
       

            <div className="col-md-11">
              <Link to="/add-Flight" className="btn btn-outline-warning float-right">
                + Add New flight
              </Link>
             
            </div>
      </div>
    );
  }
}

export default ViewFlightList;