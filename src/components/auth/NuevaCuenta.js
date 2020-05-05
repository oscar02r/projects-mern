import React, {useState} from "react";
import { Link } from 'react-router-dom';

const NuevaCuenta = () => {
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

  const onSubmit = e => {
    e.preventDefault();

  }
  
  const {email, password, confirmar, nombre} = usuario; 

  return (
    <div className="form-usuario">
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
