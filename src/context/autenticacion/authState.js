import React, { useReducer} from 'react';
import clienteAxios from '../../config/axios';
import {AuthContext} from './authContext';
import authReducer from './authReducer';

import { 
    REGISTRO_EXITOSO,
    REGISTRO_ERROR,
    OBTENER_USUARIO,
    LOGIN_EXITOSO,
    LOGIN_ERROR,
    CERRAR_SESSION
    } from '../../types';

    const AuthState = ({children}) => {

        const initialState = {
              token: localStorage.getItem('token'),
              autenticado: null,
              usuario: null,
              mensaje: null
        };

        const [state, dispatch] = useReducer(authReducer,initialState );

        const registrarUsuario = async datos => {

          try {
              const respuesta = await clienteAxios.post('/api/usuarios', datos);
              console.log(respuesta);
               dispatch({
                 type:REGISTRO_EXITOSO,
                 payload: respuesta.data
               });
          } catch (error) {
          
            const alerta ={
                  msg: error.response.data.msg,
                  categoria: 'alerta-error'
            };

            dispatch({
              type: REGISTRO_ERROR,
              payload: alerta
            });
          }
        }
        const usuarioAutenticado = async () => {
            
        }

        return (
        <AuthContext.Provider
          value={{
                token: state.token,
                autenticado: state.autenticado,
                usuario: state.usuario,
                mensaje: state.mensaje,
                registrarUsuario
          }}
        >
          {children}
        </AuthContext.Provider> );
    }
     
    export default AuthState;