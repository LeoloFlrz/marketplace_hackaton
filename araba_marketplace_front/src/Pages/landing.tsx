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
import CardOferta from "../components/ofertaCard";



export default function LandingPage () {
    return (
        // <Container />
        <div className="container">
            <section className="portada" style={{ backgroundImage: `url(${fondo})` }}>
                {/* <img src={fondo} alt="" /> */}
               h 
            </section>
            <section></section>
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
            </section>
            <button>Ver todas las ofertas</button>
        </div>
    )
}