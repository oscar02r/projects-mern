import React, { useContext, useEffect} from 'react'
import Proyecto from './Projecto';
import ProyectoContext from '../../context/projectos/projectoContext';

const ListadoProjecto = () => {
   
    const proyectoContext = useContext(ProyectoContext);
    const { proyectos, obtenerProyectos } = proyectoContext;
    useEffect(() => {
        obtenerProyectos();

    }, []);

    if(proyectos.length === 0) return null;

    

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