import React from 'react'
import Footer from './Footer';
import './home.css';

function Home() {
  return (
    <div className='home'>
      <div className='contenedor-info'>
        <p>Proyect Progresses Probando a ver si funciona...noviembre vamos</p>
        <p>Es una plataforma con el objetivo de indicar la etapa en que se encuentra un proyecto
          creada de manera privada con el objetivo de muestra de informacion de proyecto unicamente para el cliente o empresa
          el cual a requerido de mis servicios como desarrollado web "Ernesto Ulloa"</p>


        <p><div className='numeral'>1</div>En la pestaña my-proyect en ella a primera vista
          se encuentra un formulario el cual tendras que asignar el nombre del proyecto y contraseña que te fueron asignados para poder ingresar
          al panel de informacion del proyecto</p>

        <p><div className='numeral'>2</div>Habiendo ingresado los datos correctamente se te mostrara un panel informacion del proyecto
          en el tambien se encuentra una cuenta regresiva para la finalizacion de la etapa actual en la que se encuentra el proyecto
        </p>


      </div>
      <div className='contenedor-animacion'>
        <div className='conten-home'></div>
        <div className='circulo'>
          <div className='img-1'></div>
          <div className='img-2'></div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Home
