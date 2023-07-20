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
import CardOferta from "../components/CardOferta";
import { Button } from "react-bootstrap";
import { Container } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faMedal,faCarSide,faMoneyCheckAlt} from "@fortawesome/free-solid-svg-icons";
import '../styles.css'



export default function LandingPage () {
    return (
        <>
        <section className="portada" >
                <img src={fondo} alt="" height={'100%'} style={{margin:'-3%'}}/>
                
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
          </Container>
            
        
        </>
    )
}