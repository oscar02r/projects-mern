import React, { useContext, useState } from 'react';
import ProyectoContext from '../../context/projectos/projectoContext';
import { TareaContext } from '../../context/tareas/tareaContext';


const FormTarea = () => {
    
    const [tarea, guardarTarea] = useState({
        nombre: ''
    });

    const { nombre } = tarea;

    const proyectoContext = useContext(ProyectoContext);
    const {proyecto}      = proyectoContext;

    const tareaConext = useContext(TareaContext);
    const { errortarea, agregarTarea, validarTarea, obtenerTareas } = tareaConext;

    if (!proyecto) return null;
    
    const [ proyectoActual ] = proyecto;

    const onHandleChange = e =>{
        guardarTarea({
            ...tarea,
            [e.target.name]: e.target.value
        });
    }
    const onSubmit = e =>{
          e.preventDefault();

          if(nombre.trim() ==='') {
              validarTarea();
              return;
          }

          tarea.proyectoId = proyectoActual.id;
          tarea.estado = false;
          agregarTarea(tarea);
          obtenerTareas(proyectoActual.id);
          guardarTarea({nombre: ''});
    }

 
    return ( 
        <div className="formulario">
            <form 
              onSubmit={onSubmit}
            >
                <div className="contenedor-input">
                    <input    
                       type="text"                     
                       className="input-text"
                       onChange = {onHandleChange}
                       placeholder="Nombre Tarea"
                       name="nombre"
                       value ={nombre}
                    />
                </div>
                <div className="contenedor-input">
                    <input 
                      type="submit"
                      className="btn btn-primario btn-submit btn-block" 
                      value="Agregar Tarea"
                    />
                </div>
            </form>
            { errortarea ? <p className="mensaje error">El nombre de la tarea es obligatorio</p> : null }
        </div>
     );
}
 
export default FormTarea;