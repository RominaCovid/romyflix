import { useState } from "react"
import Boton from "../Button/Button"
import "./Header.css"
function Header(props){

    return ( 
        <header className="header">
            <img src="/img/titulo.png" alt="titulo"/>
            <div className="boton_header"> 
            <Boton  titulo="Nuevo Video" onClick={props.onClick}/>           
            </div>        
        </header>
         
    ) 
}

export default Header