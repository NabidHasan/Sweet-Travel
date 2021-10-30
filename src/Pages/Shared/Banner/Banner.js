import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Banner.css';

import logo from '../../../Images/Banners/banner1.jpg';
import logo2 from '../../../Images/Banners/banner2.jpg';
import logo3 from '../../../Images/Banners/banner3.jpg';

const Banner = () => {
    return (
        <>
            <Carousel className='banner-size'>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={logo}
                        alt="First slide"
                    />
                    <Carousel.Caption style={{ color: 'black' }}>
                        <h3>Welcome to 24hr Medical Center</h3>
                        <p>We provide worldclass services and our reviews are always 5 stars!! plz cheak our services.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={logo2}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3>All lab elements are here!!</h3>
                        <p>Our Doctors are always active for you.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={logo3}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>We care about you !!</h3>
                        <p>Babies and old peoples are always first priority for us.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </>
    );
};

export default Banner;