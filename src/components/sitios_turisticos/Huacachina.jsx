import React, { useState, useEffect } from 'react';
import { supabase } from '../../supabase/createClient';
import Sitios from '../Sitios';

function Huacachina() {
    const [datosHuacachina, setDatosHuacachina] = useState(null);

    async function fetchHuacachina() {
        const { data } = await supabase
            .from('sitios_turisticos')
            .select(`
            nombre, 
            descripcion, 
            imagen, 
            precio_entrada,
            region: id_region (nombre)
        `)
            .eq('nombre', 'Laguna Huacachina');
        
        if (data && data.length > 0) {
            setDatosHuacachina(data[0]);
        }
    }

    useEffect(() => {
        fetchHuacachina();
    }, []);

    if (!datosHuacachina) {
        return <div>Cargando información...</div>;
    }

    return (
        <Sitios
            titulo={datosHuacachina.nombre}
            region={datosHuacachina.region ? datosHuacachina.region.nombre : 'Desconocido'}
            descripcion={datosHuacachina.descripcion}
            imagen={datosHuacachina.imagen}
            precio={datosHuacachina.precio_entrada}
        />
    )
}

export default Huacachina;