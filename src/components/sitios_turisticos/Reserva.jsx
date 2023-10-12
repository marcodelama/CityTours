import React, { useState } from 'react';
import '../../Estilos/Reserva.css'
import { Button } from 'primereact/button';

function Reserva() {
  const [data, setData] = useState([
    {
      id: 1,
      nombre: 'John',
      apellido: 'Doe',
      email: 'john.doe@example.com',
      fecha: '2023-10-11',
    },
    {
      id: 2,
      nombre: 'Jane',
      apellido: 'Smith',
      email: 'jane.smith@example.com',
      fecha: '2023-10-12',
    }
  ]);

  const botones = () => {
    return(
    <Button 
      className='btn btn-danger'
    />
    )
  }
  return (
    <div className="flex align-items-center justify-content-center row w-full">
      <div className='flex row w-6'>
        <h1>Tabla de Datos</h1>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Nombre</th>
              <th>Apellido</th>
              <th>Email</th>
              <th>Fecha</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.nombre}</td>
                <td>{item.apellido}</td>
                <td>{item.email}</td>
                <td>{item.fecha}</td>
                <td>{()=>botones()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Reserva;