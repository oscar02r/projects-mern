import React, {useContext} from 'react';
import ProyectoContext from '../../context/projectos/projectoContext';
import { TareaContext } from '../../context/tareas/tareaContext';

const Projecto = ({proyecto}) => { 
    
    const proyectoContext = useContext(ProyectoContext);
    const { proyectoActual } = proyectoContext;
     
    const tareasContext    = useContext(TareaContext);
    const { obtenerTareas  } = tareasContext;

    const selecionarProyecto = id => {
      proyectoActual(id);
      obtenerTareas(id);
    }
    
    return ( 
        <li>
            <button
              type="button"
              className="btn btn-blank"
              onClick={ () => selecionarProyecto(proyecto._id) }
            >
              {proyecto.nombre}  
            </button>
        </li>
     );
}
 
export default Projecto;