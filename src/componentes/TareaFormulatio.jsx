import React, {useState} from "react";
import '../hojas-de-estilo/TareaFormulario.css'

function TareaFormulario(props){
  const [input, setInput] = useState ('');
  const manejarCambio = e =>{
     setInput(e.target.value);
  }
  const manejarEnvio = e =>{
    e.preventDefault();
    console.log("enviando formulário");
    const tareaNueva = {
      id: '34545',
      text: "hola"
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
