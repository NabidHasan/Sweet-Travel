import React from 'react';
import { useEffect, useState } from "react";



const useService = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch("https://rocky-atoll-91237.herokuapp.com/services")
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return [services, setServices]
};

export default useService;