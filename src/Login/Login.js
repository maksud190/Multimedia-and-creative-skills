import { GoogleAuthProvider } from 'firebase/auth';
import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../contexts/AuthProvider/AuthProvider';
import { FaGoogle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';



const Login = () => {

    const [error, setError] = useState('');
    const { googleLogin, signIn, user } = useContext(AuthContext);
    
    const navigate = useNavigate();

    const location = useLocation();

    const from = location.state?.from?.pathname || '/';

    const googleProvider = new GoogleAuthProvider();
    const handleGoogleSignIn = () => {
        googleLogin(googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(error => console.error(error))
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        console.log(event);

        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                form.reset();
                setError('');
                navigate(from, {replace: true});
            })
            .catch(error => {
                console.error(error)
                setError(error.message);
            })
    }

    useEffect(()=>{
        if(user?.email){
            navigate(from, {replace: true});
        }
    },[user])

    return (
        <form onSubmit={handleSubmit}>
            <div className="form-control">
                <label className="label">
                    <span className="label-text">Your Email</span>
                </label>
                <label className="input-group">
                    <span>Email</span>
                    <input type="email" name='email' placeholder="Your Email" className="input input-bordered" required />
                </label>
                <label className="label">
                    <span className="label-text">Your Password</span>
                </label>
                <label className="input-group">
                    <span>Password</span>
                    <input type="password" name='password' placeholder="Your Password" className="input input-bordered" required />
                </label>
                <div className='mt-5'>
                    <button className='btn btn-outline btn-info'>Log in</button>
                    <p className='text-red-600'>
                        {error}
                    </p>
                </div>

            </div>

            <p className='mt-5'>-----OR-----</p>
            <div className='space-y-5 space-x-5'>
                <button onClick={handleGoogleSignIn} className="btn btn-outline btn-info"><FaGoogle></FaGoogle>- Login with Google</button>
                <button className="btn btn-outline"><FaGithub></FaGithub>- Login with GitHub</button>
            </div>
            <br />
            <p className='font-semibold'>Do not have account? <Link className='underline text-sky-600' to='/register'>Create Account</Link></p>
        </form>
    );
};

export default Login;