import React from 'react'
import Proyecto from './Projecto';

const ListadoProjecto = () => {
    const proyectos = [
         { nombre: 'Tienda Virtual' },
         { nombre: 'Intranet' },
         { nombre: 'Diseno se sitio web' }
    ];

    return ( 
        <ul className="listado-proyectos">
           {
               proyectos.map(proyecto =>(
               <Proyecto
                   key={proyecto.nombre}
                   projecto={proyecto}
               />
               ))
           }
        </ul>
     );
}
 
export default ListadoProjecto;