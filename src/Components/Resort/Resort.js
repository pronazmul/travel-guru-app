import React, { useState } from 'react';
import '../Home/Home.css';
import TuristPointData from '../FakeData/TuristPointData';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';

const Resort = () => {
    const [resort, setResort] = useState({
        id:TuristPointData[0].id,
        title:TuristPointData[0].title,
        description:TuristPointData[0].description,
        image:TuristPointData[0].image
    })

const handleResort = id =>{
    const newPoint= TuristPointData.find(data => id ===data.id)
    setResort(newPoint)
}
    return (
        <div className='backgroundIamge container-fluid'>
            <div className="row p-5">

                <div className="col-md-4 pt-5">
                    <h2 className="text-light display-4 font-weight-bold">{resort.title}</h2>
                    <p className=' text-justify text-light'>{resort.description}</p>
                    <Link className="btn btn-warning btn-md" to={'/booking/'+resort.id}>Book Now <FontAwesomeIcon icon={faArrowRight}/></Link>
                </div>

                <div className="col-md-8">
                    <div className="row">
                    {TuristPointData.map(data =>
                        <div className="col-md-4">
                            <div onClick={()=>handleResort(data.id)} className="card btn btn-outline-warning text-white m-0 p-2">
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

export default Resort;