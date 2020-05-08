import React, {useReducer} from 'react';
import { v4 as uuidv4 } from 'uuid';

import proyectoContext from './projectoContext';
import proyectoReducer from './proyectoReducer';

import { 
  FORMULARIO_PROYECTO, 
  OBTENER_PROYECTOS,
  AGREGAR_PROYECTO,
  VALIDAR_FORMULARIO
 } from '../../types';

 
const ProyectoState = ({children}) => {
 
  const proyectos = [
    { id:1, nombre: 'Tienda Virtual' },
    { id:2, nombre: 'Intranet' },
    { id:3, nombre: 'Diseno se sitio web' },
    { id:4, nombre: 'MERN' }
  ];
    const initialState = {
           proyectos       : [],
           formulario      : false,
           errorformulario : false 
    };

    //Dispath para ejecutar las accines
    const [state, dispatch] = useReducer( proyectoReducer, initialState);

    const mostrarFormulario = () => {
        dispatch({
          type: FORMULARIO_PROYECTO,
        });
    }

    const obtenerProyectos = () => {
      dispatch({
        type: OBTENER_PROYECTOS,
        payload:proyectos
      });
    }

    const agregarProyecto = proyecto => {
         proyecto.id = uuidv4();
         
         dispatch({
           type    : AGREGAR_PROYECTO,
           payload : proyecto
         });
    }

    const mostrarError = () => {
          dispatch({
              type : VALIDAR_FORMULARIO,
          });
    }
 
    return(
        <proyectoContext.Provider
          value={{
             proyectos       : state.proyectos,
             formulario      : state.formulario,
             errorformulario : state.errorformulario,
             mostrarFormulario,
             obtenerProyectos,
             agregarProyecto,
             mostrarError
          }}
        >
             {children}
        </proyectoContext.Provider>
    );
}

export default ProyectoState;