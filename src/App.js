import { useState,useEffect } from 'react';
import './App.css';
import "./Global.css";
import Header from './componentes/Header/Header';
import FormNuevoVideo from './componentes/FormNuevoVideo/FormNuevoVideo';
import Categoria from './componentes/Categorias/Categoria';
import Banner from './componentes/Banner/Banner';
import FormNewCategoria from './componentes/FormNewCategoria/FormNewCategoria';
import Footer from './componentes/Footer/Footer';
import {buscar} from "./controller/controller-categorias"
import { buscarVideos } from './controller/controller-videos';

//Toma una parte del objeto y lo envía en forma de array
//después del banner se
//coloca
function App() {
  const [offFormVideo,setOnFormVideo] = useState(false)
  const [offFormCat,setOnFormCat]= useState(false)  
  const [valorCat,setActValorCat]=useState("")
  const [Titulo,setTitulo]=useState("")  
  const [Link,setLink]=useState("") 
  const [Imagen,setImagen]=useState("") 
  const [Descripción,setDescripción]=useState("") 
  const [CódigoSeguridad,setCódigoSeguridad]=useState("") 
  const [categoria,setCategoria]=useState("")  
  const[cats,setCats]=useState([]) 
  const[videos,setVideos]=useState([])
     useEffect(()=>{
        buscar(setCats)
        buscarVideos(setVideos)
        
     },[]);
      

  const objDatosVideos= {
    "Titulo":{
      Titulo:Titulo,
      funcTitulo:setTitulo
    },
    "Link":{
      Link:Link,
      funcLink:setLink
    },
    "Imagen":{
      Imagen:Imagen,
      funcImg:setImagen
    },
    "Categoria":{
      Categoria:categoria,
      funcCat:setCategoria
    },
    "Descripción":{
      Descripción:Descripción,
      funcDesc:setDescripción
    },
    "CódigoSeguridad":{
      CódigoSeguridad:CódigoSeguridad,
      funcCod:setCódigoSeguridad
    }
}

  const onFormVideo =()=>{
    setOnFormVideo(!offFormVideo)
  }
  const onFormCat=()=>{
    setOnFormCat(!offFormCat)
  }
 
  return (
    <div>
      <Header onClick={onFormVideo}/>  

      <Banner/> 

      {offFormVideo === true ?<FormNuevoVideo 
        cats={cats.map((cats)=>cats.nameCat)} 
        onClick={onFormCat} 
        datoCat={valorCat}
        catSelec={setActValorCat}
        objVideo={objDatosVideos}
        />  : <div></div> } 

      {offFormCat === true ?<FormNewCategoria />  : <div></div> }
          
      {
           cats.map((cats,index)=>{ 
                
              return (<Categoria 
                        key={index} 
                        datos={cats}  
                        videos={videos.filter((videos)=>videos.Categoria === cats.nameCat)}
                      />)        
         
        })
      }          
        
     <Footer/>   

    </div>
  );
}

export default App;
