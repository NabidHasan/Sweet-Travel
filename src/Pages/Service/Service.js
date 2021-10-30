import React from 'react';
import { Link } from 'react-router-dom';

import './Service.css'

const Service = (props) => {
    const { name, picture, _id, fee, about } = props.service;
    return (
        <div>
            <div className="col-lg-4 col-md-6 col-12 g-4 full-body">
                <div className="card">
                    <img src={picture} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h3 className="card-title">{name}</h3>
                        <h6>{fee}</h6>
                        <p className="card-text">{about}</p>
                    </div>
                    <Link className='service-btn py-3' to={`/booking/${_id}`}>
                        <button className='btn btn-primary service '>Book {name}
                        </button>
                    </Link>
                </div>
            </div>

        </div>
    );
};

export default Service;