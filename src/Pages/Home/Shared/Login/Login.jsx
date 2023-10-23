import React, { useContext } from 'react';
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from '../../../../AuthProvider/AuthProvider';

const Login = () => {
    const {login} = useContext(AuthContext)
    const navigate = useNavigate()

    
    // handleSignIn form
    const handleSignIn = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const formInfo = {email, password}
        console.log(formInfo)
        
        
        login(email, password)
        .then(res => {
            console.log(res.user)
            navigate('/')
        })
        .catch(error =>{
            console.log(error.message)
        })
    }



    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content">
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleSignIn} className="card-body">
                        {/* Email */}
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
                    <h3>Have you no Account? place <Link to={'/registration'}>Registration</Link> </h3>
                </div>
            </div>
        </div>
    );
};

export default Login;