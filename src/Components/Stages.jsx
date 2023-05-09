import React from 'react'
import './stages.css';

function Stages({ collection, despliegue, currentIndex }) {

  const contenedorListado = {
    position: 'absolute',
    top: '10vh',
    right: despliegue ? '-43vw' : '0vw',
    width: '42vw',
    height: '70vh',
    overflowX: 'hidden',
    background: 'grey',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap',
    backgroundColor: 'rgba(56,12,131,0.9)',
    zIndex: 100,
    border: '7px solid rgba(250,250,250,0.7)',
    borderRight: 0,
    borderRadius: '15px',
    borderBottomRightRadius: 0,
    borderTopRightRadius: 0,
    transition: 'right 1s ease-in-out'
  };





  return (
    <div className='contenedor-conten-listado'>
      <div style={contenedorListado}>
        <div className='estadisticas'>
          <p>Total de etapas 5</p>
          <p>Etapas finalizadas : {currentIndex}</p>

          <p>Listado de etapas :</p>




        </div>
        <div className='lista-etapas'>
          {collection.map(collection => (
            <div className='tarjetas-etapas' key={collection._id}>
              <p><i >{collection.etapa}</i> {collection.description}</p>
              <div className='fechas-i-f'>
                <p><i class="fas fa-clock"></i> inicio: {collection.inicio}</p>
                <p><i class="fas fa-clock"></i> Finaliza: {collection.finalizacion}</p>
              </div>
            </div>
          ))}

        </div>
      </div>
    </div>
    // si el currenindex es mayor que el nivel 5 entonces presenta este componente 
    //donde se dice que felisidades tu proyecto a sido completado pronto estara desplegado
  )
}

export default Stages;