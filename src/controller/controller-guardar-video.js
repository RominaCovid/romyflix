export const guardarVideo = (Titulo,Link,Imagen,Categoria,Descripción,CódigoSeguridad)=>{
 return fetch("http://localhost:5000/videos",{
    method:"POST",
    headers:{"Content-Type":"application/json"},
    body:JSON.stringify({ Titulo,Link,Imagen,Categoria,Descripción,CódigoSeguridad

    })
 })

}