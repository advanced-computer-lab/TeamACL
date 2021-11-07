import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';



const ViewFlight = ({setShowCreateForm,setShowList}) =>
{
  
  
  function ClickHandler(){
  
    setShowCreateForm(true);}

    
  function ClickHandler2(){
  
    setShowList(true);}


   /* function Home() {
      const [list,setList] = useState([]);
      //useEffect(()=>{},[]);
      useEffect(()=>{
        axios.get(`${route}:${port}`)
          .then(res => {
            setList(res.data);
          })
    
    
      },[]);
  
  */
    

    return (
       

            <div>
                <button onClick={ClickHandler}> ~ Add New Flight
                </button>
               
                <button onClick = {ClickHandler2}>

                ~ view all Flights
                </button> 
                </div>
             // <Link to="/update-flight" className="btn btn-outline-warning float-right">
              //
              //</Link>
             // <p>
               // <br>
                //</br>
                //</p>
              
             
       
    )
  }


export default ViewFlight;