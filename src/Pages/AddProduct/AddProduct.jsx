import { useContext } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const AddProduct = () => {


    const handleAddBtn = (e)=>{
    e.preventDefault()
       const form = e.target;
       const name = form.name.value;
       const img = form.img.value;
       const price = form.price.value;
       const rating = form.rating.value;
       const detailes = form.detailes.value;
       const brand = form.brand.value;
       const carInfo = {name, img, price, rating, detailes, brand}
       console.log(carInfo)

       fetch('http://localhost:5000/brandItems', {
        method: 'POST',
        headers:{
            'content-type': 'application/json' 
        },
        body: JSON.stringify(carInfo)
       })

       .then(res => res.json())
       .then(data =>{
        console.log(data)
        if(data.insertedId){
            Swal.fire({
                position: 'top-center',
                icon: 'success',
                title: 'Your car has been added',
                showConfirmButton: false,
                timer: 1500
              })
              form.reset()
        }
       })
       .catch(error =>{
        console.log(error.message)
       })


       fetch('http://localhost:5000/brands', {
        method: 'POST',
        headers:{
            'content-type': 'application/json' 
        },
        body: JSON.stringify(carInfo)
       })
       .then(res => res.json())
       .then(data =>{
        console.log(data)
        if(data.insertedId){
            Swal.fire({
                position: 'top-center',
                icon: 'success',
                title: 'Your car has been added',
                showConfirmButton: false,
                timer: 1500
              })
              form.reset()
        }
       })
       .catch(error =>{
        console.log(error.message)
       })

    
    }


    return (
        <div className="hero bg-base-200">
            <div className="hero-content">
                <div className="card  w-full  shadow-2xl bg-base-100">
                    <form onSubmit={handleAddBtn} className="card-body">
                        <div className="flex w-full gap-8">
                            {/* title */}
                            <div className="form-control w-1/2">
                                <label className="label">
                                    <span className="label-text">Car Name</span>
                                </label>
                                <input type="text" placeholder="Car Name" 
                                name="name"
                                className="input input-bordered" required />
                            </div>
                            {/* img link */}
                            <div className="form-control w-1/2">
                                <label className="label">
                                    <span className="label-text">Img Link</span>
                                </label>
                                <input type="text" placeholder="img link" 
                                name="img"
                                className="input input-bordered" required />
                            </div>
                        </div>
                        <div className="flex w-full gap-8">
                            {/* price */}
                            <div className="form-control w-1/2">
                                <label className="label">
                                    <span className="label-text">Price</span>
                                </label>
                                <input type="number" placeholder="$"
                                defaultValue={'00'} 
                                name="price"
                                className="input input-bordered" required />
                            </div>
                            {/* rating */}
                            <div className="form-control w-1/2">
                                <label className="label">
                                    <span className="label-text">Rating</span>
                                </label>
                                <input type="number" 
                                defaultValue={'0'}
                                className="input input-bordered" 
                                name="rating"
                                required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                        </div>
                        {/* Band name */}
                        <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text">Brand Name</span>
                                </label>
                                <input type="text" placeholder="Brand Name" 
                                name="brand"
                                className="input input-bordered" required />
                            </div>
                        {/* Description */}
                        <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Car Detailes</span>
                                </label>
                                <textarea name="detailes" className="w-full border h-[100px]"></textarea>
                            </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Add Car</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddProduct;