import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel } from 'react-bootstrap'

const Heroslider = () => {
    return (
        <div id='carousel'>
            <Carousel>
                <Carousel.Item interval={5000}>
                    <img
                        className="d-block w-100"
                        src="images/slider-image1.png"
                        alt="Live Succulent Set"
                    />
                    <Carousel.Caption>
                        <h3>Live Succulent Set</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={5000}>
                    <img
                        className="d-block w-100"
                        src="images/slider-image2.png"
                        alt="Cactus Pencil Holder"
                    />
                    <Carousel.Caption>
                        <h3>Cactus Pencil Holder</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={5000}>
                    <img
                        className="d-block w-100"
                        src="images/slider-image3.png"
                        alt="Dry Erased Calendar Board"
                    />
                    <Carousel.Caption>
                        <h3>Calendar Board</h3>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    )
}

export default Heroslider