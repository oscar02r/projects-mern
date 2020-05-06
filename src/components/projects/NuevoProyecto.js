import React, {useState} from 'react'

const NuevoProyecto = () => {
    const [proyecto, guardarProyecto] = useState({
        nombre:''
    });

    const onChangeProyecto = e => {
           guardarProyecto({
                ...proyecto,
               [e.target.name] : e.target.value
           });
    }

    const onSubmitProyecto = e => {
          e.preventDefault();

    }

    const { nombre } = proyecto;
    return ( 
        <>
          <button 
          className="btn btn-block btn-primario"
          >Nuevo Proyecto</button>
          <form 
            className="formulario-nuevo-proyecto"
            onSubmit={onSubmitProyecto}
          >
             <input 
               type="text" 
               className="input-text"
               placeholder="Nombre proyecto"
               name="nombre"
               onChange ={onChangeProyecto}
               value={nombre}
             />
             <input 
               type="submit" 
               className="btn btn-primario btn-block"
               value="Agregar Proyecto"
             />
          </form>
        </>
     );
}
 
export default NuevoProyecto;