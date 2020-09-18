import React, { useEffect, useState } from 'react';
// import { Map, Marker, GoogleApiWrapper } from 'google-maps-react';
import { useParams } from 'react-router-dom';
// import MapData from '../FakeData/MapData';

const Contract = () => {

    const [mapData, setMapData] = useState({})
    const {id} = useParams()
    useEffect(()=>{
        // setMapData(MapData.find(data => data.id === parseInt(id)))
    },[])
    const { latitude, longitude } =mapData;

    return (
        <div className='backgroundIamge'>
            <div className="row">
                <div className="col-md-6"></div>
                <div className="col-md-6">
                    <h1 class = 'text-light'>This is Protected page Page</h1>
                
                </div>
            </div>
        </div>
    );
};
export default Contract;