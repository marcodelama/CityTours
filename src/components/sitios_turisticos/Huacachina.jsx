import React, { useState, useEffect } from 'react';
import { supabase } from '../supabase/createClient';
import Sitios from './Sitio';

function Huacachina() {
    const [datosHuacachina, setDatosHuacachina] = useState(null);

    async function fetchHuacachina() {
        const { data } = await supabase
            .from('sitios_turisticos')
            .select('*')
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
            region={datosHuacachina.region}
            descripcion={datosHuacachina.descripcion}
            imagen={datosHuacachina.imagen}
            precio={datosHuacachina.precio}
        />
    )
}

export default Huacachina;