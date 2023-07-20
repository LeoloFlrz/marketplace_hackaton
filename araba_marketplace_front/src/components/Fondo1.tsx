import React from "react";
import fondo1 from '../img/foto_portada.jpg'

export default function Fondo1 () {
    return (
        <div style={{ backgroundImage: `url(${fondo1})` }}>
            Hola mundo
        </div>
    )
}