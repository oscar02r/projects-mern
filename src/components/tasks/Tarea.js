import React, {useContext} from 'react';
import { TareaContext } from '../../context/tareas/tareaContext';
import ProyectoContext from '../../context/projectos/projectoContext';


const Tarea = ({tarea}) => {

   const proyectoContext = useContext(ProyectoContext);
   const { proyecto } = proyectoContext;

   const tareaContext =  useContext(TareaContext);
   const { eliminarTarea, obtenerTareas } = tareaContext;
    
   const [ proyectoAcutal ] = proyecto; 

    const tareaEliminar = id => {
         eliminarTarea(id);
         obtenerTareas(proyectoAcutal.id);
    }

    return ( 
         <li className="tarea sombra">
            <p>{tarea.nombre}</p>
            <div className="estado">
                {
                    tarea.estado
                    ?
                     (
                         <button
                           type="button"
                           className="completo"
                         >Completo</button>
                     )
                    :
                    (
                         <button
                           type="button"
                           className="incompleto"
                         >Incompleto</button>
                     )
                }
            </div>
            <div className="acciones">
                <button
                  type="button"
                  className="btn btn-primario"
                >Editar</button>

                <button
                  type="button"
                  className="btn btn-secundario"
                  onClick={ () => tareaEliminar(tarea.id)}
                >
                    Eliminar
                </button>
            </div>
         </li>
     );
}
 
export default Tarea;