import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import TuristPointData from '../FakeData/TuristPointData';
import '../Home/Home.css'

const Booking = () => {
    
    const [resort, setResort] = useState({})
    const {id} = useParams()
    useEffect(()=>{
         setResort(TuristPointData.find(data => data.id ===parseInt(id)))
    },[])
       
    return (
        <div className='backgroundIamge'>
                <div className="container">
                    <div className='row p-5'>
                        <div className="col-md-5">
                            <h2 className="text-light display-4 font-weight-bold">{resort.title}</h2>
                            <p className=' text-justify text-light'>{resort.description}</p>
                        </div>
                        <div className="col-md-6">
                        <div className="card">
                            <div className="card-body">
                                <div className="form-group">
                                    <label htmlFor="">Origin</label>
                                    <input type='text' className='form-control' value='Dhaka' ></input>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="">Destination</label>
                                    <input type='text' className='form-control' value={resort.title}></input>
                                </div>
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label htmlFor="">From</label>
                                            <input type='date' className='form-control' required></input>
                                        </div></div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label htmlFor="">To</label>
                                            <input type='date' className='form-control'required ></input>
                                        </div>
                                    </div>
                                    <Link className="btn btn-block btn-warning text-light" to={'/contract/'+resort.id}>Book Order</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
        </div>
    );
};

export default Booking;
