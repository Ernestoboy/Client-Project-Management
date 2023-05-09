import React from 'react'
import './footer.css';

function Footer() {
  return (
    <div className='contenedor-footer'>
      <div className='info-1'><div className='img'></div><p>Tu proyecto se divide en 5 etapas</p></div>
      <div className='info-2'><i class="fas fa-laptop"></i><div className='contenido'><p>--Diseño web responsive</p>
        <p>--Contenido administrable</p><p>--Registros de usuarios</p></div></div>
      <div className='info-3'><p><b>Privado : panel de informacion de proyecto entrada solo con los datos :
        Proyect Name y password</b></p><i class="fab fa-linkedin"></i><i className="fab fa-instagram"></i></div>
    </div>
  )
}

export default Footer
