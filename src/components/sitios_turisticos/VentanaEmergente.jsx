import React, { useState } from 'react';
import '../../Estilos/Boton.css';
import { Button } from 'primereact/button';

function VentanaEmergente({ isOpen, onClose, paquetes }) {
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [opcionSeleccionada, setOpcionSeleccionada] = useState([]);
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
      <div className="contenido-ventana ">

        <div className='flex row'>
          <label className='InputNombre ' htmlFor="nombre">Nombre:</label>
          <input
            className='mb-2'
            type="text"
            id="nombre"
            value={nombre}
            onChange={handleNombreChange}
          />


          <label className='InputApellido' htmlFor="apellido">Apellido:</label>
          <input
            type="text"
            id="apellido"
            value={apellido}
            onChange={handleApellidoChange}
          />
        </div>

        <div className="input-container">
          <label style={{ marginTop: '30px' }} htmlFor="correo">Correo Electrónico:</label>
          <input style={{ marginTop: '30px' }}
            type="text"
            id="correo"
            value={correoElectronico}
            onChange={handleCorreoElectronicoChange}
          />
        </div>
        <div >
          <select
            style={{ height: "50px" }}
            id="paquetes"
            value={opcionSeleccionada}
            onChange={handleOpcionChange}
          >
            <option value="">Seleccione un paquete</option>
            {Array.isArray(paquetes) && paquetes.map(paquete => (
              <option key={paquete.id_paquete} value={paquete.id_paquete}>
                {paquete.nombre}
              </option>

            ))}
          </select>
        </div>
        <div className='flex justify-content-end'>
          <Button
            className='btn btn-danger mr-2'
            onClick={onClose}
            label='Cancelar' />
          <Button
            className='btn btn-success'
            label='Guardar' />
        </div>
      </div>
      {/* Otro contenido de la ventana emergente */}
    </div>
  );
}

export default VentanaEmergente;