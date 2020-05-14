import {
  REGISTRO_EXITOSO,
  REGISTRO_ERROR,
  OBTENER_USUARIO,
  LOGIN_EXITOSO,
  LOGIN_ERROR,
  CERRAR_SESSION,
} from "../../types";

export default (state, action) => {
  switch (action.type) {
    case REGISTRO_EXITOSO:
    case LOGIN_EXITOSO:
      localStorage.setItem("token", action.payload.token);
      return {
        ...state,
        autenticado: true,
        cargando:false,
        mensaje: null,
      };
    case OBTENER_USUARIO:
         return{
           ...state,
           autenticado:true,
           cargando:false,
           usuario: action.payload
         }

    case CERRAR_SESSION:
    case LOGIN_ERROR:
    case REGISTRO_ERROR:
        localStorage.removeItem('token');
        return{
            ...state,
            autenticado: null,
            cargando:false,
            token:null,
            usuario: null,
            mensaje: action.payload
        };

    default:
      return state;
  }
};
