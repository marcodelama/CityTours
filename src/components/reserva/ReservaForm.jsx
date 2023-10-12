import React, { useState } from 'react';

function ReservaForm({ selectedPackage, onReserve }) {
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [correo, setCorreo] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Aquí debes implementar la lógica para realizar la reserva, por ejemplo, enviar los datos a una API o guardarlos en una base de datos.

    onReserve({ nombre, apellido, correo, paquete: selectedPackage });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Nombre:</label>
        <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} />
      </div>
      <div>
        <label>Apellido:</label>
        <input type="text" value={apellido} onChange={(e) => setApellido(e.target.value)} />
      </div>
      <div>
        <label>Correo:</label>
        <input type="email" value={correo} onChange={(e) => setCorreo(e.target.value)} />
      </div>
      {selectedPackage && (
        <div>
          <h3>Paquete Seleccionado:</h3>
          <p>{selectedPackage.nombre}</p>
        </div>
      )}
      <button type="submit">Reservar</button>
    </form>
  );
}

export default ReservaForm;
