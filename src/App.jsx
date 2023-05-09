import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Components/Home/';
import Navegacion from './Components/Navegacion/';
import MyProyect from './Components/MyProyect';
import './App.css';
import "./components/fontawesome-free-5.15.1-web/css/all.min.css";


function App() {



  return (

    <div className='App'>
      <BrowserRouter>
        <Navegacion />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/MyProyect" element={<MyProyect />} />
        </Routes>

      </BrowserRouter>
    </div>

  );
}

export default App;



