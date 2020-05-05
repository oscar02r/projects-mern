import React from "react";

const Login = () => {
  const onChange = (e) => {};

  return (
    <div className="form-usuario">
      <div className="contenedor-form sombra-dark">
        <h1>Iniciar Sesión </h1>
        <form>
          <div className="campo-form">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              className=""
              id="email"
              name="email"
              placeholder="Tu Email"
              onChange={onChange}
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
      </div>
    </div>
  );
};

export default Login;
