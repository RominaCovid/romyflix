import "./CampoTexto.css"
import  TextField  from "@mui/material/TextField"
import  {useState,useEffect}  from "react"

export default function CampoTexto(props){
   
    const datoIngresado = (e)=>{
        const valor =e.target.value
        props.actValor(valor)        
         
    }
    useEffect(()=>{          
      
    },[props.valor])   
    return (
        <div className="campo-texto">
           <TextField id={props.titulo} 
           fullWidth={true} 
           color="secondary" 
           label={props.titulo} 
           variant="outlined" 
           onChange={datoIngresado}
           value={props.valor}
           required
           
           />
        </div>
    )
}


        