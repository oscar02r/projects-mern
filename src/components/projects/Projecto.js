import React from 'react'

const Projecto = ({projecto}) => {
  
    return ( 
        <li>
            <button
              type="button"
              className="btn btn-blank"
            >
              {projecto.nombre}  
            </button>
        </li>
     );
}
 
export default Projecto;