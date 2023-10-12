import React, {useState, useEffect} from 'react';
import { supabase } from '../../supabase/createClient';
import Sitios from '../Sitios';

function MacchuPicchu(){
    const [datosMP, setDatosMP] = useState(null);

    async function fetchMP() {
        const { data } = await supabase
            .from('sitios_turisticos')
            .select(`
            nombre, 
            descripcion, 
            imagen, 
            precio_entrada,
            region: id_region (nombre)
        `)
            .eq('nombre', 'Macchu Picchu');
        
        if (data && data.length > 0) {
            setDatosMP(data[0]);
            console.log("DATOSSSSSSS", data)
        }
    }

    useEffect(() => {
        fetchMP();
    }, []);

    if (!datosMP) {
        return <div>Cargando información...</div>;
    }

    return (
        <Sitios
            titulo={datosMP.nombre}
            region={datosMP.region ? datosMP.region.nombre : 'Desconocido'}
            descripcion={datosMP.descripcion}
            imagen={datosMP.imagen}
            precio={datosMP.precio_entrada}
        />
    )
}

export default MacchuPicchu;