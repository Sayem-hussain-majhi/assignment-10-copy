import React from 'react';
import { Link } from 'react-router-dom';

const BrandItem = ({ car }) => {
  const {_id, carDetails, carImage, carName, carRating } = car;
  // console.log(car.id)

  return (
    <div className="card card-compact w-96 bg-base-100 shadow-xl">
      <figure className='w-full'><img className='w-full' src={carImage} alt="Shoes" /></figure>
      <div className="card-body">
        <h2 className="card-title">{carName}</h2>
        <p>{carDetails}</p>
        <p>{carRating}</p>
        <div className="card-actions justify-between">
         <Link to={`/update/${_id}`}><button className="btn btn-primary">Update</button></Link>
          <Link to={`/detailes/${carName}`}>
            <button className="btn btn-primary">Detailes</button>
          </Link>
          
        </div>
      </div>
    </div>
  );
};

export default BrandItem;