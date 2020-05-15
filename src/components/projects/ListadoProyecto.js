import React, { useContext, useEffect} from 'react';
import {CSSTransition, TransitionGroup} from 'react-transition-group';
import Proyecto from './Projecto';
import ProyectoContext from '../../context/projectos/projectoContext';

const ListadoProjecto = () => {
   
    const proyectoContext = useContext(ProyectoContext);
    const { proyectos, obtenerProyectos } = proyectoContext;
    
    useEffect(() => {
        obtenerProyectos();
       // eslint-disable-next-line 
    }, []);

    if(proyectos.length === 0) return <p>No nay proyectos comienza creando uno</p>;

    

    return ( 
        <ul className="listado-proyectos">
              <TransitionGroup>
              {    
                 proyectos.map(proyecto =>(
                   <CSSTransition
                     key={proyecto.id}
                     timeout={200}
                     classNames="proyecto"
                   >
                   <Proyecto
                     projecto={proyecto}
                    />
                   </CSSTransition>
  
                 ))
              }
               </TransitionGroup>
           
        </ul>
     );
}
 
export default ListadoProjecto;