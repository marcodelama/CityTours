import React, { useState, useEffect } from 'react';
import { supabase } from '../../supabase/createClient';
import Sitios from '../Sitios';

function LineasNazca() {
    const [datosLineasNazca, setDatosLineasNazca] = useState(null);

    async function fetchLineasNazca() {
        const { data } = await supabase
            .from('sitios_turisticos')
            .select(`
            nombre, 
            descripcion, 
            imagen, 
            precio_entrada,
            region: id_region (nombre)
        `)
            .eq('nombre', 'Líneas de Nazca');
        
        if (data && data.length > 0) {
            setDatosLineasNazca(data[0]);
        }
    }

    useEffect(() => {
        fetchLineasNazca();
    }, []);

    if (!datosLineasNazca) {
        return <div>Cargando información...</div>;
    }

    return (
        <Sitios
            titulo={datosLineasNazca.nombre}
            region={datosLineasNazca.region ? datosLineasNazca.region.nombre : 'Desconocido'}
            descripcion={datosLineasNazca.descripcion}
            imagen={datosLineasNazca.imagen}
            precio={datosLineasNazca.precio_entrada}
        />
    )
}

export default LineasNazca;