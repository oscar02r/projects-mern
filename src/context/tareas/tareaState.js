import React, {useReducer} from 'react';
import {v4 as uuidv4} from 'uuid'
import {TareaContext} from '../tareas/tareaContext';
import tareaReducer from '../tareas/tareaReducer';

import { 
      TAREAS_PROYECTO,
      AGREGAR_TAREA,
      VALIDAR_TAREA,
      ELIMINAR_TAREA,
      ESTADO_TAREA,
      TAREA_ACTUAL,
      ACTUALIZAR_TAREA,
      LIMPIAR_TAREA
} from '../../types';


 const TareaState = ({children}) => {
            
      const initialState = {
             tareas: [
                { id:1, nombre: 'Eligir Plataforma', estado:true, proyectoId: 1 },
                {id:2, nombre: 'Eligir Colores', estado:false, proyectoId: 1 },
                {id:3, nombre: 'Eligir Plataformas de pago', estado:false, proyectoId: 1 },
                {id:4, nombre: 'Eligir Hosting', estado:true, proyectoId: 2 },
                {id:5, nombre: 'Eligir Colores', estado:false, proyectoId: 2 },
                {id:6, nombre: 'Eligir Plataformas de pago', estado:false, proyectoId: 2 },
                {id:7, nombre: 'Eligir Hosting', estado:true, proyectoId: 3 },
                {id:8, nombre: 'Eligir Colores', estado:false, proyectoId: 3 },
                {id:9, nombre: 'Eligir Plataformas de pago', estado:false, proyectoId: 3 },
                {id:10, nombre: 'Eligir Hosting', estado:true, proyectoId: 4 },
                {id:11, nombre: 'Eligir Plataformas de pago', estado:false, proyectoId: 4 },
             ],
             tareasproyecto    : null,
             errortarea        : false,
             tareaseleccionada : null
      }

      const [state, dispatch] = useReducer( tareaReducer, initialState);

      const obtenerTareas = proyectoId => {
             dispatch({
                   type    : TAREAS_PROYECTO,
                   payload : proyectoId
             });
      }
      
      const agregarTarea = tarea => {
            tarea.id = uuidv4();
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

      const cambiarEstadoTarea = tarea => {
            dispatch({
                  type    : ESTADO_TAREA,
                  payload : tarea
            });
      }

      const guardarTareaActual = tarea => {
            dispatch({
                  type: TAREA_ACTUAL,
                  payload: tarea
            });
      }

      const actualizarTarea = tarea => {
            dispatch({
                  type    : ACTUALIZAR_TAREA,
                  payload : tarea
            });
      }

      const limpiarTarea = () => {
            dispatch({
                  type: LIMPIAR_TAREA
            });
      }

       return(
           <TareaContext.Provider
             value={{
                   tareas            : state.tareas,
                   tareasproyecto    : state.tareasproyecto,
                   errortarea        : state.errortarea,
                   tareaseleccionada : state.tareaseleccionada,
                   obtenerTareas,
                   agregarTarea,
                   validarTarea,
                   eliminarTarea,
                   cambiarEstadoTarea ,
                   guardarTareaActual,
                   actualizarTarea,
                   limpiarTarea
             }}
           >
             {children}
           </TareaContext.Provider>
       );
}

export default TareaState; 