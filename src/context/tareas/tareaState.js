import React, {useReducer} from 'react'
import {TareaContext} from '../tareas/tareaContext';
import tareaReducer from '../tareas/tareaReducer';

 const TareaState = ({children}) => {
       const initialState = {
             tareas: [],
       }

       const [state, dispatch] = useReducer( tareaReducer, initialState);

       return(
           <TareaContext.Provider
             value={{
                

             }}
           >
             {children}
           </TareaContext.Provider>
       );
}

export default TareaState; 