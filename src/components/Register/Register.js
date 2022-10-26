import React from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const Register = () => {

    const {createUser} = useContext(AuthContext);

    const [error, setError] = useState('');

    const handleSubmit = (event)=> {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photoURL = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, photoURL, email, password);

        createUser(email, password)
        .then(result => {
            const user = result.user;
            console.log(user);
            form.reset();
            setError('');
        })
        .catch(error=> {
            console.error(error);
            setError(error.message);
        })
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="form-control">
                <label className="label">
                    <span className="label-text">Your Name</span>
                </label>
                <label className="input-group">
                    <span>Name</span>
                    <input type="text" name='name' placeholder="Your Name" className="input input-bordered" required />
                </label>
                <label className="label">
                    <span className="label-text">Your photoURL</span>
                </label>
                <label className="input-group">
                    <span>photoURL</span>
                    <input type="text" name='photoURL' placeholder="Your photoURL" className="input input-bordered" required />
                </label>
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
                    <button className='btn btn-outline btn-info'>Register</button>
                    <p className='text-red-600'>
                        {error}
                    </p>
                </div>
            </div>
            <br />
            <p className='font-semibold'><Link className='underline text-sky-600' to='/login'>Already have an account?</Link></p>
        </form>
    );
};

export default Register;