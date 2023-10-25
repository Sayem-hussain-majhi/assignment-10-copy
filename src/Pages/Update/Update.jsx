import { useLoaderData, useParams } from "react-router-dom";
import Swal from "sweetalert2";

const Update = () => {
    const items = useLoaderData()
    const id = useParams()

    const oldInfo = items.find(i => i._id == id.id)

    const { _id, brandName, carName, carImage, carRating, carDetails
        , price } = oldInfo

    console.log(oldInfo)
    const handleUpdateBtn = (e) => {
        e.preventDefault()
        const form = e.target;
        const name = form.name.value;
        const img = form.img.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const detailes = form.detailes.value;
        const brand = form.brand.value;
        const newInfo = { name, img, price, rating, detailes, brand }

        fetch(`http://localhost:5000/brandItems/${_id}`, {
            method: 'PUT',
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(newInfo)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.modifiedCount > 0){
                Swal.fire({
                    position: 'top-center',
                    icon: 'success',
                    title: 'Updated Successfully',
                    showConfirmButton: false,
                    timer: 1500
                  })
            }

        })
        .catch(err => console.log(err.message))
    }



    return (
        <div className="hero bg-base-200">
            <div className="hero-content">
                <div className="card  w-full  shadow-2xl bg-base-100">
                    <form onSubmit={handleUpdateBtn} className="card-body">
                        <div className="flex w-full gap-8">
                            {/* title */}
                            <div className="form-control w-1/2">
                                <label className="label">
                                    <span className="label-text">Car Name</span>
                                </label>
                                <input type="text" placeholder="Car Name"
                                    name="name"
                                    defaultValue={carName}
                                    className="input input-bordered" required />
                            </div>
                            {/* img link */}
                            <div className="form-control w-1/2">
                                <label className="label">
                                    <span className="label-text">Img Link</span>
                                </label>
                                <input type="text" placeholder="img link"
                                    name="img"

                                    defaultValue={carImage}
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

                                    name="price"
                                    defaultValue={price}
                                    className="input input-bordered" required />
                            </div>
                            {/* rating */}
                            <div className="form-control w-1/2">
                                <label className="label">
                                    <span className="label-text">Rating</span>
                                </label>
                                <input type="number"
                                    defaultValue={carRating}
                                    readOnly
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
                                defaultValue={brandName}
                                name="brand"
                                className="input input-bordered" required />
                        </div>
                        {/* Description */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Car Detailes</span>
                            </label>
                            <textarea name="detailes"
                                defaultValue={carDetails}
                                className="w-full border h-[100px]"></textarea>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Update</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Update;