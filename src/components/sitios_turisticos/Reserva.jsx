import React, { useState, useEffect } from 'react';
import '../../Estilos/Reserva.css'
import { Button } from 'primereact/button';
import { supabase } from '../../supabase/createClient'


function Reserva() {
  const [users, setUsers] = useState([]);
  async function fetchUsers() {
    const { data } = await supabase
      .from('usuarios')
      .select('*')
    setUsers(data)
    console.log(data)
  }
  
  async function deleteUser(userId) {
    const { data, error } = await supabase
      .from('usuarios')
      .delete()
      .eq('id_usuarios', userId)

    fetchUsers()

    if (error) {
      console.log(error)
    }

    if (data) {
      console.log(data)
    }
  }
  
  useEffect(() => {
    fetchUsers()
  }, [])

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
              <th>Paquete</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id_usuarios}>
                <td>{user.id_usuarios}</td>
                <td>{user.nombre}</td>
                <td>{user.apellidos}</td>
                <td>{user.email}</td>
                <td>{user.id_paquete}</td>
                <td><button onClick={() => { deleteUser(user.id_usuarios) }}>Delete</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Reserva;