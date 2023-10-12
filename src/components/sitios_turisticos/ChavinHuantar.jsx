import React, { useState, useEffect } from 'react';
import { supabase } from '../../supabase/createClient';
import Sitios from '../Sitios';

function ChavinHuantar() {
    const [datosChavinHuantar, setDatosChavinHuantar] = useState(null);

    async function fetchChavinHuantar() {
        const { data } = await supabase
            .from('sitios_turisticos')
            .select(`
            nombre, 
            descripcion, 
            imagen, 
            precio_entrada,
            region: id_region (nombre)
        `)
            .eq('nombre', 'Chavín de Huantar');
        
        if (data && data.length > 0) {
            setDatosChavinHuantar(data[0]);
        }
    }

    useEffect(() => {
        fetchChavinHuantar();
    }, []);

    if (!datosChavinHuantar) {
        return <div>Cargando información...</div>;
    }

    return (
        <Sitios
            titulo={datosChavinHuantar.nombre}
            region={datosChavinHuantar.region ? datosChavinHuantar.region.nombre : 'Desconocido'}
            descripcion={datosChavinHuantar.descripcion}
            imagen={datosChavinHuantar.imagen}
            precio={datosChavinHuantar.precio_entrada}
        />
    )
}

export default ChavinHuantar;