import { useContext, useState } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const MyCart = () => {
    const {user} = useContext(AuthContext);
    const items = useLoaderData();
    // const [newItems, setNewItems] = useState();
    
    const userItems = items.filter(i => i.email == user.email)

    // console.log(userItems)


    // handleDltBtn
    const handleDltBtn = (id) =>{
        fetch(`http://localhost:5000/addToCartItems/${id}`, {
            method: 'DELETE',
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.deletedCount > 0){

                Swal.fire({
                    position: 'top-center',
                    icon: 'success',
                    title: 'Successfully Removed',
                    showConfirmButton: false,
                    timer: 1500
                  })
                  const remaning = userItems.filter(i => i._id !== id);
                  if(remaning){
                    setNewItems(remaning)
                  }
            }
        }     
        )
        .catch(error => console.log(error.message))
    }



    return (

        <div>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr className="font-bold text-xl">
                            <th>Img</th>
                            <th>Name</th>
                            <th>Brand</th>
                            <th>Price</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    {
                        userItems.map(item =>
                            <tbody>
                                {/* row 1 */}
                                <tr>

                                    <td>
                                        <div className="flex items-center space-x-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-12 h-12">
                                                    <img src={item.carImage} alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    {/* name */}
                                    <td>
                                        <p>{item.carName}</p>
                                    </td>
                                    <td>
                                        <p>{item.brandName}</p>
                                    </td>
                                    <td>
                                        <p>${item.price}</p>
                                    </td>
                                    <td>
                                        <button className="btn btn-error 
                                        btn-xs"
                                        onClick={()=>handleDltBtn(item._id)}
                                        >Remove</button>
                                    </td>
                                </tr>

                            </tbody>
                        )
                    }



                </table>
            </div>

        </div>
    );
};

export default MyCart;