import { GoogleAuthProvider } from 'firebase/auth';
import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../contexts/AuthProvider/AuthProvider';

const Login = () => {

    const { googleLogin } = useContext(AuthContext);

    const googleProvider = new GoogleAuthProvider();
    const handleGoogleSignIn = () => {
        googleLogin(googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(error => console.error(error))
    }

    return (
        <div className="form-control">
            <label className="label">
                <span className="label-text">Your Email</span>
            </label>
            <label className="input-group">
                <span>Email</span>
                <input type="email" placeholder="Your Email" className="input input-bordered" />
            </label>
            <label className="label">
                <span className="label-text">Your Password</span>
            </label>
            <label className="input-group">
                <span>Password</span>
                <input type="password" placeholder="Your Password" className="input input-bordered" />
            </label>
            <button onClick={handleGoogleSignIn} className="btn btn-outline btn-success w-20 mt-5 pr-5">Google</button>
            <button className="btn btn-outline w-20 mt-5 pr-5">GitHub</button>
        </div>
    );
};

export default Login;