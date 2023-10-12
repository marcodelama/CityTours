import React, { useState } from 'react';
import '../../Estilos/Boton.css';
import { Button } from 'primereact/button';
import { supabase } from '../../supabase/createClient'

function VentanaEmergente({ isOpen, onClose, paquetes }) {
  const [user, setUser] = useState({
    nombre: '',
    apellidos: '',
    email: '',
    id_paquete: ''
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUser(prevState => ({ ...prevState, [name]: value }));
  };

  async function createUsers() {
    await supabase
      .from('usuarios')
      .insert({nombre: user.nombre, apellidos: user.apellidos, email: user.email, id_paquete: user.id_paquete});
  }

  if (!isOpen) return null;

  return (
    <div className="ventana-emergente">
      <div className="contenido-ventana ">
        <form onSubmit={createUsers}>
          <div className='flex row'>
            <label className='InputNombre ' htmlFor="nombre">Nombre:</label>
            <input
              className='mb-2'
              placeholder='Nombre'
              type="text"
              name="nombre"
              onChange={handleChange}
            />

            <label className='InputApellido' htmlFor="apellidos">Apellido:</label>
            <input
              type="text"
              placeholder='Apellido'
              name="apellidos"
              onChange={handleChange}
            />
          </div>

          <div className="input-container">
            <label style={{ marginTop: '30px' }} htmlFor="email">Correo Electrónico:</label>
            <input style={{ marginTop: '30px' }}
              type="text"
              name="email"
              placeholder='Correo Electrónico'
              onChange={handleChange}
            />
          </div>
          <div>
            <select
              style={{ height: "50px" }}
              name="id_paquete"
              onChange={handleChange}
            >
              <option value="">Seleccione un paquete</option>
              {Array.isArray(paquetes) && paquetes.map(paquete => (
                <option key={paquete.id_paquete} value={paquete.id_paquete}>
                  {paquete.nombre}
                </option>
              ))}
            </select>
          </div>

          <Button
            className='btn btn-danger mr-2'
            onClick={onClose}
            label='Cancelar'
          />
          <button type="submit">Crear</button>
        </form>
      </div>
    </div>
  );
}

export default VentanaEmergente;