import React, { useState, useContext, useEffect } from "react";
import { Link } from 'react-router-dom';
import { AlertaContext } from '../../context/alertas/alertaContext';
import { AuthContext   } from '../../context/autenticacion/authContext';

const NuevaCuenta = (props) => {

  const alertaContext = useContext(AlertaContext);
  const { alerta, mostrarAlerta } = alertaContext;

  const authContext = useContext(AuthContext);
  const { mensaje, autenticado, registrarUsuario } = authContext;
  
  useEffect(()=>{
      if(autenticado) {
         props.history.push('/proyectos');  
      }

      if (mensaje) {
        mostrarAlerta(mensaje.msg, mensaje.categoria);
      }
    //eslint-disable-next-line
  }, [mensaje, autenticado, props.history]);

  const [usuario, guardarUsuario] = useState({
        nombre: '',
        email:'',
        password: '',
        confirmar: '',

  });

  const onChange = (e) => {
     
      guardarUsuario({
          ...usuario,
          [e.target.name] : e.target.value
      });
  };

  const {email, password, confirmar, nombre} = usuario;

  const onSubmit = e => {
    e.preventDefault();

    if( nombre.trim() === '' || email.trim() === '' || 
        password.trim() === '' || confirmar.trim() === '') {
       return mostrarAlerta('Todos los campos son obligatorios', 'alerta-error');
    }
    
    if (password.length < 6) {
      return mostrarAlerta('El password debe ser mayor que 6.', 'alerta-error');
    }
    
    if (password !== confirmar) {
      return mostrarAlerta('Los dos password deben ser iguales.', 'alerta-error');
    }
    
    registrarUsuario({
      nombre,
      email,
      password
    });

    guardarUsuario({
      nombre: '',
      email:'',
      password: '',
      confirmar: '',
    });

  }
   
  return (
    <div className="form-usuario">
       {alerta ? <div className={`alerta ${alerta.categoria}`}>{alerta.msg}</div>: null}
      <div className="contenedor-form sombra-dark">
        <h1>Obtener una cuenta </h1>

        <form
          onSubmit={onSubmit}
        >
        <div className="campo-form">
            <label htmlFor="nombre">Nombre</label>
            <input
              type="text"
              id="nombre"
              name="nombre"
              placeholder="Tu Nombre"
              onChange={onChange}
              value={nombre}
            />
          </div>
          <div className="campo-form">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Tu Email"
              onChange={onChange}
              value={email}
            />
          </div>
          <div className="campo-form">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              className=""
              id="password"
              name="password"
              placeholder="Password"
              onChange={onChange}
              value ={password}
            />
          </div>
          <div className="campo-form">
            <label htmlFor="confirmar">Confirmar Password</label>
            <input
              type="password"
              className=""
              id="confirmar"
              name="confirmar"
              placeholder="Repite tu password"
              onChange={onChange}
              value ={confirmar}
            />
          </div>
          <div className="campo-form">
            <input 
              type="submit" 
              className="btn btn-primario btn-block" 
              onChange={onChange}
              value="Registrarme"
            />
          </div>
        </form>
        <Link to={'/'} className="enlace-cuenta">
          Volver a Iniciar Sesión</Link>
      </div>
    </div>
  );
};

export default NuevaCuenta;
