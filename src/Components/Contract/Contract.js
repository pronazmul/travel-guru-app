import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import RoomDetails from '../FakeData/RoomDetails';
import TuristPointData from '../FakeData/TuristPointData';

const Contract = () => {
    //Room Details Data Management....
    const [details, setDetails] = useState({})
    const { id } = useParams()
    useEffect(() => {
        setDetails(TuristPointData.find(data => data.id === parseInt(id)))
    }, [])

    return (
        <div className='backgroundIamge'>
            <div className="container row h-100 d-flex align-items-center justify-content-center">
                <div className="col-md-6">
                    <h2 className='text-center font-width-bold text-light'>Stay In {details.title}</h2>
                    <div className="row"></div>
                        {RoomDetails.map(data => 
                                    <div className="col-md-6">
                                        <img src={data.url} alt="" height='200'></img>
                                    </div>
                                    <div className="col-md-6">
                                        
                                    </div>
                            )}

                        </div>
                    </div>
                <div className="col-md-6">
                </div>
            </div>
        </div>
    );
};
export default Contract;