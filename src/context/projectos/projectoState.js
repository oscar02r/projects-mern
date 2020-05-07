import React, {useReducer} from 'react';
import proyectoContext from './projectoContext';
import proyectoReducer from './proyectoReducer';

import { FORMULARIO_PROYECTO } from '../../types';


const ProyectoState = ({children}) => {

    const initialState = {
           proyectos: [
            { id:1, nombre: 'Tienda Virtual' },
            { id:2, nombre: 'Intranet' },
            { id:3, nombre: 'Diseno se sitio web' },
            { id:4, nombre: 'MERN' }
   ],
           formulario: false 
    };

    //Dispath para ejecutar las accines
    const [state, dispatch] = useReducer( proyectoReducer, initialState);

    const mostrarFormulario = () => {
        dispatch({
          type: FORMULARIO_PROYECTO
        });
    }

    return(
        <proyectoContext.Provider
          value={{
             proyectos  : state.proyectos,
             formulario : state.formulario,
             mostrarFormulario
          }}
        >
             {children}
        </proyectoContext.Provider>
    );
}

export default ProyectoState;