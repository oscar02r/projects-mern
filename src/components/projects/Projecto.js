import React, {useContext} from 'react';
import ProyectoContext from '../../context/projectos/projectoContext';
import { TareaContext } from '../../context/tareas/tareaContext';

const Projecto = ({projecto}) => { 
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
              onClick={ () => selecionarProyecto(projecto.id) }
            >
              {projecto.nombre}  
            </button>
        </li>
     );
}
 
export default Projecto;