import React, { useState } from 'react';
import '../Home/Home.css'


const Login = () => {

    //Login perpuse...
    const [resistered, setResistered] = useState(true)
    const [newuser, setNewuser] = useState({ name: '', email: '', pass: '', confirmPass: '' })
    const [errorMessage, setErrorMessage] = useState('')

    //Input Field Validation && Error shown
    const handleBlur = (event) => {
        let validData = true;
        if (event.target.name === 'name') {
            validData = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/.test(event.target.value)
            if (validData) { setErrorMessage('') }
            else { setErrorMessage('Invalid Name') }
        }
        if (event.target.name === 'email') {
            validData = /\S+@\S+\.\S+/.test(event.target.value)
            if (validData) { setErrorMessage('') }
            else { setErrorMessage('Invalid Email Address') }
        }
        if (event.target.name === 'pass') {
            validData = /^(?=.*[0-9])(?=(?:[^A-Z]*[A-Z]){1})(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,12}$/.test(event.target.value)
            if (validData) {
                setErrorMessage('')
                let storePass = { ...newuser }
                storePass.pass = event.target.value
                setNewuser(storePass)
            }
            else { setErrorMessage('Numaric, Uppercase, Lowercase, Special Char & Length Should be 6 to 12') }
        }
        console.log(newuser.pass)
        if (event.target.name === 'confirmPass') {
            if (event.target.value === newuser.pass) { setErrorMessage('') }
            else { setErrorMessage('Password not Match With Privious One') }
        }
       if(validData){
           const validUser = {...newuser}
           validUser[event.target.name] = event.target.value
           setNewuser(validUser)
       }
       console.log(newuser)
    }

    //Sign in & Sign Up Form Submit..... 
    const handleSubmit = event =>{

        if(resistered){

        }else if(!resistered){
            
        }
        
        
        event.preventDefault()
    }


    return (
        <div className='backgroundIamge d-flex align-items-center justify-content-center'>
            <div className="col-md-5">
                {errorMessage && <p className="alert alert-danger m-3">{errorMessage}</p>
                }
                <div className="card px-3">
                    {
                        resistered ?
                            <form onSubmit ={handleSubmit}>
                                <div className="card-header text-center"><h2>SIGN IN</h2></div>
                                <div className="card-body">
                                    <input onBlur={handleBlur} required name='email' type='email' className='form-control mt-2' placeholder='Email' />
                                    <input onBlur={handleBlur} required name='pass' type='password' className='form-control mt-2' placeholder='Password' />
                                    <button className='btn btn-warning btn-sm font-weight-bold'>Submit</button>
                                    <p className='text-small'>Create New Account ? <button onClick={() => setResistered(false)} className='btn btn-info btn-sm'>Sign Up</button></p>
                                </div>
                            </form>
                            :
                            <form onSubmit ={handleSubmit}>
                                <div className="card-header text-center"><h2>SIGN UP</h2></div>
                                <div className="card-body">
                                    <input onBlur={handleBlur} required name='name' type='text' className='form-control mt-2' placeholder='Name' />
                                    <input onBlur={handleBlur} required name='email' type='email' className='form-control mt-2' placeholder='Email' />
                                    <input onBlur={handleBlur} required name='pass' type='password' className='form-control mt-2' placeholder='Password' />
                                    <input onBlur={handleBlur} required name='confirmPass' type='password' className='form-control mt-2' placeholder='Confirm Password' />
                                    <button className='btn btn-warning btn-sm font-weight-bold'>Submit</button>
                                    <p className='text-small'>Already have an Account ? <button onClick={() => setResistered(true)} className='btn btn-info btn-sm'>Sign In</button></p>
                                </div>
                            </form>
                    }
                    <div className="card-footer d-flex justify-content-between">
                        <button className='btn btn-light rounded btn-sm font-weight-bold'><span className='pr-1'><img height='15' src="https://i.ibb.co/9vjdGtz/google.png" alt="" /></span> Continue With Google</button>
                        <button className='btn btn-light rounded btn-sm font-weight-bold'><span className='pr-1'><img height='15' src="https://i.ibb.co/4StbQ8J/fb.png" alt="" /></span>  Continue With Facebook</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;

