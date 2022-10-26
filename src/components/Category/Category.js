import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Category = () => {

    const courses = useLoaderData();

    return (
        <div>
            <h1>This is category has {courses.length}</h1>
        </div>
    );
};

export default Category;