import React, { useState, useEffect } from 'react';
import { supabase } from '../../supabase/createClient';
import Sitios from '../Sitios';

function Sechura() {
    const [setDatosSechura, setDatosSechurasetDatosSechura] = useState(null);

    async function fetchSechurasetDatosSechura() {
        const { data } = await supabase
            .from('sitios_turisticos')
            .select(`
            nombre, 
            descripcion, 
            imagen, 
            precio_entrada,
            region: id_region (nombre)
        `)
            .eq('nombre', 'Desierto de Sechura');
        
        if (data && data.length > 0) {
            setDatosSechurasetDatosSechura(data[0]);
            console.log("DATOSSSSSSS", data)
        }
    }

    useEffect(() => {
        fetchSechurasetDatosSechura();
    }, []);

    if (!setDatosSechura) {
        return <div>Cargando información...</div>;
    }

    return (
        <Sitios
            titulo={setDatosSechura.nombre}
            region={setDatosSechura.region ? setDatosSechura.region.nombre : 'Desconocido'}
            descripcion={setDatosSechura.descripcion}
            imagen={setDatosSechura.imagen}
            precio={setDatosSechura.precio_entrada}
        />
    )
}

export default Sechura;