import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import useAuth from '../../hooks/useAuth';
import useService from '../../hooks/useService';
import './Booking.css';
import { useForm } from "react-hook-form";

const Booking = () => {

    const [services, setServices] = useService();
    const [detailService, setDetailService] = useState({});
    let { serviceId } = useParams();



    const { user } = useAuth();

    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {

        data.name = `${detailService.name}`;
        data.price = `${detailService.price}`

        data.img = `${detailService.img}`


        axios.post('https://rocky-atoll-91237.herokuapp.com/myOrder', data)

            .then(res => {
                if (res.data.insertedId) {
                    alert('Added Successfully!!')
                }
                reset();
            })
    }

    useEffect(() => {
        const findService = services.find(service => service._id === serviceId);
        setDetailService(findService);
        console.log(detailService);
    }, [services])
    return (
        <div>
            <h4 style={{ color: "gray" }}>PLACE YOUR ORDER</h4>

            <div className='my-order row'>
                <div className='booking-details col-lg-6 col-12'>
                    <p> {detailService?.name}</p>
                    <p>Address: {detailService?.address}</p>
                    <p>Fee: ${detailService?.price}</p>
                    <img src={detailService?.img} alt="" />
                </div>

                <div className='my-order-form col-lg-6 col-12'>

                    <form onSubmit={handleSubmit(onSubmit)}>

                        <h2>Add Your Information</h2>
                        <input {...register('Username')} defaultValue={user.displayName} />
                        <input {...register('email')} defaultValue={user.email} />
                        <input {...register("address")} placeholder='Address' />
                        <input {...register("country")} placeholder='Country' />
                        <input {...register("city")} placeholder='City' />
                        <input type="submit" value='Place Order' />
                    </form>
                </div>
            </div>



        </div>
    );
};

export default Booking;