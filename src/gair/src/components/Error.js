import React from "react";
import { useNavigate } from "react-router-dom";
function Error() {
  let navigate = useNavigate();
  return (
    <div>
      <h2>ERROR! PAGE NOT FOUNG</h2>
      <button
        onClick={() => {
          navigate("/view");
        }}
      >
        GO TO VIEW ALL FLIGHTS PAGE
      </button>
    </div>
  );
}

export default Error;
