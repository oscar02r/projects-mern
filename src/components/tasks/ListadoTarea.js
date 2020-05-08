import React from 'react'
import Tarea from './Tarea';

const ListadoTarea = () => {

    const tareasProyecto =[
        { nombre: 'Eligir Plataforma', estado:true },
        { nombre: 'Eligir Colores', estado:false },
        { nombre: 'Eligir Plataformas de pago', estado:false },
        { nombre: 'Eligir Hosting', estado:true }
    ];

    return ( 
        <>
          <h2>Proyecto: Tienda virtual</h2>
          <ul className="listado-tareas">
              {tareasProyecto.length === 0
                  ?( 
                      <li className="tarea">
                      <p>No hay tareas</p>
                     </li>
                   )
                  : tareasProyecto.map( tarea =>(
                      <Tarea
                          key={tarea.nombre}
                          tarea={tarea}
                      />
                  ))
              }
          </ul>
          <button
            className="btn btn-eliminar"
            type="button"
          >Eliminar Proyecto &times;</button>
        </>
     );
}
 
export default ListadoTarea;