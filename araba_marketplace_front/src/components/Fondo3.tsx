import React from "react";
import fondo3 from '../assets/img/foto_portada.jpg'

export default function Fondo3 () {
    return (
        <div className="portada" style={{ backgroundImage: `url(${fondo3})` }}>
            Hola mundo
        </div>
    )
}