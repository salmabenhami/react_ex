import React from "react";
import "./App.css";
import Authentification from "./component/authentification";
import Compteur from "./component/compteur";
import Formulaire from "./component/formulaire";
import Parent from "./component/exercice/parents";
import Liste from "./component/exercice/select";
import Resultat from "./component/exercice/resultats";
function App(){
  const login=true;
  return (
  //<Authentification login={login}/>
  //<Compteur/>
  //<Formulaire/>
  <div><Parent/>
  {/* <Formulaire/> */}
  </div>
  )
}

export default App;