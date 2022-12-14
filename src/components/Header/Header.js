import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import SideNav from '../SideNav/SideNav';


const Header = () => {

    const { user, logOut } = useContext(AuthContext);

    const handleGoogleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.error(error))
    }

    return (

        <div className="navbar bg-base-100">
            <div className="navbar-start">

                <div className='space-x-4'>
                    <Link to='/courses'>Courses</Link>
                    <Link to='/blogs'>Blogs</Link>
                </div>
                <button data-toggle-theme="dark,light" data-act-class="ACTIVECLASS"></button>

                <div className="dropdown md:hidden lg:hidden">
                    <label tabIndex={0} className="btn btn-ghost btn-circle">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li><Link>Homepage</Link></li>
                        <li><Link>Portfolio</Link></li>
                        <li><Link>About</Link></li>
                        <SideNav></SideNav>
                    </ul>
                </div>
            </div>
            <div className="navbar-center">
                <Link to='/' className="btn btn-ghost normal-case text-xl font-bold">MCS</Link>
            </div>
            <div className="navbar-end">
                <div className='space-x-4'>
                    <div className='inline-block'>
                        {
                            user?.uid ?
                                <>
                                    <p className='inline-block tooltip tooltip-bottom" data-tip="User Profile"'>{user?.displayName}-</p>
                                    <img className="w-10 rounded-full inline-block tooltip tooltip-bottom" data-tip="User Profile" src={user?.photoURL} alt='photoURL' />
                                    <button onClick={handleGoogleLogOut} className='bg-blue-500 text-white px-2 py-1 rounded ml-1'>Log Out</button>
                                </>
                                :
                                <>
                                    <Link className='bg-blue-500 text-white px-2 py-1 rounded ml-1' to='/login'>Login</Link>
                                    <Link className='bg-blue-500 text-white px-2 py-1 rounded ml-1' to='/register'>Register</Link>
                                </>
                        }

                    </div>


                </div>
            </div>
        </div>
    );
};

export default Header;