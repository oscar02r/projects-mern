import React, { useReducer } from 'react';

import { AlertaContext} from './alertaContext';
import alertaReducer from './alertaReducer';
import { MOSTRAR_ALERTA, OCULTAR_ALERTA} from '../../types';

const AlertaState = ({children}) => {

   const initialState = {
       alerta: null
   };

   const [state, dispatch] = useReducer(alertaReducer, initialState);

   const mostrarAlerta = (msg, categoria) => { 
        dispatch({
                 type: MOSTRAR_ALERTA,
                 payload: {
                     msg,
                     categoria
                 }      
        });

        setTimeout(()=>{
            dispatch({
                type: OCULTAR_ALERTA
            });
        },5000);
   }

   return(
       <AlertaContext.Provider
         value ={{
              alerta: state.alerta,
              mostrarAlerta
         }}
       >
           {children}
       </AlertaContext.Provider>
   );
}
 
export default AlertaState;