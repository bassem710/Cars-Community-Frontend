import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import React, { useEffect, useState } from 'react'

import { baseUrl } from '../constants/constants';

const Events = () => {
    const user = JSON.parse(localStorage.getItem('user'));
    const url= baseUrl + "/events/all";
    const navigate = useNavigate();
    const [Events,SetEvents]=useState(null);
    const [isloading,setisloading]=useState(true);
    const [loaded, setLoaded] = useState(true);

    useEffect(
        ()=>{
            axios.get(url).then(
                (Response) =>{
                    SetEvents(Response.data.data);
                    setisloading(false);
                    setLoaded(true);
                }).catch(function(Error){
                    setisloading(false);
                    setLoaded(false);
                })
        },[url]
    )

    function getDayName(date = new Date(), locale = 'en-US') {
        return date.toLocaleDateString(locale, {weekday: 'long'}) +" - "+ date.toLocaleDateString(locale, {month: 'short', day: '2-digit'})+" - "+date.toLocaleDateString(locale, {year: "numeric"}) ;
    }

    const handleDelete = (id) => {
        axios.delete(baseUrl + `/events/deleteEvent/${id}`, {
                headers: {Authorization: user && user.role === "admin" ? user._id : undefined}
            })
            .then( _ => window.location.reload())
            .catch( err => console.log(err?.response?.data?.message));
    }

    return (
        <div className='events'>
            <h4>Events</h4>
            <div className="events-container">
                {
                    isloading === true ? 
                    <h4>Loading Events...</h4> : 
                    (
                        Events && Events.length === 0 ? 
                        <h4>{loaded ? "No events found" : "Can't Get Events"}</h4> :
                        Events.map(
                            (Event)=>(
                                <div key={Event._id}>
                                    <div className='event my-4 text-decoration-none' key={Event._id} onClick={ _ => navigate("/events/" + Event._id)}>
                                        <div className="events-event-inf" key={Event._id}>
                                            <h5>{Event.title}</h5>
                                            <span>{Event.location}</span>
                                            <p>{getDayName(new Date(Event.date))}</p>
                                        </div>
                                    </div>
                                    {
                                        user && user.role === "admin" &&
                                        <button className='favourite-button btn ms-auto' onClick={ _ => handleDelete(Event._id)}>
                                            🗑️
                                        </button>
                                    }
                                </div>
                            )
                        )
                    )
                }
            </div>
        </div>
    )
}

export default Events