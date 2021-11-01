import { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import useAuth from '../../hooks/useAuth';
import './MyOrder.css'

const MyOrder = () => {
    const [orders, setOrder] = useState([]);
    const { user } = useAuth();

    useEffect(() => {
        fetch(`https://rocky-atoll-91237.herokuapp.com/myOrder/${user.email}`)
            .then(res => res.json())
            .then(data => setOrder(data))
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
                const remaining = orders.filter(order => order._id !== id);
                setOrder(remaining);
            })
    }
    return (
        <div>

            <h2 style={{ color: "grey" }}>Total Number Of Order : {orders?.length}</h2>

            {
                orders?.map(order =>
                    <div className='order-items'>
                        <div className="row">
                            <div className="col-12  g-4 order-details">
                                <div className='card' >
                                    <img src={order.img} alt="" />
                                    <h5>Package Name: {order.name
                                    }</h5>
                                    <h2> ${order.price}</h2>
                                    <Button onClick={() => handleDelete(order?._id)} variant='danger' className='delete-btn'>Delete</Button>
                                </div>

                            </div>
                        </div>

                    </div>

                )
            }
        </div>
    );
};

export default MyOrder;