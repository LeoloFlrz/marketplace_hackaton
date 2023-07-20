import React from "react";
import fondo from './img/foto_portada.jpg'
import familiar from './img/01-familiar.svg'
import berlina from './img/02-berlina.svg'
import cabrio from './img/03-cabrio.svg'
import monovolumen from './img/04-monovolumen.svg'
import todoterreno from './img/05-todoterreno-suv.svg'
import deportivo from './img/06-deportivo.svg'
import compacto from './img/07-compacto.svg'
import industrial from './img/08-industrial.svg'
import dacia from './img/DACIA.svg'
import bmw from './img/bmw-logo-2022 1.svg'
import ford from './img/ford.svg'
import skoda from './img/logo skoda3dpi 1.svg'
import peugeot from './img/peugeot-logo 1.svg'
import seat from './img/seat-logo 1.svg'
import tesla from './img/tesla-logo 1.svg'
import CardOferta from "./components/ofertaCard";
import { Button } from "react-bootstrap";
import { Container } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCarSide, faMedal, faMoneyCheckAlt, faPersonCircleCheck, faPhone, faEnvelope, faWhatsApp } from "@fortawesome/free-solid-svg-icons";



export default function LandingPage () {
    return (
        <>
        <section className="portada" style={{ backgroundImage: `url(${fondo})` }}>
                {/* <img src={fondo} alt="" /> */}
               h 
            </section>
            <Container>
            <section className="cardsLanding">
            <div className="cardLanding">
            <div className="icono">
                <FontAwesomeIcon icon={faMedal} />
            </div>
            <div>
                <strong>GARANTÍA</strong>
                <p>DE CONFIANZA</p>
            </div>
        </div>
        <div className="cardLanding">
            <div className="icono">
                <FontAwesomeIcon icon={faCarSide} />
            </div>
            <div>
                <strong>HOY TENEMOS</strong>
                <p>2 COCHES NUEVOS</p>
            </div>
        </div>
        <div className="cardLanding">
            <div className="icono">
            <FontAwesomeIcon icon={faPersonCircleCheck} />
            </div>
            <div>
                <strong>¿QUIERES VENIR</strong>
                <p>A RECOGERLO?</p>
            </div>
        </div>
        <div className="cardLanding">
            <div className="icono">
                <FontAwesomeIcon icon={faMoneyCheckAlt} />
            </div>
            <div>
                <strong>FINANCIACIÓN</strong>
                <p>FLEXIBLE Y PERSONAL</p>
            </div>
        </div>
            </section>
            <section className="marca">
                <h2>Encuentra tu marca</h2>
                <div className="marcas">
                    <img src={bmw} alt="BMW" />
                    <img src={dacia} alt="Dacia" />
                    <img src={ford} alt="Ford" />
                    <img src={skoda} alt="Skoda" />
                    <img src={peugeot} alt="Peugeot" />
                    <img src={seat} alt="SEAT" />
                    <img src={tesla} alt="Tesla" />
                </div>
            </section>
            <section className="opiniones">

            </section>
            <section className="tipoCoche">
                <h2>¿Cómo te gustaría tu coche?</h2>
                <div>
                    <div>
                        <img src={familiar} alt="familiar" />
                        <p>Familiar</p>
                    </div>
                    <div>
                    <img src={berlina} alt="berlina" />
                        <p>Berlina</p>
                    </div>
                    <div>
                    <img src={cabrio} alt="cabrio" />
                        <p>Cabrio</p>
                    </div>
                    <div>
                    <img src={monovolumen} alt="monovolumen" />
                        <p>Monovolumen</p>
                    </div>
                    <div>
                    <img src={todoterreno} alt="todoterreno" />
                        <p>Todoterreno-SUV</p>
                    </div>
                    <div>
                    <img src={deportivo} alt="deportivo" />
                        <p>Deportivo</p>
                    </div>
                    <div>
                    <img src={compacto} alt="compacto" />
                        <p>Compacto</p>
                    </div>
                    <div>
                    <img src={industrial} alt="industrial" />
                        <p>Profesional</p>
                    </div>
                </div>
            </section>
            <section className="ofertas">
                <h2>¡Super ofertas de julio!</h2>
                <div>
                    <CardOferta />
                    <CardOferta />
                    <CardOferta />
                </div>
                <Button>Ver todas las ofertas</Button>
            </section>
            <section className="promo">
                <img src="" alt="" />
                <div>
                    <h2>VEN A RECOGER TU COCHE Y</h2>
                    <h2>TE INVITAMOS A CONOCER NUESTRA CIUDAD</h2>
                </div>
            </section>
            <section className="ventajas">
                <h2>Sólo son ventajas especiales</h2>
                <div>
                    <div>a</div>
                    <div>b</div>
                    <div>c</div>
                </div>
            </section>
            <section className="satisfaccion">
                <h2>LA MAYOR SATISFACCIÓN Y RESULTADOS</h2>
            </section>
            <section className="asesor">
                <h2>¿NECESITAS UN ASESOR COMERCIAL?</h2>
                <h2>Llama gratis al 987 65 43 21</h2>
                <div>
                    <Button className="boton1">Hola</Button>
                    <Button className="boton2">Adiós</Button>
                </div>
            </section>
            <section className="contactos">
                <div>
                    <FontAwesomeIcon icon={faPhone} />
                    Teléfono
                    </div>
                <div>
                <FontAwesomeIcon icon={faWhatsApp} />
                    WhatsApp
                    </div>
                <div>
                <FontAwesomeIcon icon={faEnvelope} />
                    Correo
                    </div>
            </section>
        </Container>
        </>   
    )
}