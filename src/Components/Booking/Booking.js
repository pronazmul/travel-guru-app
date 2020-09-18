import React from 'react';
import '../Home/Home.css';
import TuristPointData from '../TuristPointData/TuristPointData';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

const Booking = () => {
    return (
        <div className='backgroundIamge container-fluid'>
            <div className="row p-5">

                <div className="col-md-4">
                    <h2 className="text-light display-4 font-weight-bold">Cox's Bazar </h2>
                    <p className='lead text-justify text-light'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit in quia iste perspiciatis, voluptas quidem reprehenderit excepturi mollitia voluptatibus deserunt eveniet sint quos minima doloribus nam dolores nihil voluptatum ipsa?</p>
                    <button className='btn btn-warning btn-md'>Book Now <FontAwesomeIcon icon={faArrowRight} /> </button>
                </div>

                <div className="col-md-8">
                    <div className="row">
                    {TuristPointData.map(data =>
                        <div className="col-md-4">
                            <div className="card bg-dark text-white">
                                <img height='350' className="card-img" src={data.image} alt=""></img>
                                <div className="card-img-overlay d-flex align-items-end ">
                                    <h4 className="card-title text-center font-weight-bold d-flex align-items-end">{data.title}</h4>
                                </div>
                            </div>
                        </div>
                    )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Booking;