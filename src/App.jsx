import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import PagePrincipal from './components/PagePrincipal';
import Reserva from './components/sitios_turisticos/Reserva';
import Header from './components/Header';

import ReservaViaje from './components/reserva/ReservaViaje';

function App() {
  return (
<<<<<<< HEAD:src/App.jsx
    <div>
      <PagePrincipal />
      <ReservaViaje />
    </div>
=======
    <>
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<PagePrincipal />} />
          <Route path='/reservas' element={<Reserva />} />
        </Routes>
      </Router>
    </>
>>>>>>> ff54d58be041ad271eb582ea560bd34490fe1937:src/App.js
  );
}

export default App;
