import "./ListaCategoria.css"
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function ListaCategoria(props){
  const name = props.cats;
  const enivarValor = (e)=>{
    props.actValor(e.target.value)

  }
 
  return(
      <div className='contenedor_lista'>         
        <FormControl margin="normal" variant='outlined' color="secondary" sx={{ m: 1, width: 500 }}>
          <InputLabel >Seleccione una Categoria</InputLabel>
          <Select labelId="demo-multiple-name-label" id="demo-multiple-name" value={props.valor} onChange={enivarValor}>
            {name.map((name) => (
             <MenuItem 
                key={name}                 
                value={name}               
             >
                {name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        
      </div>
     )
}
