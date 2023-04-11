import React, {useState} from "react";
import '../hojas-de-estilo/TareaFormulario.css';
import {v4 as uuidv4} from 'uuid';

function TareaFormulario(props){
  const [input, setInput] = useState ('');
  const manejarCambio = e =>{
     setInput(e.target.value);
  }
  const manejarEnvio = e =>{
    e.preventDefault();
    console.log("enviando formulário");
    const tareaNueva = {
      // use the package uuid (npm install uuid) for generating the id
      id: uuidv4() ,
      text: input,
      completada: false,
    }
  }




  return(
    <form className='tarea-formulario'
      onSubmit={manejarEnvio}>
      <input 
      className="tarea-input"
      type="text"
      placeholder="Escribe una tarea"
      name="texto"
      onChange={manejarCambio}
      />
      <button className="tarea-boton">agregar tarea</button>
    </form>

  );
}
export default TareaFormulario;
