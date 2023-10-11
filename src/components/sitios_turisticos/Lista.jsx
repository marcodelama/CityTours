import React, { useState, useEffect } from 'react';
import { supabase } from '../supabase/createClient';
import Sitios from '../Sitios';

function ListaDeSitios() {
    const [lugares, setLugares] = useState([]);

    async function fetchLugares() {
        const { data } = await supabase
            .from('sitios_turisticos')
            .select('*')
        setLugares(data);
    }

    useEffect(() => {
        fetchLugares();
    }, []);

    return (
        <div>
            {lugares.map((lugar) => (
                <Sitios 
                    key={lugar.id}
                    titulo={lugar.nombre}
                    region={lugar.region}
                    descripcion={lugar.descripcion}
                    imagen={lugar.imagen}
                    precio={lugar.precio}
                />
            ))}
        </div>
    )
}

export default ListaDeSitios;