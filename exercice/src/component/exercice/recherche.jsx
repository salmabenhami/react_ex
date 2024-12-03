import React, { useState } from "react";

function Recherche(props) {
  const [valeur,setvaleur]=useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    props.Chercher(valeur);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={valeur}
          onChange={(e)=>setvaleur(e.target.value)}
          placeholder="Recherche par nom ou type"
        />
        <button type="submit">Rechercher</button> 
      </form>
    </div>
  );
}

export default Recherche;
