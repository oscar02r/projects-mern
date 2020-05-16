import React, { useContext, useEffect} from 'react';
import {CSSTransition, TransitionGroup} from 'react-transition-group';
import Proyecto from './Projecto';
import ProyectoContext from '../../context/projectos/projectoContext';
import { AlertaContext } from '../../context/alertas/alertaContext';

const ListadoProjecto = () => {
   
    const proyectoContext = useContext(ProyectoContext);
    const { mensaje, proyectos, obtenerProyectos } = proyectoContext;
    
    const alertaContext = useContext(AlertaContext);
    const { alerta, mostrarAlerta } = alertaContext;

    useEffect(() => {
        if (mensaje) {
            //Si hay un error muestra la alerta
            mostrarAlerta( mensaje.msg, mensaje.categoria);
        }
        obtenerProyectos();
       // eslint-disable-next-line 
    }, [mensaje]);

    if(proyectos.length === 0) return <p>No nay proyectos comienza creando uno</p>;

    

    return ( 
      <>
        <ul className="listado-proyectos">
         
              <TransitionGroup>
              {    
                 proyectos.map(proyecto =>(
                   <CSSTransition
                     key={proyecto._id}
                     timeout={200}
                     classNames="proyecto"
                   >
                   <Proyecto
                     proyecto={proyecto}
                    />
                   </CSSTransition>
  
                 ))
              }
               </TransitionGroup>
               
        </ul>
        { alerta ? ( <div className={`alerta ${alerta.categoria}`}> {alerta.msg} </div> ) : null}
      </>  
     );
}
 
export default ListadoProjecto;