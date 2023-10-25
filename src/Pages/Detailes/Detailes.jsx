import React, { useContext } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import Swal from 'sweetalert2';
import { AuthContext } from '../../AuthProvider/AuthProvider';
// TODO: This component will be added privet route
const Detailes = () => {
    const {user} = useContext(AuthContext);
    const item = useLoaderData();
    const name = useParams();
    // console.log(item.length, name)

    const car = item.find(i => i.carName == name.name)
    const { carImage, carName, carDetails, carRating, price, brandName
    } = car ;


    // handleAddToCartBtn
    const handleAddToCartBtn= () =>{
        const carInfo = {carImage, carName, price, brandName, email: user?.email}
        console.log('btn ')
        fetch('http://localhost:5000/addToCartItems', {
            method: 'POST',
            headers:{
                "content-type": "application/json"
            },
            body: JSON.stringify(carInfo)
        })
        .then(res => res.json())
        .then(data => {
            if(data.insertedId){
                Swal.fire({
                    position: 'top-center',
                    icon: 'success',
                    title: 'Your car has been added',
                    showConfirmButton: false,
                    timer: 1500
                  })
            }
        }     
        )
        .catch(error => console.log(error.message))
    }




    return (
        <div className='grid lg:grid-cols-2 grid-cols-1 gap-5 mt-8'>
            <div className='w-full'>
                <img className='w-full' src={carImage} alt="" />
            </div>
            <div className='w-full'>
                <p className='badge'>{brandName}</p>
                <p className='font-bold text-2xl mb-4'>{carName}</p>
                <p>{carDetails}</p>
                <p>carPrice: ${price}</p>
                <p>{carRating}</p>
                <button onClick={handleAddToCartBtn} className='btn font-bold btn-primary '>ADD to CART</button>
            </div>
        </div>
    );
};

export default Detailes;