import React, { useState, useEffect } from 'react';
import { supabase } from '../../supabase/createClient';
import Sitios from '../Sitios';

function Huacachina() {
    const [datosHuacachina, setDatosHuacachina] = useState(null);

    async function fetchMP() {
        const { data: sitiosData } = await supabase
            .from('sitios_turisticos')
            .select('*, region: id_region (nombre)')
            .eq('nombre', 'Laguna Huacachina');

        if (sitiosData && sitiosData.length > 0) {
            const sitio = sitiosData[0];

            const { data: paquetesData } = await supabase
                .from('paquetes_turisticos')
                .select('*')
                .eq('id_sitios', sitio.id_sitios);

            setDatosHuacachina({
                ...sitio,
                paquetes: paquetesData
            });
        }
    }

    useEffect(() => {
        fetchMP();
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
            paquetes={datosHuacachina.paquetes}
        />
    )
}

export default Huacachina;