import React, { useState, useEffect } from 'react';
import { supabase } from '../supabase/createClient';

function PaquetesTurísticos({ onSelectPackage }) {
  const [paquetes, setPaquetes] = useState([]);

  useEffect(() => {
    async function fetchPaquetes() {
      const { data, error } = await supabase
        .from('paquetes_turisticos')
        .select('*');

      if (error) {
        console.error('Error al obtener paquetes turísticos', error);
      } else {
        setPaquetes(data);
      }
    }

    fetchPaquetes();
  }, []);

  return (
    <div>
      <h2>Selecciona un paquete turístico:</h2>
      <ul>
        {paquetes.map((paquete) => (
          <li key={paquete.id_paquete}>
            <button onClick={() => onSelectPackage(paquete)}>{paquete.nombre}</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PaquetesTurísticos;
