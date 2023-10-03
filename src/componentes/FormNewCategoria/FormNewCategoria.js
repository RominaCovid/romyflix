import { useState } from "react"
import CampoTexto from "../CampoTexto/CampoTexto"
import Boton  from "../Button/Button" 
import "./FormNewCategoria.css"
export default function FormNewCategoria(){
    const [nameCat, setNameCat]=useState("")
    const [descripción,setDescripción]=useState("")
    const [color,setColor]=useState("")
    const [código,setCódigo]=useState("")
    const manejoEnvio = (e)=>{
        e.preventDefault();
     }

    const objDatos ={
        Categoria:nameCat,
        Descripción:descripción,
        Color:color,
        Código:código
    }
    console.log("Formulario Nueva Categoria",objDatos)
    return(      

        <section className="contenedor_form_cat">
            <form className="formulario" onSubmit={manejoEnvio}>
                <h2>Nueva Categoria</h2>
                <CampoTexto 
                    titulo="Nombre Categoria" 
                    placeholder="Ingrese Nombre" 
                    valor={nameCat} 
                    actValor={setNameCat}
                    required
                />
                <CampoTexto 
                    titulo="Descripción"
                    placeholder="Ingrese una descripción de la categoria" 
                    valor={descripción} 
                    actValor={setDescripción}
                    required
                />
                <CampoTexto 
                    titulo="Color"
                    valor={color} 
                    actValor={setColor}
                />
                <CampoTexto 
                    titulo="Código" 
                    placeholder="Ingrese el código" 
                    valor={código} 
                    actValor={setCódigo}
                    required
                />
                <div className="contenedor_botones">
                <Boton titulo="Guardar" onClick="" />
                <Boton titulo="Limpiar" onClick=""/>                
                </div>
                
            </form>
        </section>
    )
}