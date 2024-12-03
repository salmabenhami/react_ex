import React, { useState } from "react";
import Recherche from "./recherche";
import Liste from "./select";
import Resultat from "./resultats";

function Parent() {
  const list = [
    { nom: "banane", type: "fruit" },
    { nom: "orange", type: "fruit" },
    { nom: "pomme", type: "fruit" },
    { nom: "raisins", type: "fruit" },
    { nom: "kiwi", type: "fruit" },
    { nom: "tomate", type: "legume" },
    { nom: "carotte", type: "legume" },
    { nom: "pomme de terre", type: "legume" },
    { nom: "navet", type: "legume" },
    { nom: "poivron", type: "legume" },
  ];
  

  const [produitsFiltrés, setProduitsFiltrés] = useState([]); 

  const Chercher = (elt) => {
    const produitsTrouvés = list.filter(
      (produit) =>
        produit.nom.toLowerCase().includes(elt.toLowerCase()) ||
        produit.type.toLowerCase().includes(elt.toLowerCase())
    );
    setProduitsFiltrés(produitsTrouvés); 
  };

  const filtrerParCategorie = (categorie) => {
    const produitsTrouvés = list.filter(
      (produit) => produit.type === categorie
    );
    setProduitsFiltrés(produitsTrouvés);
  };

  return (
    <div>
      <h1>Recherche de Produits</h1>
      <Recherche Chercher={Chercher} />
      <Liste filtrerParCategorie={filtrerParCategorie} />
      <h2>Résultats :</h2>
      {/* <ul>
        {produitsFiltrés.map((produit, index) => (
          <li key={index}>
            {produit.nom} - {produit.type}
          </li>
        ))}
      </ul> */}
      <Resultat res={produitsFiltrés}/>
      
    </div>
  );
}

export default Parent;

