import axios from "axios"
export const api = axios. create({
    baseURL:"http://localhost:5000/videos"
})
export const buscarVideos = async (setData)=>{
    const respuesta = await api.get()
    setData(respuesta.data)
}
