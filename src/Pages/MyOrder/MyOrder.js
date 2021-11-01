import { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';
import './MyOrder.css'

const MyOrder = () => {
    const [orders, setOrder] = useState([]);
    const { user } = useAuth();

    useEffect(() => {
        fetch(`http://localhost:5000/myOrder/${user.email}`)
            .then(res => res.json())
            .then(data => setOrder(data))
    }, [])
    return (
        <div>

            <h2>{orders?.length}</h2>

            {
                orders?.map(order =>
                    <div className='order-items'>
                        <h3>Package Name: {order.name
                        }</h3>
                        <h5>Price :{order.price}</h5>
                    </div>

                )
            }
            <h2>Hio nabid</h2>
        </div>
    );
};

export default MyOrder;