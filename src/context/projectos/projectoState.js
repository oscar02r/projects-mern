import React, {useReducer} from 'react';
import clienteAxios from '../../config/axios';

import proyectoContext from './projectoContext';
import proyectoReducer from './proyectoReducer';

import { 
  FORMULARIO_PROYECTO, 
  OBTENER_PROYECTOS,
  AGREGAR_PROYECTO,
  VALIDAR_FORMULARIO,
  PROYECTO_ACTUAL, 
  ELIMINAR_PROYECTO
 } from '../../types';

 
const ProyectoState = ({children}) => {
 
    const initialState = {
           proyectos       : [],
           formulario      : false,
           errorformulario : false ,
           proyecto        : null
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
          console.log(respuesta.data);
      } catch (error) {
        console.log(error                 );
      }
    }

    const agregarProyecto = async proyecto => {
         
        try {
            const resultado = await clienteAxios.post('/api/proyectos', proyecto);
            dispatch({
               type: AGREGAR_PROYECTO,
               payload: resultado.data
            });
        } catch (error) {
          console.log(error);
        }
    }

    const mostrarError = () => {
          dispatch({
              type : VALIDAR_FORMULARIO,
          });
    }

    const proyectoActual = proyectoid => {
      dispatch({
          type:PROYECTO_ACTUAL,
          payload: proyectoid
      });
    }

    const eliminarProyecto = proyectoId => {
          dispatch({
            type    : ELIMINAR_PROYECTO,
            payload : proyectoId
          });
    }

    return(
        <proyectoContext.Provider
          value={{
             proyectos       : state.proyectos,
             formulario      : state.formulario,
             errorformulario : state.errorformulario,
             proyecto        : state.proyecto,
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