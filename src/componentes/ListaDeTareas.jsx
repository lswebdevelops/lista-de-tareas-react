import React, {useState} from "react";
import TareaFormulario from "./TareaFormulatio";
import '../hojas-de-estilo/ListaDeTareas.css'
import Tarea from './Tarea'
function ListaDeTareas(){

  const [tareas, setTareas] = useState([]);

  const agregarTarea = tarea =>{
    console.log('Tarea agregada');
    console.log(tarea);
  }

  return(
    // fragmentos > <div> >>> <>
    <>
      <TareaFormulario />
    <div className="tareas-list-contenedor">
      {
        tareas.map((tarea) => 
        <Tarea
        texto={tarea.texto}
        completada={tarea.completada}
        />
        )    
      }
     </div>
    </>
  );

};


export default ListaDeTareas;