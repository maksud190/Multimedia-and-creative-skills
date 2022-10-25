import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <div className="navbar bg-primary text-primary-content">
                <Link to='/' className="btn btn-ghost normal-case text-xl">MCS</Link>
                <Link to='/courses'>Courses</Link>
                <Link to='/blogs'>Blogs</Link>
                <Link to='/login'>Log In</Link>
                <Link to='/register'>Register</Link>
            </div>
        </div>
    );
};

export default Header;