import React, { useState } from 'react';
import '../../Estilos/Boton.css';
import VentanaEmergente from './VentanaEmergente'; 

function Boton({paquetes}) {
  const [ventanaAbierta, setVentanaAbierta] = useState(false);

  const abrirVentana = () => {
    setVentanaAbierta(true);
  };

  const cerrarVentana = () => {
    setVentanaAbierta(false);
  };

  return (
    <div>
      <button className = "BotonReserva" onClick={abrirVentana}>RESERVA</button>
      <VentanaEmergente isOpen={ventanaAbierta} onClose={cerrarVentana} paquetes={paquetes} />
    </div>
  );
}

export default Boton;