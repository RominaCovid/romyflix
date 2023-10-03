import VideoCard from "../VideoCard/VideoCard";
import Slider from "react-slick";


export default function Carrusel(props)
{
  
  
  console.log("carrusel:", props.videos)

  
    var settings = {
        dots: true,
        infinite: false,
        speed: 5000,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 4,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
    };
    return(
        <section>
        <Slider {...settings} >
          
              {
                props.videos.map((videos)=>{
                  return (
                    <div>
                    <h3>
                  <VideoCard 
                  key={videos.Categoria} 
                  link={videos.Link} 
                  img={videos.Imagen} />
                    </h3>
                   </div>  )  
                })

              }                       
             
           
           
                 
          
        </Slider>
      </section>
    );
}

   
