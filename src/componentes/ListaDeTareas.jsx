import React, {useState} from "react";
import TareaFormulario from "./TareaFormulario";
import '../hojas-de-estilo/ListaDeTareas.css'
import Tarea from './Tarea'
function ListaDeTareas(){


  const [tareas, setTareas] = useState([]);

  const agregarTarea = tarea =>{
    console.log(tarea);
    // look if the chain is not empty
    if(tarea.texto.trim()){
      // erases the spaces from the beginning and the end of object 
      tarea.texto = tarea.texto.trim();
      const tareasActualizadas = [tarea, ...tareas];
      setTareas(tareasActualizadas);

    }
  }

  return(
    // fragmentos > <div> >>> <>
    <>
      <TareaFormulario onSubmit={agregarTarea} />
    <div className="tareas-list-contenedor">
      {
        tareas.map((tarea) => 
        <Tarea
        key={tarea.id}
        id={tarea.id}
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