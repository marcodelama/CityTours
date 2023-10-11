import React, {useState, useEffect} from 'react';
import { supabase } from '../../supabase/createClient';
import Sitios from '../Sitios';

function Plaza(){
    const [datosPlaza, setDatosPlaza] = useState(null);

    async function fetchPlaza() {
        const { data } = await supabase
            .from('sitios_turisticos')
            .select(`
            nombre, 
            descripcion, 
            imagen, 
            precio_entrada,
            region: id_region (nombre)
        `)
            .eq('nombre', 'Plaza de Armas de Cusco');
        
        if (data && data.length > 0) {
            setDatosPlaza(data[0]);
            console.log("DATOSSSSSSS", data)
        }
    }

    useEffect(() => {
        fetchPlaza();
    }, []);

    if (!datosPlaza) {
        return <div>Cargando información...</div>;
    }

    return (
        <Sitios
            titulo={datosPlaza.nombre}
            region={datosPlaza.region ? datosPlaza.region.nombre : 'Desconocido'}
            descripcion={datosPlaza.descripcion}
            imagen={datosPlaza.imagen}
            precio={datosPlaza.precio_entrada}
        />
    )
}

export default Plaza;