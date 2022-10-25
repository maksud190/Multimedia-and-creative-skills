import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';


const Header = () => {

    const { user } = useContext(AuthContext);

    return (

        <div className="navbar bg-base-100">
            <div className="navbar-start">

                <div className='space-x-4'>
                    <Link to='/courses'>Courses</Link>
                    <Link to='/blogs'>Blogs</Link>
                </div>

                <div className="dropdown md:hidden lg:hidden">
                    <label tabIndex={0} className="btn btn-ghost btn-circle">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li><Link>Homepage</Link></li>
                        <li><Link>Portfolio</Link></li>
                        <li><Link>About</Link></li>
                    </ul>
                </div>
            </div>
            <div className="navbar-center">
                <Link to='/' className="btn btn-ghost normal-case text-xl">MCS</Link>
                <p>{user?.displayName}</p>
                <img className="w-10 rounded-full" src={user?.photoURL} alt='userPhoto' />
            </div>
            <div className="navbar-end">
                <div className='space-x-4'>
                    <Link to='/login'>Log In</Link>
                    <Link to='/register'>Register</Link>
                </div>
            </div>
        </div>





        // <div className=''>
        //     <div className="navbar bg-primary text-primary-content">
        //         <Link to='/' className="btn btn-ghost normal-case text-xl">MCS</Link>
        //         <div className=''>
        //             <div>
        //                 <Link to='/courses'>Courses</Link>
        //                 <Link to='/blogs'>Blogs</Link>
        //             </div>
        //             <div className=''>
        //                 <Link to='/login'>Log In</Link>
        //                 <Link to='/register'>Register</Link>
        //             </div>
        //         </div>
        //         <p>{user.displayName}</p>
        //     </div>
        // </div>
    );
};

export default Header;