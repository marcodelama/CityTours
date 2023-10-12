import React, { useState } from 'react';
import '../../Estilos/Boton.css';
import VentanaEmergente from './VentanaEmergente'; 

function Boton() {
  const [ventanaAbierta, setVentanaAbierta] = useState(false);

  const abrirVentana = () => {
    setVentanaAbierta(true);
  };

  const cerrarVentana = () => {
    setVentanaAbierta(false);
  };

  return (
    <div>
      <button onClick={abrirVentana}>RESERVA</button>
      <VentanaEmergente isOpen={ventanaAbierta} onClose={cerrarVentana} />
    </div>
  );
}

export default Boton;