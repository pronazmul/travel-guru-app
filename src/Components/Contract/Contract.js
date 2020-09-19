import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import RoomDetails from '../FakeData/RoomDetails';
import TuristPointData from '../FakeData/TuristPointData';
import icon from '../images/Icon/star_1_.png'

const Contract = () => {
    //Room Details Data Management....
    const [details, setDetails] = useState({})
    const { id } = useParams()
    useEffect(() => {
        setDetails(TuristPointData.find(data => data.id === parseInt(id)))
    }, [])

    return (
        <div className='backgroundIamge'>
            <div className="container row h-100 d-flex align-items-center justify-content-center px-4">
                <div className="col-md-6">
                    <h4 className='text-center font-width-bold text-light'>Stay In {details.title}</h4>
                    {
                        RoomDetails.map(data =>
                            <div className="row">
                                <div className="col-md-6 p-1">
                                    <img src={data.url} alt="" height='130'></img>
                                </div>
                                <div className="col-md-6 p-1">
                                    <h5 className='text-light'>{data.title}</h5>
                                    <p className='small text-secondary'>{data.description}</p>
                                    <div className="row text-light font-weight-bold">
                                        <div className="col-md-6 d-flex flex-row">
                                            <img height='20' src={icon} alt=''></img>
                                            <p>{data.rating}</p>
                                        </div>
                                        <div className="col-md-6">
                                            <p>$ {data.bookingPrice}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                </div>
                <div className="col-md-6">
                </div>
            </div>
        </div>
    );
};
export default Contract;