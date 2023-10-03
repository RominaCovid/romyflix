import Button from "@mui/material/Button"
function Boton (props){
   return <Button variant="contained" onClick={props.onClick} >{props.titulo}</Button>
}
export default Boton