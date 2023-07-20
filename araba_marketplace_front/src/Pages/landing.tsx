import React from "react";
import fondo from '../assets/img/foto_portada.jpg'
import familiar from '../assets/img/01-familiar.svg'
import berlina from '../assets/img/02-berlina.svg'
import cabrio from '../assets/img/03-cabrio.svg'
import monovolumen from '../assets/img/04-monovolumen.svg'
import todoterreno from '../assets/img/05-todoterreno-suv.svg'
import deportivo from '../assets/img/06-deportivo.svg'
import compacto from '../assets/img/07-compacto.svg'
import industrial from '../assets/img/08-industrial.svg'
import dacia from '../assets/img/DACIA.svg'
import bmw from '../assets/img/bmw-logo-2022 1.svg'
import ford from '../assets/img/ford.svg'
import skoda from '../assets/img/logo skoda3dpi 1.svg'
import peugeot from '../assets/img/peugeot-logo 1.svg'
import seat from '../assets/img/seat-logo 1.svg'
import tesla from '../assets/img/tesla-logo 1.svg'
// import CardOferta from "../components/CardOferta";
import { Button } from "react-bootstrap";
import { Container } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCarSide, faMedal, faMoneyCheckAlt, faPersonCircleCheck, faPhone, faEnvelope, faArrowRightArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp, faTelegram } from "@fortawesome/free-brands-svg-icons";
import CardOpinion from "../components/CardOpinion";
import CarouselCoches from "../components/CarouselCoches";
// import CarouselPortada from "../components/CarouselPortada";



export default function LandingPage () {
    return (
        <>
        <section className="portada" style={{ backgroundImage: `url(${fondo})` }}>
                <div>h</div>
                <div className="contact">
                    <div className="whatsapp">
                        <FontAwesomeIcon icon={faWhatsapp} />
                    </div>
                    <div className="telegram">
                        <FontAwesomeIcon icon={faTelegram} />
                    </div>
                </div>
            </section>
            <Container> 
            <section className="cardsLanding">
            <div className="cardLanding">
            <div className="icono">
                <FontAwesomeIcon icon={faMedal} />
            </div>
            <div>
                <strong>GARANTÍA</strong>
                <p>DE CONFIANZA ARABA</p>
            </div>
        </div>
        <div className="cardLanding">
            <div className="icono">
                <FontAwesomeIcon icon={faCarSide} />
            </div>
            <div>
                <strong>HOY TENEMOS</strong>
                <p>2 COCHES NUEVOS PARA ELEGIR</p>
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
                <div></div>
                <div className="titulo">
                    <h2>Las opiniones de nuestros clientes</h2>
                </div>
                <div>
                    <h4>Si estás buscando coche</h4>
                    <h2>TE PONEMOS LAS COSAS MUY FÁCILES</h2>
                    <Button>¡QUIERO EMPEZAR A BUSCAR!</Button>
                </div>
                <CardOpinion />
                <CardOpinion />
                <CardOpinion />
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
                {/* <div>
                    <CardOferta />
                    <CardOferta />
                    <CardOferta />
                </div> */}
                <CarouselCoches />
                <Button>Ver todas las ofertas</Button>
            </section>
            <section className="ventajas">
                <h2>Sólo son ventajas especiales</h2>
                <div>
                    <div className="cardVentaja">
                        <div className="icono">
                            <FontAwesomeIcon icon={faArrowRightArrowLeft} />
                        </div>
                        <h4>¿Si no te gusta tu compra?</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    </div>
                    <div className="cardVentaja">
                    <div className="icono">
                    <FontAwesomeIcon icon={faMedal} />
                    </div>
                        <h4>Garantía y certificación</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    </div>
                    <div className="cardVentaja">
                    <div className="icono">
                    <FontAwesomeIcon icon={faMoneyCheckAlt} />
                    </div>
                        <h4>Financiación 100% sin entrada</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    </div>
                </div>
            </section>
            <section className="satisfaccion">
                <h2>LA MAYOR SATISFACCIÓN Y RESULTADOS</h2>
            </section>
            <section className="asesor">
                <h2>¿NECESITAS UN ASESOR COMERCIAL?</h2>
                <h2>Llama gratis al 987 65 43 21</h2>
                <div>
                    <Button className="boton1">Quiero buscar mi coche</Button>
                    <Button className="boton2">Quiero contactar</Button>
                </div>
            </section>
            <section className="contactos">
                <div>
                    <FontAwesomeIcon icon={faPhone} className="icono" />
                    <div className="texto">
                        <strong>TELÉFONO: 987 65 43 21</strong>
                        <p>De lunes a viernes de 9:00 a 20:00</p>
                    </div>           
                </div>
                <div>
                    <FontAwesomeIcon icon={faWhatsapp} className="icono" />
                    <div className="texto">
                        <strong>WHATSAPP</strong>
                        <p>Contacta ahora con nuestro equipo</p>
                    </div>
                </div>
                <div>
                    <FontAwesomeIcon icon={faEnvelope} className="icono" />
                    <div className="texto">
                        <strong>EMAIL</strong>
                        <p>Contacta por email con tu asesor</p>  
                    </div>               
                </div>
            </section>
        </Container>
        </>   
    )
}