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
                        <td><iframe src={lugar.imagen} frameborder="0"></iframe></td>
                    </tr>
                )}
            </tbody>
        </table>
    )
}

export default LagunaHuachina;