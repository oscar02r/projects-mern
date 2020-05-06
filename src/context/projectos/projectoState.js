import React, {useReducer} from 'react'


import proyectoContext from './projectoContext';
import proyectoReducer from './proyectoReducer';

const ProyectoState = ({children}) => {

    const initialState = {
           formulario: false 
    };

    //Dispath para ejecutar las accines
    const [state, dispatch] = useReducer( proyectoReducer, initialState);

    return(
        <proyectoContext.Provider
          value={{
             formulario: state.formulario 
          }}
        >
             {children}
        </proyectoContext.Provider>
    );
}

export default ProyectoState;