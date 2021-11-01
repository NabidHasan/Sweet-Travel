import React from 'react';
import { Link } from 'react-router-dom';

import './Service.css'

const Service = (props) => {
    const { name, img, _id, price, address } = props.service;
    return (

        <div className="col-lg-4 col-md-6 col-12 g-4 full-body">
            <div className="card">
                <img src={img} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>

                </div>
                <Link className='service-btn py-3' to={`/booking/${_id}`}>
                    <button className='btn btn-primary service '>Book {name}
                    </button>
                </Link>
            </div>
        </div>


    );
};

export default Service;