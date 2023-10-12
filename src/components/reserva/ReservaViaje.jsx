import React, { useState } from 'react';
import PaquetesTurísticos from '../PaquetesTurísticos';
import ReservaForm from './ReservaForm';

function ReservaViaje() {
  const [selectedPackage, setSelectedPackage] = useState(null);

  const handleReserve = (reserva) => {
    // Implementa la lógica para procesar la reserva aquí.
    console.log('Reserva realizada:', reserva);
  };

  return (
    <div>
      <h1>Reserva de Viaje</h1>
      <PaquetesTurísticos onSelectPackage={setSelectedPackage} />
      <ReservaForm selectedPackage={selectedPackage} onReserve={handleReserve} />
    </div>
  );
}

export default ReservaViaje;
