import React from 'react'
import { useState } from "react";
import Footer from './Footer';
import './Form.css';


function Form({ login }) {

  const [formValues, setFormValues] = useState({
    proyectoName: '',
    password: ''
  });

  const handleInputChange = (e) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formValues.proyectoName && formValues.password) {
      login(formValues);
      //si el codigo de estado es bueno entonces deja el estado proyect y code vacios
    }
  };

  return (
    <div className='formulario'>

      <div className='contenedor-formulario'>
        <div className='conte-formulario'>
          <div className='conte-recomendacion'>
            <h2>Proyect Progresses</h2>
            <p> Agrega tus datos asignados a tu proyecto para poder ingresar al
              panel de Progresion para ver la etapa en que se encuentra tu proyecto </p>
            <p>El acceso al panel se expira cada 6 dias solo deberas volver a escribir
              los datos de tu proyecto
            </p>
          </div>
          <form onSubmit={handleSubmit}>
            <label>Proyecto:</label>
            <input
              placeholder="escribe el nombre de tu negocio"
              onChange={handleInputChange}
              value={formValues.proyectoName}
              name="proyectoName"
              autoFocus
            />
            <label>Contraseña:</label>
            <input
              placeholder="escribe el codigo del proyecto"
              onChange={handleInputChange}
              value={formValues.password}
              name="password"
            />
            <button style={{ backgroundColor: 'rgb(70,130,220)' }} type="submit" >Conectar</button>
          </form>

        </div>


      </div>
      <Footer />
    </div>
  )
}

export default Form