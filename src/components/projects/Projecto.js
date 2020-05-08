import React, {useContext} from 'react';
import ProyectoContext from '../../context/projectos/projectoContext';

const Projecto = ({projecto}) => {
    const proyectoContext = useContext(ProyectoContext);
    const {proyectoActual} = proyectoContext;

    return ( 
        <li>
            <button
              type="button"
              className="btn btn-blank"
              onClick={ () => proyectoActual(projecto.id) }
            >
              {projecto.nombre}  
            </button>
        </li>
     );
}
 
export default Projecto;