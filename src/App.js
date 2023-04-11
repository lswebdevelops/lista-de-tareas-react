import './App.css';
import freeCodeCampLogo from  './imagenes/freecodecamp-logo.png'
import Tarea from './componentes/Tareas'


function App() {
  return (
    <div className="applicacion-tareas">
      <div className='freecodecamp-logo-contenedor'>
      <img 
      src={freeCodeCampLogo}
      className='freecodecamp-logo'
      alt='freeCodeCamp logo'
       />
      </div>
      <div className='tareas-lista-principal'>
        <h1>Mis Tareas</h1>
        <Tarea texto='Aprender React' />
        
      </div>
    </div>
  );
}

export default App;
