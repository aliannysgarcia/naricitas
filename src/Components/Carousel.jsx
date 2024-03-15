import React from 'react'
import imagen1 from '../Images/imagen1.jpg'
import imagen2 from '../Images/imagen2.jpg'
import imagen3 from '../Images/imagen3.jpg'
import styled from 'styled-components';


const Carousel = () => {

    const CarouselImage = styled.img`
        border-radius: 5px;
    `;

    return (
        <div id="carouselExample" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active" data-bs-interval="1000">
                    <CarouselImage src={imagen1} className="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item" data-bs-interval="1000">
                    <CarouselImage src={imagen2} className="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item" data-bs-interval="1000">
                    <CarouselImage src={imagen3} className="d-block w-100" alt="..." />
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previus</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    )
}

export default Carousel