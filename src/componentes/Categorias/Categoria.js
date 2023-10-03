import "./Categoria.css"
import Carrusel from "../Carrusel/Carrusel";

export default function Categoria (props) {
    console.log("categoria:",props.videos)
  
    const {nameCat,color,marginTop} = props.datos;    
    const obj={
        backgroundColor:color,
        marginTop:marginTop
    }
    return(
        <section className="categoria" style={obj}>
            <h3>{nameCat}</h3>  
            <Carrusel videos={props.videos} />   
                                              
        </section>
    )
}