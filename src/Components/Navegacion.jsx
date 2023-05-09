import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navegacion.css';

function Navegacion() {
  return (
    <div className='nav'>
      <p>Proyect Progresses</p>
      <div className='menu'>
        <NavLink to='/'>
          <p><i className='fas fa-home'></i>Home</p>
        </NavLink>
        <NavLink to='/MyProyect'>
          <p><i className='fas fa-folder'></i>My-Proyect</p>
        </NavLink>
       
        <a href='https://ernestoboy.github.io/space-webErnesto/' target='_blank' rel='noopener noreferrer'>
          <p><i className='fas fa-external-link-alt'></i>Portafolio</p>
        </a>
        
        <a href="mailto:nellastesi@gmail.com" style={{ color: 'beige' }}><i className='fas fa-envelope'></i>Correo</a>

        
      </div>
      <div className='menu-movil'>
        <NavLink to='/'>
          <p><i className='fas fa-home'></i>Home</p>
        </NavLink>
        <NavLink to='/MyProyect'>
          <p><i className='fas fa-folder'></i>MyProyect</p>
        </NavLink>
      </div>

    </div>
  );
}

export default Navegacion;
