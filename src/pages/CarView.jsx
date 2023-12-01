import React, { useEffect, useState } from 'react'
import '../index.css';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';

const CarView = () => {
    const {id} = useParams();
    const [car, setCar] = useState(null);

    useEffect( _ => {
        axios.get(`https://cars-community-backend.onrender.com/cars/${id}`)
            .then( res => setCar(res.data.data))
            .catch( err => console.log(err));
    }, [id])


    return (
        car &&
        <div className='view-item'>
            <div className='item-info'>
            <img className='view-item-img' src={car.image} alt=''/>
            <div className="view-item-info">
                <h4 className='my-4'>{car.title}</h4>
                <span className=''>
                    {car.desc}
                </span>
                <span className='view-item-price my-3'>
                    Price : <span className='text-danger'>{car.price} L.E.</span>
                </span>
                <Link to="/compare"><button className='btn btn-dark my-1'>Compare</button></Link>
            </div>
            </div>
        </div>
    )
}

export default CarView