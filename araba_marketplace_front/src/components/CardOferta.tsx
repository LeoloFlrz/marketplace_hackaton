
import car from '../assets/img/CAR-1.svg'

export default function CardOferta () {
    return (
        <>
        <div>
            <img src={car} alt="imagen" />
            <h3 className="modelo"></h3>
            <div>
                <div></div>
                <div></div>
            </div>
            <div>
                <div className="precio"></div>
                <div>
                    <button>Me interesa</button>
                </div>
            </div>
        </div>
        </>
    )
}