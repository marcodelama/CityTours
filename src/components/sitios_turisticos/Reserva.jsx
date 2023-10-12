import React, { useState, useEffect } from 'react';
import '../../Estilos/Reserva.css'
import { Button } from 'primereact/button';
import { supabase } from '../../supabase/createClient'


function Reserva() {
  const [paquetes, setPaquetes] = useState([]);
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState({
    nombre: '',
    apellidos: '',
    email: '',
    id_paquete: ''
  })
  const [userUpdate, setUserUpdate] = useState({
    nombre: '',
    apellidos: '',
    email: '',
    id_paquete: ''
  });
  
  //Integraciones o consumo de apis

  async function fetchPaquetes() {
    const { data } = await supabase
      .from('paquetes_turisticos')
      .select('*')
    setPaquetes(data);
  }

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

  const handleChange = (event) => {
    setUser(prevFormData => {
      return {
        ...prevFormData,
        [event.target.name]: event.target.value
      }
    })

  }

  async function updateUser(userId) {
    await supabase
      .from('users')
      .update({ name: user.nombre, apellidos: user.apellidos })
      .eq('id', userId)
  }

  function displayUser(userId) {
    users.map((user) => {
      if (user.id === userId) {
        setUserUpdate({ nombre: user.nombre})
      }

    })

  }

  function getPaqueteNameById(id) {
    const paquete = paquetes.find(p => p.id_paquete === id);
    return paquete ? paquete.nombre : 'Desconocido';
  }

  useEffect(() => {
    fetchUsers();
    fetchPaquetes();
  }, [])

  return (
    <div className="flex align-items-center justify-content-center row w-full">
      <div className='flex row w-6'>
        <h1>Paquetes reservados</h1>
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
                <td>{getPaqueteNameById(user.id_paquete)}</td>
                <td><button onClick={() => { deleteUser(user.id_usuarios) }}>Delete</button>
                <button onClick={() => { displayUser(user.id) }}>Editar</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Reserva;