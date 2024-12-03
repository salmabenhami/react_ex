import React from "react";

function Affichage(props) {
  return (
    <div>
      <h3>Données:</h3>
      <p><strong>Full Name:</strong> {props.fullname}</p>
      <p><strong>Last Name:</strong> {props.lastname}</p>
      <p><strong>Address:</strong> {props.adress}</p>
      <p><strong>Address Line 2:</strong> {props.adress2}</p>
      <p><strong>City:</strong> {props.city}</p>
      <p><strong>State:</strong> {props.state}</p>
      <p><strong>Zip Code:</strong> {props.code}</p>
      <p><strong>Phone:</strong> {props.phone}</p>
      <p><strong>Email:</strong> {props.email}</p>
      <p><strong>Membership:</strong> {props.genre}</p>
    </div>
  );
}
export default Affichage;
