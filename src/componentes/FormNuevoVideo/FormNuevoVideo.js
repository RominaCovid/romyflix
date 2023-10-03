import "./FormNuevoVideo.css" 
import { guardarVideo } from "../../controller/controller-guardar-video"
import CampoTexto from "../CampoTexto/CampoTexto"
import ListaCategoria from "../ListaCategoria/ListaCategoria"
import Boton from "../Button/Button"

export default function FormNuevoVideo(props){ 
const manejoEnvio = (e)=>{
    e.prevetDefault()    
 } 
 const{Titulo,Link,Imagen,Categoria,Descripción,CódigoSeguridad} = props.objVideo

 const guardar =()=>{
    guardarVideo(Titulo,Link,Imagen,Categoria,Descripción,CódigoSeguridad)
 } 

    return (
        <section className="contenedor_form" >
            
            <form className="formulario" onSubmit={manejoEnvio} >
                <h2>Nuevo Video</h2>
                <CampoTexto 
                    titulo="Titulo" 
                    placeholder="Ingrese el titulo del video" 
                    valor={props.objVideo.Titulo.Titulo}
                    actValor={props.objVideo.Titulo.funcTitulo}
                    required
                />
                <CampoTexto 
                    titulo="Link" 
                    placeholder="Ingrese el link del video" 
                    valor={props.objVideo.Link.Link}
                    actValor={props.objVideo.Link.funcLink}
                    required
                />
                <CampoTexto 
                    titulo="Imagen" 
                    placeholder="Ingrese el link de imagen del video" 
                    valor={props.objVideo.Imagen.Imagen}
                    actValor={props.objVideo.Imagen.funcImg}
                    required
                />
                <ListaCategoria 
                    cats={props.cats} 
                    valor={props.datoCat} 
                    actValor={props.catSelec}
                />
                <CampoTexto 
                    titulo="Descripción" 
                    placeholder="Ingrese una descripción del video" 
                    valor={props.objVideo.Descripción.Descripción}
                    actValor={props.objVideo.Descripción.funcDesc}
                    required
                />
                <CampoTexto 
                titulo="Código de Seguridad" 
                placeholder="Ingrese el código del video" 
                valor={props.objVideo.CódigoSeguridad.CódigoSeguridad}
                actValor={props.objVideo.CódigoSeguridad.funcCod} 
                required
                />
                <div className="contenedor_botones">
                <Boton titulo="Guardar"  onClick={guardar}/>
                <Boton titulo="Limpiar" onClick={props.onClick}/>                
                </div>
                <Boton titulo="Nueva Categoria" onClick={props.onClick}/>
                
                                  
            </form>               
        </section>
    )
}