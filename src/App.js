import './App.css';
import freeCodeCampLogo from  './imagenes/freecodecamp-logo.png'
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
        
      </div>
    </div>
  );
}

export default App;
