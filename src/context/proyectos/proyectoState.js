import React, {useReducer} from 'react';
import clienteAxios from '../../config/axios';

import proyectoContext from './proyectoContext';
import proyectoReducer from './proyectoReducer';

import { 
  FORMULARIO_PROYECTO, 
  OBTENER_PROYECTOS,
  AGREGAR_PROYECTO,
  PROYECTO_ERROR,
  VALIDAR_FORMULARIO,
  PROYECTO_ACTUAL, 
  ELIMINAR_PROYECTO
 } from '../../types';

 
const ProyectoState = ({children}) => {
 
    const initialState = {
           proyectos       : [],
           formulario      : false,
           errorformulario : false ,
           proyecto        : null,
           mensaje         : null 
    };

    //Dispath para ejecutar las accines
    const [state, dispatch] = useReducer( proyectoReducer, initialState);

    const mostrarFormulario = () => {
        dispatch({
          type: FORMULARIO_PROYECTO,
        });
    }

    const obtenerProyectos = async () => {

      try {
          const  respuesta = await clienteAxios.get('api/proyectos');

          dispatch({
             type: OBTENER_PROYECTOS,
             payload: respuesta.data.proyectos
          });
      } catch (error) {
        const alerta = {
            msg:'Hubo un error',
            categoria:'alerta-error'
       };

        dispatch({
            type    : PROYECTO_ERROR,
            payload : alerta
        });
   }
    }

    const agregarProyecto = async proyecto => {
         
        try {
            const resultado = await clienteAxios.post('/api/proyectos', proyecto);
            dispatch({
               type: AGREGAR_PROYECTO,
               payload: resultado.data
            });
            obtenerProyectos();
        } catch (error) {
          const alerta = {
              msg:'Hubo un error',
              categoria:'alerta-error'
         };

          dispatch({
              type    : PROYECTO_ERROR,
              payload : alerta
          });
     }
    }

    const mostrarError = () => {
          dispatch({
              type : VALIDAR_FORMULARIO,
          });
    }

    const proyectoActual = proyecto => {
      dispatch({
          type:PROYECTO_ACTUAL,
          payload: proyecto
      });
    }

    const eliminarProyecto = async proyectoId => {

          try {

            await clienteAxios.delete(`/api/proyectos/${proyectoId}`);
            
            dispatch({
              type    : ELIMINAR_PROYECTO,
              payload : proyectoId
            });

          } catch (error) {
               const alerta = {
                   msg:'Hubo un error',
                   categoria:'alerta-error'
              };

               dispatch({
                   type    : PROYECTO_ERROR,
                   payload : alerta
               });
          }
    }

    return(
        <proyectoContext.Provider
          value={{
             proyectos       : state.proyectos,
             formulario      : state.formulario,
             errorformulario : state.errorformulario,
             proyecto        : state.proyecto,
             mensaje         : state.mensaje,
             mostrarFormulario,
             obtenerProyectos,
             agregarProyecto,
             mostrarError,
             proyectoActual,
             eliminarProyecto
          }}
        >
             {children}
        </proyectoContext.Provider>
    );
}

export default ProyectoState;