import React, { useEffect, useState } from 'react';
import ShowAllOrder from './ShowAllOrder/ShowAllOrder';

const ManageAllOrder = () => {

    const [allOrder, setAllOrder] = useState([]);

    useEffect(() => {
        fetch('https://rocky-atoll-91237.herokuapp.com/myOrder')
            .then(res => res.json())
            .then(data => setAllOrder(data))
    }, [])
    return (
        <div className="container">
            <h2>Total Order : {allOrder?.length}</h2>

            <div className='row'>
                {
                    allOrder.map(order => <ShowAllOrder
                        key={order._id}
                        order={order}
                    ></ShowAllOrder>)
                }
            </div>
        </div>
    );
};

export default ManageAllOrder;