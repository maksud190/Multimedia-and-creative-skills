import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const SideNav = () => {

    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/categories')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])

    return (
        <div>
            <h1>Side Nav: {categories.length}</h1>
            <div>
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