import React, { useState } from 'react';
function Compteur(){
    const [nombre, setNombre]=useState(0)
    const incerementer=()=>{
        setNombre(nombre+4)
    } 
    const decrementer=()=>{
        setNombre(nombre-4)
    }
    return(
        <div>
                <h1>Nombre:{nombre}</h1>
                <button onClick={incerementer}>+ 4</button>
                <button onClick={decrementer}>- 4</button>        
        </div>
    )
}
export default Compteur;