import React from 'react';
import ViewFlight from './components/ViewFlight'
import CreateFlight from './components/CreateFlight';


import axios from "axios";
// import UserCard from "../components/UserCard";
// import Grid from '@mui/material/Grid';
import { useState, useEffect } from 'react';
const {route,port} = require('./base')
export default function App() {
const [showCreateForm,setShowCreateForm] = useState(false);
const [showList,setShowList] = useState(false);
//const [showUsers,setShowUsers] = useState(false); 

const [list,setList] = useState([]);
//useEffect(()=>{},[]);
useEffect(()=>{
  axios.get(`${route}:${port}/api/v1/flights`)
    .then(res => {
      console.log(res.data)
      setList(res.data);
    }).catch(err => console.log(err))


},[]);
//function show( const x){

    //if x ==="Create":


  //}
    
return (
  <>
  <ViewFlight setShowCreateForm={setShowCreateForm} setShowList={setShowList}/>
  {showCreateForm? <CreateFlight/>:<></>}
  {list.map(a =>{return <button>{a.FlightNumber}</button>})}
  </>
)

 

//export default App;
}