import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const SideNav = () => {

    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('https://assignment-10-educational-server.vercel.app/categories')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])

    return (
        <div>
            <h1 className='text-xl'>Categories</h1>
            <div className=''>
                {
                    categories.map(category => <p key={category.id}>
                        <div className='my-5'>

                            <Link className='my-6 link-hover hover:text-sky-700' to={`/category/${category.id}`}>{category.name}</Link>
                        </div>
                    </p>)
                }
            </div>
        </div>
    );
};

export default SideNav;