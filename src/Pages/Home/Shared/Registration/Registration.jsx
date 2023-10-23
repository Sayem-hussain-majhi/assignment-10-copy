import React, { useContext } from 'react';
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { AuthContext } from '../../../../AuthProvider/AuthProvider';



const Registration = () => {
    const {google, createUser} = useContext(AuthContext)
    const navigate = useNavigate()
   
    // handleSignUp form
    const handleSignUp = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const formInfo = {name, email, password}
        console.log(formInfo)
        createUser(email, password)
        .then(res=> {
            console.log(res.user)
            navigate('/login')
        })
        .catch(error =>{
            console.log(error.message)
        })


        
    }

    // handleGoogleBtn
    const handleGoogleBtn=() =>{
        google()
        .then(result =>{
            console.log(result.user)
            navigate('/')
        })
        .catch(error => console.log(error.message))
    }




    return (
        <div className="hero min-h-screen bg-base-200">
            <div onSubmit={handleSignUp} className="hero-content">
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form className="card-body">
                        {/* Name */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text"
                            name='name' placeholder="Type your name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email"
                            name='email' placeholder="email" className="input input-bordered" required />
                        </div>
                        {/* Password */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="password" 
                            name='password'
                            className="input input-bordered" required />
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                    </form>
                    <h3>Have you an Account? place <Link to={'/login'}>Login</Link> </h3>
                    <div>
                        <button onClick={handleGoogleBtn}>Google</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Registration;