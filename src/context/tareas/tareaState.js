import React, {useReducer} from 'react'
import {TareaContext} from '../tareas/tareaContext';
import tareaReducer from '../tareas/tareaReducer';

import { 
      TAREAS_PROYECTO,
      AGREGAR_TAREA,
      VALIDAR_TAREA,
      ELIMINAR_TAREA
} from '../../types';


 const TareaState = ({children}) => {
            
      const initialState = {
             tareas: [
                { nombre: 'Eligir Plataforma', estado:true, proyectoId: 1 },
                { nombre: 'Eligir Colores', estado:false, proyectoId: 1 },
                { nombre: 'Eligir Plataformas de pago', estado:false, proyectoId: 1 },
                { nombre: 'Eligir Hosting', estado:true, proyectoId: 2 },
                { nombre: 'Eligir Colores', estado:false, proyectoId: 2 },
                { nombre: 'Eligir Plataformas de pago', estado:false, proyectoId: 2 },
                { nombre: 'Eligir Hosting', estado:true, proyectoId: 3 },
                { nombre: 'Eligir Colores', estado:false, proyectoId: 3 },
                { nombre: 'Eligir Plataformas de pago', estado:false, proyectoId: 3 },
                { nombre: 'Eligir Hosting', estado:true, proyectoId: 4 },
                { nombre: 'Eligir Plataformas de pago', estado:false, proyectoId: 4 },
             ],
             tareasproyecto: null,
             errortarea: false
      }

      const [state, dispatch] = useReducer( tareaReducer, initialState);

      const obtenerTareas = proyectoId => {
             dispatch({
                   type    : TAREAS_PROYECTO,
                   payload : proyectoId
             });
      }
      
      const agregarTarea = tarea => {
            dispatch({
                  type    : AGREGAR_TAREA,
                  payload : tarea
            });
            console.log('Hola mundo');
      }
      
      const validarTarea = () => {
            dispatch({
                  type: VALIDAR_TAREA
            });
      }

      const eliminarTarea = id => {
           dispatch({
                 type: ELIMINAR_TAREA,
                 payload: id
           });  
      }

       return(
           <TareaContext.Provider
             value={{
                   tareas: state.tareas,
                   tareasproyecto: state.tareasproyecto,
                   errortarea: state.errortarea,
                   obtenerTareas,
                   agregarTarea,
                   validarTarea,
                   eliminarTarea
             }}
           >
             {children}
           </TareaContext.Provider>
       );
}

export default TareaState; 