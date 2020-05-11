import React, {useState, useContext} from 'react'
import proyectoContext from '../../context/projectos/projectoContext';

const NuevoProyecto = () => {

    const proyectosContext = useContext(proyectoContext);
    const { formulario, errorformulario, mostrarFormulario, agregarProyecto, mostrarError } = proyectosContext;

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
          
          if(nombre.trim() === ''){
            mostrarError();
            return;
          }
          
          agregarProyecto(proyecto);
          guardarProyecto({
            nombre:''
          });
    }

    const onClickNuevoProyecto = () => {
      mostrarFormulario();
    }

    const { nombre } = proyecto;
    return ( 
        <>
          <button 
          className="btn btn-block btn-primario"
          onClick={onClickNuevoProyecto}
          >Nuevo Proyecto</button>

          {formulario ?
               (
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
                    // onClick={}
                     type="submit" 
                     className="btn btn-primario btn-block"
                     value="Agregar Proyecto"
                   />
                 </form>
               )
               :
               null
          }

          {
            errorformulario ?
            <p className="mensaje error">El nombre del Proyecto es obligatorio</p> : null
          }
        </>
     );
}
 
export default NuevoProyecto;