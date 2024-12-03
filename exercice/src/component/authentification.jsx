import React from "react";
import Client from "./client";
import Visiteur from "./visiteur";
function Authentification(props){
    return(
        <div>
            {props.login?<Client/>:<Visiteur/>}
        </div>
    )
}
export default Authentification;