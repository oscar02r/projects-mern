import React, { useContext } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import Tarea from './Tarea';
import ProyectoContext from '../../context/proyectos/proyectoContext';
import { TareaContext } from '../../context/tareas/tareaContext';

const ListadoTarea = () => {

    const proyectoContext = useContext(ProyectoContext);
    const { proyecto, eliminarProyecto } = proyectoContext;
    
    const tareaContext = useContext(TareaContext);
    const { tareasproyecto } = tareaContext;

    if(!proyecto) return <h2> Selecciona un proyecto </h2>

    const [proyectoActual] = proyecto;
    
    return ( 
        <>
          <h2>Proyecto: {proyectoActual.nombre}</h2>
          <ul className="listado-tareas">
              {tareasproyecto.length === 0
                  ?( 
                      <li className="tarea">
                      <p>No hay tareas</p>
                     </li>
                   )
                  : 
                  <TransitionGroup>
                      {
                       tareasproyecto.map( tarea =>(
                         <CSSTransition
                             timeout={200}
                             classNames="tarea"
                             key={tarea._id}
                         >
                         <Tarea
                             tarea={tarea}
                         />
                         </CSSTransition>
                        ))
                      }
                  </TransitionGroup>
              }
          </ul>
          <button
            className="btn btn-eliminar"
            type="button"
            onClick = { () => eliminarProyecto(proyectoActual._id)}
          >Eliminar Proyecto &times;</button>
        </>
     );
}
 
export default ListadoTarea;