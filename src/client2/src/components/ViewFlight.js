import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const ViewFlight = ({
  setShowCreateForm,
  setShowList,
  setShowDeparture,
  setShowUpdateForm,
  setShowDeleteForm,
  setShowProfile,
}) => {
  function ClickHandler3() {
    setShowDeleteForm(true);
  }

  function ClickHandler() {
    setShowCreateForm(true);
  }

  function ClickHandler2() {
    setShowList(true);
  }
  function ClickHandler4() {
    setShowDeparture(true);
  }
  function ClickHandler5() {
    setShowProfile(true);
  }
  return (
    <div>
      <button onClick={ClickHandler}> ~ Add New Flight</button>
      <button onClick={ClickHandler2}>~ view all Flights</button>
      <button onClick={ClickHandler4}>~ view departure flights</button>
      <button onClick={ClickHandler5}>~ Profile</button>
    </div>
  
  );
};

export default ViewFlight;
