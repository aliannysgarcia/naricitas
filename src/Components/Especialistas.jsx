import React from 'react'
import './especialistas.css'
import doctor1 from '../Images/doctor1.jpg'
import doctor2 from '../Images/doctor2.jpg'
import doctor3 from '../Images/doctor3.jpg'
import doctor4 from '../Images/doctor4.jpg'

const Especialistas = () => {
    return (
        <>
        <div className='general'>
            <h2 className='h2-doc'>Nuestros Especialistas</h2>
            <div className='cont-doctores'>
                <div className="flip-card">
                    <div className="flip-card-inner">
                        <div className="flip-card-front">
                            <img src={doctor1} alt="Doctor" style={{ width: '250px', height: '300px' }} />
                        </div>
                        <div className="flip-card-back">
                            <h1>Dr. Richard Garcia</h1>
                            <p>Especialista en medicina interna</p>
                            <button>Ver más</button>
                        </div>
                    </div>
                </div>
                <div className="flip-card">
                    <div className="flip-card-inner">
                        <div className="flip-card-front">
                            <img src={doctor2} alt="Doctor" style={{ width: '250px', height: '300px' }} />
                        </div>
                        <div className="flip-card-back2">
                            <h1>Dra. Laura Terán</h1>
                            <p>Especialista en medicina interna</p>
                            <button>Ver más</button>
                        </div>
                    </div>
                </div>
                <div className="flip-card">
                    <div className="flip-card-inner">
                        <div className="flip-card-front">
                            <img src={doctor3} alt="Doctor" style={{ width: '250px', height: '300px' }} />
                        </div>
                        <div className="flip-card-back3">
                            <h1>Dr. Ernesto Ochoa</h1>
                            <p>Especialista en medicina interna</p>
                            <button>Ver más</button>
                        </div>
                    </div>
                </div>
                <div className="flip-card">
                    <div className="flip-card-inner">
                        <div className="flip-card-front">
                            <img src={doctor4} alt="Doctor" style={{ width: '250px', height: '300px' }} />
                        </div>
                        <div className="flip-card-back4">
                            <h1>Dra. Cecilia Alvarado</h1>
                            <p>Especialista en medicina interna</p>
                            <button>Ver más</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Especialistas