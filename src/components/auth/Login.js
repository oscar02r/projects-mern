import React, { useState, useContext, useEffect } from "react";
import { Link } from 'react-router-dom';
import { AlertaContext } from '../../context/alertas/alertaContext';
import { AuthContext   } from '../../context/autenticacion/authContext';

const Login = (props) => {
  
  const alertaContext = useContext(AlertaContext);
  const { alerta, mostrarAlerta } = alertaContext;

  const authContext = useContext(AuthContext);
  const { mensaje, autenticado, iniciarSesion } = authContext;

  const [usuario, guardarUsuario] = useState({
        email:'',
        password: ''
  });

  //En caso de que el usuario o password no exista.
  useEffect(() => {
     if (autenticado) {
      props.history.push('/proyectos');
     }

     if (mensaje) {
       mostrarAlerta(mensaje.msg, mensaje.categoria);
     }
     
     //eslint-disable-next-line
  }, [mensaje, autenticado, props.history])

  const {email, password} = usuario;
  
  const onChange = (e) => {
     
      guardarUsuario({
          ...usuario,
          [e.target.name] : e.target.value
      });
  };

  const onSubmit = e => {
    e.preventDefault();
    
    if (email.trim() === '' || password.trim() === '') {
        mostrarAlerta('Todos los campos son obligatorios', 'alerta-error');
        return;
    }

    iniciarSesion({email, password});

  }
   

  return (
    <div className="form-usuario">
        {alerta ? <div className={`alerta ${alerta.categoria}`}>{alerta.msg}</div>: null}
      <div className="contenedor-form sombra-dark">
        <h1>Iniciar Sesión </h1>
        <form
          onSubmit={onSubmit}
        >
          <div className="campo-form">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              className=""
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
            <input 
              type="submit" 
              className="btn btn-primario btn-block" 
              onChange={onChange}
              value="Iniciar Sesión"
            />
          </div>
        </form>
        <Link to={'/nueva-cuenta'} className="enlace-cuenta">
          Obtener Cuenta
        </Link>
      </div>
    </div>
  );
};

export default Login;
