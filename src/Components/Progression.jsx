import React, { useState, useEffect } from 'react';
import Stages from '../Components/Stages';

import './barraProgreso.css';
import '../Simpli.css';


const Progression = ({ targetDate, onTimerFinished, currentIndex, collection }) => {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [nivelahorita, setNivelAhora] = useState(null);
  const [despliegue, setDespliegue] = useState(true);

  useEffect(() => {
    const intervalId = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate.getTime() - now;

      if (difference <= 0) {
        clearInterval(intervalId);
        console.log(currentIndex);

        onTimerFinished(); // Ejecuta la función que se pasó como prop desde el componente padre
      } else {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);
        setTimeLeft({ days, hours, minutes, seconds });
      }
    }, 1000);
    const hola = currentIndex + "00%";
    const nivelahorita = {
      position: "relative",
      width: hola,
      height: "100%",
      background: "linear-gradient(to right, rgb(98,15,225) , #8e2de2 )",
      animationName: 'move',
      animationDuration: "10s",
      clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",


    };
    setNivelAhora(nivelahorita);
    return () => clearInterval(intervalId);

  }, [targetDate, onTimerFinished, currentIndex]);



  const handleClick = () => {
    setDespliegue(!despliegue);
  }



  return (
    <div className='contenido-progresion'>
      <div className='conte-fecha'>

        <div className='proyectName'><p>Proyect Name</p><p>{collection[currentIndex]?.proyecto}</p></div>
        <div>
          <div className="simply-countdown">
            <div className="simply-section ">
              <span className="simply-amount">{timeLeft.days}</span>
              <span className="simply-word">{timeLeft.days === 1 ? 'day' : 'days'}</span>
            </div>
            <div className="simply-section ">
              <span className="simply-amount">{timeLeft.hours}</span>
              <span className="simply-word">{timeLeft.hours === 1 ? 'hour' : 'hours'}</span>
            </div>
            <div className="simply-section ">
              <span className="simply-amount">{timeLeft.minutes}</span>
              <span className="simply-word">{timeLeft.minutes === 1 ? 'minute' : 'minutes'}</span>
            </div>
            <div className="simply-section ">
              <span className="simply-amount">{timeLeft.seconds}</span>
              <span className="simply-word">{timeLeft.seconds === 1 ? 'second' : 'seconds'}</span>
            </div>
            <div className='tarje'>
              <i class="far fa-flag"></i>
              <p className='description'>{collection[currentIndex]?.etapa}{collection[currentIndex]?.description} </p>
              <div className='fechas'>
                <p ><i class="fas fa-clock"></i> Finaliza etapa {currentIndex} : {collection[currentIndex]?.finalizacion} </p>
                <p ><i class="fas fa-clock"></i> Siguiente etapa : {collection[currentIndex]?.inicio} </p>
              </div>
            </div>





          </div>
          <div className='burbuja1'></div>
          <div className='burbuja2'></div>
          <div className='burbuja3'></div>







        </div>

        <div className='barra-progreso'>

          <div className='nivel'><div style={nivelahorita}></div> </div>

          <div className='etapa'></div>
          <div className='etapa'></div>
          <div className='etapa'></div>
          <div className='etapa'></div>
          <div className='etapa'></div>
        </div>


      </div>
      <Stages collection={collection} despliegue={despliegue} currentIndex={currentIndex} />
      <div className='listado-completo-etapas' onClick={handleClick}> <i class="fas fa-list"></i></div>
    </div>
  );
};

export default Progression;
