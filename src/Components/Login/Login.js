import React from 'react';
import '../Home/Home.css'
const Login = () => {
    return (
        <div className='backgroundIamge d-flex align-items-center justify-content-center'>
            <div className="col-md-5">
                <div className="card px-3">
                    <div className="card-header text-center">
                        <h2>Sign Up</h2>
                    </div>
                    <div className="card-body">
                        <input type ='text' className='form-control mt-2' placeholder='Name'/>
                        <input type ='email' className='form-control mt-2' placeholder='Email'/>
                        <input type ='password' className='form-control mt-2' placeholder='Password'/>
                        <input type ='password' className='form-control mt-2' placeholder='Confirm Password'/>
                        <input type ='submit' className='btn btn-warning btn-sm font-weight-bold' value='Submit'/>
                        <p className='lead text-sm'>
                            Already have an Account ? <button className='btn btn-light btn-sm'>Sign In</button>
                        </p>
                    </div>
                    <div className="card-footer d-flex justify-content-between">
                        <button className='btn btn-light rounded btn-sm font-weight-bold'><span className='pr-1'><img height='15' src="https://i.ibb.co/9vjdGtz/google.png" alt=""/></span> Continue With Google</button>
                        <button className='btn btn-light rounded btn-sm font-weight-bold'><span className='pr-1'><img height='15' src="https://i.ibb.co/4StbQ8J/fb.png" alt=""/></span>  Continue With Facebook</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;

