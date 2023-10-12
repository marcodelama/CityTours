import React, { useState, useEffect } from 'react';
import { supabase } from '../../supabase/createClient';
import Sitios from '../Sitios';

function Titicaca() {
    const [datosTiticaca, setDatosTiticaca] = useState(null);

    async function fetchTiticaca() {
        const { data } = await supabase
            .from('sitios_turisticos')
            .select(`
            nombre, 
            descripcion, 
            imagen, 
            precio_entrada,
            region: id_region (nombre)
        `)
            .eq('nombre', 'Lago Titicaca');
        
        if (data && data.length > 0) {
            setDatosTiticaca(data[0]);
            console.log("DATOSSSSSSS", data)
        }
    }

    useEffect(() => {
        fetchTiticaca();
    }, []);

    if (!datosTiticaca) {
        return <div>Cargando información...</div>;
    }

    return (
        <Sitios
            titulo={datosTiticaca.nombre}
            region={datosTiticaca.region ? datosTiticaca.region.nombre : 'Desconocido'}
            descripcion={datosTiticaca.descripcion}
            imagen={datosTiticaca.imagen}
            precio={datosTiticaca.precio_entrada}
        />
    )
}

export default Titicaca;