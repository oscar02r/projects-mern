import React, { useContext, useEffect} from 'react'
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
           {
               proyectos.map(proyecto =>(
               <Proyecto
                   key={proyecto.id}
                   projecto={proyecto}
               />
               ))
           }
        </ul>
     );
}
 
export default ListadoProjecto;