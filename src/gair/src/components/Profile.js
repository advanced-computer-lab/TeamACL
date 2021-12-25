import React from "react";
import { useParams } from "react-router-dom";
function Profile() {
  const { userEmail } = useParams();
  if (userEmail === "undefined") {
    console.log(true);
    window.location.href = "/login";
  }
  return (
    <div>
      <h2>This is the profile of {userEmail}</h2>
    </div>
  );
}

export default Profile;
