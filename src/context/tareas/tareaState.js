import React, {useReducer} from 'react';
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
import clienteAxios from '../../config/axios';


 const TareaState = ({children}) => {
            
      const initialState = {
             tareasproyecto    : [],
             errortarea        : false,
             tareaseleccionada : null
      }

      const [state, dispatch] = useReducer( tareaReducer, initialState);

      const obtenerTareas = async proyecto => {
             try {
                   
                  const respuesta = await clienteAxios.get('/api/tareas',{ params:{proyecto} });

                  dispatch({
                        type    : TAREAS_PROYECTO,
                        payload : respuesta.data.tareas
                  });

             } catch (error) {
                   console.log(error.response);
             }
      }
      
      const agregarTarea =  async tarea => {
                 
            try {
                 const respuesta = await clienteAxios.post('/api/tareas', tarea);

                 console.log(respuesta.data);
                  dispatch({
                        type    : AGREGAR_TAREA,
                        payload : respuesta.data
                  });
            } catch (error) {
                  console.log(error);
            }
      
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

      const limpiarTarea = async ( id, proyecto ) => {
           try {
                 await clienteAxios.delete(`/api/tareas/${id}`, {params:{proyecto}});
                 dispatch({
                       type: LIMPIAR_TAREA
                 });
           } catch (error) {
                 console.log(error);
           }
      }

       return(
           <TareaContext.Provider
             value={{
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