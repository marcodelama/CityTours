import React, { useState, useEffect } from 'react';
import { supabase } from '../../supabase/createClient';
import Sitios from '../Sitios';

function CañonColca() {
    const [datosColca, setDatosColca] = useState(null);

    async function fetchColca() {
        const { data } = await supabase
            .from('sitios_turisticos')
            .select(`
            nombre, 
            descripcion, 
            imagen, 
            precio_entrada,
            region: id_region (nombre)
        `)
            .eq('nombre', 'Cañón del Colca');
        
        if (data && data.length > 0) {
            setDatosColca(data[0]);
        }
    }

    useEffect(() => {
        fetchColca();
    }, []);

    if (!datosColca) {
        return <div>Cargando información...</div>;
    }

    return (
        <Sitios
            titulo={datosColca.nombre}
            region={datosColca.region ? datosColca.region.nombre : 'Desconocido'}
            descripcion={datosColca.descripcion}
            imagen={datosColca.imagen}
            precio={datosColca.precio_entrada}
        />
    )
}

export default CañonColca;