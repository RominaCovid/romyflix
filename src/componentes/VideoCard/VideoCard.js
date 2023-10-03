import "./VideoCard.css"
export default function VideoCard (props){
  
    return (     
      <div className="card">     
      <a href={props.link}>
      <img className="img_video" 
         src={props.img}>
      </img>          
      </a> 
       </div>
      )
       
    

}