import React, { useState } from "react";

function Liste(props) {
  const [choix, setChoix] = useState(""); 

  const handleChange = (event) => {
    const selectedValue = event.target.value; 
    setChoix(selectedValue);
    props.filtrerParCategorie(selectedValue);
  };

  return (
    <div>
      <h2>Sélectionner une catégorie :</h2>
      <select value={choix} onChange={handleChange}>
        <option value="">Sélectionnez une catégorie</option>
        <option value="fruit">Fruits</option>
        <option value="legume">Légumes</option>
      </select>
    </div>
  );
}

export default Liste;
