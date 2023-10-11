import React, {useState, useEffect} from "react";
import { supabase } from '../supabase/createClient';


function LagunaHuachina() {
    const [lugares, setLugares] = useState([]);

    async function fetchLugares() {
        const { data } = await supabase
            .from('sitios_turisticos')
            .select('*')
        setLugares(data)
        console.log("LUGARESSSSSS", data)
    }

    useEffect(() => {
        fetchLugares()
    }, [])

    return (
        <table>
            <thead>
                <th>Id</th>
                <th>Lugar</th>
                <th>Descripción</th>
                <th>Imagen</th>
            </thead>
            <tbody>
                {lugares.map((lugar) =>
                    <tr key={lugar.id_sitios}>
                        <td>{lugar.id_sitios}</td>
                        <td>{lugar.nombre}</td>
                        <td>{lugar.descripcion}</td>
                        <td><img src={lugar.imagen} alt="Descripción de la imagen" style={{width:"100%"}} /></td>
                    </tr>
                )}
            </tbody>
        </table>
    )
}

export default LagunaHuachina;