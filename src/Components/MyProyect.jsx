

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Progression from '../Components/Progression';
import Form from '../Components/Form';
import './MyProyect.css';




function MyProyect() {
  const [collection, setCollection] = useState([]);
  const [finished, setFinished] = useState(false);

  const [loading, setLoading] = useState(true);


  // Función para obtener el token del localStorage
  const getToken = () => {
    const token = localStorage.getItem('token');

    return token ? `Bearer ${token}` : '';

  };
  
  const API_BASE_URL= "https://proyect-progresses-restapi.onrender.com/my-proyect"
  const API_BASE_GET= "https://proyect-progresses-restapi.onrender.com/api/user"
  const RARO= process.env.RARO;
                                  

  // Función para enviar solicitudes autenticadas con el token en la cabecera
  const authAxios = axios.create({
    baseURL: API_BASE_GET,
    headers: {
      'Content-Type': 'application/json',
      'Authorization': getToken(),
    },
  });

  const login = async ({ proyectoName, password }) => {
    try {
      const response = await axios.post(`${API_BASE_URL}`, {
        proyectoName: proyectoName,
        password: password,
      });
      const token = response.data.token;
      console.log("aqui edgar", token)
      localStorage.setItem('token', token);
      setLoading(false);
      authAxios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      return true;
    } catch (error) {
      console.error(error);
      console.log("hubo error en obtencion de token", `${RARO}`);

      return false;
    }
  };



  const getUserData = async () => {
    try {
      const response = await authAxios.get(`${API_BASE_GET}`);
      setLoading(false);
      const userData = response.data;
      setCollection(userData);

      console.log("nada se meda", userData);
    } catch (error) {
      console.error(error);
      return null;
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      await getUserData();
      const newCollection = [...response.data];
      setCount(newCollection);
    }

    fetchData()
  }, [loading]);



  function onTimerFinished() {
    // Actualizamos el índice y el estado count
    setFinished(currentIndex + 1 === collection.length ? true : false);
    setCurrentIndex(currentIndex + 1);
    console.log(currentIndex)
  }
  const [currentIndex, setCurrentIndex] = useState(0);
  return (
    <div className='MyProyect'>
      {loading && <Form login={login} />}
      {!loading && !finished && (
        <Progression
          targetDate={new Date(collection[currentIndex]?.fecha)}
          onTimerFinished={onTimerFinished}
          collection={collection}



          currentIndex={currentIndex}
        />
      )}


    </div>





  );
}

export default MyProyect;
