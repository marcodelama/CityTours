import React, { useState } from 'react';
import '../../Estilos/Boton.css';

function VentanaEmergente({ isOpen, onClose }) {
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [opcionSeleccionada, setOpcionSeleccionada] = useState('');
  const [correoElectronico, setCorreoElectronico] = useState('');

  if (!isOpen) return null;

  const handleNombreChange = (event) => {
    setNombre(event.target.value);
  };

  const handleApellidoChange = (event) => {
    setApellido(event.target.value);
  };

  const handleOpcionChange = (event) => {
    setOpcionSeleccionada(event.target.value);
  };

  const handleCorreoElectronicoChange = (event) => {
    setCorreoElectronico(event.target.value);
  };

  return (
    <div className="ventana-emergente">
      <div className="contenido-ventana">
        <div >
          <div>
            <label htmlFor="nombre">Nombre:</label>
            <input
              type="text"
              id="nombre"
              value={nombre}
              onChange={handleNombreChange}
            />
         
        
            <label htmlFor="apellido">Apellido:</label>
            <input
              type="text"
              id="apellido"
              value={apellido}
              onChange={handleApellidoChange}
            />
            </div>
        
          <div >
            <label htmlFor="correo">Correo Electrónico:</label>
            <input
              type="text"
              id="correo"
              value={correoElectronico}
              onChange={handleCorreoElectronicoChange}
            />
          </div>
          <div >
            <select
              id="paquetes"
              value={opcionSeleccionada}
              onChange={handleOpcionChange}
            >
              <option value="">Paquetes</option>
              <option value="opcion1">Opcion 1</option>
              <option value="opcion2">Opcion 2</option>
              <option value="opcion3">Opcion 3</option>
            </select>
          </div>
          <button className='button01'>Guardar</button>

          <button className='button02' onClick={onClose}>Cancelar</button>
        </div>
        {/* Otro contenido de la ventana emergente */}
      </div>
    </div>
  );
}

export default VentanaEmergente;
