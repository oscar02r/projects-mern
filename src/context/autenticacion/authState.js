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
import tokenAuth from '../../config/token';

    const AuthState = ({children}) => {

        const initialState = {
              token: localStorage.getItem('token'),
              autenticado: null,
              cargando:true,
              usuario: null,
              mensaje: null
        };

        const [state, dispatch] = useReducer(authReducer,initialState );

        const registrarUsuario = async datos => {

          try {
              const respuesta = await clienteAxios.post('/api/usuarios', datos);
              
               dispatch({
                 type:REGISTRO_EXITOSO,
                 payload: respuesta.data
               });
               usuarioAutenticado();
               //console.log(respuesta.data);
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

              const token = localStorage.getItem('token');
              if (token) {
                tokenAuth(token);
              }
              
              try {
                  const respuesta = await clienteAxios.get('/api/auth');
                  dispatch({
                    type: OBTENER_USUARIO,
                    payload: respuesta.data.usuario
                  });         
              } catch (error) {
                   console.log(error.response.data.msg);
                   dispatch({
                     type: LOGIN_ERROR
                   });
              }

        }

        const iniciarSesion = async datos => {

          try {
            const respuesta = await clienteAxios.post('/api/auth',datos);
            console.log(respuesta);
            dispatch({
              type: LOGIN_EXITOSO,
              payload: respuesta.data
            }); 
            usuarioAutenticado();
        } catch (error) {

             console.log(error.response.data);

             const alerta ={
              msg:error.response.data.msg,
              categoria: 'alerta-error'
             };

             dispatch({
               type: LOGIN_ERROR,
               payload: alerta
             });
        }
        }
        
        const cerrarSession = () => {
               dispatch({
                 type: CERRAR_SESSION,

               });
        }

        return (
        <AuthContext.Provider
          value={{
                token: state.token,
                autenticado: state.autenticado,
                cargando: state.cargando,
                usuario: state.usuario,
                mensaje: state.mensaje,
                registrarUsuario,
                iniciarSesion,
                usuarioAutenticado,
                cerrarSession
          }}
        >
          {children}
        </AuthContext.Provider> );
    }
     
    export default AuthState;