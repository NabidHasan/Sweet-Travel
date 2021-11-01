import Button from '@restart/ui/esm/Button';
import React, { useEffect, useState } from 'react';
import { ButtonGroup } from 'react-bootstrap';
import useAuth from '../../../hooks/useAuth';

const ShowAllOrder = (props) => {
    const [manageOrder, setManageOrder] = useState([]);

    const { user } = useAuth();

    useEffect(() => {
        fetch(`https://rocky-atoll-91237.herokuapp.com/myOrder/${user.email}`)
            .then(res => res.json())
            .then(data => setManageOrder(data))
    }, [])

    const handleDelete = id => {
        const url = `https://rocky-atoll-91237.herokuapp.com/myOrder/${id}`;
        fetch(url, {
            method: "DELETE",
        })
            .then(res => res.json())
            .then(data => {
                alert('Do you want to delete it , Permanently??')

                console.log(data)
                const remaining = manageOrder.filter(manOrder => manOrder._id !== id);
                setManageOrder(remaining);
            })
    }

    const { name, username, email, price, img, _id } = props.order;
    return (

        <div className="col-lg-4 col-md-6 col-12 g-4 full-body">
            <div className="card">
                <img src={img} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h3 className="card-title">{name}</h3>
                    <p>{email}</p>

                </div>
                <Button onClick={() => handleDelete(_id)} >Delete</Button>
            </div>
        </div>

    );
};

export default ShowAllOrder;