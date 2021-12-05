import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
function Delete({ id }) {
  const [U, setU] = useState(false);
  

  useEffect(() => {
    if (U) {
      console.log("from frontend");
      axios
        .delete(`http://localhost:3000/api/v1/flights/${id}`)
        .then((res) => console.log(res))
        .catch((err) => console.log(err));
      setU(false);
    }
  }, [U]);
  function sub() {
    setU(true);
  }
  return (
    <button
      onClick={() => {
        if (window.confirm("Are you sure you wish to delete this item?")) {
          sub();
        }
      }}
    >
      Delete
    </button>
  );
}

export default Delete;
